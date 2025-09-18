import { Canvas } from '@react-three/fiber';
import { Float, Text3D, MeshWobbleMaterial, useTexture } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { 
  SiFacebook, 
  SiInstagram, 
  SiSnapchat, 
  SiYoutube, 
  SiLinkedin,
  SiWhatsapp
} from "react-icons/si";

function FloatingSocialIcon({ 
  position, 
  color, 
  icon: IconComponent, 
  onClick 
}: { 
  position: [number, number, number]; 
  color: string;
  icon: any;
  onClick: () => void;
}) {
  const meshRef = useRef<Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1;
      meshRef.current.scale.setScalar(hovered ? 1.2 : 1);
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      floatingRange={[0, 0.2]}
    >
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={onClick}
        scale={hovered ? 1.2 : 1}
      >
        <sphereGeometry args={[0.5, 32, 32]} />
        <MeshWobbleMaterial
          color={color}
          factor={hovered ? 0.6 : 0.1}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

export default function ThreeDSocialIcons() {
  const socialLinks = [
    { icon: SiFacebook, color: '#1877f2', url: 'https://facebook.com', position: [-2, 0, 0] as [number, number, number] },
    { icon: SiInstagram, color: '#e4405f', url: 'https://instagram.com', position: [-1, 0, 0] as [number, number, number] },
    { icon: SiSnapchat, color: '#fffc00', url: 'https://snapchat.com', position: [0, 0, 0] as [number, number, number] },
    { icon: SiYoutube, color: '#ff0000', url: 'https://youtube.com', position: [1, 0, 0] as [number, number, number] },
    { icon: SiLinkedin, color: '#0077b5', url: 'https://linkedin.com', position: [2, 0, 0] as [number, number, number] },
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="h-64 w-full glass-card rounded-2xl overflow-hidden">
      <div className="text-center mb-4 pt-4">
        <h4 className="text-xl font-semibold gradient-text">Follow Us on Social Media</h4>
        <p className="text-muted-foreground text-sm">Interactive 3D social icons</p>
      </div>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[0, 5, 5]} intensity={0.8} />
        
        {socialLinks.map((social, index) => (
          <FloatingSocialIcon
            key={index}
            position={social.position}
            color={social.color}
            icon={social.icon}
            onClick={() => handleSocialClick(social.url)}
          />
        ))}
      </Canvas>
    </div>
  );
}