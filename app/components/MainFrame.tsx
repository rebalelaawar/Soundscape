'use client'
import { useEffect, useState, useRef } from "react";
import DummySongs from "../DummySongs";
import StudyScene from "./StudyScene";

const MainFrame = ({ token }: { token: string; }) => {

  const [listOfSongs, setSongList] = useState(DummySongs);
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
  const handleSongClick = (song) => {
    if (audioRef.current) {
      //@ts-ignore
      if (currentSong && currentSong.track.preview_url === song.track.preview_url) {
        audioRef.current.pause();
        setCurrentSong(null);
      } else {
        audioRef.current.src = song.track.preview_url;
        audioRef.current.play();
        setCurrentSong(song);
      }
    }
  };

  return <>
    <div>
      <main style={{ textAlign: 'center', marginTop: '50px', fontSize: '2em', color: 'green' }}>
        <strong>Soundscape</strong>
      </main>

      <p>List of Liked Songs:</p>
      ------------------------------
      <ul style={{ listStyleType: 'none', padding: 0, color: "lightgreen",}}>
        {listOfSongs.map((song) => (
          //@ts-ignore
          <li key={song.track.id} style={{ marginBottom: '10px' }} onClick={() => handleSongClick(song)}>
            { song._type }<br/>
            <strong>{song.track.name}</strong>{song.track.explicit}&nbsp;&nbsp;
            
            BPM: {Math.round(song.audioFeats.tempo)}&nbsp;&nbsp;
    
            <audio id="audioPlayer" ref={audioRef} style={{ display: "none" }} />
          </li>
        ))}
      </ul>
    </div>

    <StudyScene/>
    </>;
};


export default MainFrame;