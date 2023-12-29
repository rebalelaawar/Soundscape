import { useSearchParams } from 'next/navigation'
import LoginCard from '../components/LoginCard';
import Link from 'next/link';



const Space = async ({ searchParams } : { searchParams: { [key: string]: string | string[] | undefined }}) => {

  if( "code" in searchParams ) {

    const { code: authorizationCode } = searchParams;
    const [ client_id, client_secret ] = [ process.env.CLIENT_ID, process.env.CLIENT_SECRET ];
    console.log("-------------");
    console.log( authorizationCode );
    
    const token = await fetch( 'https://accounts.spotify.com/api/token', {
        method: 'POST',
        //@ts-ignore
        body: new URLSearchParams({ code: authorizationCode, redirect_uri: 'http://localhost:3000/space', grant_type: 'authorization_code' }),
        headers: { 'Authorization': `Basic ${ btoa(`${ client_id }:${ client_secret }`) }`, 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .then(response => response.json( ))
      .then(data => {
        console.log( data );
        
        const accessToken = data.access_token;
        console.log( 'Access Token:', accessToken );
        return accessToken;
      })
      .catch( error => console.error( 'Error exchanging authorization code for access token:', error ));

    
      return <div>This is app: { authorizationCode } <br/> this is token: { token }</div>;

  };
  

  return <div>
    Please <Link href={ '/login' }>LOGIN</Link>
  </div>;

};

export default Space;
