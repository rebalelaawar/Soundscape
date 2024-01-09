

enum operations {
    "SetCanvas"
};

interface SetCanvas {
    operation: "SetCanvas";
    params: {
        canvas: OffscreenCanvas;
    }
}

interface RenderFrame {
    operation: "Render";
    params: {
        screenDims: { width: number; height: number; };
    }
};

interface RunAnimation {
    operation: "RunAnimation";
    params: null;
};

interface ScreenDims {
    height: number;
    width: number;
    dpi?: number;    
};

interface UpdateScreenDims {
    operation: "UpdateScreenDims";
    params: ScreenDims;
};



let canvas : OffscreenCanvas | undefined;
let ctx : OffscreenCanvasRenderingContext2D | null;
let animFrame = 0;
let resolutionScale = 1;
self.onmessage = ( e ) => {
    messageHandler( e.data );
};


const messageHandler = ({ operation, params } : SetCanvas | RenderFrame | RunAnimation | UpdateScreenDims ) => {

    
    switch ( operation ) {
        case "SetCanvas":
            console.log("setting canvas");
            console.log( params.canvas );
            canvas = params.canvas;
            ctx = canvas.getContext('2d');
            break;
        case "Render":
            renderFrame( params );    
            break;
        case "UpdateScreenDims": 

            break;
        case "RunAnimation":
            // requestAnimationFrame(  )

            break;
        default:
            console.log("GOT A MESSAGE WITH NO INSTRUCTIONS");
            break;
    }

};

let logNow = 0;
const renderFrame = ({ screenDims } : RenderFrame["params"]) => {      
      
    if( !canvas || !ctx ) return;
    const { width, height } = screenDims;
    const [ w, h ] = [ width * resolutionScale, height * resolutionScale ];
    canvas.width = w;
    canvas.height = h;
    if( logNow > 1 ) logNow = 0;
    else logNow+=0.001;    

    ctx.fillStyle = 'grey';
    ctx.strokeStyle = 'grey';
    ctx.lineWidth = 1;
    // ctx.moveTo( 0, h/2 );
    // ctx.lineTo( (w*logNow ), h/2 );
    // ctx.stroke( );
    produceDotGrid({ ctx, canvasWidth: w, canvasHeight: h });
};


interface StandardDrawFunction {
    ctx: OffscreenCanvasRenderingContext2D; 
    canvasWidth: number; 
    canvasHeight: number;
};

const produceDotGrid = ({ ctx, canvasWidth, canvasHeight } : StandardDrawFunction ) => {
    const spacing = 10; // Spacing between dots
    const radius = 0.5; // Radius of each dot
    const xGridCount = Math.floor(canvasWidth / spacing);
    const yGridCount = Math.floor(canvasHeight / spacing);

    // Calculate the starting point to center the grid
    const xOffset = (canvasWidth - (xGridCount * spacing)) / 2;
    const yOffset = (canvasHeight - (yGridCount * spacing)) / 2;

    for (let i = 0; i <= xGridCount; i++) {
        for (let j = 0; j <= yGridCount; j++) {
            let x = xOffset + i * spacing;
            let y = yOffset + j * spacing;

            ctx.beginPath(); // Begin a new path for each dot
            ctx.arc(x, y, radius, 0, 2 * Math.PI); // Draw a circle
            ctx.fill(); // Fill the dot
        }
    }
}


const produceGrid = ({ ctx, canvasWidth, canvasHeight } : StandardDrawFunction ) => {
    const spacing = 50; // Spacing between grid lines
    const xGridCount = Math.floor(canvasWidth / spacing);
    const yGridCount = Math.floor(canvasHeight / spacing);

    // Calculate the starting point to center the grid
    const xOffset = (canvasWidth - (xGridCount * spacing)) / 2;
    const yOffset = (canvasHeight - (yGridCount * spacing)) / 2;

    ctx.beginPath(); // Begin a new path for the grid

    // Draw vertical lines
    for (let i = 0; i <= xGridCount; i++) {
        let x = xOffset + i * spacing;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvasHeight);
    }

    // Draw horizontal lines
    for (let j = 0; j <= yGridCount; j++) {
        let y = yOffset + j * spacing;
        ctx.moveTo(0, y);
        ctx.lineTo(canvasWidth, y);
    }

    ctx.stroke(); // Stroke the grid lines
}
