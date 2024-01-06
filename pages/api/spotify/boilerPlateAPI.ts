import type { NextApiRequest, NextApiResponse } from 'next'
interface Req extends NextApiRequest { headers: { }; query: { token: string; }; };


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    //code in here
    res.status( 200 ).send({ }); //send data back
};

export default handler;