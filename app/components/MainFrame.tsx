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
    setSongList(songsArray);
  };
  
  useEffect(() => {
    // getSomeLikedSongs();
  }, [token]);

//@ts-ignore

  const songList = <ul style={{ listStyleType: 'none', padding: 0, color: "lightgreen" }}>
    {listOfSongs.map((song) => (
      <li
        key={song.track.id}
        style={{ marginBottom: '10px', cursor: isHovered ? 'pointer' : 'default' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        { song._type }<br />
        <strong>{song.track.name}</strong>{song.track.explicit}&nbsp;&nbsp;
        
        BPM: {Math.round(song.audioFeats.tempo)}&nbsp;&nbsp;

        {/* <audio id="audioPlayer" ref={audioRef} style={{ display: "none" }} /> */}
      </li>
    ))}
  </ul>;

  return (
    <>
      <div>
   
       
        {
          // songList
        }
      </div>

    </>
  );
};


export default MainFrame;