import type { NextApiRequest, NextApiResponse } from 'next'
import { seedSongs } from './utils';
interface Req extends NextApiRequest { headers: { }; query: { token: string; }; };

//@ts-ignore

const sleep = ( delay : number ) => new Promise((resolve) => setTimeout(resolve, delay))


const trackParams = async ( token : string, trackIds : Array<any> ) => {
  const paramFetch = `https://api.spotify.com/v1/audio-features?ids=${ trackIds.join(',') }`;
  const response = await fetch( paramFetch, { headers: { Authorization: 'Bearer ' + token } });
  
  if( response.status === 200 ) {
    const data = await response.json( );
    const songParamsHash = { };
    //@ts-ignore
    data.audio_features.forEach(( params : any ) => songParamsHash[ params.id ] = params );
    return songParamsHash;
  } else console.log( response.status );
};


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { token } = req.query;

  try {

    let songArray = [ ];
    const tracksUserHasLiked = await fetch(`https://api.spotify.com/v1/me/tracks?limit=10`, { headers: { Authorization: 'Bearer ' + token }})
      .then((r) => { if (r.status === 200) return r.json(); else throw r; });
    //@ts-ignore
    songArray = [ ...tracksUserHasLiked.items.map(( track : SpotifyApi.TrackObjectFull ) => ({ _type: "userLikedSong", ...track }) ) ];

    
    //   split songArray into groups of two
      
    //   [[ songArray_track1, songArray_track2 ], [ songArray_track3, songArray_track4 ], .... ]
    const splitSongArray = [ ];
    for( let i = 0; i < songArray.length; i += 2 ) {
        splitSongArray.push( songArray.slice ( i, i + 2 ))
    }

    //   get seed songs of each array we just split

    const seededSongs = [ ];
    for ( let i = 0; i < splitSongArray.length; i++ ) {

      await sleep( 1000 );
      console.log( i );
      
      const coupledSongs = splitSongArray[i];
      const trackIds = coupledSongs.map( item  => item.track.id );
      //@ts-ignore
      const recs : { tracks: Array<SpotifyApi.TrackObjectFull>, seeds: Array<SpotifyApi.RecommendationsSeedObject>} = await seedSongs( token, trackIds );
      recs.tracks.forEach( track => seededSongs.push({ _type: "recomended", track }));
      
      // seededSongs.push(  );
    };

    // const seededSongs = await Promise.all(
    //   splitSongArray.map( async ( group ) => {
    //     const trackIds = group.map(( item ) => {
    //       return item.track.id;
    //     })
    //     console.log( trackIds );
        
    //     //@ts-ignore
    //     const recs = await seedSongs( token, trackIds );
    //       return recs;
    //   })
    //   );
      // console.log( seededSongs );
      
      const filteredSeeds = seededSongs.filter(element => element !== null);

      //   append all arrays to song array 
      songArray = [ ...songArray, ...filteredSeeds ];
      console.log( songArray );
      
      
    //@ts-ignore
    const songParams = await trackParams( token, songArray.map( item => {      
      return item.track.id;
    }));

    // @ts-ignore
    songArray.forEach( song => {
      delete song.track.available_markets;
      delete song.track.type;
      delete song.track.is_local;
      delete song.track.album.available_markets;
      delete song.track.album.type;
      delete song.track.album.release_date
      delete song.track.album.release_date_precision
      //@ts-ignore
      song.audioFeats = songParams[ song.track.id ]
      // song.recommendations = updatedLikedSongsArray[ song.track.id ]
    });

   
    res.status(200).json({ songArray }); 
  } catch (error) {
    console.log( "ERROR:", error);
    //@ts-ignore
    res.status(500).json({ message: error.message });
  }
};


export default handler;
