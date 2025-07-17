
import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ErrorBoundary } from 'react-error-boundary';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color="#8B5CF6" 
        roughness={0.4}
        metalness={0.1}
      />
    </mesh>
  );
}

function ErrorFallback({ error }: { error: Error }) {
  console.error('ThreeScene error:', error);
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-white/60">3D Scene Loading...</div>
    </div>
  );
}

function CanvasWrapper() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      style={{ background: 'transparent' }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedSphere />
        
      </Suspense>
    </Canvas>
  );
}

export const ThreeScene = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <CanvasWrapper />
    </ErrorBoundary>
  );
};
