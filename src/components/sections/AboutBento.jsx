import React, { useState } from 'react';
import { Sparkles, Terminal, Zap, ShieldCheck, Cpu, Code2, CheckCircle2, Copy, Check } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function AboutBento() {
  const { data } = useLanguage();
  const { aboutBento, personal } = data;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="about"
      style={{
        position: 'relative',
        padding: '5.5rem 0',
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">{aboutBento.sectionTag}</span>
          <h2 className="section-title">
            {aboutBento.sectionTitle} <span className="text-gradient">{aboutBento.sectionGradient}</span>
          </h2>
          <p className="section-desc">
            {aboutBento.sectionDesc}
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1.25rem'
          }}
          className="bento-grid"
        >
          {/* Bento Card 1: Main Philosophy (Span 8) */}
          <div
            className="glass-panel bento-col-8"
            style={{
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background ambient gradient */}
            <div
              style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(2, 132, 199, 0.1) 0%, transparent 70%)',
                filter: 'blur(50px)',
                pointerEvents: 'none'
              }}
            />

            <div>
              {/* Profile Card Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                <div
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '18px',
                    padding: '2.5px',
                    background: 'linear-gradient(135deg, #0284c7 0%, #7c3aed 100%)',
                    boxShadow: '0 6px 20px rgba(2, 132, 199, 0.25)',
                    flexShrink: 0
                  }}
                >
                  <img
                    src={personal.avatar || '/helmy.jpeg'}
                    alt={personal.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '16px',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>
                <div>
                  <div
                    className="badge-pill badge-glow"
                    style={{ marginBottom: '0.35rem', width: 'fit-content' }}
                  >
                    <Sparkles size={13} />
                    <span>{aboutBento.principleBadge}</span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.15rem', color: 'var(--text-primary)' }}>
                    {personal.name}
                  </div>
                  <div style={{ fontFamily: 'var(--font-tech)', fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                    {personal.title}
                  </div>
                </div>
              </div>

              <h3
                style={{
                  fontSize: 'clamp(1.35rem, 3vw, 2rem)',
                  marginBottom: '0.85rem',
                  lineHeight: 1.2,
                  color: 'var(--text-primary)'
                }}
              >
                {aboutBento.headline}
              </h3>
              <p
                style={{
                  fontSize: 'clamp(0.92rem, 2vw, 1.02rem)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  maxWidth: '620px'
                }}
              >
                {aboutBento.philosophy}
              </p>
            </div>

            {/* Feature Badges list */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginTop: '1.75rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--border-subtle)'
              }}
            >
              {aboutBento.features.map((feat, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: 'var(--text-primary)', fontFamily: 'var(--font-tech)', fontWeight: 600 }}>
                  <CheckCircle2 size={15} color="var(--accent-cyan)" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bento Card 2: Interactive Terminal / Code Snippet (Span 4) */}
          <div
            className="glass-panel bento-col-4"
            style={{
              padding: 'clamp(1.25rem, 3vw, 1.75rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              fontFamily: 'var(--font-code)',
              fontSize: '0.82rem',
              background: '#090d16',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            {/* Terminal Header */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.85rem',
                  paddingBottom: '0.65rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#ff5f56' }} />
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#ffbd2e' }} />
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#27c93f' }} />
                </div>
                <div style={{ fontSize: '0.72rem', color: '#64748b' }}>{aboutBento.terminalConfig}</div>
              </div>

              {/* Code display */}
              <div style={{ lineHeight: 1.6, color: '#94a3b8', fontSize: '0.82rem' }}>
                <div><span style={{ color: '#f43f5e' }}>const</span> developer = &#123;</div>
                <div style={{ paddingLeft: '0.85rem' }}>name: <span style={{ color: '#34d399' }}>'{personal.name}'</span>,</div>
                <div style={{ paddingLeft: '0.85rem' }}>role: <span style={{ color: '#38bdf8' }}>'Full Stack & SAP ABAP'</span>,</div>
                <div style={{ paddingLeft: '0.85rem' }}>stack: [<span style={{ color: '#fbbf24' }}>'Laravel'</span>, <span style={{ color: '#fbbf24' }}>'Next.js'</span>, <span style={{ color: '#fbbf24' }}>'S/4HANA'</span>],</div>
                <div style={{ paddingLeft: '0.85rem' }}>webExp: <span style={{ color: '#34d399' }}>'Since 2021'</span>,</div>
                <div style={{ paddingLeft: '0.85rem' }}>abapExp: <span style={{ color: '#34d399' }}>'Since 2024'</span>,</div>
                <div style={{ paddingLeft: '0.85rem' }}>projects: <span style={{ color: '#60a5fa' }}>'25+ Delivered'</span></div>
                <div>&#125;;</div>
              </div>
            </div>

            {/* Direct Copy Email Box */}
            <div
              onClick={handleCopyEmail}
              style={{
                marginTop: '1.25rem',
                padding: '0.65rem 0.85rem',
                background: 'rgba(255, 255, 255, 0.06)',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                gap: '0.5rem'
              }}
            >
              <span style={{ color: '#f8fafc', fontSize: '0.74rem', wordBreak: 'break-all' }}>{personal.email}</span>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  color: copied ? '#38bdf8' : '#94a3b8',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.72rem',
                  flexShrink: 0
                }}
              >
                {copied ? <Check size={13} /> : <Copy size={13} />}
                <span>{copied ? aboutBento.copiedEmail : aboutBento.copyEmail}</span>
              </button>
            </div>
          </div>

          {/* Bento Cards 3, 4, 5: Highlights (3 Columns) */}
          {aboutBento.highlights.map((item, idx) => (
            <div
              key={item.id}
              className="glass-panel bento-col-4"
              style={{
                padding: 'clamp(1.25rem, 3vw, 1.75rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: idx === 0 ? 'rgba(2, 132, 199, 0.12)' : idx === 1 ? 'rgba(217, 119, 6, 0.12)' : 'rgba(124, 58, 237, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: idx === 0 ? 'var(--accent-cyan)' : idx === 1 ? 'var(--accent-gold)' : 'var(--accent-purple)'
                  }}
                >
                  {idx === 0 ? <Sparkles size={20} /> : idx === 1 ? <Zap size={20} /> : <Cpu size={20} />}
                </div>

                <span
                  style={{
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-tech)',
                    fontWeight: 700,
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase'
                  }}
                >
                  {item.badge}
                </span>
              </div>

              <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)' }}>{item.title}</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bento-col-8 { grid-column: span 12; }
        .bento-col-4 { grid-column: span 12; }
        @media (min-width: 900px) {
          .bento-col-8 { grid-column: span 8; }
          .bento-col-4 { grid-column: span 4; }
        }
      `}</style>
    </section>
  );
}
