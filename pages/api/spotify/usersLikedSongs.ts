import type { NextApiRequest, NextApiResponse } from 'next'
import { useEffect } from 'react';


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
      const songParams = await trackParams(token, songsReq.items.map((item) => item.track.id));
      console.log(songParams)

      res.status(200).json({ songsReq, songParams });
    } catch (error) {
      console.log("BAD");
      console.log(typeof error);
      //@ts-ignore
      res.status(500).json({ message: error.message });
    }
  };

//@ts-ignore
const trackParams = async (token, trackIds) => {
    
    const paramFetch = `https://api.spotify.com/v1/audio-features?ids=${trackIds.join(',')}`;
    const response = await fetch(paramFetch, { headers: { Authorization: 'Bearer ' + token } });

    if(response.status===200) {
        const data = await response.json();
  
        return data
    } else {
        console.log(response.status)
    }
  


}




export default handler;
