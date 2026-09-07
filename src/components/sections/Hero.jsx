import React from 'react';
import { Sparkles, ArrowRight, Github, Linkedin, Instagram, Mail, Globe, MessageCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import TechSolarSystem3D from '../3d/TechSolarSystem3D';

export default function Hero() {
  const { data } = useLanguage();
  const { personal, hero } = data;

  const directWaUrl = `https://wa.me/6285710815159?text=${encodeURIComponent('Halo Helmy Wahyudi, saya ingin berdiskusi mengenai proyek / kolaborasi.')}`;

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 'clamp(6.5rem, 14vw, 8rem)',
        paddingBottom: '3rem',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '100vw'
      }}
    >
      {/* Ambient background glow orbs */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: 'clamp(220px, 35vw, 450px)',
          height: 'clamp(220px, 35vw, 450px)',
          background: 'radial-gradient(circle, rgba(2, 132, 199, 0.12) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '25%',
          right: '5%',
          width: 'clamp(240px, 40vw, 500px)',
          height: 'clamp(240px, 40vw, 500px)',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1240px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            alignItems: 'center',
            width: '100%'
          }}
          className="hero-grid"
        >
          {/* Left Column: Text & Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              width: '100%',
              minWidth: 0
            }}
          >
            {/* Profile Avatar & Status Live Beacon */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <div
                style={{
                  position: 'relative',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  padding: '2.5px',
                  background: 'linear-gradient(135deg, #0284c7 0%, #7c3aed 50%, #f43f5e 100%)',
                  boxShadow: '0 4px 18px rgba(2, 132, 199, 0.25)',
                  flexShrink: 0
                }}
              >
                <img
                  src={personal.avatar || '/helmy.jpeg'}
                  alt={personal.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    bottom: '1px',
                    right: '1px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#10b981',
                    border: '2px solid #ffffff',
                    boxShadow: '0 0 8px #10b981'
                  }}
                />
              </div>

              <div
                className="badge-pill badge-glow"
                style={{
                  cursor: 'default',
                  maxWidth: '100%',
                  fontSize: '0.76rem',
                  padding: '0.35rem 0.8rem'
                }}
              >
                <span className="pulse-active" style={{ flexShrink: 0 }} />
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {personal.status}
                </span>
              </div>
            </div>

            {/* Headline Title */}
            <h1
              style={{
                fontSize: 'clamp(1.85rem, 5.5vw, 3.8rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
                width: '100%'
              }}
            >
              {hero.headlinePrefix}{' '}
              <span className="text-gradient">{hero.headlineGradient}</span> {hero.headlineSuffix}
            </h1>

            {/* Sub-headline */}
            <p
              style={{
                fontSize: 'clamp(0.92rem, 2.5vw, 1.08rem)',
                color: 'var(--text-secondary)',
                maxWidth: '600px',
                lineHeight: 1.7,
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
                width: '100%'
              }}
            >
              {hero.greeting} <strong style={{ color: 'var(--text-primary)' }}>{personal.name}</strong>. {personal.bio}
            </p>

            {/* CTA Action Buttons */}
            <div
              className="hero-cta-group"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginTop: '0.25rem',
                width: '100%'
              }}
            >
              <a
                href="#projects"
                className="btn-primary"
              >
                <span>{hero.ctaProjects}</span>
                <ArrowRight size={18} />
              </a>

              <a
                href={directWaUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle size={18} />
                <span>Chat WhatsApp</span>
              </a>
            </div>

            {/* Social Links & Location Info */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-subtle)',
                width: '100%'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="btn-secondary"
                  style={{ width: '38px', height: '38px', padding: 0, borderRadius: '10px' }}
                >
                  <Github size={17} />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="btn-secondary"
                  style={{ width: '38px', height: '38px', padding: 0, borderRadius: '10px' }}
                >
                  <Linkedin size={17} />
                </a>
                <a
                  href={personal.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram Profile"
                  className="btn-secondary"
                  style={{ width: '38px', height: '38px', padding: 0, borderRadius: '10px' }}
                >
                  <Instagram size={17} />
                </a>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-tech)',
                  wordBreak: 'break-word'
                }}
              >
                <Globe size={14} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
                <span>{personal.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Tech Solar System (Planets Orbiting Sun) */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              minWidth: 0,
              height: 'clamp(340px, 48vw, 470px)',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '24px',
              overflow: 'hidden'
            }}
          >
            <TechSolarSystem3D height="100%" showControls={true} />
          </div>
        </div>

        {/* Real-Time Stats Grid Bar */}
        <div
          className="hero-stats-grid"
          style={{
            marginTop: '2.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(135px, 1fr))',
            gap: '0.85rem',
            width: '100%'
          }}
        >
          {personal.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '0.85rem 1.1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.2rem',
                borderLeft: '3px solid var(--accent-cyan)'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.4rem, 3.5vw, 1.85rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '2px'
                }}
              >
                <span>{stat.value}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>{stat.suffix}</span>
              </div>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-tech)',
                  color: 'var(--text-secondary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em'
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
            gap: 2.5rem !important;
          }
        }
        @media (max-width: 520px) {
          .hero-cta-group {
            flex-direction: column !important;
          }
          .hero-cta-group a {
            width: 100% !important;
            justify-content: center !important;
          }
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
