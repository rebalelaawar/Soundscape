'use client'
import s from './Scene.module.scss';
import { useRef, useState, useMemo, useEffect, Ref } from 'react';
import { Canvas } from "@react-three/fiber";
import samples from "../../fakeDB/samples";
import TrackBubble from "./TrackBubbles/TrackBubble";
import { Effects, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import Listener from './Listener/Listener';
import DummySongs from '@/app/DummySongs';
import { recomendedTrack, userLikedSong } from '@/pages/api/spotify/usersLikedSongs';


interface props {
    darkMode: boolean;
    play: boolean;
    songs: Array< recomendedTrack | userLikedSong>;
};



const Scene = ({ play, darkMode, songs } : props ) => {
    
    const [ audioContext ] = useState(( ) => new AudioContext( ));
    const [ reverb, _reverb ] = useState(( ) => audioContext.createConvolver( ));
    

    const SceneRef = useRef( null );

    // const [ meshRefs, updateMeshRefs ] = useState<Ref<Array<THREE.Mesh>>>([ ]);
    const updateMshRefArray = ( ref : Ref<THREE.Mesh> ) => {

    };


    const bubblemaker = ( ) => {

        const checkSong = ( track : SpotifyApi.TrackObjectFull ) => {
            
        };

        samples.forEach( track => checkSong( track ));
        // return <TrackBubble key={ samples[0].id } sendRef={ updateMshRefArray } play={ play } position={[ 150, 250, 0 ]} context={ audioContext } { ...samples[0] }/>;

        return samples.map(( track, i ) => <TrackBubble key={ track.id } sendRef={ updateMshRefArray } play={ play } position={[ (( Math.random( ) < 0.5 ? -1 : 1 ) * Math.random()*200), i*20 - 50, 0 ]} context={ audioContext } { ...track }/>);
    }
    
    const [ bubbles, setBubbles ] = useState<any>( );


    const onBubble = ( ) => {
        console.log( songs, "<<<<<<<<" );
    
        const trackBubbles = songs.map(( s, i ) => {
            return <TrackBubble key={ s.track.id } sendRef={ updateMshRefArray } play={ play } position={[ (( Math.random( ) < 0.5 ? -1 : 1 ) * Math.random()*200), i*20 - 50, 0 ]} context={ audioContext } { ...s.track }/>
        });

        setBubbles( trackBubbles );

    };

    useEffect(( ) => {
        onBubble( );
    }, [ play, songs ]);


    // https://github.com/pmndrs/react-three-offscreen
    return <div id={ s.SceneWrapper }>
        <Canvas orthographic camera={{ fov: 30, position: [ 0, 0, 200 ], zoom: 3 }} ref={ SceneRef } dpr={ window.devicePixelRatio }>
            <Listener audioContext={ audioContext } darkMode={ darkMode }/>
            <ambientLight intensity={1} />
            <OrbitControls enableDamping dampingFactor={0.09} enableRotate={ false } enablePan={ true } enableZoom={ true } mouseButtons={{ LEFT: THREE.MOUSE.PAN }} touches={{ ONE: THREE.TOUCH.PAN, TWO: THREE.TOUCH.DOLLY_ROTATE }}/>
            { bubbles }
            {/* <EffectComposer> */}
                {/* <Noise opacity={0} /> */}
                {/* <SMAA/> */}
            {/* </EffectComposer> */}
        </Canvas>
    </div>;
};

export default Scene;