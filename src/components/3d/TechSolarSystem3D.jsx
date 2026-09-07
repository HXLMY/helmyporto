import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { Zap, RotateCw, Sparkles, Orbit, Compass, Eye, FastForward } from 'lucide-react';

// Tech Planets Configuration with realistic 3D spatial tilts, moons, and particle trails
const techPlanets = [
  {
    id: 'laravel',
    name: 'Laravel',
    category: 'Backend',
    color: '#ff2d20',
    emissive: '#ff4b3e',
    orbitRadiusX: 1.8,
    orbitRadiusZ: 1.7,
    tilt: 0.12,
    speed: 0.9,
    size: 0.18,
    initialAngle: 0,
    hasRing: false,
    level: '96%',
    desc: 'Enterprise PHP Framework, Eloquent ORM & RESTful APIs',
    moons: [
      { name: 'Filament', color: '#f59e0b', dist: 0.38, speed: 3.2, size: 0.05 },
      { name: 'Livewire', color: '#ec4899', dist: 0.52, speed: 2.4, size: 0.045 }
    ]
  },
  {
    id: 'react',
    name: 'React.js',
    category: 'Frontend',
    color: '#00d8ff',
    emissive: '#38bdf8',
    orbitRadiusX: 2.6,
    orbitRadiusZ: 2.4,
    tilt: -0.15,
    speed: 0.72,
    size: 0.21,
    initialAngle: 1.3,
    hasRing: true,
    ringColor: 'rgba(0, 216, 255, 0.45)',
    level: '94%',
    desc: 'Component Driven UI, Concurrent Transitions & State Logic',
    moons: [
      { name: 'Next.js', color: '#ffffff', dist: 0.42, speed: 2.8, size: 0.055 },
      { name: 'Zustand', color: '#a855f7', dist: 0.58, speed: 1.9, size: 0.04 }
    ]
  },
  {
    id: 'php',
    name: 'PHP 8.3',
    category: 'Language',
    color: '#8892bf',
    emissive: '#a5b4fc',
    orbitRadiusX: 3.3,
    orbitRadiusZ: 3.1,
    tilt: 0.08,
    speed: 0.56,
    size: 0.16,
    initialAngle: 2.5,
    hasRing: false,
    level: '95%',
    desc: 'Strict Types, Attributes, Fibers & Clean Architecture',
    moons: [
      { name: 'Composer', color: '#d97706', dist: 0.36, speed: 2.5, size: 0.04 }
    ]
  },
  {
    id: 'vue',
    name: 'Vue.js',
    category: 'Frontend',
    color: '#42b883',
    emissive: '#34d399',
    orbitRadiusX: 4.0,
    orbitRadiusZ: 3.8,
    tilt: -0.1,
    speed: 0.45,
    size: 0.18,
    initialAngle: 3.8,
    hasRing: false,
    level: '90%',
    desc: 'Reactive Single File Components, Pinia & Vue Router',
    moons: [
      { name: 'Vite', color: '#a855f7', dist: 0.38, speed: 3.0, size: 0.045 }
    ]
  },
  {
    id: 'abap',
    name: 'SAP ABAP',
    category: 'ERP S/4HANA',
    color: '#f59e0b',
    emissive: '#fbbf24',
    orbitRadiusX: 4.8,
    orbitRadiusZ: 4.5,
    tilt: 0.18,
    speed: 0.36,
    size: 0.25,
    initialAngle: 4.9,
    hasRing: true,
    ringColor: 'rgba(245, 158, 11, 0.5)',
    level: '92%',
    desc: 'WRICEF S/4HANA, BAdI Enhancements, Smartforms & ALV',
    moons: [
      { name: 'S/4HANA', color: '#38bdf8', dist: 0.48, speed: 2.2, size: 0.06 },
      { name: 'SAC', color: '#10b981', dist: 0.65, speed: 1.6, size: 0.045 }
    ]
  },
  {
    id: 'mysql',
    name: 'MySQL / MariaDB',
    category: 'Database',
    color: '#00758f',
    emissive: '#0284c7',
    orbitRadiusX: 5.6,
    orbitRadiusZ: 5.3,
    tilt: -0.14,
    speed: 0.28,
    size: 0.18,
    initialAngle: 0.9,
    hasRing: false,
    level: '92%',
    desc: 'Composite Indexing, Query Optimization & Data Integrity',
    moons: [
      { name: 'Redis', color: '#ef4444', dist: 0.38, speed: 2.7, size: 0.045 }
    ]
  },
  {
    id: 'js',
    name: 'JavaScript / TS',
    category: 'Core Language',
    color: '#f7df1e',
    emissive: '#fde047',
    orbitRadiusX: 6.3,
    orbitRadiusZ: 6.0,
    tilt: 0.09,
    speed: 0.22,
    size: 0.2,
    initialAngle: 2.1,
    hasRing: false,
    level: '94%',
    desc: 'TypeScript Strict Mode, Async/Await & Event Loop',
    moons: []
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'UI Engine',
    color: '#38bdf8',
    emissive: '#7dd3fc',
    orbitRadiusX: 7.0,
    orbitRadiusZ: 6.7,
    tilt: -0.12,
    speed: 0.17,
    size: 0.16,
    initialAngle: 5.6,
    hasRing: false,
    level: '95%',
    desc: 'Responsive Utility Engine, JIT Compiler & Design Tokens',
    moons: []
  }
];

// Glowing Solar Flares & Pulsing Plasma Sun Core
function SunCore({ speedMultiplier, isPaused }) {
  const sunMeshRef = useRef();
  const coronaRef = useRef();
  const outerGlowRef = useRef();
  const flaresGroupRef = useRef();

  // Floating solar flare particles
  const flareParticles = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 36; i++) {
      const theta = (i / 36) * Math.PI * 2;
      const r = 0.75 + Math.random() * 0.25;
      pts.push({
        pos: [Math.cos(theta) * r, (Math.random() - 0.5) * 0.3, Math.sin(theta) * r],
        scale: 0.03 + Math.random() * 0.04,
        speed: 1 + Math.random() * 2
      });
    }
    return pts;
  }, []);

  useFrame((state, delta) => {
    if (!isPaused) {
      const step = delta * speedMultiplier;
      if (sunMeshRef.current) sunMeshRef.current.rotation.y += step * 0.5;
      if (coronaRef.current) coronaRef.current.rotation.z -= step * 0.35;
      if (flaresGroupRef.current) flaresGroupRef.current.rotation.y += step * 0.2;
      if (outerGlowRef.current) {
        const pulse = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.06;
        outerGlowRef.current.scale.set(pulse, pulse, pulse);
      }
    }
  });

  return (
    <group>
      {/* High-intensity Sun Lights */}
      <pointLight color="#f59e0b" intensity={4.5} distance={30} decay={1.3} />
      <pointLight color="#fbbf24" intensity={2.5} distance={12} />

      {/* Volumetric Outer Pulse Halo */}
      <mesh ref={outerGlowRef} scale={1.25}>
        <sphereGeometry args={[0.75, 32, 32]} />
        <meshBasicMaterial
          color="#f59e0b"
          transparent
          opacity={0.2}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Dynamic Corona Ring */}
      <mesh ref={coronaRef} rotation={[Math.PI / 2.3, 0, 0]}>
        <ringGeometry args={[0.78, 1.15, 64]} />
        <meshBasicMaterial
          color="#fbbf24"
          transparent
          opacity={0.4}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Central Molten Star Sphere */}
      <mesh ref={sunMeshRef}>
        <sphereGeometry args={[0.68, 36, 36]} />
        <meshStandardMaterial
          color="#ffb703"
          emissive="#fb8500"
          emissiveIntensity={2.5}
          roughness={0.15}
          metalness={0.85}
        />
      </mesh>

      {/* Solar Flare Particle Prominences */}
      <group ref={flaresGroupRef}>
        {flareParticles.map((fp, i) => (
          <mesh key={i} position={fp.pos} scale={fp.scale}>
            <sphereGeometry args={[1, 8, 8]} />
            <meshBasicMaterial color="#fde047" transparent opacity={0.7} />
          </mesh>
        ))}
      </group>

      {/* Sun Core Floating Badge */}
      <Html distanceFactor={12} center position={[0, -1.05, 0]}>
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.95) 0%, rgba(217, 119, 6, 0.98) 100%)',
            color: '#ffffff',
            padding: '3px 10px',
            borderRadius: '12px',
            fontSize: '10.5px',
            fontWeight: 800,
            fontFamily: 'var(--font-tech)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            boxShadow: '0 0 20px rgba(245, 158, 11, 0.7)',
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

// Glowing 3D Orbit Track with Inclination
function OrbitPath({ radiusX, radiusZ, tilt }) {
  const lineGeometry = useMemo(() => {
    const pts = [];
    const segments = 120;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      const x = Math.cos(theta) * radiusX;
      const z = Math.sin(theta) * radiusZ;
      const y = Math.sin(theta) * tilt;
      pts.push(new THREE.Vector3(x, y, z));
    }
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, [radiusX, radiusZ, tilt]);

  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial color="#38bdf8" transparent opacity={0.24} />
    </line>
  );
}

// Orbiting Asteroid Belt (Cosmic Ring Dust between inner & outer orbits)
function AsteroidBelt({ speedMultiplier, isPaused }) {
  const beltRef = useRef();

  const asteroids = useMemo(() => {
    const pts = [];
    const count = 90;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + Math.random() * 0.1;
      const dist = 4.3 + (Math.random() - 0.5) * 0.5;
      const y = (Math.random() - 0.5) * 0.25;
      pts.push({
        x: Math.cos(angle) * dist,
        y: y,
        z: Math.sin(angle) * dist,
        scale: 0.02 + Math.random() * 0.035,
        color: Math.random() > 0.5 ? '#94a3b8' : '#38bdf8'
      });
    }
    return pts;
  }, []);

  useFrame((_, delta) => {
    if (!isPaused && beltRef.current) {
      beltRef.current.rotation.y += delta * 0.08 * speedMultiplier;
    }
  });

  return (
    <group ref={beltRef}>
      {asteroids.map((ast, idx) => (
        <mesh key={idx} position={[ast.x, ast.y, ast.z]} scale={ast.scale}>
          <dodecahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color={ast.color} roughness={0.8} />
        </mesh>
      ))}
    </group>
  );
}

// Individual Tech Planet with Moons and Trailing Particles
function OrbitingTechPlanet({ planet, isPaused, speedMultiplier, activePlanetId, onSelectPlanet }) {
  const planetGroupRef = useRef();
  const sphereRef = useRef();
  const moonsGroupRef = useRef();
  const trailGroupRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  // Pre-generate comet particle tail behind planet
  const tailSegments = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      offset: (i + 1) * 0.08,
      scale: 0.04 - i * 0.006,
      opacity: 0.5 - i * 0.09
    }));
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime * (planet.speed * speedMultiplier) + planet.initialAngle;
    const x = Math.cos(time) * planet.orbitRadiusX;
    const z = Math.sin(time) * planet.orbitRadiusZ;
    const y = Math.sin(time) * planet.tilt;

    if (!isPaused && planetGroupRef.current) {
      planetGroupRef.current.position.set(x, y, z);
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.025 * speedMultiplier;
    }
    if (!isPaused && moonsGroupRef.current) {
      moonsGroupRef.current.rotation.y += 0.04 * speedMultiplier;
    }
  });

  const isSelected = activePlanetId === planet.id;

  return (
    <group ref={planetGroupRef} position={[planet.orbitRadiusX, 0, 0]}>
      {/* Dynamic Trailing Particles (Planetary Comet Wake) */}
      <group ref={trailGroupRef}>
        {tailSegments.map((t, idx) => (
          <mesh key={idx} position={[-Math.sin(planet.initialAngle) * t.offset * 1.5, 0, -Math.cos(planet.initialAngle) * t.offset * 1.5]} scale={t.scale}>
            <sphereGeometry args={[1, 8, 8]} />
            <meshBasicMaterial color={planet.color} transparent opacity={t.opacity} />
          </mesh>
        ))}
      </group>

      {/* Main Planet Sphere */}
      <mesh
        ref={sphereRef}
        scale={isHovered || isSelected ? 1.4 : 1}
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
        <sphereGeometry args={[planet.size, 28, 28]} />
        <meshStandardMaterial
          color={planet.color}
          emissive={planet.emissive}
          emissiveIntensity={isHovered || isSelected ? 1.8 : 0.95}
          roughness={0.25}
          metalness={0.7}
        />
      </mesh>

      {/* Planet Atmosphere Glow Halo */}
      {(isHovered || isSelected) && (
        <mesh scale={1.7}>
          <sphereGeometry args={[planet.size, 20, 20]} />
          <meshBasicMaterial color={planet.color} transparent opacity={0.25} side={THREE.BackSide} />
        </mesh>
      )}

      {/* Saturn-like Ring */}
      {planet.hasRing && (
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <ringGeometry args={[planet.size * 1.45, planet.size * 2.1, 36]} />
          <meshBasicMaterial
            color={planet.color}
            transparent
            opacity={0.55}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}

      {/* Orbiting Tech Moons (Satellites like Filament/Livewire/Next.js) */}
      {planet.moons && planet.moons.length > 0 && (
        <group ref={moonsGroupRef}>
          {planet.moons.map((moon, mIdx) => {
            const moonAngle = mIdx * (Math.PI / 1.5);
            const mx = Math.cos(moonAngle) * moon.dist;
            const mz = Math.sin(moonAngle) * moon.dist;
            return (
              <group key={mIdx} position={[mx, 0, mz]}>
                <mesh scale={moon.size}>
                  <sphereGeometry args={[1, 14, 14]} />
                  <meshStandardMaterial
                    color={moon.color}
                    emissive={moon.color}
                    emissiveIntensity={1.2}
                  />
                </mesh>
                {/* Moon label on hover */}
                {(isHovered || isSelected) && (
                  <Html distanceFactor={8} center position={[0, moon.size + 0.12, 0]}>
                    <span
                      style={{
                        background: 'rgba(15, 23, 42, 0.9)',
                        color: '#f8fafc',
                        padding: '1px 4px',
                        borderRadius: '4px',
                        fontSize: '8px',
                        fontWeight: 700,
                        fontFamily: 'var(--font-tech)',
                        whiteSpace: 'nowrap',
                        border: `1px solid ${moon.color}`
                      }}
                    >
                      {moon.name}
                    </span>
                  </Html>
                )}
              </group>
            );
          })}
        </group>
      )}

      {/* Floating HTML Badge pinned above Planet */}
      <Html distanceFactor={11} center position={[0, planet.size + 0.36, 0]}>
        <div
          onClick={(e) => {
            e.stopPropagation();
            onSelectPlanet(planet);
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            background: isSelected
              ? 'rgba(15, 23, 42, 0.96)'
              : isHovered
              ? 'rgba(15, 23, 42, 0.94)'
              : 'rgba(255, 255, 255, 0.93)',
            backdropFilter: 'blur(10px)',
            border: `1.5px solid ${planet.color}`,
            color: isSelected || isHovered ? '#ffffff' : '#0f172a',
            padding: '3px 8px',
            borderRadius: '9px',
            fontSize: '11px',
            fontWeight: 800,
            fontFamily: 'var(--font-tech)',
            boxShadow: `0 4px 14px rgba(0, 0, 0, 0.25), 0 0 14px ${planet.color}88`,
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            userSelect: 'none',
            transition: 'all 0.2s ease',
            transform: isHovered || isSelected ? 'scale(1.15)' : 'scale(1)',
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

// 3D Solar System Scene Container
function SolarSystemCosmos({ speedMultiplier, isPaused, activePlanetId, onSelectPlanet }) {
  const cosmosRef = useRef();

  useFrame((_, delta) => {
    if (!isPaused && cosmosRef.current) {
      cosmosRef.current.rotation.y += delta * 0.02 * speedMultiplier;
    }
  });

  return (
    <group ref={cosmosRef} rotation={[0.42, 0, 0]}>
      {/* Central Glowing Sun */}
      <SunCore speedMultiplier={speedMultiplier} isPaused={isPaused} />

      {/* Orbit Tracks & Revolving Planets */}
      {techPlanets.map((planet) => (
        <React.Fragment key={planet.id}>
          <OrbitPath
            radiusX={planet.orbitRadiusX}
            radiusZ={planet.orbitRadiusZ}
            tilt={planet.tilt}
          />
          <OrbitingTechPlanet
            planet={planet}
            isPaused={isPaused}
            speedMultiplier={speedMultiplier}
            activePlanetId={activePlanetId}
            onSelectPlanet={onSelectPlanet}
          />
        </React.Fragment>
      ))}

      {/* Orbiting Asteroid Belt */}
      <AsteroidBelt speedMultiplier={speedMultiplier} isPaused={isPaused} />
    </group>
  );
}

// Exportable Enhanced Component
export default function TechSolarSystem3D({ height = '460px', showControls = true }) {
  const [isPaused, setIsPaused] = useState(false);
  const [speedMultiplier, setSpeedMultiplier] = useState(1); // 1x, 2x, 4x
  const [activePlanet, setActivePlanet] = useState(null);

  const cycleSpeed = () => {
    if (speedMultiplier === 1) setSpeedMultiplier(2);
    else if (speedMultiplier === 2) setSpeedMultiplier(3.5);
    else setSpeedMultiplier(1);
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: height,
        borderRadius: '24px',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at center, rgba(13, 22, 45, 0.98) 0%, rgba(5, 8, 18, 0.98) 100%)',
        border: '1px solid rgba(56, 189, 248, 0.28)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), inset 0 0 50px rgba(2, 132, 199, 0.18)'
      }}
    >
      {/* 3D WebGL Canvas */}
      <Canvas
        camera={{ position: [0, 8.2, 7.8], fov: 48 }}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={['#050814']} />

        {/* Ambient Lights */}
        <ambientLight intensity={0.85} />
        <directionalLight position={[10, 18, 10]} intensity={1.3} />

        {/* Cosmic Twinkling Stars */}
        <Stars radius={50} depth={35} count={1600} factor={3.5} saturation={0.6} fade speed={1.5} />

        {/* Dynamic 3D Solar System Scene */}
        <SolarSystemCosmos
          speedMultiplier={speedMultiplier}
          isPaused={isPaused}
          activePlanetId={activePlanet?.id}
          onSelectPlanet={(planet) => setActivePlanet(planet)}
        />

        {/* Interactive 3D Orbit Controls */}
        <OrbitControls
          enableZoom={true}
          maxDistance={15}
          minDistance={3.2}
          enablePan={false}
          rotateSpeed={0.65}
          zoomSpeed={0.75}
          maxPolarAngle={Math.PI / 2.05}
        />
      </Canvas>

      {/* Top Floating Control Bar */}
      {showControls && (
        <div
          style={{
            position: 'absolute',
            top: '0.85rem',
            left: '0.85rem',
            right: '0.85rem',
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
              padding: '0.4rem 0.85rem',
              borderRadius: '12px',
              background: 'rgba(15, 23, 42, 0.88)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(56, 189, 248, 0.35)',
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
              🪐 3D Tech Solar System
            </span>
          </div>

          {/* Interactive Warp & Orbit Controls */}
          <div style={{ pointerEvents: 'auto', display: 'flex', gap: '6px' }}>
            {/* Speed Boost Button */}
            <button
              onClick={cycleSpeed}
              title="Change Orbit Speed"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '0.35rem 0.65rem',
                borderRadius: '10px',
                background: speedMultiplier > 1 ? 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)' : 'rgba(15, 23, 42, 0.85)',
                border: '1px solid rgba(56, 189, 248, 0.35)',
                color: '#ffffff',
                fontSize: '0.72rem',
                fontWeight: 700,
                fontFamily: 'var(--font-tech)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                backdropFilter: 'blur(8px)'
              }}
            >
              <FastForward size={12} />
              <span>{speedMultiplier}x Speed</span>
            </button>

            {/* Pause/Play Button */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              title={isPaused ? 'Resume Orbit' : 'Pause Orbit'}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '0.35rem 0.65rem',
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

      {/* Selected Planet Detail Card Overlay */}
      {activePlanet && (
        <div
          style={{
            position: 'absolute',
            bottom: '1rem',
            left: '1rem',
            right: '1rem',
            maxWidth: '390px',
            margin: '0 auto',
            background: 'rgba(15, 23, 42, 0.94)',
            backdropFilter: 'blur(16px)',
            border: `1.5px solid ${activePlanet.color}`,
            borderRadius: '16px',
            padding: '0.85rem 1.1rem',
            boxShadow: `0 10px 35px rgba(0, 0, 0, 0.6), 0 0 25px ${activePlanet.color}44`,
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

          <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.78rem', color: '#cbd5e1', lineHeight: 1.45 }}>
            {activePlanet.desc}
          </p>

          {/* Moons / Ecosystem Sub-modules */}
          {activePlanet.moons && activePlanet.moons.length > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '0.4rem' }}>
              <span style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Orbiting Satellites:</span>
              {activePlanet.moons.map((m, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.68rem',
                    padding: '1px 6px',
                    borderRadius: '5px',
                    background: `${m.color}22`,
                    border: `1px solid ${m.color}55`,
                    color: '#ffffff',
                    fontWeight: 600
                  }}
                >
                  🛰️ {m.name}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Helper drag tooltip */}
      <div
        style={{
          position: 'absolute',
          bottom: '0.75rem',
          left: '50%',
          transform: 'translateX(-50%)',
          pointerEvents: 'none',
          fontSize: '0.68rem',
          color: 'rgba(255, 255, 255, 0.55)',
          fontFamily: 'var(--font-tech)',
          letterSpacing: '0.04em',
          display: activePlanet ? 'none' : 'flex',
          alignItems: 'center',
          gap: '6px'
        }}
      >
        <span>🖱️ Putar 360° &bull; Scroll zoom in/out &bull; Klik planet &amp; satelit untuk detail</span>
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
