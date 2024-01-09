'use client'

import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';


export const maxPoints = 29;

const vert = /*glsl*/`

uniform vec4 uExtents; 
uniform vec2 uExtentsDims;
uniform vec2 uScreenSize; // Logical screen size in pixels
uniform float uDevicePixelRatio; // Device pixel ratio
uniform vec2 uPoints[${maxPoints}];
uniform int uMaxPoints;


out vec2 bubblePositions[${maxPoints}]; //points in screen space
out vec2 listenPoint;
out float pointSizes;

void frustumCoords( inout vec2 pt );
void frustumCoords( inout vec2 pt ) {
    pt.x = ( pt.x - uExtents.x ) / ( uExtents.y - uExtents.x );
    pt.y = ( pt.y - uExtents.z ) / ( uExtents.w - uExtents.z );
}



void main() {

    //calc constants
    vec2 adjustedScreenSize = uScreenSize * uDevicePixelRatio;
    listenPoint = vec2( adjustedScreenSize.x / 2.0, adjustedScreenSize.y / 2.0 );
    pointSizes = ( 10.0 / uExtentsDims.x ) * adjustedScreenSize.x;
    for ( int i = 0; i < uMaxPoints; i++ ) {
        if( uPoints[i] != vec2( -10000.0, -10000.0 )) {
            vec2 normalizedCoords = uPoints[i];
            // Map the point from scene space to normalized [0, 1] range
            frustumCoords( normalizedCoords );
            // Convert from normalized [0, 1] range to actual screen space (pixel coordinates)
            bubblePositions[i] = normalizedCoords * adjustedScreenSize;    
        } else {
            bubblePositions[i] = vec2( -10000.0, -10000.0 );
        }
    }

    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;

const frag = /*glsl*/`

precision highp float;
uniform vec3 uMainColor;
uniform float uTime;
uniform float uPointSize;
uniform int uMaxPoints;
uniform vec4 uExtents; // extents: [xMin, xMax, yMin, yMax]
uniform vec2 uScreenSize; // Logical screen size in pixels
uniform float uDevicePixelRatio; // Device pixel ratio
uniform float uSoundRefDistance;
in vec2 bubblePositions[${maxPoints}];
in vec2 listenPoint; 
in float pointSizes; 


// Function to calculate the distance from a point to a line segment
float distanceToLineSegment( vec2 point, vec2 a, vec2 b ) {
    vec2 pa = point - a, ba = b - a;
    float h = clamp( dot( pa, ba ) / dot( ba, ba ), 0.0, 1.0 );
    return length( pa - ba * h );
}

float exponentialTapering(vec2 point, vec2 a, vec2 b, float k) {
    // Calculate the normalized position along the line segment
    vec2 ba = b - a;
    float h = clamp(dot(point - a, ba) / dot(ba, ba), 0.0, 1.0);

    // Get the distance to the line segment using the original function
    float distance = distanceToLineSegment(point, a, b);

    // Apply the exponential tapering based on the position along the line
    float taperFactor = exp(-k * h);

    // Return the tapered distance
    return distance * taperFactor;
}


float afunc( ) {
    return 1.0;
}

//https://stackoverflow.com/questions/61574913/pass-data-between-shader-programs

void main( ) {
    float oscillatingValue = ( sin( uTime ) + 1.0 ) / 2.0;
    float minDistance = 100000.00; // Start with a large distance

    vec2 closestBubble;
    float alpha = 0.0;
    float earRadius = uPointSize + 250.00;

    float earDistance;
    float earVecDistance;
    float pointSizeWithOutline = pointSizes + ( 2.0 * uDevicePixelRatio );
    float pointGradientEnd = uPointSize + ((( uPointSize * 1.2 * ( oscillatingValue + 1.5 ))) );

    vec3 testColor = vec3( 0.4, 0.7, 0.3 );
    // vec3( 0.4, 0.7, 0.3 )

    // Adjust screen size for device pixel ratio
    vec2 adjustedScreenSize = uScreenSize * uDevicePixelRatio;

    //Frag Color Step 1
    //Song bubble point proxy rendering
    for ( int i = 0; i < uMaxPoints; i++ ) {
        float distance = length( gl_FragCoord.xy - bubblePositions[i] );
        if ( distance < minDistance ) {
            minDistance = distance;
            closestBubble = bubblePositions[i];
        }
    }

    // alpha = ( 1.0 - smoothstep( pointSizes, pointSizes + (2.0 / oscillatingValue ), minDistance ));

    if( minDistance < pointSizeWithOutline ) alpha = 1.0;
    else alpha = ( 1.0 - smoothstep( -1.0 * uPointSize, pointGradientEnd, minDistance ));

    
    gl_FragColor = vec4( testColor, alpha );
    
    
    //Frag Color Step 2
    /*
    float distanceToEar = length( gl_FragCoord.xy - listenPoint );
    if( distanceToEar < earRadius + pointGradientEnd ) {
        float earProxyRatio = 1.0 - ( distanceToEar / earRadius );
       
        gl_FragColor = vec4( mix( uMainColor, testColor, 1.0 - earProxyRatio ), alpha );

        //cones
        for ( int i = 0; i < uMaxPoints && bubblePositions[i] != vec2( -10000.0, -10000.0 ); i++ ) {
            closestBubble = bubblePositions[i]; //temp
            float bubbleDistanceToEar = length( listenPoint - closestBubble.xy );

            if( distanceToEar < bubbleDistanceToEar ) {
                
            }
            // earVecDistance = distanceToLineSegment( gl_FragCoord.xy, listenPoint, closestBubble );
            earVecDistance = exponentialTapering( gl_FragCoord.xy, listenPoint, closestBubble, 1.0 );


            // if( earVecDistance < 1.00 ) alpha = 1.0; //helper lines
            if( earVecDistance < (distanceToEar*pointSizeWithOutline)/earRadius && distanceToEar < bubbleDistanceToEar ) {
                float mixed = mix( alpha, 1.0, earProxyRatio + alpha );
                if( mixed > alpha )  alpha = mixed;
                // gl_FragColor = vec4( testColor, alpha );
                gl_FragColor = vec4( gl_FragColor.xyx, alpha );
            }        
        }
    };
    */

}
`;


export const DreamShader = shaderMaterial({ 
    uMainColor: new THREE.Vector3( 0, 0, 0 ),
    uPoints: new Array(maxPoints).fill(new THREE.Vector2( -10000, -10000 )), 
    uPointSize: 100.0, 
    uSoundRefDistance: 1.0,
    uMaxPoints: maxPoints, 
    uExtents: new THREE.Vector4( 0,  0,  0,  0 ),
    uExtentsDims: new THREE.Vector2( 0, 0 ),
    uScreenSize: new THREE.Vector2( 0, 0 ),
    uDevicePixelRatio: 1,
    uTime: 0
}, vert, frag );

export default  DreamShader;

