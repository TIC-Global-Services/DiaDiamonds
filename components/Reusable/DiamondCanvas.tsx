"use client"

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment, Float, Center, MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Model() {
  const { scene } = useGLTF('/diamond.glb')
  const meshRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <Center top>
      <group ref={meshRef}>
        {scene.children.map((child, index) => {
          if (child instanceof THREE.Mesh) {
            return (
              <mesh key={index} geometry={child.geometry}>
                <MeshTransmissionMaterial
                  backside
                  samples={8}
                  thickness={1.5}
                  chromaticAberration={0.2}
                  anisotropy={0.3}
                  distortion={0}
                  distortionScale={0}
                  temporalDistortion={0}
                  clearcoat={1}
                  attenuationDistance={1}
                  attenuationColor="#ffffff"
                  color="#ffffff"
                  ior={2.4}
                />
              </mesh>
            )
          }
          return null
        })}
      </group>
    </Center>
  )
}

export default function DiamondCanvas() {
  return (
    <div className="w-12 h-12 flex items-center justify-center">
      <Canvas 
        camera={{ position: [0, 0, 5.5], fov: 18 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1} />
        <pointLight position={[5, 5, 5]} intensity={2.5} />
        <pointLight position={[-5, -5, -5]} intensity={1.5} />
        <Float 
          speed={1.5} 
          rotationIntensity={0.3} 
          floatIntensity={0.2}
        >
          <Model />
        </Float>
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}

useGLTF.preload('/diamond.glb')
