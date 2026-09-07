import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { Zap, RotateCw, ZoomIn, Info } from 'lucide-react';

// Tech Planets Configuration (Orbits, Speeds, Colors, Diameters)
const techPlanets = [
  {
    id: 'laravel',
    name: 'Laravel',
    category: 'Backend',
    color: '#ff2d20',
    emissive: '#ff4b3e',
    orbitRadius: 1.6,
    speed: 0.85,
    size: 0.16,
    initialAngle: 0,
    hasRing: false,
    level: '96%',
    desc: 'Enterprise PHP Framework & RESTful APIs'
  },
  {
    id: 'react',
    name: 'React / Next.js',
    category: 'Frontend',
    color: '#00d8ff',
    emissive: '#38bdf8',
    orbitRadius: 2.3,
    speed: 0.65,
    size: 0.19,
    initialAngle: 1.2,
    hasRing: true,
    ringColor: 'rgba(0, 216, 255, 0.4)',
    level: '94%',
    desc: 'Interactive UI, SSR & Next.js Architecture'
  },
  {
    id: 'php',
    name: 'PHP',
    category: 'Language',
    color: '#8892bf',
    emissive: '#a5b4fc',
    orbitRadius: 2.9,
    speed: 0.5,
    size: 0.15,
    initialAngle: 2.4,
    hasRing: false,
    level: '95%',
    desc: 'Modern PHP 8.3 & Object-Oriented Architecture'
  },
  {
    id: 'vue',
    name: 'Vue.js',
    category: 'Frontend',
    color: '#42b883',
    emissive: '#34d399',
    orbitRadius: 3.5,
    speed: 0.42,
    size: 0.17,
    initialAngle: 3.6,
    hasRing: false,
    level: '90%',
    desc: 'Reactive Component Architecture & SPA'
  },
  {
    id: 'abap',
    name: 'SAP ABAP',
    category: 'ERP S/4HANA',
    color: '#f59e0b',
    emissive: '#fbbf24',
    orbitRadius: 4.1,
    speed: 0.35,
    size: 0.22,
    initialAngle: 4.8,
    hasRing: true,
    ringColor: 'rgba(245, 158, 11, 0.5)',
    level: '92%',
    desc: 'WRICEF, S/4HANA Customization & BAdI'
  },
  {
    id: 'mysql',
    name: 'MySQL / DB',
    category: 'Database',
    color: '#00758f',
    emissive: '#0284c7',
    orbitRadius: 4.7,
    speed: 0.28,
    size: 0.16,
    initialAngle: 0.8,
    hasRing: false,
    level: '92%',
    desc: 'ACID Transactions, Indexing & Normalization'
  },
  {
    id: 'js',
    name: 'JavaScript / TS',
    category: 'Core Language',
    color: '#f7df1e',
    emissive: '#fde047',
    orbitRadius: 5.3,
    speed: 0.22,
    size: 0.18,
    initialAngle: 2.0,
    hasRing: false,
    level: '94%',
    desc: 'TypeScript, ES6+ & Asynchronous Systems'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'UI Engine',
    color: '#38bdf8',
    emissive: '#7dd3fc',
    orbitRadius: 5.9,
    speed: 0.18,
    size: 0.15,
    initialAngle: 5.5,
    hasRing: false,
    level: '95%',
    desc: 'Rapid Utility-First Styling & Design Systems'
  }
];

// Central Glowing Sun (Core Engine)
function SunCore({ isPaused }) {
  const sunMeshRef = useRef();
  const coronaRef = useRef();
  const outerGlowRef = useRef();

  useFrame((state, delta) => {
    if (!isPaused && sunMeshRef.current) {
      sunMeshRef.current.rotation.y += delta * 0.4;
      if (coronaRef.current) coronaRef.current.rotation.z -= delta * 0.25;
      if (outerGlowRef.current) {
        const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.04;
        outerGlowRef.current.scale.set(scale, scale, scale);
      }
    }
  });

  return (
    <group>
      {/* Intense Point Light from Sun */}
      <pointLight color="#f59e0b" intensity={3.5} distance={20} decay={1.5} />
      <pointLight color="#fbbf24" intensity={2.0} distance={8} />

      {/* Outer Atmospheric Pulse Halo */}
      <mesh ref={outerGlowRef} scale={1.2}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshBasicMaterial
          color="#f59e0b"
          transparent
          opacity={0.18}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Corona Ray Ring */}
      <mesh ref={coronaRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.72, 0.95, 48]} />
        <meshBasicMaterial
          color="#fbbf24"
          transparent
          opacity={0.35}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Main Glowing Sun Sphere */}
      <mesh ref={sunMeshRef}>
        <sphereGeometry args={[0.62, 32, 32]} />
        <meshStandardMaterial
          color="#ffb703"
          emissive="#fb8500"
          emissiveIntensity={2.2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Central Sun Label */}
      <Html distanceFactor={11} center position={[0, -0.9, 0]}>
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.9) 0%, rgba(217, 119, 6, 0.95) 100%)',
            color: '#ffffff',
            padding: '3px 9px',
            borderRadius: '12px',
            fontSize: '10px',
            fontWeight: 800,
            fontFamily: 'var(--font-tech)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            boxShadow: '0 0 18px rgba(245, 158, 11, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            userSelect: 'none'
          }}
        >
          ☀️ Core Engine
        </div>
      </Html>
    </group>
  );
}

// Planetary Orbit Track Line
function OrbitRing({ radius }) {
  const points = useMemo(() => {
    const pts = [];
    const segments = 96;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
    }
    return pts;
  }, [radius]);

  const lineGeometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [points]);

  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial color="#38bdf8" transparent opacity={0.22} />
    </line>
  );
}

// Individual Tech Planet Revolving Around Sun
function OrbitingPlanet({ planet, isPaused, activePlanetId, onSelectPlanet }) {
  const planetGroupRef = useRef();
  const sphereRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  useFrame((state) => {
    if (!isPaused && planetGroupRef.current) {
      const time = state.clock.elapsedTime * planet.speed + planet.initialAngle;
      const x = Math.cos(time) * planet.orbitRadius;
      const z = Math.sin(time) * planet.orbitRadius;
      // Slight vertical wave for dynamic 3D depth
      const y = Math.sin(time * 1.5) * 0.15;
      planetGroupRef.current.position.set(x, y, z);
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.02;
    }
  });

  const isSelected = activePlanetId === planet.id;

  return (
    <group ref={planetGroupRef} position={[planet.orbitRadius, 0, 0]}>
      {/* Planet Sphere */}
      <mesh
        ref={sphereRef}
        scale={isHovered || isSelected ? 1.35 : 1}
        onPointerOver={(e) => {
          e.stopPropagation();
          setIsHovered(true);
        }}
        onPointerOut={() => setIsHovered(false)}
        onClick={(e) => {
          e.stopPropagation();
          onSelectPlanet(planet);
        }}
        style={{ cursor: 'pointer' }}
      >
        <sphereGeometry args={[planet.size, 24, 24]} />
        <meshStandardMaterial
          color={planet.color}
          emissive={planet.emissive}
          emissiveIntensity={isHovered || isSelected ? 1.6 : 0.9}
          roughness={0.3}
          metalness={0.6}
        />
      </mesh>

      {/* Optional Saturn-like Planetary Ring */}
      {planet.hasRing && (
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <ringGeometry args={[planet.size * 1.4, planet.size * 1.9, 32]} />
          <meshBasicMaterial
            color={planet.color}
            transparent
            opacity={0.45}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}

      {/* Floating HTML Badge pinned above Planet */}
      <Html distanceFactor={10} center position={[0, planet.size + 0.32, 0]}>
        <div
          onClick={(e) => {
            e.stopPropagation();
            onSelectPlanet(planet);
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            background: isSelected
              ? 'rgba(15, 23, 42, 0.95)'
              : isHovered
              ? 'rgba(15, 23, 42, 0.92)'
              : 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(10px)',
            border: `1.5px solid ${planet.color}`,
            color: isSelected || isHovered ? '#ffffff' : '#0f172a',
            padding: '3px 8px',
            borderRadius: '9px',
            fontSize: '11px',
            fontWeight: 700,
            fontFamily: 'var(--font-tech)',
            boxShadow: `0 4px 14px rgba(0, 0, 0, 0.2), 0 0 12px ${planet.color}66`,
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            userSelect: 'none',
            transition: 'all 0.2s ease',
            transform: isHovered || isSelected ? 'scale(1.1)' : 'scale(1)',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: planet.color,
              boxShadow: `0 0 6px ${planet.color}`
            }}
          />
          <span>{planet.name}</span>
          {(isHovered || isSelected) && (
            <span style={{ fontSize: '9px', color: planet.color, fontWeight: 800 }}>
              {planet.level}
            </span>
          )}
        </div>
      </Html>
    </group>
  );
}

// Solar System Scene Root
function SolarSystemScene({ isPaused, activePlanetId, onSelectPlanet }) {
  const sceneRef = useRef();

  useFrame((_, delta) => {
    if (!isPaused && sceneRef.current) {
      // Gentle overall cosmos axial rotation
      sceneRef.current.rotation.y += delta * 0.04;
    }
  });

  return (
    <group ref={sceneRef} rotation={[0.45, 0, 0]}>
      {/* Central Sun */}
      <SunCore isPaused={isPaused} />

      {/* Orbital Tracks & Revolving Tech Planets */}
      {techPlanets.map((planet) => (
        <React.Fragment key={planet.id}>
          <OrbitRing radius={planet.orbitRadius} />
          <OrbitingPlanet
            planet={planet}
            isPaused={isPaused}
            activePlanetId={activePlanetId}
            onSelectPlanet={onSelectPlanet}
          />
        </React.Fragment>
      ))}
    </group>
  );
}

// Exportable Main Component
export default function TechSolarSystem3D({ height = '460px', showControls = true }) {
  const [isPaused, setIsPaused] = useState(false);
  const [activePlanet, setActivePlanet] = useState(null);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: height,
        borderRadius: '24px',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at center, rgba(13, 22, 45, 0.98) 0%, rgba(5, 8, 18, 0.98) 100%)',
        border: '1px solid rgba(56, 189, 248, 0.25)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), inset 0 0 40px rgba(2, 132, 199, 0.15)'
      }}
    >
      {/* 3D WebGL Canvas */}
      <Canvas
        camera={{ position: [0, 7.5, 7.2], fov: 48 }}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={['#060a14']} />
        
        {/* Ambient Lights */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 15, 10]} intensity={1.2} />

        {/* Deep Cosmic Stars */}
        <Stars radius={45} depth={30} count={1200} factor={3} saturation={0.5} fade speed={1.2} />

        {/* 3D Solar System Scene */}
        <SolarSystemScene
          isPaused={isPaused}
          activePlanetId={activePlanet?.id}
          onSelectPlanet={(planet) => setActivePlanet(planet)}
        />

        {/* Interactive Mouse & Touch 3D Orbit Controls */}
        <OrbitControls
          enableZoom={true}
          maxDistance={14}
          minDistance={3.5}
          enablePan={false}
          rotateSpeed={0.6}
          zoomSpeed={0.7}
          maxPolarAngle={Math.PI / 2.05}
        />
      </Canvas>

      {/* Top Overlay Badge & Interactive Controls */}
      {showControls && (
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            right: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            pointerEvents: 'none',
            zIndex: 10
          }}
        >
          {/* Title Badge */}
          <div
            style={{
              pointerEvents: 'auto',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0.45rem 0.9rem',
              borderRadius: '12px',
              background: 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#f59e0b',
                boxShadow: '0 0 10px #f59e0b',
                display: 'inline-block'
              }}
            />
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#f8fafc',
                fontFamily: 'var(--font-tech)'
              }}
            >
              3D Tech Solar System
            </span>
          </div>

          {/* Interactive Action Pill */}
          <div style={{ pointerEvents: 'auto', display: 'flex', gap: '6px' }}>
            <button
              onClick={() => setIsPaused(!isPaused)}
              title={isPaused ? 'Resume Orbit' : 'Pause Orbit'}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                padding: '0.4rem 0.75rem',
                borderRadius: '10px',
                background: isPaused ? 'rgba(239, 68, 68, 0.25)' : 'rgba(2, 132, 199, 0.25)',
                border: '1px solid rgba(56, 189, 248, 0.35)',
                color: '#f8fafc',
                fontSize: '0.72rem',
                fontWeight: 600,
                fontFamily: 'var(--font-tech)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                backdropFilter: 'blur(8px)'
              }}
            >
              <RotateCw size={12} className={isPaused ? '' : 'spin-orbit'} />
              <span>{isPaused ? 'Paused' : 'Orbiting'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Selected Planet Info Card Overlay (Click to view details) */}
      {activePlanet && (
        <div
          style={{
            position: 'absolute',
            bottom: '1rem',
            left: '1rem',
            right: '1rem',
            maxWidth: '380px',
            margin: '0 auto',
            background: 'rgba(15, 23, 42, 0.92)',
            backdropFilter: 'blur(16px)',
            border: `1.5px solid ${activePlanet.color}`,
            borderRadius: '16px',
            padding: '0.85rem 1.1rem',
            boxShadow: `0 10px 30px rgba(0, 0, 0, 0.6), 0 0 25px ${activePlanet.color}44`,
            zIndex: 10,
            animation: 'slideUpPlanet 0.25s ease-out'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: activePlanet.color,
                  boxShadow: `0 0 10px ${activePlanet.color}`
                }}
              />
              <span style={{ fontWeight: 800, fontSize: '0.92rem', color: '#f8fafc', fontFamily: 'var(--font-tech)' }}>
                {activePlanet.name}
              </span>
              <span
                style={{
                  fontSize: '0.7rem',
                  padding: '1px 6px',
                  borderRadius: '6px',
                  background: `${activePlanet.color}22`,
                  color: activePlanet.color,
                  fontWeight: 700
                }}
              >
                {activePlanet.category}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: activePlanet.color, fontFamily: 'var(--font-code)' }}>
                {activePlanet.level}
              </span>
              <button
                onClick={() => setActivePlanet(null)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#94a3b8',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  padding: '2px 6px'
                }}
              >
                ✕
              </button>
            </div>
          </div>

          <p style={{ margin: 0, fontSize: '0.78rem', color: '#cbd5e1', lineHeight: 1.45 }}>
            {activePlanet.desc}
          </p>
        </div>
      )}

      {/* Bottom helper drag tooltip */}
      <div
        style={{
          position: 'absolute',
          bottom: '0.75rem',
          left: '50%',
          transform: 'translateX(-50%)',
          pointerEvents: 'none',
          fontSize: '0.68rem',
          color: 'rgba(255, 255, 255, 0.5)',
          fontFamily: 'var(--font-tech)',
          letterSpacing: '0.04em',
          display: activePlanet ? 'none' : 'flex',
          alignItems: 'center',
          gap: '6px'
        }}
      >
        <span>🖱️ Drag to rotate 360° &bull; Scroll to zoom &bull; Click planet for info</span>
      </div>

      <style>{`
        .spin-orbit {
          animation: spinOrbit 3s linear infinite;
        }
        @keyframes spinOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes slideUpPlanet {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
