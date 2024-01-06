import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";


const Inside = ( ) => {
    const bluePlane = useRef( );
    const bluePlaneDir = useRef( false );
    useFrame(( ) => {
        // console.log("hi");
        console.log( bluePlane.current.position.x );
        
        if( !bluePlaneDir.current ) {

            bluePlane.current.position.x += 1; 
            if( bluePlane.current.position.x > 30 ) {
                bluePlaneDir.current = true;
            }
        } else {
            bluePlane.current.position.x -= 1; 
            if( bluePlane.current.position.x < -30 ) {
                bluePlaneDir.current = false;
            }

        }
    });

    return <>
        <mesh>
            <planeGeometry args={[ 15, 5 ]}/>
            <meshBasicMaterial color={"red"}/>
        </mesh>
        <mesh ref={ bluePlane } position={[ 15, 0, 0]}>
            <planeGeometry args={[ 15, 5 ]}/>
            <meshBasicMaterial color={"blue"}/>
        </mesh>    
        <mesh position={[ -15, 0, 1]}>
            <circleGeometry args={[ 15, 5 ]}/>
            <meshBasicMaterial color={"yellow"}/>
        </mesh>    
    </>;
}

const StudyScene = ( ) => {

    return <div style={{ position: "fixed", top: 0, zIndex: -1 }}>
        <Canvas camera={{ }}>
            {/* THIS IS THREE JS SPACE */}
            <Inside/>
        </Canvas>
    </div>;
};

export default StudyScene;