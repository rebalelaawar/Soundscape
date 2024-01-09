'use client'
import React from 'react';

const LoginCard = ({ client_id }: { client_id: string }) => {
  const handleLogin = () => {
    const scopes = ['user-library-read'];
    const scopeString = scopes.join(' ');
    window.location.replace(`${'https://accounts.spotify.com/authorize'}?response_type=code&client_id=${client_id}&redirect_uri=${'http://localhost:3010/space'}&scope=${scopeString}`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <button
        style={{
          padding: '15px 20px', 
          fontSize: '1.2em', 
          backgroundColor: 'darkgreen', 
          color: 'silver',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={handleLogin}
      >
        Login with Spotify
      </button>
    </div>
  );
};

export default LoginCard;