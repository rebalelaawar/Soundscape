'use client'
import { useEffect, useState } from "react";

const MainFrame = ({ token } : { token: string; }) => {
    
    const [ listOfSongs, setSongList ] = useState([]);
    
    const getSomeLikedSongs = async () => {

      const userLikedSongs = await fetch(`/api/spotify/usersLikedSongs/?token=${ token }`).then( res => res.json( ));
      console.log( userLikedSongs );
      setSongList( userLikedSongs.items );


        // console.log("using this token", token );
        // const response = await fetch("https://api.spotify.com/v1/me/tracks", {
        //     headers: {
        //         Authorization: 'Bearer ' + token
        //       }
        // })
        // .then( async res => {
        //   console.log( res );
        //   if ( res.ok ){
        //       console.log(res)
        //       //@ts-ignore
        //       setSongList( res.items );
        //   }
        //   else {
        //     console.log("bad");
            
        //       throw res;
        //     }
          
        // })
        // .catch( error => console.log( "ERR", error ))
        // // console.log(response, "<<")

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