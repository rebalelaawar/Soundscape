

let SceneWorker;
try { SceneWorker =  new Worker( new URL( 'SceneWorker.ts', import.meta.url )); } 
catch ( error ) { console.log( error ); };

export default SceneWorker;