import type { NextApiRequest, NextApiResponse } from 'next'


interface Req extends NextApiRequest {
    headers: { };
    query: { token: string; };
};

const handler = async ( req : NextApiRequest, res: NextApiResponse ) => {    
    const { token } = req.query;
    await fetch("https://api.spotify.com/v1/me/tracks", { headers: { Authorization: 'Bearer ' + token }})
    .then( r => { if( r.status === 200 ) return r; else { console.log( res.status, "<<<<" ); console.log( res);
     throw r }})
    .then( r => r.json( ))
    .then( async songsReq => res.status(200).json( songsReq ))
    .catch( error => {
        console.log("BAD");
        console.log( typeof error );
        // console.log( error );
        res.status(500).json({ message: error });
        // console.log( "ERR", error );
    })
};

export default handler;