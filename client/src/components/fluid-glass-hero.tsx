/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useFBO, MeshTransmissionMaterial } from '@react-three/drei';
import { easing } from 'maath';

interface FluidGlassHeroProps {
  text?: string;
  colorHex?: string;
}

export default function FluidGlassHero({ text = 'Pixocraft', colorHex = '#667eea' }: FluidGlassHeroProps) {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 20], fov: 15 }} gl={{ alpha: true, antialias: true }}>
        <GlassEffect colorHex={colorHex} text={text} />
      </Canvas>
    </div>
  );
}

function GlassEffect({ colorHex, text }: { colorHex: string; text: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const buffer = useFBO();
  const { viewport, pointer, camera, gl } = useThree();
  const [scene] = useState(() => new THREE.Scene());
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);
    
    // Smooth pointer following - reduced on mobile
    const dampFactor = isMobile ? 0.05 : 0.15;
    const movementScale = isMobile ? 0.3 : 0.5;
    const destX = pointer.x * v.width * movementScale;
    const destY = pointer.y * v.height * movementScale;
    
    easing.damp3(meshRef.current.position, [destX, destY, 15], dampFactor, delta);
    
    // Gentle rotation
    meshRef.current.rotation.x += delta * 0.1;
    meshRef.current.rotation.y += delta * 0.15;

    // Render scene to buffer
    gl.setRenderTarget(buffer);
    gl.render(scene, camera);
    gl.setRenderTarget(null);

    // Set background color
    gl.setClearColor(colorHex, 0);
  });

  // Responsive scale
  const scale = isMobile ? 0.08 : 0.12;

  return (
    <>
      {/* Background plane with buffer texture */}
      <mesh scale={[viewport.width, viewport.height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} transparent opacity={0.8} />
      </mesh>

      {/* Glass sphere */}
      <mesh ref={meshRef} scale={scale}>
        <torusKnotGeometry args={[10, 3, 128, 16]} />
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={1.2}
          thickness={3}
          anisotropy={0.05}
          chromaticAberration={0.15}
          transmission={1}
          roughness={0}
          metalness={0}
          color={colorHex}
          distortion={0.5}
          distortionScale={0.5}
          temporalDistortion={0.1}
        />
      </mesh>

      {/* Gradient orbs in background */}
      <GradientOrbs />
    </>
  );
}

function GradientOrbs() {
  return (
    <>
      <mesh position={[-3, 2, 10]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color="#667eea" transparent opacity={0.3} />
      </mesh>
      <mesh position={[3, -2, 8]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial color="#f093fb" transparent opacity={0.25} />
      </mesh>
      <mesh position={[0, 0, 6]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#4facfe" transparent opacity={0.3} />
      </mesh>
    </>
  );
}
