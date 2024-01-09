//@ts-nocheck
import * as d3 from 'd3';
import { CameraPositon } from '../../WebGLMap';
import { Simulation } from 'd3';



const fakePts = [
  [ 5500, 9500 ],
  [ 5500, 10000 ],
  [ 4500, 12000 ],
  [ 15000, 0 ],
  [ 3500, -5000 ],
  [ -10, 13000 ],
  [ 9000, 3000 ],
  [ -20000, -20000 ],
  [ -12000, -18000 ],
];

let cameraDetails = {
  extents: { xMin: 0, xMax: 0, yMin: 0, yMax: 0 },
  screenSize: { width: 0, height: 0 },
  size: { w: 0, h: 0 },
  pixelUnitRatio: 0
};

const analyzeView = ( extents : CameraPositon["extents"] ) => {
  const { xMin, xMax, yMin, yMax } = extents;
  let inView = [ ];
  let nodes = [ ];
  let links = [ ];
  fakePts.forEach(( pt, i ) => {
    if( pt[0] > xMin && pt[0] < xMax && pt[1] > yMin && pt[1] < yMax ) {
      inView.push({ id: i, pt });
      nodes.push({ id: `A${i}`, isAnchor: true, fx: pt[0], fy: pt[1] })
      nodes.push({ id: `N${i}`, anchorID: `A${i}`, isAnchor: false,  });
      links.push({ id: `A${i}<->N${i}`, source: `A${i}`, target: `N${i}` });
    };
  });

  return { nodes, links };
};

interface ViewUpdate extends CameraPositon {
  type: "ViewUpdate"
};


const cachePrevious = {
  AnnotUpdate: null
};

let nodes = [ ];
let links = [ ];


let simSettings = { 
  xForce: { value: 0.12, min: 0, max: 500 },
  charge: { value: 20000, min: 0, max: 500 },
  linkLength: { value: 80, min: 0, max: 500 },
  dMax: { value: 500, min: 0, max: 500 }
};


const runForces = ( sim ) => {
  
  const { xForce, charge, linkLength, dMax } = simSettings;
  
  const { pixelUnitRatio } = cameraDetails;
  sim.nodes( nodes )
  .force( 'link', d3.forceLink( links ).id( d => d.id ).distance( link => pixelUnitRatio * linkLength.value ))
  .force( 
    'charge', 
    d3.forceManyBody( )
      .strength( d => {
        // if( d.isAnchor ) return 0;
        return pixelUnitRatio * -charge.value 
      })
      .distanceMax( pixelUnitRatio * dMax.value )
  )
  // .force( 'center', d3.forceCenter( forceCenter[0], forceCenter[1] ))
  .force(
    'forceX', 
    d3.forceX( )
      .strength( node => node.isAnchor ? 0 : xForce.value * -1 )
  )
  // .force('forceY', d3.forceY().strength(0.1))
  sim.alpha(0.1).restart( );

};

const ptGeoToPx = ( px : number, py : number, round = true ) => {
  const { extents, size, screenSize, pixelUnitRatio } = cameraDetails;
  const { xMin, xMax, yMin, yMax } = extents;
  let x = ( Math.abs( xMin - px )/size.w ) * screenSize.width;
  let y = screenSize.height - (( Math.abs( yMin - py )/size.h ) * screenSize.height);
  if( round ) {
    x = Math.round( x );
    y = Math.round( y );
  };
  return [ x, y ];
};

const sim = d3.forceSimulation( nodes ).on( 'tick', ( ) => {
  //keep in bounds
  const { extents, size, screenSize, pixelUnitRatio } = cameraDetails;
  const { xMin, xMax, yMin, yMax } = extents;

  let anchors = { };
  let annots = { };

  nodes.forEach(node => {
    if( node.isAnchor ) {
      anchors[node.id] = node;
      return;
    };

    annots[node.id] = node;
    // if( node.x - (pixelUnitRatio * 90) < xMin ) {
    //   node.x += 1;
    // }
    node.x = Math.max( extents.xMin + (pixelUnitRatio * 90), Math.min( extents.xMax - (pixelUnitRatio * 90), node.x ));
    node.y = Math.max( extents.yMin + (pixelUnitRatio * 30), Math.min( extents.yMax - (pixelUnitRatio * 30), node.y ));
  });
    
  postMessage({ type: "tick", nodes: sim.nodes( ) });


  const anchorKeys = Object.keys( anchors );

});



runForces( sim );


//last sent asset call
const lastAssetCall = {

};

const assetManager = ({ extents }) => {
  // console.log("updating view", extents );
  

};


onmessage = ({ data }) => {
    
  const { type } = data;
  
  switch ( type ) {
    case "ViewUpdate":      
      const { extents, viewBoxDims, pixelSize, forceCenter, screenSize } = data;
      const pixelRatio = viewBoxDims.w/pixelSize.w;
      cameraDetails.extents = extents;
      cameraDetails.pixelUnitRatio = pixelRatio;
      cameraDetails.size = viewBoxDims;
      cameraDetails.screenSize = screenSize;
      assetManager({ extents });
      
      let newNodeList = analyzeView( extents );

      nodes = nodes.filter(node => newNodeList.nodes.some( newNode => newNode.id === node.id ));
      newNodeList.nodes.forEach( newNode => {
        if (!nodes.some( node => node.id === newNode.id )) nodes.push( newNode );
      });

      links = links.filter( link => newNodeList.links.some( newLink => newLink.id === link.id));
      
      newNodeList.links.forEach( newLink => {
        if ( !links.some( link => link.id === newLink.id )) links.push( newLink );
      });

      runForces( sim );
      
      TileManager( );
      
      break;
    case "forceUpdate":
      simSettings = data.settings;
      runForces( sim );

      break;
    
    default: console.warn( "message recieved without recognized type" );
  };
};

//to fix type error
export { };
  