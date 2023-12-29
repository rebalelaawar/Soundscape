'use client'
import React, { useEffect } from 'react';

const LoginCard = ({ client_id } : { client_id: string; }) => {

  const handleLogin = ( ) => {
    const scopes = ['user-library-read'];
    const scopeString = scopes.join(' ');
  
    window.location.replace(`${'https://accounts.spotify.com/authorize'}?response_type=code&client_id=${client_id}&redirect_uri=${'http://localhost:3000/space'}&scope=${scopeString}`);
  };
  
  return <button onClick={handleLogin}>Login with Spotify</button>;

};

export default LoginCard;