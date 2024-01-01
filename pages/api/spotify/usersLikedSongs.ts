import type { NextApiRequest, NextApiResponse } from 'next'


interface Req extends NextApiRequest {
    headers: { };
    query: { token: string; };
};

const handler = async ( req : NextApiRequest, res: NextApiResponse ) => {
    console.log("in backend");
    
    const { token } = req.query;
    console.log( token );

    await fetch("https://api.spotify.com/v1/me/tracks", {
        headers: { Authorization: 'Bearer ' + token }
    }).then( async res => {
        // console.log( res );
        
        if (res.ok){
            return await res.json( );
            // setSongList(likedSongs.items)
        } else {
            console.log( res );
            
            throw await res.json( );            
        }
        
    }).then( res => {
        console.log( res );
        console.log( "got songs");
        
    }).catch( error => {
        console.log( error );
        console.error("Failed to fetch user tracks");
        res.status(500).json({ error });

    });

    res.status(200).json({ message: 'Hello from Next.js!' });

};

export default handler;