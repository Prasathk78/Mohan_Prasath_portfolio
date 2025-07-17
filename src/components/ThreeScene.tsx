
import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} args={[1, 100, 200]}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.1}
        metalness={0.8}
      />
    </Sphere>
  );
};

export const ThreeScene = () => {
  return (
    <Canvas className="absolute inset-0 z-0">
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <AnimatedSphere position={[-2, 0, 0]} color="#8B5CF6" />
      <AnimatedSphere position={[2, 0, 0]} color="#EC4899" />
      <AnimatedSphere position={[0, 2, 0]} color="#06B6D4" />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
};
