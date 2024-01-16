 'use client'
import React from 'react';

const Header = () => {
  return (
    <div style={{ background: 'black', color: 'lightblue', padding: '7px', textAlign: 'center',}}>
      <h1><strong>Soundscape</strong></h1>
    </div>
  );
};

const LoginCard = ({ client_id }: { client_id : string }) => {
  const handleLogin = () => {
    const scopes = ['user-library-read'];
    const scopeString = scopes.join(' ');
    window.location.replace(`${ 'https://accounts.spotify.com/authorize'}?response_type=code&client_id=${client_id}&redirect_uri=${'http://localhost:3010/space'}&scope=${scopeString}` );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <Header />
    <br></br>
      <button
        style={{ padding: '15px 20px', fontSize: '1.2em', backgroundColor: 'lightblue', color: 'black', border: 'none', cursor: 'pointer' }}
        onClick={handleLogin}
      >
        <strong>Login with Spotify</strong>
      </button>
    </div>
  );
};

export default LoginCard;