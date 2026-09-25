import React from 'react';
import { Calendar, MapPin, CheckCircle2, Award, Briefcase } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Experience() {
  const { data } = useLanguage();
  const { experience } = data;

  return (
    <section
      id="experience"
      style={{
        position: 'relative',
        padding: '6rem 0',
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">{experience.sectionTag}</span>
          <h2 className="section-title">
            {experience.sectionTitle} <span className="text-gradient">{experience.sectionGradient}</span>
          </h2>
          <p className="section-desc">
            {experience.sectionDesc}
          </p>
        </div>

        {/* 2-Column Responsive Layout (Kiri dan Kanan agar Lebih Simple) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1180px',
            margin: '0 auto'
          }}
          className="experience-2col-grid"
        >
          {experience.items.map((exp, idx) => (
            <div
              key={idx}
              className="glass-panel exp-card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.1rem',
                borderRadius: '20px',
                border: '1px solid var(--border-subtle)',
                background: 'var(--bg-card)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Subtle accent corner glow */}
              <div
                style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  background: idx === 0 
                    ? 'radial-gradient(circle, rgba(2, 132, 199, 0.18) 0%, transparent 70%)'
                    : 'radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                  pointerEvents: 'none'
                }}
              />

              {/* Card Top: Role & Period / Location */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '0.65rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '10px',
                        background: 'rgba(2, 132, 199, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-cyan)',
                        flexShrink: 0
                      }}
                    >
                      {idx === 0 ? <Award size={16} /> : <Briefcase size={15} />}
                    </div>
                    {exp.type && (
                      <span
                        style={{
                          fontSize: '0.72rem',
                          padding: '2px 8px',
                          borderRadius: '6px',
                          background: 'rgba(2, 132, 199, 0.1)',
                          color: 'var(--accent-cyan)',
                          fontWeight: 700,
                          fontFamily: 'var(--font-tech)'
                        }}
                      >
                        {exp.type}
                      </span>
                    )}
                  </div>

                  <div className="badge-pill" style={{ fontSize: '0.74rem', fontWeight: 700, padding: '0.25rem 0.65rem' }}>
                    <Calendar size={11} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Role Title & Company */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.18rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.25rem',
                    lineHeight: 1.3
                  }}
                >
                  {exp.role}
                </h3>
                <div style={{ fontSize: '0.92rem', color: 'var(--accent-cyan)', fontWeight: 700, marginBottom: '0.35rem' }}>
                  {exp.company}
                </div>
                <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={11} />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Brief Description */}
              {exp.description && (
                <p
                  style={{
                    fontSize: '0.86rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.55,
                    margin: 0,
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  {exp.description}
                </p>
              )}

              {/* Key Deliverable Points (Concise 2-3 key points) */}
              {exp.points && exp.points.length > 0 && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.45rem',
                    padding: '0.85rem',
                    background: 'rgba(148, 163, 184, 0.05)',
                    borderRadius: '12px',
                    border: '1px solid var(--border-subtle)',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  {exp.points.slice(0, 3).map((point, pIdx) => (
                    <div
                      key={pIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.5rem',
                        fontSize: '0.82rem',
                        color: 'var(--text-primary)',
                        lineHeight: 1.45
                      }}
                    >
                      <CheckCircle2
                        size={13}
                        style={{
                          color: 'var(--accent-cyan)',
                          flexShrink: 0,
                          marginTop: '2px'
                        }}
                      />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', position: 'relative', zIndex: 1 }}>
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    style={{
                      padding: '2px 7px',
                      borderRadius: '6px',
                      background: 'rgba(148, 163, 184, 0.08)',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.7rem',
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-tech)',
                      fontWeight: 600
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .exp-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent-cyan) !important;
          box-shadow: 0 12px 35px rgba(2, 132, 199, 0.12) !important;
        }
        @media (max-width: 640px) {
          .experience-2col-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
