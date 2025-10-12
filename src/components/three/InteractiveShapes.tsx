import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

export function InteractiveShapes() {
  const torusRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Rotate shapes
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.3;
      torusRef.current.rotation.y = time * 0.2;
      torusRef.current.position.y = Math.sin(time * 0.5) * 0.5;
    }

    if (sphereRef.current) {
      sphereRef.current.rotation.y = time * 0.4;
      sphereRef.current.position.x = Math.cos(time * 0.3) * 2;
      sphereRef.current.position.y = Math.sin(time * 0.3) * 1;
    }

    if (boxRef.current) {
      boxRef.current.rotation.x = time * 0.2;
      boxRef.current.rotation.z = time * 0.3;
      boxRef.current.position.x = Math.sin(time * 0.4) * -2;
      boxRef.current.position.y = Math.cos(time * 0.4) * 0.5;
    }
  });

  return (
    <group>
      {/* Torus */}
      <mesh
        ref={torusRef}
        position={[2, 0, -2]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <torusGeometry args={[0.7, 0.2, 16, 100]} />
        <meshStandardMaterial
          color={hovered ? "#60a5fa" : "#3b82f6"}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Sphere */}
      <mesh ref={sphereRef} position={[-2, 0, -3]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#a855f7"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Box */}
      <mesh ref={boxRef} position={[0, -1, -2]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial
          color="#22c55e"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>

      {/* Additional ambient shapes */}
      <mesh position={[3, 2, -4]} rotation={[0, 0, Math.PI / 4]}>
        <octahedronGeometry args={[0.4]} />
        <meshStandardMaterial
          color="#f59e0b"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      <mesh position={[-3, -1.5, -3]}>
        <icosahedronGeometry args={[0.6]} />
        <meshStandardMaterial
          color="#ec4899"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
    </group>
  );
}
