'use client'
import { useEffect, useState } from "react";

const MainFrame = ({ token } : { token: string; }) => {
    
    const [ listOfSongs, setSongList ] = useState( );
    const getSomeLikedSongs = async ( ) => {
        console.log("using this token", token );
        //get the songs add them to state

    };

    useEffect(( ) => { 
        getSomeLikedSongs( );
    }, [ ]);


    return <div>

        this is the app. 
        <br/>
        here is the token = { token }

        <div style={{ outline: "1px solid red"}}>
            List of Liked Songs:<br/>
            { listOfSongs }
        </div>
        
    </div>;
};

export default MainFrame;