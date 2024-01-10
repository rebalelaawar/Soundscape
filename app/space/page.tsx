import Link from 'next/link';
import Wrapper from './appWrapper';

const Page = async ({ searchParams } : any ) => { 
    if ( "code" in searchParams ) {
        const { code : authorizationCode } = searchParams
        const [ client_id, client_secret ] = [ process.env.CLIENT_ID, process.env.CLIENT_SECRET ];

        const request = {
            method: "POST",
            body: new URLSearchParams({ code: authorizationCode, redirect_uri: 'http://localhost:3010/space', grant_type: "authorization_code", scope: "user-library-read" }),
            headers: { 'Authorization': `Basic ${ btoa(`${ client_id }:${ client_secret }`) }`, 'Content-Type': 'application/x-www-form-urlencoded' }
        }
        const token : string = await fetch( 'https://accounts.spotify.com/api/token', request )
        .then(response => response.json( ))
        .then( data => data.access_token )
        .catch( error => console.error( 'Error exchanging authorization code for access token:', error ));

        //do token stuff again
        return <Wrapper token={token}/>
    };

    return <div>Please <Link href="/login">Login</Link></div>;
};
export default Page;