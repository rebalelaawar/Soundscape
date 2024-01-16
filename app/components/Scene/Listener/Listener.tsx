import { useFrame } from "@react-three/fiber"
import { Ref, useEffect, useRef, useState } from "react";
import { maxPoints, DreamShader} from "../shaders/DreamScape/DreamScape";
import { ShaderMaterial } from "three";
import * as THREE from 'three';
import TextureShader from "../shaders/DreamScape/TextureShader";
import s from '../Scene.module.scss';

interface props {
    audioContext: AudioContext;
    darkMode: boolean;
};

const Listener = ({ audioContext, darkMode } : props ) => {
  
    const [ uiColors, _uiColors ] = useState({ textColor: new THREE.Vector3( 0, 0, 0 ), backGroundColor: new THREE.Vector3( 1, 1, 1 )});

    useEffect(( ) => {
        if( darkMode ) _uiColors({ textColor: new THREE.Vector3( 1, 1, 1 ), backGroundColor: new THREE.Vector3( 0, 0, 0 )})
        else _uiColors({ textColor: new THREE.Vector3( 0, 0, 0 ), backGroundColor: new THREE.Vector3( 1, 1, 1 )});
    }, [ darkMode ]);
    //@ts-ignore
    const updatingEntireSubRender = ( size ) => {
        if( !texture || !subDreamHelperMesh.current) return
        dreamWorker.current?.postMessage({ operation: "Render", params: { screenDims: size }});
        //@ts-ignore
        subDreamHelperMesh.current.material.uniforms.uTexture.value.dispose();
    }

    useFrame(({ camera, size }) => {
        const { zoom, position : listenerPos } = camera;
        const viewBoxDims = { w: size.width/zoom, h: size.height/zoom };
        camera.userData.viewBoxDims = viewBoxDims;
        const [ halfW, halfH ] = [ ( viewBoxDims.w / 2), ( viewBoxDims.h / 2) ]
        const extents = { xMin: listenerPos.x - halfW, xMax: listenerPos.x + halfW, yMin: listenerPos.y - halfH, yMax: listenerPos.y + halfH  };
        camera.userData.extents = extents;
        
        audioContext.listener.positionX.setValueAtTime( listenerPos.x, audioContext.currentTime );
        audioContext.listener.positionY.setValueAtTime( listenerPos.y, audioContext.currentTime );
        // audioContext.listener.positionY.setValueAtTime( zoom, audioContext.currentTime );
        
        if( dreamCanvas.current && listenerMesh.current ) {            
            listenerMesh.current.position.set( listenerPos.x, listenerPos.y, 2 );


            //temp scale of sound area
            const viewW = Math.abs( extents.xMin - extents.xMax );
            const viewH = Math.abs( extents.yMin - extents.yMax );
            const viewSize = Math.sqrt( viewW * viewW + viewH * viewH );
            const refDistance = (viewSize/18) + 10;
            // listenerMesh.current.scale.set( refDistance, refDistance, 1 );
            camera.userData.soundDistance = refDistance;


            dreamCanvas.current.position.set( camera.position.x, camera.position.y, 1 );
            dreamCanvas.current.scale.set( viewBoxDims.w, viewBoxDims.h, 1 );
            //@ts-ignore
            // subDreamHelperMesh.current.scale.set( viewBoxDims.w, viewBoxDims.h, 1 );
            //@ts-ignore
            // subDreamHelperMesh.current.position.set( camera.position.x, camera.position.y, -1 );


                //@ts-ignore
            if( dreamCanvas.current.material.uniforms ) {
                if( !camera.userData.emitterLocations ) {
                    camera.userData.emitterLocations = {};
                    return;
                };
                        
                const p = camera.position;
                // dreamCanvas.current.material.uniforms.uPoints.value = [ new Array( 100 ).fill(new THREE.Vector2( p.x, p.y ))];
                //@ts-ignore    
                const pointsArray = new Array(maxPoints).fill(new THREE.Vector2( -10000.0, -10000.0 ));
                const emmiterKeys = Object.keys( camera.userData.emitterLocations );
                for (let i = 0; i < emmiterKeys.length; i++) {
                    const pt = camera.userData.emitterLocations[ emmiterKeys[ i ]].location;
                    // console.log( zoom );
                    
                    // pointsArray[i] = new THREE.Vector2( pt.x + halfW - size.width, pt.y- camera.position.y + size.height );
                    pointsArray[i] = new THREE.Vector2( pt.x, pt.y );
                }
                
                // console.log("test");

                // dreamCanvas.current.material.uniforms.uTime.value += 0.1;
                //@ts-ignore
                dreamCanvas.current.material.uniforms.uPoints.value = pointsArray;
                //@ts-ignore
                dreamCanvas.current.material.uniforms.uExtents.value = new THREE.Vector4( extents.xMin, extents.xMax, extents.yMin, extents.yMax );
                //@ts-ignore
                dreamCanvas.current.material.uniforms.uExtentsDims.value = new THREE.Vector2( viewW, viewH );
                //@ts-ignore
                dreamCanvas.current.material.uniforms.uScreenSize.value = new THREE.Vector2( size.width, size.height );
                //@ts-ignore
                dreamCanvas.current.material.uniforms.uMainColor.value = uiColors.textColor;
                //@ts-ignore
                dreamCanvas.current.material.uniforms.uPointSize.value = refDistance;
                //@ts-ignore
                dreamCanvas.current.material.uniforms.uSoundRefDistance.value = refDistance;


                updatingEntireSubRender( size );

            };
        };
    });    

    // const [ dreamShader ] = useState( );
    const listenerMesh = useRef<THREE.Mesh>( null );
    const dreamCanvas = useRef<THREE.Mesh>( null );


    useEffect(( ) => {
        if( !dreamCanvas.current ) return
        dreamCanvas.current.material = new DreamShader({ });
        dreamCanvas.current.material.transparent = true;
        //@ts-ignore
        dreamCanvas.current.material.uniforms.uDevicePixelRatio.value = window.devicePixelRatio;
        
    }, [ dreamCanvas ]);


    const subDreamHelperMesh = useRef<THREE.Mesh>( null );
    const dreamWorker = useRef<Worker>( );
    const [texture, setTexture] = useState<THREE.Texture>();


    useEffect(( ) => {
        if( ! subDreamHelperMesh.current ) return;
        const dpi = window.devicePixelRatio;
        const width = 100 * dpi;
        const height = 100 * dpi;
        
        const worker = new Worker( new URL( './dreamWorker.ts', import.meta.url ));

        dreamWorker.current = worker;
        // subDreamHelperMesh.current.material = new TextureShader({ uTexture: canvasTexture });
        // subDreamHelperMesh.current.material.transparent = true;  // Set transparent if needed

        // dreamWorker.current.postMessage({ operation: "SetCanvas", params: { canvas: controls }}, [ controls ]);
        
        return ( ) => worker.terminate( );
    }, [ ]);

    return <>
    
        <mesh ref={ listenerMesh }>
            <circleGeometry args={[ 1 ]}/>
            <meshBasicMaterial color={[ 1, 1, 1 ]} opacity={1.0}/>
        </mesh>
        <mesh ref={ dreamCanvas }>
                <planeGeometry args={[ 1, 1, 1 ]}/>
                {/* <primitive ref={ DreamMat } attach="material" args={[DreamShader] } /> */}
        </mesh>
        {/* <mesh ref={ subDreamHelperMesh }>
                <planeGeometry  args={[ 1, 1, 1 ]}/>
                <meshBasicMaterial color={"black"} opacity={1.0} transparent/>
        </mesh> */}
    </>;
};


export default Listener;