import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox, Cylinder, Torus, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Generate a high-tech glowing code editor screen texture
function useCodeScreenTexture() {
  return useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 640;
    const ctx = canvas.getContext('2d');

    // Background dark terminal
    ctx.fillStyle = '#090d16';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Window top bar (macOS / IDE style)
    ctx.fillStyle = '#111827';
    ctx.fillRect(0, 0, canvas.width, 48);

    // Window control buttons
    ctx.fillStyle = '#ef4444'; // Red
    ctx.beginPath();
    ctx.arc(30, 24, 7, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#f59e0b'; // Yellow
    ctx.beginPath();
    ctx.arc(52, 24, 7, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#10b981'; // Green
    ctx.beginPath();
    ctx.arc(74, 24, 7, 0, Math.PI * 2);
    ctx.fill();

    // Editor tab
    ctx.fillStyle = '#1e293b';
    ctx.roundRect(110, 8, 220, 34, 6);
    ctx.fill();
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 15px "Courier New", monospace';
    ctx.fillText('⚡ DeveloperCore.ts', 125, 30);

    ctx.fillStyle = '#64748b';
    ctx.font = '14px "Courier New", monospace';
    ctx.fillText('SAP_ABAP_S4HANA.abap', 350, 30);

    // Code lines syntax highlighting
    const lines = [
      { num: '01', tokens: [{ text: 'import', color: '#f43f5e' }, { text: ' { FullStack, SAP_ABAP } ', color: '#38bdf8' }, { text: 'from', color: '#f43f5e' }, { text: ' "@helmy/core";', color: '#a78bfa' }] },
      { num: '02', tokens: [{ text: 'const', color: '#f43f5e' }, { text: ' developer = ', color: '#e2e8f0' }, { text: 'new', color: '#38bdf8' }, { text: ' SeniorEngineer({', color: '#fbbf24' }] },
      { num: '03', tokens: [{ text: '  name: ', color: '#94a3b8' }, { text: '"Helmy Wahyudi"', color: '#34d399' }, { text: ',', color: '#94a3b8' }] },
      { num: '04', tokens: [{ text: '  stack: ', color: '#94a3b8' }, { text: '["Laravel", "Next.js", "SAP S/4HANA", "WRICEF"]', color: '#38bdf8' }, { text: ',', color: '#94a3b8' }] },
      { num: '05', tokens: [{ text: '  status: ', color: '#94a3b8' }, { text: '"Ready For High-Impact Enterprise Projects"', color: '#34d399' }] },
      { num: '06', tokens: [{ text: '});', color: '#fbbf24' }] },
      { num: '07', tokens: [{ text: '', color: '#94a3b8' }] },
      { num: '08', tokens: [{ text: '// Real-Time Enterprise Execution', color: '#64748b' }] },
      { num: '09', tokens: [{ text: 'await', color: '#f43f5e' }, { text: ' developer.', color: '#e2e8f0' }, { text: 'deployScalableSolutions', color: '#60a5fa' }, { text: '();', color: '#e2e8f0' }] },
      { num: '10', tokens: [{ text: 'console', color: '#f59e0b' }, { text: '.log(', color: '#e2e8f0' }, { text: '"🚀 100% Operational Excellence"', color: '#34d399' }, { text: ');', color: '#e2e8f0' }] }
    ];

    let startY = 85;
    lines.forEach((line) => {
      // Line numbers
      ctx.fillStyle = '#475569';
      ctx.font = '14px "Courier New", monospace';
      ctx.fillText(line.num, 24, startY);

      let curX = 64;
      line.tokens.forEach((tok) => {
        ctx.fillStyle = tok.color;
        ctx.font = '15px "Courier New", monospace';
        ctx.fillText(tok.text, curX, startY);
        curX += ctx.measureText(tok.text).width;
      });
      startY += 30;
    });

    // Terminal status footer in screen
    ctx.fillStyle = 'rgba(2, 132, 199, 0.15)';
    ctx.fillRect(0, canvas.height - 40, canvas.width, 40);
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 13px "Courier New", monospace';
    ctx.fillText('● SYSTEM ONLINE | LATENCY: 12ms | SAP MODULES: CONNECTED | LIVEWIRE & LARAVEL: READY', 24, canvas.height - 15);

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 16;
    return texture;
  }, []);
}

// 3D Laptop Workstation
function ProgrammerLaptop({ pointer }) {
  const groupRef = useRef();
  const screenTexture = useCodeScreenTexture();

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    // Smooth idle breathing rotation
    const time = state.clock.getElapsedTime();
    groupRef.current.position.y = Math.sin(time * 1.5) * 0.08;

    // Responsive parallax tilt tracking mouse pointer
    const targetRotY = (state.pointer.x * Math.PI) / 8 - 0.2;
    const targetRotX = (state.pointer.y * Math.PI) / 10 + 0.15;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.06);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.06);
  });

  return (
    <group ref={groupRef} position={[0, -0.3, 0]} rotation={[0.2, -0.2, 0]}>
      {/* Laptop Base (Keyboard & Trackpad body) */}
      <RoundedBox args={[3.2, 0.12, 2.2]} radius={0.06} smoothness={4} position={[0, 0, 0]}>
        <meshPhysicalMaterial
          color="#0f172a"
          metalness={0.85}
          roughness={0.2}
          clearcoat={0.5}
        />
      </RoundedBox>

      {/* Keyboard Area Indentation */}
      <RoundedBox args={[2.8, 0.02, 1.2]} radius={0.03} smoothness={4} position={[0, 0.065, -0.3]}>
        <meshStandardMaterial color="#020617" roughness={0.7} />
      </RoundedBox>

      {/* Trackpad */}
      <RoundedBox args={[0.9, 0.01, 0.55]} radius={0.02} smoothness={4} position={[0, 0.065, 0.65]}>
        <meshStandardMaterial color="#1e293b" roughness={0.4} metalness={0.6} />
      </RoundedBox>

      {/* Laptop Screen Upper Lid (Tilted back 110 degrees) */}
      <group position={[0, 0.06, -1.1]} rotation={[-Math.PI / 8, 0, 0]}>
        {/* Screen Frame Shell */}
        <RoundedBox args={[3.2, 2.05, 0.08]} radius={0.05} smoothness={4} position={[0, 1.0, 0]}>
          <meshPhysicalMaterial
            color="#0f172a"
            metalness={0.9}
            roughness={0.2}
            clearcoat={0.8}
          />
        </RoundedBox>

        {/* Display Glass / Animated IDE Screen Texture */}
        <mesh position={[0, 1.0, 0.045]}>
          <planeGeometry args={[2.95, 1.85]} />
          <meshBasicMaterial map={screenTexture} />
        </mesh>

        {/* Screen ambient backlight glow */}
        <pointLight position={[0, 1.0, 0.4]} intensity={2.2} distance={3.5} color="#38bdf8" />
      </group>
    </group>
  );
}

// Orbiting Floating Developer Tech Nodes
function FloatingDeveloperTokens() {
  const tokenGroupRef = useRef();

  useFrame((state, delta) => {
    if (tokenGroupRef.current) {
      tokenGroupRef.current.rotation.y += delta * 0.18;
    }
  });

  return (
    <group ref={tokenGroupRef}>
      {/* 1. Database Tier: 3D Cylindrical Data Store (MySQL / MariaDB / S/4HANA) */}
      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.5}>
        <group position={[-2.4, 1.1, 0.6]} rotation={[0.4, 0.3, 0.2]}>
          <Cylinder args={[0.38, 0.38, 0.22, 24]} position={[0, 0.26, 0]}>
            <meshPhysicalMaterial color="#0284c7" metalness={0.8} roughness={0.1} emissive="#0284c7" emissiveIntensity={0.3} />
          </Cylinder>
          <Cylinder args={[0.38, 0.38, 0.22, 24]} position={[0, 0, 0]}>
            <meshPhysicalMaterial color="#0ea5e9" metalness={0.8} roughness={0.1} emissive="#0284c7" emissiveIntensity={0.2} />
          </Cylinder>
          <Cylinder args={[0.38, 0.38, 0.22, 24]} position={[0, -0.26, 0]}>
            <meshPhysicalMaterial color="#0369a1" metalness={0.8} roughness={0.1} emissive="#0284c7" emissiveIntensity={0.3} />
          </Cylinder>
        </group>
      </Float>

      {/* 2. Code Block Cube: </> (Full Stack / Logic) */}
      <Float speed={3} rotationIntensity={1.8} floatIntensity={2}>
        <group position={[2.4, 1.2, -0.4]} rotation={[0.2, -0.4, 0.3]}>
          <RoundedBox args={[0.7, 0.7, 0.7]} radius={0.12} smoothness={4}>
            <meshPhysicalMaterial
              color="#7c3aed"
              emissive="#6d28d9"
              emissiveIntensity={0.45}
              metalness={0.85}
              roughness={0.15}
              clearcoat={1}
            />
          </RoundedBox>
          <Torus args={[0.55, 0.02, 16, 32]} rotation={[Math.PI / 3, 0, 0]}>
            <meshBasicMaterial color="#a78bfa" />
          </Torus>
        </group>
      </Float>

      {/* 3. Enterprise ERP Server Module (SAP WRICEF / Architecture) */}
      <Float speed={2.2} rotationIntensity={1.4} floatIntensity={1.8}>
        <group position={[2.2, -1.1, 0.8]} rotation={[-0.3, 0.5, -0.2]}>
          <RoundedBox args={[0.75, 0.45, 0.75]} radius={0.08} smoothness={4}>
            <meshPhysicalMaterial
              color="#e11d48"
              emissive="#be123c"
              emissiveIntensity={0.4}
              metalness={0.9}
              roughness={0.2}
              clearcoat={1}
            />
          </RoundedBox>
        </group>
      </Float>

      {/* 4. Agile Frontend / API Node (Laravel / React / Next.js) */}
      <Float speed={2.8} rotationIntensity={1.6} floatIntensity={1.6}>
        <group position={[-2.1, -1.0, -0.7]} rotation={[0.5, 0.4, -0.3]}>
          <RoundedBox args={[0.65, 0.65, 0.65]} radius={0.1} smoothness={4}>
            <meshPhysicalMaterial
              color="#d97706"
              emissive="#b45309"
              emissiveIntensity={0.4}
              metalness={0.8}
              roughness={0.2}
            />
          </RoundedBox>
        </group>
      </Float>

      {/* Floating Hologram Tech Ring */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
        <Torus args={[3.2, 0.018, 16, 64]} rotation={[Math.PI / 2.3, 0.3, 0]}>
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.35} />
        </Torus>
      </Float>
    </group>
  );
}

// 3D Ambient Binary & Digital Particle Grid
function DigitalMatrixParticles({ count = 350 }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorChoices = [
      new THREE.Color('#38bdf8'),
      new THREE.Color('#818cf8'),
      new THREE.Color('#34d399'),
      new THREE.Color('#0284c7')
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const c = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
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
        size={0.032}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Responsive 3D Scene Root
function Responsive3DScene() {
  const [windowWidth, setWindowWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isSmallMobile = windowWidth < 480;
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth < 992;
  const scale = isSmallMobile ? 0.6 : isMobile ? 0.72 : isTablet ? 0.85 : 1;
  const posY = isMobile ? -0.1 : 0;

  return (
    <group scale={[scale, scale, scale]} position={[0, posY, 0]}>
      <ProgrammerLaptop />
      <FloatingDeveloperTokens />
      <DigitalMatrixParticles count={isMobile ? 180 : 280} />
    </group>
  );
}

export default function Hero3DCanvas() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '280px',
        position: 'relative'
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        {/* Lights */}
        <ambientLight intensity={1.4} />
        <directionalLight position={[5, 8, 5]} intensity={1.8} color="#ffffff" />
        <pointLight position={[6, 4, 3]} intensity={2.5} color="#0284c7" />
        <pointLight position={[-6, -4, 2]} intensity={2.0} color="#7c3aed" />
        <pointLight position={[0, -5, 3]} intensity={1.5} color="#10b981" />

        {/* Responsive 3D Scene */}
        <Responsive3DScene />
      </Canvas>

      {/* 3D Interactive Badge */}
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '5px 12px',
          background: 'var(--bg-glass)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '20px',
          fontSize: '0.72rem',
          fontFamily: 'var(--font-tech)',
          color: 'var(--text-secondary)',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          maxWidth: '92%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0284c7', boxShadow: '0 0 6px #0284c7', flexShrink: 0 }} />
        <span>Interactive 3D Workstation</span>
      </div>
    </div>
  );
}
