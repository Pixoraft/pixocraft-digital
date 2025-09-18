import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Float, Text3D, MeshDistortMaterial, Stars, OrbitControls } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { Mesh, Color } from 'three';
import * as THREE from 'three';

function AnimatedSphere({ position, color, scale = 1 }: { 
  position: [number, number, number]; 
  color: string; 
  scale?: number; 
}) {
  const meshRef = useRef<Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.3}
      floatIntensity={0.6}
      floatingRange={[0, 0.5]}
    >
      <Sphere
        ref={meshRef}
        position={position}
        args={[0.8 * scale, 32, 32]}
      >
        <MeshDistortMaterial
          color={color}
          factor={3}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.8}
        />
      </Sphere>
    </Float>
  );
}

function FloatingText() {
  const textRef = useRef<Mesh>(null!);

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      textRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.2;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.2}
      floatIntensity={0.4}
      floatingRange={[0, 0.3]}
    >
      <mesh ref={textRef} position={[-1, 1, -2]}>
        <torusGeometry args={[0.5, 0.2, 16, 100]} />
        <MeshDistortMaterial
          color="#ff6b35"
          factor={0.5}
          speed={1}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const points = useRef<THREE.Points>(null!);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(1000 * 3);
    
    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#ff6b35"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

export default function ThreeDHeroElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ff6b35" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#4facfe" />
        
        <Stars
          radius={100}
          depth={50}
          count={1000}
          factor={4}
          saturation={0}
          fade
        />
        
        <AnimatedSphere position={[4, 2, -5]} color="#ff6b35" scale={0.8} />
        <AnimatedSphere position={[-5, -1, -3]} color="#4facfe" scale={1.2} />
        <AnimatedSphere position={[2, -3, -8]} color="#f093fb" scale={0.6} />
        <AnimatedSphere position={[-3, 3, -6]} color="#43e97b" scale={0.9} />
        
        <ParticleField />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}