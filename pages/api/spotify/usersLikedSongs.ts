import type { NextApiRequest, NextApiResponse } from 'next'


interface Req extends NextApiRequest {
    headers: { };
    query: { token: string; };
};

const handler = async ( req : NextApiRequest, res: NextApiResponse ) => {
    console.log("in backend");
    
    const { token } = req.query;
    console.log( token );

    const response = await fetch("https://api.spotify.com/v1/me/tracks", { headers: { Authorization: 'Bearer ' + token }})
    .then( r => r.json( ))
    .then( async songsReq => {
        console.log( songsReq );
        if ( songsReq.ok ){
            
            console.log(songsReq);
            res.status(200).json( songsReq );
        } else {
            console.log("bad");
            console.log( typeof songsReq );            
            throw songsReq;
        };
    })
    .catch( error => {
        res.status(200).json({ ...error });
        // console.log( "ERR", error );
    })
};

export default handler;