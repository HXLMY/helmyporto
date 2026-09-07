import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Sparkles, MessageCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function ProjectModal({ project, onClose }) {
  const { data } = useLanguage();
  const modalText = data.projects.modal;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const directWaUrl = `https://wa.me/6285710815159?text=${encodeURIComponent(`Halo Helmy, saya tertarik dengan proyek "${project.title}". Bisa diskusikan lebih lanjut?`)}`;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        backgroundColor: 'rgba(5, 5, 8, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)'
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '720px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: 'clamp(1.25rem, 4vw, 2.25rem)',
          position: 'relative',
          background: 'var(--bg-card)',
          border: `1.5px solid ${project.color}55`,
          boxShadow: `0 25px 60px rgba(0, 0, 0, 0.35), 0 0 40px ${project.accentGlow}`
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label={modalText.closeLabel}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'var(--bg-glass)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            zIndex: 10
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem', paddingRight: '2.5rem' }}>
          <span
            className="badge-pill"
            style={{ background: `${project.color}15`, color: project.color, borderColor: `${project.color}44`, fontWeight: 700 }}
          >
            {project.category}
          </span>
          {project.featured && (
            <span className="badge-pill badge-glow">
              <Sparkles size={12} /> Featured
            </span>
          )}
        </div>

        <h3 style={{ fontSize: 'clamp(1.4rem, 4vw, 1.9rem)', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
          {project.title}
        </h3>

        <p style={{ fontSize: '1rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '1.25rem' }}>
          {project.tagline}
        </p>

        {/* Dynamic Project Visual Box */}
        <div
          style={{
            width: '100%',
            height: project.image ? 'clamp(180px, 35vw, 280px)' : '180px',
            borderRadius: '16px',
            background: project.gradient,
            border: `1px solid ${project.color}33`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div className="grid-bg-layer" />

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
                  objectPosition: 'top center'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(7, 10, 18, 0.6) 0%, transparent 60%)',
                  pointerEvents: 'none'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '0.75rem',
                  right: '0.75rem',
                  zIndex: 2,
                  padding: '0.4rem 0.85rem',
                  borderRadius: '10px',
                  background: 'var(--bg-glass)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${project.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)'
                }}
              >
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: project.color, fontFamily: 'var(--font-display)' }}>
                  {project.stats.metric}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-tech)', fontWeight: 600 }}>
                  {project.stats.label}
                </span>
              </div>
            </>
          ) : (
            <div
              style={{
                zIndex: 2,
                padding: '0.75rem 1.35rem',
                borderRadius: '12px',
                background: 'var(--bg-glass)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
              }}
            >
              <span style={{ fontSize: '1.6rem', fontWeight: 800, color: project.color, fontFamily: 'var(--font-display)' }}>
                {project.stats.metric}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-tech)', fontWeight: 600 }}>
                {project.stats.label}
              </span>
            </div>
          )}
        </div>

        {/* Description */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '0.88rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem', fontFamily: 'var(--font-tech)', fontWeight: 700 }}>
            {modalText.aboutTitle}
          </h4>
          <p style={{ fontSize: '0.94rem', color: 'var(--text-primary)', lineHeight: 1.8 }}>
            {project.description}
          </p>
        </div>

        {/* Tech Tags */}
        <div style={{ marginBottom: '1.75rem' }}>
          <h4 style={{ fontSize: '0.88rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.6rem', fontFamily: 'var(--font-tech)', fontWeight: 700 }}>
            {modalText.stackTitle}
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {project.tags.map((tag, i) => (
              <span
                key={i}
                style={{
                  padding: '0.3rem 0.75rem',
                  borderRadius: '8px',
                  background: 'rgba(148, 163, 184, 0.08)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: '0.78rem',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-code)',
                  fontWeight: 600
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          <a
            href={directWaUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp"
            style={{ flex: 1, minWidth: '140px', fontSize: '0.88rem' }}
          >
            <MessageCircle size={16} />
            <span>Diskusikan via WA</span>
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
            style={{ flex: 1, minWidth: '140px', fontSize: '0.88rem' }}
          >
            <Github size={16} />
            <span>{modalText.sourceCode}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
