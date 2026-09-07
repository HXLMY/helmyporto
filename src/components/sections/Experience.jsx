import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Experience() {
  const { data } = useLanguage();
  const { experience } = data;

  return (
    <section
      id="experience"
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
          <span className="section-tag">{experience.sectionTag}</span>
          <h2 className="section-title">
            {experience.sectionTitle} <span className="text-gradient">{experience.sectionGradient}</span>
          </h2>
          <p className="section-desc">
            {experience.sectionDesc}
          </p>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}
        >
          {/* Vertical Line */}
          <div
            style={{
              position: 'absolute',
              top: '1rem',
              bottom: '1rem',
              left: '16px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--accent-cyan) 0%, var(--accent-purple) 50%, rgba(2, 132, 199, 0.2) 100%)',
              boxShadow: '0 0 10px rgba(2, 132, 199, 0.3)'
            }}
          />

          {experience.items.map((exp, idx) => (
            <div
              key={idx}
              className="timeline-item"
              style={{
                position: 'relative',
                paddingLeft: 'clamp(2.75rem, 6vw, 3.75rem)'
              }}
            >
              {/* Timeline Node Icon */}
              <div
                style={{
                  position: 'absolute',
                  left: '2px',
                  top: '1rem',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  background: 'var(--bg-secondary)',
                  border: '2px solid var(--accent-cyan)',
                  boxShadow: '0 0 12px rgba(2, 132, 199, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-cyan)',
                  zIndex: 2
                }}
              >
                {idx === 0 ? <Award size={15} /> : <Briefcase size={14} />}
              </div>

              {/* Experience Card */}
              <div
                className="glass-panel"
                style={{
                  padding: 'clamp(1.25rem, 3.5vw, 2.25rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Header info */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '0.75rem'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
                      <h3 style={{ fontSize: 'clamp(1.15rem, 3vw, 1.35rem)', color: 'var(--text-primary)', fontWeight: 800 }}>
                        {exp.role}
                      </h3>
                      {exp.type && (
                        <span
                          style={{
                            fontSize: '0.7rem',
                            padding: '0.2rem 0.6rem',
                            borderRadius: '999px',
                            background: 'rgba(2, 132, 199, 0.12)',
                            color: 'var(--accent-cyan)',
                            fontWeight: 700,
                            letterSpacing: '0.03em'
                          }}
                        >
                          {exp.type}
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: '1rem', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                      {exp.company}
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.25rem' }} className="timeline-date-col">
                    <div className="badge-pill" style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.3rem 0.75rem' }}>
                      <Calendar size={12} />
                      <span>{exp.period}</span>
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={12} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Brief Summary */}
                {exp.description && (
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65, fontWeight: 500 }}>
                    {exp.description}
                  </p>
                )}

                {/* Detailed Key Deliverables / Points */}
                {exp.points && exp.points.length > 0 && (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                      padding: 'clamp(0.85rem, 2.5vw, 1.25rem)',
                      background: 'rgba(148, 163, 184, 0.05)',
                      borderRadius: '12px',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.1rem' }}>
                      {experience.deliverablesHeading}
                    </div>
                    {exp.points.map((point, pIdx) => (
                      <div
                        key={pIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.55rem',
                          fontSize: '0.88rem',
                          color: 'var(--text-primary)',
                          lineHeight: 1.55
                        }}
                      >
                        <CheckCircle2
                          size={14}
                          style={{
                            color: 'var(--accent-cyan)',
                            flexShrink: 0,
                            marginTop: '3px'
                          }}
                        />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.2rem' }}>
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        padding: '0.2rem 0.6rem',
                        borderRadius: '6px',
                        background: 'rgba(148, 163, 184, 0.08)',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '0.72rem',
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
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .timeline-date-col {
            align-items: flex-end !important;
          }
        }
      `}</style>
    </section>
  );
}
