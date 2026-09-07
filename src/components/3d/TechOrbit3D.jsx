import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const techNodes = [
  { name: 'Laravel', color: '#ff2d20', pos: [1.8, 0.4, 0.5] },
  { name: 'React.js', color: '#00f5d4', pos: [-1.6, 1.0, 0.2] },
  { name: 'Vue.js', color: '#42b883', pos: [0.3, -1.7, 0.8] },
  { name: 'Next.js', color: '#ffffff', pos: [-1.2, -1.1, -0.6] },
  { name: 'SAP ABAP', color: '#ffbe0b', pos: [1.2, 1.4, -0.5] },
  { name: 'PHP', color: '#7b2cbf', pos: [-0.4, 1.8, 0.6] },
  { name: 'Tailwind', color: '#38bdf8', pos: [0.0, -0.2, 1.9] },
  { name: 'JavaScript', color: '#f7df1e', pos: [-1.8, 0.0, 1.1] }
];

function OrbitingSphere() {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Wireframe Icosahedron */}
      <mesh scale={1.2}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#6366f1"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Internal Pulsing Core */}
      <mesh scale={0.6}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#0284c7"
          emissive="#0284c7"
          emissiveIntensity={0.5}
          wireframe
        />
      </mesh>

      {/* Tech Badges Pinned in 3D Space */}
      {techNodes.map((tech, idx) => (
        <group key={idx} position={tech.pos}>
          <mesh scale={0.08}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial
              color={tech.color}
              emissive={tech.color}
              emissiveIntensity={0.7}
            />
          </mesh>
          <Html distanceFactor={10} center>
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.92)',
                backdropFilter: 'blur(8px)',
                border: `1.5px solid ${tech.color}`,
                color: '#0f172a',
                padding: '4px 10px',
                borderRadius: '8px',
                fontSize: '11px',
                fontWeight: '700',
                fontFamily: 'var(--font-tech)',
                boxShadow: `0 4px 12px rgba(15, 23, 42, 0.08), 0 0 10px ${tech.color}33`,
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
                userSelect: 'none'
              }}
            >
              {tech.name}
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}

export default function TechOrbit3D() {
  return (
    <div style={{ width: '100%', height: '380px', position: 'relative' }}>
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1} />
        <pointLight position={[5, 5, 5]} color="#00f5d4" intensity={2} />
        <pointLight position={[-5, -5, -5]} color="#7b2cbf" intensity={1.5} />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
          <OrbitingSphere />
        </Float>
      </Canvas>
    </div>
  );
}
