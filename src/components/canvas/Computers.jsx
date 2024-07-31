import {Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = () => {
  const computer = useGLTF('./retro_computer/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={2}
      groundColor="black" />
      <pointLight intensity={1}/>
      <primitive 
      object={computer.scene}
      scale={0.1}
      position={[0,-3.25, -1.5]}/>
    </mesh>
  )
}
const ComputersCanvas = () =>{
  return(
    <Canvas
      frameloop="demand"
      shadows
      camera={{position: [20, 3, 5], fov: 25}}
      gl={{preserveDrawingBuffer:true}}
      >
    <Suspense fallback={<CanvasLoader/>}>
    <OrbitControls 
      enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}/>
    <Computers />
    </Suspense>
    <Preload all />
    </Canvas>
  )
}
export default ComputersCanvas;