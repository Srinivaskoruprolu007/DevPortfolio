import { useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

/**
 * NebulaEffect Component
 * Creates volumetric fog-like nebula clouds
 * Uses layered transparent meshes for depth
 */
export function NebulaEffect() {
  const { viewport } = useThree();
  const nebulaRef = useRef<THREE.Group>(null);

  // Create multiple nebula cloud layers
  const nebulaClouds = useMemo(() => {
    const clouds = [];
    for (let i = 0; i < 3; i++) {
      clouds.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 10,
          -15 - i * 5,
        ] as [number, number, number],
        scale: 3 + Math.random() * 2,
        color: i === 0 ? '#3b82f6' : i === 1 ? '#8b5cf6' : '#06b6d4',
      });
    }
    return clouds;
  }, []);

  // Animate nebula clouds - slow drift
  useFrame((state) => {
    if (!nebulaRef.current) return;
    const time = state.clock.elapsedTime;
    nebulaRef.current.rotation.z = time * 0.02;
  });

  return (
    <group ref={nebulaRef}>
      {nebulaClouds.map((cloud, index) => (
        <mesh key={index} position={cloud.position} scale={cloud.scale}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial
            color={cloud.color}
            transparent
            opacity={0.15}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}
