'use client'
import { useEffect, useState, useRef } from "react";
import DummySongs from "../DummySongs";


const MainFrame = ({ token }: { token: string; }) => {

  const [listOfSongs, setSongList] = useState(DummySongs);
  const [currentSong, setCurrentSong] = useState(null);
  const [isHovered, setIsHovered] = useState(false);


  const getSomeLikedSongs = async () => {
    const userLikedSongs = await fetch(`/api/spotify/usersLikedSongs/?token=${token}`)
    const data = await userLikedSongs.json();
    const songsArray = data.songArray;
    console.log(songsArray);
    setSongList(songsArray);
  };
  
  useEffect(() => {
    // getSomeLikedSongs();
  }, [token]);

//@ts-ignore

  return <>
    <div>
      <main style={{ textAlign: 'center', marginTop: '50px', fontSize: '2em', color: 'green' }}>
        <strong>Soundscape</strong>
      </main>
      <ul style={{ listStyleType: 'none', padding: 0, color: "lightgreen",}}>
        {listOfSongs.map((song) => (
          //@ts-ignore
          <li key={song.track.id} style={{ marginBottom: '10px' }} onClick={() => handleSongClick(song)}>
            { song._type }<br/>
            <strong>{song.track.name}</strong>{song.track.explicit}&nbsp;&nbsp;
        
            BPM: {Math.round(song.audioFeats.tempo)}&nbsp;&nbsp;
          </li>
        ))}
      </ul>
    </div>
    </>;
};


export default MainFrame;