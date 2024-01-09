import { Canvas, useFrame } from "@react-three/fiber";
import { Ref, useRef } from "react";
import { TextureLoader, ShaderMaterial } from "three";
import SceneWorker from "./WorkerExport";
import CameraMain from "./ThreeJsComponents/CameraMain";

//@ts-ignore
const Circle = ({ position, radius, speed, albumArtUrl }) => {
  const circleRef = useRef();
  const circleDir = useRef(false);
  const texture = new TextureLoader().load(albumArtUrl);

  useFrame(() => {
    if (!circleDir.current) {
        //@ts-ignore
      circleRef.current.position.x += speed;
      //@ts-ignore
      if (circleRef.current.position.x > 80) {
        circleDir.current = true;
      }
    } else {
        //@ts-ignore
      circleRef.current.position.x -= speed;
      //@ts-ignore
      if (circleRef.current.position.x < -80) {
        circleDir.current = false;
      }
    }
  });
  return (
//@ts-ignore
    <mesh ref={circleRef} position={position}>
      <circleGeometry args={[radius, 32]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};


const Inside = () => {
  const circles = [
    { position: [22, 30, -11], radius: 10, speed: 0.4, albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273a2203fa0656cede30f879b97" },
    { position: [0, 15, -11], radius: 10, speed: 0.5, albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273af54621b48da9687dc86011b" },
    { position: [44, -20, -11], radius: 10, speed: 0.3, albumArtUrl: "https://i.scdn.co/image/ab67616d00001e02fbc4220f22bfdc35e0441154" },
    {position: [33, 0 , -11], radius: 10, speed: 0.2, albumArtUrl: "https://i.scdn.co/image/ab67616d00001e026e1c3f84246857c4bdbbd41f"},
    {position: [11, -45, -11], radius: 10, speed: 0.4, albumArtUrl: "https://i.scdn.co/image/ab67616d0000b2738ae8eb858bd66f2336e51512"},
    {position: [70, -65, -11], radius: 10, speed: 0.2, albumArtUrl: "https://i.scdn.co/image/ab67616d0000b2731e71b91eb6d9795d9823583f"},
    {position: [12, -80, -11], radius: 10, speed: 0.5, albumArtUrl: "https://i.scdn.co/image/ab67616d00001e0281173f55a729cd649b0c15ed"}

  ];
  return (
    <>
      {circles.map((circle, index) => (
          <Circle key={index} {...circle} />
          ))}
    </>
  );
};

const StudyScene = () => {
    const canvasRef = useRef<Ref<HTMLCanvasElement>>( );
  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: -1 }}>
      <Canvas ref={ canvasRef }>
        <CameraMain targetRef={ canvasRef } />
        {/* THIS IS THREE JS SPACE */}
        <Inside />
      </Canvas>
    </div>
  );
};

export default StudyScene;