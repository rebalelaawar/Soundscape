import type { NextApiRequest, NextApiResponse } from 'next'

interface Req extends NextApiRequest { headers: { }; query: { token: string; }; };

//@ts-ignore
const getUserLikedSongs = async ( token : string ) : Promise<Array<SpotifyApi.TrackLinkObject>> => {
  const req = await fetch(`https://api.spotify.com/v1/me/tracks?limit=50`, { headers: { Authorization: 'Bearer ' + token }})
  .then((r) => { if (r.status === 200) return r.json(); else throw r; });
  return req;
};

const seedSongs = async ( token : string, trackIds : Array<SpotifyApi.TrackLinkObject> ) => {
  const seed = trackIds.join( );
  console.log( seed );  
  const seedTrack = '4Dp3yrEK6dQzr9oM2UtZgR, 2XBF1f4RccbgX662FH9yhE';
  const seedFetch = `https://api.spotify.com/v1/recommendations?&seed_tracks=${seedTrack}&limit=1`
  const response = await fetch( seedFetch, { headers: { Authorization: 'Bearer ' + token } });
  if( response.status === 200 ) {
    const data = await response.json( );
    return data ;
  } else {
    console.log("Error : Cannot seed tracks");
    console.log( response.status );
    return null;
  };
};

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

      console.log( tracksUserHasLiked.items );
    //@ts-ignore
    songArray = [ ...tracksUserHasLiked.items.map(( track : SpotifyApi.TrackObjectFull ) => ({ _type: "userLikedSong", ...track }) ) ];

    
    //   split songArray into groups of two
      
    //   [[ songArray_track1, songArray_track2 ], [ songArray_track3, songArray_track4 ], .... ]
    const splitSongArray = [ ];
    for( let i = 0; i < songArray.length; i += 2 ) {
        splitSongArray.push( songArray.slice ( i, i + 2 ))
    }

    //   get seed songs of each array we just split
    const seededSongs = await Promise.all(
      splitSongArray.map( async ( group ) => {
        const trackIds = group.map(( item ) => {
          return item.track.id;
        })
        //@ts-ignore
        const recs = await seedSongs( token, trackIds );
          return recs;
      })
      );
      
      const filteredSeeds = seededSongs.filter(element => element !== null);

      //   append all arrays to song array 
      songArray = [ ...songArray, ...filteredSeeds ];
      
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
