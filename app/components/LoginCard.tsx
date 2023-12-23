'use client'
import React from 'react'


const LoginCard = ({client_id}) => {

  return (
    <div>
        <button onClick={() => window.location.replace(`https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&redirect_uri=${'http://localhost:3000'}`)}>Login Spotify</button>
    </div>
  )
}

export default LoginCard