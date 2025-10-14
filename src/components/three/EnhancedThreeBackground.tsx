import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';
import { CosmicBackground } from './CosmicBackground';
import { FloatingGeometry } from './FloatingGeometry';
import { NebulaEffect } from './NebulaEffect';

/**
 * EnhancedThreeBackground Component
 * Main container for all 3D background effects
 * Implements performance optimizations:
 * - Frame rate limiting
 * - Conditional rendering based on device capability
 * - Suspense boundaries for loading states
 */
export function EnhancedThreeBackground() {
  const [isLowPower, setIsLowPower] = useState(false);

  useEffect(() => {
    // Detect low-power devices (mobile, tablets)
    const checkDevice = () => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      const hasLowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;
      setIsLowPower(isMobile || hasLowMemory);
    };

    checkDevice();
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ opacity: 0.6 }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, isLowPower ? 1.5 : 2]} // Limit pixel ratio on low-power devices
        performance={{ min: 0.5 }} // Automatic performance degradation
      >
        <Suspense fallback={null}>
          {/* Lighting setup for cosmic atmosphere */}
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
          <pointLight position={[-10, -10, -5]} intensity={0.8} color="#8b5cf6" />
          <pointLight position={[0, -10, 5]} intensity={0.5} color="#06b6d4" />

          {/* Cosmic particle field */}
          <CosmicBackground />

          {/* Floating geometric shapes - only on higher-power devices */}
          {!isLowPower && <FloatingGeometry />}

          {/* Nebula fog effect */}
          <NebulaEffect />
        </Suspense>
      </Canvas>
    </div>
  );
}
