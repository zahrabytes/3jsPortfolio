import React from 'react';
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import CanvasLoader from "../Loader";

const Earth = ({isMobile}) => {
  const earth = useGLTF('./gameboy/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={2}
      groundColor="black" />
      <pointLight intensity={2}/>
      {/* Front light */}
      <pointLight position={[0, 5, 10]} intensity={2} />
      
      <spotLight
      position={[-20,50,10]} 
      angle={0.12}
      penumbra={1}
      intensity={10}/>
    <primitive
    object={earth.scene}
    scale={isMobile ? 30 : 30}
    
    position={[0, 0, 0]}
    rotation={[0, 0, 0.1]}
    />
    </mesh>
  )
}

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])
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
          autoRotateSpeed={-1.5} 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}/>
        <Earth isMobile={isMobile}/>
      </Suspense>

    </Canvas>
  )
}

export default EarthCanvas;