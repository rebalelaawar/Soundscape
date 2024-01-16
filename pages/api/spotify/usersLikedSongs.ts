import type { NextApiRequest, NextApiResponse } from 'next'
import { seedSongs, trackParams } from './utils';
interface Req extends NextApiRequest { headers: { }; query: { token: string; }; };

export enum trackTypes {
  userLikedSongs = 'userLikedSongs', recomended = 'recomended'
};

export interface userLikedSong {
  _type: trackTypes.userLikedSongs;
  added_at: string;
  track: SpotifyApi.TrackObjectFull;
};

export interface recomendedTrack {
  _type: trackTypes.recomended;
  track: SpotifyApi.TrackObjectFull;
  // seeds: Array<SpotifyApi.RecommendationsSeedObject>;
};

export interface APIResponse {
  songsArray: Array< recomendedTrack | userLikedSong >;
};

const sleep = ( delay : number ) => new Promise((resolve) => setTimeout(resolve, delay))

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { token } = req.query;

  try {

    let songArray = [ ];
    const tracksUserHasLiked = await fetch( `https://api.spotify.com/v1/me/tracks?limit=20`, { headers: { Authorization: 'Bearer ' + token }})
      .then((r) => { if (r.status === 200) return r.json(); else throw r; });
    //@ts-ignore
    songArray = [ ...tracksUserHasLiked.items.map(( track : SpotifyApi.TrackObjectFull ) => ({ _type: trackTypes.userLikedSongs, ...track }) ) ];

    const splitSongArray = [ ];
    for( let i = 0; i < songArray.length; i += 2 ) {
        splitSongArray.push( songArray.slice ( i, i + 2 ))
    }

    //@ts-ignore
    const seededSongs = [ ];
    for ( let i = 0; i < splitSongArray.length; i++ ) {

      // await sleep( 1000 );
      const coupledSongs = splitSongArray[i];
      const trackIds = coupledSongs.map( item  => item.track.id );
      //@ts-ignore
      const recs : recomendedTrack = await seedSongs( token, trackIds );
      recs.tracks.forEach( track => seededSongs.push({ _type: trackTypes.recomended, track }));
      
      // seededSongs.push(  );
    };
      //@ts-ignore
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
