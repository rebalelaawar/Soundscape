 'use client'
// import React from 'react'



// const LoginCard = ({client_id,client_secret}) => {

//   return (
//     <div>
//         <button onClick={() => window.location.replace(`https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&redirect_uri=${'http://localhost:3000'}`)}>Login Spotify</button>
//     </div>
//   )
// }

// export default LoginCard

import React, { useEffect } from 'react';

const LoginCard = ({ client_id, client_secret }) => {

  const handleLogin = () => {
    window.location.replace(`${'https://accounts.spotify.com/authorize'}?response_type=code&client_id=${client_id}&redirect_uri=${'http://localhost:3000'}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const authorizationCode = urlParams.get('code');

    if (authorizationCode) {
      // Make a POST request using the fetch API
      fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${btoa(`${client_id}:${client_secret}`)}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=http://localhost:3000`,
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const accessToken = data.access_token;
        // Do something with the access token, like storing it in state or localStorage
        console.log('Access Token:', accessToken);
      })
      .catch(error => {
        console.error('Error exchanging authorization code for access token:', error);
      });
    }
  }, []);

  return (
    <div>
      <button onClick={handleLogin}>Login Spotify</button>
    </div>
  );
};

export default LoginCard;