import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, Ref } from "react";
import { Text } from "@react-three/drei";


const Inside = ( ) => {

    const greenCircle = useRef();
    const greenCircleDir = useRef( false );
    const purpleCircle = useRef()
    const purpleCircleDir = useRef( false );

   
    
    useFrame(( ) => {
        // console.log("hi");
        // console.log( bluePlane.current.position.x );

        //@ts-ignore
        if (!greenCircleDir.current) {
            greenCircle.current.position.x += 0.5;
            if ( greenCircle.current.position.x > 80) {
                greenCircleDir.current = true;
            }
        
        } else {
            greenCircle.current.position.x -= 0.5;
            if ( greenCircle.current.position.x < -80) {
                greenCircleDir.current = false;
            }

        }
        if (!purpleCircleDir.current) {
            purpleCircle.current.position.x += 0.3;
            if (purpleCircle.current.position.x > 40) {
              purpleCircleDir.current = true;
            }
          } else {
            purpleCircle.current.position.x -= 0.3;
            if (purpleCircle.current.position.x < -40) {
              purpleCircleDir.current = false;
            }
          }
        
        
    });

    return <> 
    <mesh ref={greenCircle} position={[50,0,-10]}>
        <circleGeometry args={[5,32]}/>
        <meshBasicMaterial color={"green"}/>
        <Text position={[0,0,0]} color="black" fontSize={3.5}>
             Recommendations
            </Text>
    </mesh>
    <mesh ref ={purpleCircle} position={[40, 0, -8]}>
        <circleGeometry args={[5,32]}/>
        <meshBasicMaterial color={"purple"}/>
        <Text position={[0,0,0]} color="black" fontSize={3.5}>
        Liked Songs
        </Text>
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