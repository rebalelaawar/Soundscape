import { useRef, useMemo, useEffect, useState } from 'react';
import { useFrame, useLoader, Vector3, useThree,  } from '@react-three/fiber';
import * as THREE from 'three';
import BubbleMat from '../shaders/BubbleMat';
import { shaderMaterial } from '@react-three/drei';
import { trackTypes } from '@/pages/api/spotify/usersLikedSongs';


interface props extends SpotifyApi.TrackObjectFull {
  sendRef: Function;
  context: AudioContext, 
  position: Vector3,
  play?: boolean; 
  _type: trackTypes;
};


const TrackBubble = ({ id, _type, sendRef, context, play, position, album, name, preview_url, onHover  } : any ) => {

  let moveSpeed = 0;
  if( _type === trackTypes.recomended ) {
    // console.log( _type );
    moveSpeed = 0.3;
  };
  const handleHover = () => {
    onHover(name);
};

  const albumArt = album.images[0].url;

  const meshRef = useRef<THREE.Group>( null );
  const texture = useLoader( THREE.TextureLoader, albumArt );
  const radius = 10; const widthSegments = 32; const heightSegments = 32; const phiStart = 0; const phiLength = Math.PI;

  useEffect(( ) => { 
    sendRef( meshRef );    
  }, [ meshRef ]);

  useEffect(( ) => { 
      // const material = new BubbleMat( );
      // material.uniforms.uTexture.value = texture;
      // if( meshRef.current ) meshRef.current.material = material;
  }, [ texture ]);

  const [ movingRight, _mr ] = useState( false );
  useFrame(({ camera }) => {
    
      if (meshRef.current) {
          const a = meshRef.current.rotation.z;          
          // meshRef.current.lookAt(camera.position);
          
          meshRef.current.rotation.z = a - 0.01;
          const { x, y } = meshRef.current.position;

          if( movingRight ) {
            meshRef.current.position.x += moveSpeed;
            if( meshRef.current.position.x > 100 ) _mr( false );
          } else {
            meshRef.current.position.x -= moveSpeed;
            if( meshRef.current.position.x < -100 ) _mr( true );
          }


          spatial.refDistance = camera.userData.soundDistance; //fix this
          spatial.rolloffFactor = 8;
                    
          // gainNode.gain.value = (50 - camera.userData.soundDistance + 15)/50;
      
          camera.userData.dreamUniforms = [ meshRef.current.position ];
          spatial.positionX.setValueAtTime( x, context.currentTime); // + Sound coming from right  
          spatial.positionY.setValueAtTime( y, context.currentTime); // - Sound coming from up top
          spatial.positionZ.setValueAtTime( 3, context.currentTime); // - Sound coming from up top

          if( camera.userData.emitterLocations ) camera.userData.emitterLocations[id] = { location: new THREE.Vector2( meshRef.current.position.x, meshRef.current.position.y )};
          
        }
  });

  //audio stuff
  const [ preview, _preview ] = useState(( ) => {     
    const x = new Audio( preview_url ? preview_url : "" );
    x.crossOrigin = "anonymous";
    return x;
  });

  const [ sourceNode, _sourceNode ] = useState(( ) => context.createMediaElementSource( preview ));
  const [ spatial, _spatial ] = useState(( ) => context.createPanner( ));
  const [ gainNode, _gainNode ] = useState(( ) => context.createGain( ));
  
  useEffect(( ) => { 
    // sourceNode.connect(spatial);
    sourceNode.connect(gainNode);
    gainNode.connect( spatial );
    spatial.connect(context.destination);
    spatial.panningModel = 'HRTF';
    gainNode.gain.value = 1; //master volume control
    return ( ) => sourceNode.disconnect( );
  }, [ ]);

  const [ played, _played ] = useState( false );
  const [ incontext, _incontext ] = useState( false );

  const playTime = useMemo(() => preview.currentTime, [ preview.currentTime ]);

  useEffect(( ) => {
      if( !play ) return;
      console.log("here");
      
      let animationFrameID = 0;
      
      const animate = ( ) => {
          animationFrameID = requestAnimationFrame( animate );
      };

      animationFrameID = requestAnimationFrame( animate );
      return ( ) => cancelAnimationFrame( animationFrameID );
  }, [ play ]);

  useEffect(( ) => {
      if( !spatial ) return;      
      // spatial.positionX.setValueAtTime(sx.x, context.currentTime); // + Sound coming from right  
      // spatial.positionY.setValueAtTime(sx.y, context.currentTime); // - Sound coming from up top
      spatial.positionZ.setValueAtTime(0, context.currentTime); // + Sound coming from in front
      context.listener.setPosition(0, 0, 0); //depricated 
  }, [  ]);
  

  const playPreview = async ( ) => {

      const onEnded = ( ) => {
          console.log('Audio has finished playing');
          preview.play( );
      };
      const onPlay = ( ) => {
          console.log('Audio has begun playing');
          preview.play( );
      };

      preview.addEventListener( 'ended', onEnded );
      preview.addEventListener( 'play', onPlay );

      gainNode.gain.value = 0;
      if (context.state === "suspended") await context.resume();
      preview.play( );

      const fiveSecondTrigger = preview.addEventListener('timeupdate', ( ) => {        
          // console.log( preview.currentTime, "??" );
          
          if( preview.currentTime <= 5 ) gainNode.gain.value = preview.currentTime/5;
          else if( preview.duration - preview.currentTime <= 5 ) {
              const time = preview.duration - preview.currentTime;
              gainNode.gain.value = time/5;
          }
      });


      return ( ) => {
          console.log("removing events");
          
          preview.removeEventListener('ended', onEnded );
          preview.removeEventListener('play', onPlay );
      }

  };

  useEffect( ( ) => {
    if( !play ) { preview.pause( ); return; };
    playPreview( );
  }, [ play ]);

  return <group ref={ meshRef } position={ position }onPointerOver={handleHover} >
      {/* <mesh>
        <planeGeometry args={[ radius*5, radius*5 ]}/>
        <meshBasicMaterial map={ texture } />
      </mesh> */}

  <mesh>
      <sphereGeometry args={[ radius, widthSegments, heightSegments, phiStart, phiLength ]}/>

      <meshBasicMaterial map={ texture } />
  </mesh>

  </group>
};

export default TrackBubble;