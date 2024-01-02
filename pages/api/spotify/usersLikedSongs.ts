import type { NextApiRequest, NextApiResponse } from 'next'


interface Req extends NextApiRequest {
    headers: { };
    query: { token: string; };
};

const handler = async ( req : NextApiRequest, res: NextApiResponse ) => {
    console.log("in backend");
    
    const { token } = req.query;
    console.log( token );

    const response = await fetch("https://api.spotify.com/v1/me/tracks", {
        headers: {
            Authorization: 'Bearer ' + token
          }
    })
    .then( async res => {
        console.log( res );
        if ( res.ok ){
            console.log(res)
        } else {
            console.log("bad");
            console.log( typeof res );            
            throw res;
        };
    })
    .catch( error => {
        res.status(200).json({ ...error });
        // console.log( "ERR", error );
    })


    res.status(200).json({ message: 'Hello from Next.js!' });

};

export default handler;