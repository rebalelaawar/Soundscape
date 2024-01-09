import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';

const vert = /*glsl*/`varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

const frag = /*glsl*/`uniform sampler2D uTexture;
varying vec2 vUv;
void main() {
  vec2 uv = vUv;
  vec2 centeredUv = uv - 0.5;
  float factor = 0.2 + pow(length(centeredUv), 2.0) * 0.5;
  vec2 bubbledUv = uv + centeredUv * factor;
  gl_FragColor = texture2D(uTexture, bubbledUv);
}`;


const BubbleShader = shaderMaterial({ uTexture: new THREE.Texture() }, vert, frag );

export default  BubbleShader;
