import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async ( req : NextApiRequest, res: NextApiResponse ) => {

    res.status(200).json({ message: 'Hello from Next.js!' });

};

export default handler;