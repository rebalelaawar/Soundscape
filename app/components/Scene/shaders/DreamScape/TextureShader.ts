'use client'

import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';

const vert =  /*glsl*/`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const frag = /*glsl*/`
uniform sampler2D uTexture;
varying vec2 vUv;
void main() {
  gl_FragColor = texture2D(uTexture, vUv);
  // gl_FragColor = vec4(  0.2, gl_FragColor.gb, 0.3) ;
}
`;

const TextureShader = shaderMaterial({ 
  uTexture: new THREE.Texture( ),
  uDevicePixelRatio: window.devicePixelRatio,
}, vert, frag );

export default  TextureShader;
