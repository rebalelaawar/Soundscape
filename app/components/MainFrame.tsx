'use client'
import { useEffect, useState } from "react";

const MainFrame = ({ token }: { token: string; }) => {

  const [listOfSongs, setSongList] = useState([])



  const getSomeLikedSongs = async () => {
    const userLikedSongs = await fetch(`/api/spotify/usersLikedSongs/?token=${token}`)
    const data = await userLikedSongs.json();
    const songsArray = data.songsReq.items

    
    
    setSongList(songsArray);

  };

  useEffect(() => {
    getSomeLikedSongs();

  }, [token]);





  return (
    <div>
      <main style={{ textAlign: 'center', marginTop: '50px', fontSize: '2em', color: 'green' }}>
        <strong>Sound Scape</strong>
      </main>

      <p>List of Liked Songs:</p>
      <ul style={{ listStyleType: 'none', padding: 0, color: "lightgreen" }}>
        {listOfSongs.map((song) => (
          //@ts-ignore
          <li key={song.track.id} style={{ marginBottom: '10px' }}>
            {/* @ts-ignore */}
            <strong>{song.track.name}</strong>
            ---
          {/* {song.track.artists.map((artist) => (
            <span key={artist.id}> {artist.name}</span>
          ))} */}
            {/* - BPM : {song.audio_features.tempo} */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainFrame;
