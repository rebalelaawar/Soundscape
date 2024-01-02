'use client'
import { useEffect, useState } from "react";

const MainFrame = ({ token } : { token: string; }) => {
    
    const [ listOfSongs, setSongList ] = useState([]);
    
    const getSomeLikedSongs = async () => {
      const userLikedSongs = await fetch(`/api/spotify/usersLikedSongs/?token=${ token }`)
      .then ( res => { if( res.status === 200 ) { return res } else throw res })
      .then( res => res.json( ))
      .then( res => setSongList( res.items ))
      .catch( error => console.log( error ))
    };

    useEffect(( ) => { 
        getSomeLikedSongs();
    }, [token]);

    

    return (
        <div>
          <p>This is the app.</p>
          <p>Here is the token: {token}</p>
    
          <div style={{ outline: "1px solid red" }}>
            <p>List of Liked Songs:</p>
            <ul>
              {listOfSongs.map((song) => (
                //@ts-ignore
                <li key={ song.track.id }>{ song.track.name }</li>
              ))}
            </ul>
          </div>
        </div>
      );
    };

export default MainFrame;