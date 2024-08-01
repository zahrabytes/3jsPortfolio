import React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF('./typewriter/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={20}
      groundColor="black" />
      <pointLight intensity={20}/>
      {/* Front light */}
      <pointLight position={[0, 5, 10]} intensity={20} />
      
      {/* Left side light */}
      <pointLight position={[-10, 5, 5]} intensity={20} />
      
      {/* Right side light */}
      <pointLight position={[10, 5, 5]} intensity={20} />
      
      {/* Top light */}
      <pointLight position={[0, 10, 0]} intensity={20} />
      <spotLight
      position={[-20,50,10]} 
      angle={0.12}
      penumbra={1}
      intensity={10}/>
    <primitive
    object={earth.scene}
    scale={8}
    position-y={0}
    rotation-x={1}  // Tilt downwards
    rotation-y={-0.2} // Rotate slightly to the left
    rotation-z={0.1}  // Optional: adds a slight diagonal tilt
    />
    </mesh>
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
    shadows
    frameloop='demand'
    gl={{preserveDrawingBuffer: true}}
    camera={{
      fov:45, 
      near: 0.1,
      far: 200,
      position: [-2,-7,6]}}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}/>
        <Earth/>
      </Suspense>

    </Canvas>
  )
}

export default EarthCanvas;