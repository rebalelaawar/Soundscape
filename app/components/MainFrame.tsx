'use client'
import { useEffect, useState } from "react";

const MainFrame = ({ token } : { token: string; }) => {
    
    const [ listOfSongs, setSongList ] = useState([]);
    
    const getSomeLikedSongs = async () => {
      const userLikedSongs = await fetch(`/api/spotify/usersLikedSongs/?token=${ token }`)
      .then( res =>   { console.log( res.status); return res; }
      )
      .then( res => res.json( ));
      console.log( userLikedSongs );
      setSongList( userLikedSongs.items );
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