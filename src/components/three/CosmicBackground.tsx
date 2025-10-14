import { useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useRef, useMemo } from 'react';

/**
 * CosmicBackground Component
 * Creates a particle-based star field with depth and movement
 * Performance-optimized with instanced rendering
 */
export function CosmicBackground() {
  const pointsRef = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  // Generate particle positions - creates a 3D star field
  const [positions, colors] = useMemo(() => {
    const particleCount = 5000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Cosmic color palette: blues, purples, teals
    const colorPalette = [
      new THREE.Color('#3b82f6'), // Blue
      new THREE.Color('#8b5cf6'), // Purple
      new THREE.Color('#06b6d4'), // Teal
      new THREE.Color('#a855f7'), // Light purple
      new THREE.Color('#0ea5e9'), // Sky blue
    ];

    for (let i = 0; i < particleCount; i++) {
      // Distribute particles in a sphere around the camera
      const radius = Math.random() * 25 + 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Random color from palette
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return [positions, colors];
  }, []);

  // Animate particles - gentle floating motion
  useFrame((state) => {
    if (!pointsRef.current) return;

    const time = state.clock.elapsedTime;

    // Subtle rotation for cosmic drift effect
    pointsRef.current.rotation.y = time * 0.05;
    pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.05;
  });

  return (
    <points ref={pointsRef} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        transparent
        vertexColors
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
