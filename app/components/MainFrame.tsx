'use client'
import { useEffect, useState } from "react";

const MainFrame = ({ token } : { token: string; }) => {
    
    const [ listOfSongs, setSongList ] = useState([]);
    
    const getSomeLikedSongs = async () => {
        console.log("using this token", token );
        const response = await fetch("https://api.spotify.com/v1/me/tracks", {
            headers: {
                Authorization: 'Bearer ' + token
              }
        })
        console.log(response)
        if (response.ok){
            const likedSongs = await response.json();
            console.log(likedSongs)
            setSongList(likedSongs.items)
        }
        else {
            console.error("Failed to fetch user tracks");
          }

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
                <li key={song.track.id}>{song.track.name}</li>
              ))}
            </ul>
          </div>
        </div>
      );
    };

export default MainFrame;