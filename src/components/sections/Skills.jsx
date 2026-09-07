import React, { useState } from 'react';
import { Boxes, Code2, FileCode, Sparkles, Palette, Server, Database, Cpu, Terminal, Layers, Box, Gauge } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import TechSolarSystem3D from '../3d/TechSolarSystem3D';
import TechCodePlayground from '../code/TechCodePlayground';

const iconMap = {
  Code2: <Code2 size={20} />,
  Boxes: <Boxes size={20} />,
  FileCode: <FileCode size={20} />,
  Sparkles: <Sparkles size={20} />,
  Palette: <Palette size={20} />,
  Server: <Server size={20} />,
  Database: <Database size={20} />,
  Cpu: <Cpu size={20} />,
  Terminal: <Terminal size={20} />,
  Layers: <Layers size={20} />,
  Box: <Box size={20} />,
  Gauge: <Gauge size={20} />
};

export default function Skills({ playClickSound, playHoverSound }) {
  const { data } = useLanguage();
  const { skills } = data;
  const [activeCategory, setActiveCategory] = useState('all');
  const [leftTab, setLeftTab] = useState('3d'); // '3d' or 'code'

  const filteredSkills = activeCategory === 'all'
    ? skills.items
    : skills.items.filter(s => s.category === activeCategory);

  const handleCategoryChange = (catId) => {
    if (playClickSound) playClickSound();
    setActiveCategory(catId);
  };

  return (
    <section id="skills" style={{ position: 'relative', padding: '6.5rem 0', overflow: 'hidden' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">{skills.sectionTag}</span>
          <h2 className="section-title">
            {skills.sectionTitle} <span className="text-gradient">{skills.sectionGradient}</span>
          </h2>
          <p className="section-desc">
            {skills.sectionDesc}
          </p>
        </div>

        {/* 2 Column Layout: 3D Solar System / Code Playground + Skill Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'start'
          }}
          className="skills-layout"
        >
          {/* Left Column: Interactive 3D Solar System & Code Playground */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Mode Switcher */}
            <div
              style={{
                display: 'flex',
                gap: '8px',
                background: 'rgba(15, 23, 42, 0.04)',
                padding: '4px',
                borderRadius: '14px',
                border: '1px solid rgba(15, 23, 42, 0.08)',
                width: 'fit-content'
              }}
            >
              <button
                onClick={() => setLeftTab('3d')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '0.45rem 0.9rem',
                  borderRadius: '10px',
                  border: 'none',
                  background: leftTab === '3d' ? 'linear-gradient(135deg, #0284c7 0%, #7c3aed 100%)' : 'transparent',
                  color: leftTab === '3d' ? '#ffffff' : 'var(--text-secondary)',
                  fontWeight: leftTab === '3d' ? 700 : 500,
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-tech)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: leftTab === '3d' ? '0 4px 12px rgba(2, 132, 199, 0.25)' : 'none'
                }}
              >
                <span>🪐 3D Solar System (Orbit)</span>
              </button>
              <button
                onClick={() => setLeftTab('code')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '0.45rem 0.9rem',
                  borderRadius: '10px',
                  border: 'none',
                  background: leftTab === 'code' ? 'linear-gradient(135deg, #0284c7 0%, #7c3aed 100%)' : 'transparent',
                  color: leftTab === 'code' ? '#ffffff' : 'var(--text-secondary)',
                  fontWeight: leftTab === 'code' ? 700 : 500,
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-tech)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: leftTab === 'code' ? '0 4px 12px rgba(2, 132, 199, 0.25)' : 'none'
                }}
              >
                <span>⚡ Code &amp; Test Suite</span>
              </button>
            </div>

            {leftTab === '3d' ? (
              <TechSolarSystem3D height="460px" showControls={true} />
            ) : (
              <TechCodePlayground playClickSound={playClickSound} playHoverSound={playHoverSound} />
            )}
          </div>

          {/* Right Column: Filter Tabs & Skill Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Category Filter Tabs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.6rem',
                background: 'rgba(15, 23, 42, 0.04)',
                padding: '0.4rem',
                borderRadius: '14px',
                border: '1px solid rgba(15, 23, 42, 0.08)'
              }}
            >
              {skills.categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    onMouseEnter={playHoverSound}
                    style={{
                      flex: 1,
                      minWidth: '110px',
                      padding: '0.6rem 1rem',
                      borderRadius: '10px',
                      border: 'none',
                      background: isActive ? 'linear-gradient(135deg, #0284c7 0%, #7c3aed 100%)' : 'transparent',
                      color: isActive ? '#ffffff' : 'var(--text-secondary)',
                      fontFamily: 'var(--font-tech)',
                      fontWeight: isActive ? 700 : 500,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      boxShadow: isActive ? '0 4px 15px rgba(2, 132, 199, 0.25)' : 'none'
                    }}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Skills Grid List */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1rem'
              }}
            >
              {filteredSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="glass-panel"
                  onMouseEnter={playHoverSound}
                  style={{
                    padding: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {skill.highlight && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '32px',
                        height: '32px',
                        background: 'linear-gradient(135deg, transparent 50%, #0284c7 50%)',
                        borderTopRightRadius: '20px'
                      }}
                    />
                  )}

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '8px',
                          background: 'rgba(2, 132, 199, 0.08)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#0284c7'
                        }}
                      >
                        {iconMap[skill.icon] || <Code2 size={18} />}
                      </div>
                      <span style={{ fontWeight: 600, fontSize: '0.92rem', color: '#0f172a' }}>
                        {skill.name}
                      </span>
                    </div>

                    <span
                      style={{
                        fontFamily: 'var(--font-code)',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: '#0284c7'
                      }}
                    >
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div
                    style={{
                      width: '100%',
                      height: '5px',
                      background: 'rgba(15, 23, 42, 0.08)',
                      borderRadius: '10px',
                      overflow: 'hidden'
                    }}
                  >
                    <div
                      style={{
                        width: `${skill.level}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, #0284c7 0%, #7c3aed 100%)',
                        borderRadius: '10px',
                        transition: 'width 0.8s ease'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .skills-layout {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
