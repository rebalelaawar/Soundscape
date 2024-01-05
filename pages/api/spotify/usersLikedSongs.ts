import type { NextApiRequest, NextApiResponse } from 'next'




interface Req extends NextApiRequest {
    headers: { };
    query: { token: string; };
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { token } = req.query;

  try {
    const songsReq = await fetch(`https://api.spotify.com/v1/me/tracks?limit=50`, { headers: { Authorization: 'Bearer ' + token }})
      .then((r) => { if (r.status === 200) return r.json(); else throw r; });
   
    //@ts-ignore
    const songParams = await trackParams( token, songsReq.items.map( item => item.track.id ));

    // @ts-ignore
    songsReq.items.forEach( song => {
      delete song.track.available_markets;
      delete song.track.type;
      delete song.track.is_local;
      delete song.track.album.available_markets;
      delete song.track.album.type;
      delete song.track.album.release_date
      delete song.track.album.release_date_precision
      //@ts-ignore
      song.audioFeats = songParams[ song.track.id ]
      song.recommendations = updatedLikedSongsArray[ song.track.id ]
    });

    console.log( "ARRAY OF LIKED SONGS" )
    console.log( songsReq, "<<<" )
    // @ts-ignore
    const seedSongsData = await seedSongs( token, songsReq.items.map( item => item.track.id ));

    console.log( "ARRAY OF RECS" )
    console.log( seedSongsData )

    const updatedLikedSongsArray = [ ...songsReq.items, ...seedSongsData.tracks ]
   
    //@ts-ignore
    res.status(200).json({ updatedLikedSongsArray, songParams, seedSongsData });
  } catch (error) {
    console.log( "ERROR:", error);
    //@ts-ignore
    res.status(500).json({ message: error.message });
  }
};


const getUserLikedSongs = async ( token : string ) => {
    
  
};

const seedSongs = async ( token : string, trackIds : Array<any> ) => {
    // const seedTrack = '4Dp3yrEK6dQzr9oM2UtZgR'
    // const seedTrack2 = '2XBF1f4RccbgX662FH9yhE'
    const seedFetch = `https://api.spotify.com/v1/recommendations?&seed_tracks=${trackIds}&limit=1`
    const response = await fetch( seedFetch, { headers: { Authorization: 'Bearer ' + token } });
    if( response.status === 200 ) {
        const data = await response.json()
        console.log(data)
        return data 
    }
    else {
        console.log("Error : Cannot seed tracks")
    }
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




export default handler;
