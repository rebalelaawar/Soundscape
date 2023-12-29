import { useSearchParams } from 'next/navigation'
import LoginCard from './components/LoginCard';



export default function Home({ searchParams } : { searchParams: { [key: string]: string | string[] | undefined }}) {

  if( "code" in searchParams ) {

    const { code: authorizationCode } = searchParams;
    const [ client_id, client_secret ] = [ process.env.CLIENT_ID, process.env.CLIENT_SECRET ];
    console.log("-------------");
    




    fetch( 'https://accounts.spotify.com/api/token', {
        method: 'POST',
        //@ts-ignore
        body: new URLSearchParams({ code: authorizationCode, redirect_uri: 'http://localhost:3000', grant_type: 'authorization_code' }),
        headers: { 'Authorization': `Basic ${ btoa(`${ client_id }:${ client_secret }`) }`, 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const accessToken = data.access_token;
        // Do something with the access token, like storing it in state or localStorage
        console.log('Access Token:', accessToken);
      })
      .catch( error => console.error( 'Error exchanging authorization code for access token:', error ));

    return <div>We got the code: { authorizationCode }</div>

  };
  
  return <LoginCard client_id={ process.env.CLIENT_ID }/>;

};
