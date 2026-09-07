import React, { useState, useRef } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import ProjectModal from '../ui/ProjectModal';

// 3D Tilt Card Component
function ProjectCard({ project, onOpenModal }) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setTransformStyle(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlowPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenModal(project)}
      className="interactive-card glass-panel"
      style={{
        transform: transformStyle,
        transition: 'transform 0.15s ease-out, box-shadow 0.3s ease, background 0.3s ease',
        cursor: 'pointer',
        position: 'relative',
        borderRadius: '20px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Dynamic Cursor Light Spot on Card */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, ${project.accentGlow} 0%, transparent 60%)`,
          opacity: 0.25,
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* Visual Header Banner */}
      <div
        style={{
          height: '200px',
          background: project.gradient,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          borderBottom: '1px solid var(--border-subtle)',
          overflow: 'hidden'
        }}
      >
        <div className="grid-bg-layer" />

        {/* Project Screenshot Image if available */}
        {project.image ? (
          <>
            <img
              src={project.image}
              alt={project.title}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
                transition: 'transform 0.4s ease'
              }}
              className="project-card-image"
            />
            {/* Subtle bottom gradient */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(7, 10, 18, 0.65) 0%, transparent 60%)',
                pointerEvents: 'none'
              }}
            />
            {/* Bottom-right metric pill */}
            <div
              style={{
                position: 'absolute',
                bottom: '0.75rem',
                right: '0.75rem',
                zIndex: 2,
                padding: '0.3rem 0.65rem',
                background: 'var(--bg-glass)',
                backdropFilter: 'blur(10px)',
                borderRadius: '8px',
                border: `1px solid ${project.color}`,
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
              }}
            >
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 800, color: project.color }}>
                {project.stats.metric}
              </span>
              <span style={{ fontFamily: 'var(--font-tech)', fontSize: '0.68rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                {project.stats.label}
              </span>
            </div>
          </>
        ) : (
          /* Fallback Center metric pill */
          <div
            style={{
              zIndex: 2,
              padding: '0.55rem 1.15rem',
              background: 'var(--bg-glass)',
              backdropFilter: 'blur(8px)',
              borderRadius: '12px',
              border: `1.5px solid ${project.color}`,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
            }}
          >
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 800, color: project.color }}>
              {project.stats.metric}
            </span>
            <span style={{ fontFamily: 'var(--font-tech)', fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
              {project.stats.label}
            </span>
          </div>
        )}

        {/* Featured Badge */}
        {project.featured && (
          <div
            style={{
              position: 'absolute',
              top: '0.75rem',
              left: '0.75rem',
              zIndex: 3
            }}
          >
            <span className="badge-pill badge-glow" style={{ fontSize: '0.72rem', padding: '0.3rem 0.75rem' }}>
              <Sparkles size={11} /> Featured
            </span>
          </div>
        )}

        {/* Quick Modal Indicator Icon */}
        <div
          style={{
            position: 'absolute',
            top: '0.75rem',
            right: '0.75rem',
            zIndex: 3,
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'var(--bg-glass)',
            backdropFilter: 'blur(10px)',
            border: '1px solid var(--border-subtle)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-primary)'
          }}
        >
          <ArrowUpRight size={16} />
        </div>
      </div>

      {/* Card Content Body */}
      <div style={{ padding: 'clamp(1.25rem, 3vw, 1.65rem)', display: 'flex', flexDirection: 'column', gap: '0.85rem', flex: 1, zIndex: 2 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-tech)', color: project.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {project.category}
          </span>
        </div>

        <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', lineHeight: 1.3 }}>
          {project.title}
        </h3>

        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, flex: 1 }}>
          {project.tagline}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.25rem' }}>
          {project.tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              style={{
                fontSize: '0.72rem',
                fontFamily: 'var(--font-code)',
                padding: '0.2rem 0.55rem',
                borderRadius: '6px',
                background: 'rgba(148, 163, 184, 0.08)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border-subtle)',
                fontWeight: 500
              }}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', alignSelf: 'center', paddingLeft: '4px' }}>
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { data } = useLanguage();
  const { projects } = data;
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredProjects = projects.items.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'enterprise') return p.category.includes('Enterprise') || p.tags.includes('Enterprise KPI') || p.tags.includes('HSE / K3');
    if (filter === 'fullstack') return p.category.includes('Full') || p.category.includes('Supply') || p.category.includes('Operations') || p.category.includes('E-Commerce') || p.category.includes('Marketplace') || p.category.includes('Automotive') || p.tags.includes('E-Learning') || p.tags.includes('E-Commerce') || p.tags.includes('SaaS');
    if (filter === 'media') return p.category.includes('Media') || p.category.includes('CMS') || p.tags.includes('WordPress');
    return true;
  });

  return (
    <section id="projects" style={{ position: 'relative', padding: '5.5rem 0' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">{projects.sectionTag}</span>
          <h2 className="section-title">
            {projects.sectionTitle} <span className="text-gradient">{projects.sectionGradient}</span>
          </h2>
          <p className="section-desc">
            {projects.sectionDesc}
          </p>
        </div>

        {/* Filter Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '2.5rem'
          }}
        >
          {projects.filterOptions.map((opt) => {
            const isActive = filter === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => setFilter(opt.id)}
                style={{
                  padding: '0.45rem 1.15rem',
                  borderRadius: '9999px',
                  border: isActive ? '1.5px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                  background: isActive ? 'var(--accent-cyan)' : 'var(--bg-card)',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-tech)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 4px 15px rgba(2, 132, 199, 0.25)' : 'none'
                }}
              >
                {opt.label}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <style>{`
        .interactive-card:hover .project-card-image {
          transform: scale(1.06);
        }
      `}</style>
    </section>
  );
}
