import React from 'react';

const AboutComponent = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: '70px' }}>
        <h1 style={{ textAlign: "center", color: "lightblue", fontFamily: "monospace" }}><strong>About</strong></h1>
        <p style={{ textAlign: "center", fontSize: "27px", fontFamily: "monospace" }}>Experience music like never before. Soundscape brings together cutting-edge spatial audio technology and stunning visualizations to redefine your music exploration.</p>
        <br></br>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: '50px' }}>
        <h1 style={{ textAlign: "center", color: "lightblue", fontFamily: "monospace", fontSize: "22px" }}><strong>Audio Features</strong></h1>
        <li style={{ textAlign: "center", fontSize: "20px", fontFamily: "monospace" }}> As you explore the music tracks, our audio player dynamically adjusts the panning of each sound source.</li>
        <br></br>
        <li style={{ textAlign: "center", fontSize: "20px", fontFamily: "monospace" }}>This will create a sense of direction and space for the user when navigating tracks.</li>
        <br></br>
        <br></br>
        <br></br>
        <h1 style={{ textAlign: "center", color: "lightblue", fontFamily: "monospace", fontSize: "22px" }}><strong>Visual Features</strong></h1>
      </div>
    </>
  );
};

export default AboutComponent;