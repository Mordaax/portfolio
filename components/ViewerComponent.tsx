import React, { Suspense, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Backdrop, ContactShadows, Environment, Lightformer, OrbitControls, Stage } from '@react-three/drei'

import { PerspectiveCamera } from 'three';
import Model from './Model';




export default function Viewer() {
  const [filenames, setfilename] = useState("gameboy.glb")
  const ref = useRef()
  let camera = new PerspectiveCamera(90, 10, 0.1, 2000);
  let [x, y, z] = [10, 100, 20];

  camera.lookAt(3,0,0);
  return (
    <>

      <div style={{width:'100%', height:'440px', backgroundColor: 'transparent', margin: 'auto' }} >
        <color attach="background" args={['#15151a']} />
        <Canvas shadows dpr={[1, 2]} camera={camera}>
          <directionalLight position={[-1, 0, -5]} intensity={1} color="red" />
          <directionalLight position={[-1, -2, -5]} intensity={0.2} color="#0c8cbf" />
          <Suspense fallback={null}>
            <ambientLight intensity={0.2} />
            <ContactShadows opacity={1} scale={10} blur={1} far={10} resolution={256} color="#000000" />
            <Stage /* controls={ref} */ preset="rembrandt" intensity={1} environment="city">

              <Model file="model.glb" />

            </Stage>
          </Suspense>
          <OrbitControls /* ref={ref}  */ target={[0,3,0]} autoRotate enablePan={false} minDistance={2} maxDistance={4} />
          
        </Canvas>
      </div>
    
    </>

  )
}