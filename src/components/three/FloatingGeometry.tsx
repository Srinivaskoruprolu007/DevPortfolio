import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

/**
 * FloatingGeometry Component
 * Animated 3D shapes that float and distort
 * Creates depth and visual interest
 */
export function FloatingGeometry() {
  const torusRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const dodecahedronRef = useRef<THREE.Mesh>(null);

  // Animate shapes with smooth floating motion
  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.2;
      torusRef.current.rotation.y = time * 0.3;
      torusRef.current.position.y = Math.sin(time * 0.5) * 0.5;
    }

    if (sphereRef.current) {
      sphereRef.current.rotation.x = time * 0.15;
      sphereRef.current.rotation.z = time * 0.25;
      sphereRef.current.position.y = Math.cos(time * 0.4) * 0.8;
    }

    if (dodecahedronRef.current) {
      dodecahedronRef.current.rotation.x = time * 0.1;
      dodecahedronRef.current.rotation.y = time * 0.2;
      dodecahedronRef.current.position.y = Math.sin(time * 0.6) * 0.6;
    }
  });

  return (
    <>
      {/* Torus - Purple glow */}
      <mesh ref={torusRef} position={[-4, 0, -8]}>
        <torusGeometry args={[1, 0.4, 16, 100]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.3}
          speed={1.5}
          transparent
          opacity={0.6}
          emissive="#8b5cf6"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Sphere - Blue glow */}
      <mesh ref={sphereRef} position={[4, 1, -10]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.4}
          speed={2}
          transparent
          opacity={0.5}
          emissive="#3b82f6"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Dodecahedron - Teal glow */}
      <mesh ref={dodecahedronRef} position={[0, -2, -6]}>
        <dodecahedronGeometry args={[1.2, 0]} />
        <MeshDistortMaterial
          color="#06b6d4"
          attach="material"
          distort={0.2}
          speed={1}
          transparent
          opacity={0.4}
          emissive="#06b6d4"
          emissiveIntensity={0.4}
        />
      </mesh>
    </>
  );
}
