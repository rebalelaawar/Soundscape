import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useState, useRef } from "react";
import * as THREE from 'three';
import SceneWorker from "../WorkerExport";

export interface CameraContext {
    viewBoxDims: { w: number; h: number; };
    extents: { xMin: number; yMin: number; xMax: number; yMax: number; size: number; };
};

const calcExtents = ({ camera, size }) : CameraContext => {
    if( !camera || !size ) return;
    const { zoom, position } = camera;
    const viewBoxDims = { w: size.width/zoom, h: size.height/zoom };
    
    const [ halfW, halfH ] = [ ( viewBoxDims.w / 2), ( viewBoxDims.h / 2) ]
    const extents = { xMin: position.x - halfW, xMax: position.x + halfW, yMin: position.y - halfH, yMax: position.y + halfH, size: Math.hypot( viewBoxDims.w, viewBoxDims.h ) };
    return { viewBoxDims, extents };
};

const CameraMain = ({ targetRef } : { targetRef: React.RefObject<HTMLDivElement> }) => {

    const { scene, camera, size, mouse } = useThree( );

    //mouse
    const [ raycaster ] = useState(( ) => new THREE.Raycaster( ));
    const [ inCursor, setCursorHover ] = useState([ ]);
    const handleMouse = ( ) => {
        raycaster.setFromCamera( mouse, camera );
        const intersects = raycaster.intersectObjects(scene.children);        
    };

    const controllerRef = useRef( null );
    
    //Trigger Refs
    const camPosTrigger = useRef({ x: 0, y: 0 });
    const sizeTrigger = useRef({ width: 0, height: 0, ratio: 0 }); 
    const zoomLevelTriggerUpdate = useRef( 0 );
    
    const viewBox = useRef({ ratio: 1, dimensions: [ 0, 0 ], extents: { xMin: 0, yMin: 0, xMax: 0, yMax: 0 }});

    const findConstrainedDimension = ( r1 : number, r2 : number ) => r1 > r2 ? 'width' : 'height';
    
    const resetView = (  ) => {
        const camera = controllerRef.current.object;
        const { clientWidth: pxW, clientHeight: pxH } = controllerRef.current.domElement;
        const ratio = pxW / pxH;
        [ camera.position.x, camera.position.y,controllerRef.current.target.x, controllerRef.current.target.y ] = [ 0, 0, 0, 0 ];
        controllerRef.current.enableDamping = false;
        controllerRef.current.update( );
    };

    const onResize = ( ) => {        
        const { lastUserView } = camera.userData;
        if( !lastUserView ) { updater( ); return; };
        const { clientWidth: pxW, clientHeight: pxH } = controllerRef.current.domElement;
        const constrainedEdge = findConstrainedDimension( lastUserView.ratio, sizeTrigger.current.ratio );
        camera.zoom = constrainedEdge === "width" ? pxW / lastUserView.dimensions[0] : pxH / lastUserView.dimensions[1];
        updater( );
    };

    const updater = ( ) => {
        //set triggers here and call after resize detection
        const { position, zoom } = camera;

        zoomLevelTriggerUpdate.current = zoom;
        camPosTrigger.current = { ...position };
        
        const newRatio = size.width / size.height;
        
        sizeTrigger.current = { ...size, ratio: newRatio };
        const camData = calcExtents({ camera, size });
        const { extents, viewBoxDims } = camData;
        
        viewBox.current = { ratio: viewBoxDims.w / viewBoxDims.h, dimensions : [ viewBoxDims.w, viewBoxDims.h ], extents };
        // const camSizeToFrameRatio = camData.extents.size / sceneFrame.bounds.size;            
        // const camSizeInMiles = camSizeToFrameRatio * sceneFrame.imperial.miles.size;
        
        
        //should run after function reading ref values
        
        SceneWorker.postMessage({ type: "ViewUpdate", extents, screenSize: size, forceCenter: [ position.x, position.y ], viewBoxDims, pixelSize: { w: size.width, h: size.height } });

    };
    

    useFrame(( ) => {
        
        // handleMouse( );
    
        
        controllerRef.current.enableDamping = true;
        const { position, zoom } = camera;
        const { width, height } = size;
        const { x: camXHist, y: camYHist } = camPosTrigger.current;
        if( sizeTrigger.current.width !== width || sizeTrigger.current.height !== height ) onResize( );
        else if ( zoom !== zoomLevelTriggerUpdate.current || camXHist !== position.x || camYHist !== position.y ) { 
            updater( );
            camera.userData.lastUserView = viewBox.current;
        };            
    });

    useEffect(( ) => { 
        if( controllerRef.current ) resetView( );
    }, [ controllerRef.current ]);

    const keyListener = ({ key } : KeyboardEvent ) => {
        switch ( key ) {
            case "Escape":
                resetView( );
                break;
        
            default:
                break;
        }
    };

    useEffect(( ) => {

        const handleMessage = ( e ) => {
            switch ( e.type ) {
                case "": break;
                default: break;
            };
        };

        SceneWorker.addEventListener( 'message', handleMessage );
        window.addEventListener( "keydown", keyListener );

        return ( ) => {
            window.removeEventListener( 'keydown', keyListener );
            SceneWorker.removeEventListener('message', handleMessage);
        };
    }, [ ]);

    return <OrbitControls 
        ref={ controllerRef }
        enabled
        enableDamping={ true } 
        dampingFactor={0.09} 
        enableRotate={ false } 
        enablePan={ true } 
        enableZoom={ true } 
        zoomToCursor
        domElement={ targetRef.current }
        mouseButtons={{ LEFT:THREE.MOUSE.PAN }} 
        touches={{ ONE: THREE.TOUCH.PAN, TWO: THREE.TOUCH.DOLLY_ROTATE }}
    />;
};

export default CameraMain;