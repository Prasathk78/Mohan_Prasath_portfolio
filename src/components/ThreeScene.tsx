
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { ErrorBoundary } from 'react-error-boundary';

function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#8B5CF6"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.4}
      />
    </Sphere>
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
        <OrbitControls enableZoom={false} />
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
