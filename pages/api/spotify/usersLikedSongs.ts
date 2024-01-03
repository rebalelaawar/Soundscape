import type { NextApiRequest, NextApiResponse } from 'next'




interface Req extends NextApiRequest {
    headers: { };
    query: { token: string; };
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { token } = req.query;

  try {
    const songsReq = await fetch("https://api.spotify.com/v1/me/tracks", { headers: { Authorization: 'Bearer ' + token }})
      .then((r) => { if (r.status === 200) return r.json(); else throw r; });
      // @ts-ignore

    
    const songParams = await trackParams(token, songsReq.items.map( item => item.track.id ));
    songsReq.items.forEach( song => {
      delete song.track.available_markets;
      delete song.track.type;
      delete song.track.is_local;
      song.audioFeats = songParams[ song.track.id ]
    });
    console.log(songsReq, "<<<")

    res.status(200).json({ songsReq, songParams });
  } catch (error) {
    console.log( "ERROR:", error);
    //@ts-ignore
    res.status(500).json({ message: error.message });
  }
};

const trackParams = async (token : string, trackIds : Array<any> ) => {
    
  const paramFetch = `https://api.spotify.com/v1/audio-features?ids=${ trackIds.join(',') }`;
  const response = await fetch( paramFetch, { headers: { Authorization: 'Bearer ' + token } });

  if( response.status === 200 ) {
    const data = await response.json( );
    const songParamsHash = { };
    data.audio_features.forEach(( params : any ) => songParamsHash[ params.id ] = params );
    return songParamsHash;
  } else console.log( response.status );
  
  


}




export default handler;
