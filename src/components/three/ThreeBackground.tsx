import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { AnimatedBackground } from "./AnimatedBackground";
import { InteractiveShapes } from "./InteractiveShapes";

export function ThreeBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ opacity: 0.4 }}
      aria-hidden="true"
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight
            position={[-10, -10, -5]}
            intensity={0.5}
            color="#a855f7"
          />
          <AnimatedBackground />
          <InteractiveShapes />
        </Suspense>
      </Canvas>
    </div>
  );
}
