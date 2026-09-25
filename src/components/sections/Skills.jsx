import React, { useState } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { TechIcon } from '../ui/TechIcons';

export default function Skills({ playClickSound, playHoverSound }) {
  const { data } = useLanguage();
  const { skills, aiTools } = data;

  // Active Category State for Skills
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter skills based on category
  const filteredSkills = activeCategory === 'all'
    ? skills.items
    : skills.items.filter(s => s.category === activeCategory);

  // Duplicate for seamless single-row infinite marquee
  const infiniteSkills = [...skills.items, ...skills.items, ...skills.items];
  const infiniteAiTools = aiTools ? [...aiTools.items, ...aiTools.items, ...aiTools.items, ...aiTools.items] : [];

  return (
    <section id="skills" style={{ position: 'relative', padding: '6rem 0 5.5rem 0', overflow: 'hidden' }}>
      {/* Background Ambient Glows */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '-8%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(2, 132, 199, 0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '-8%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* ===================================================================
            SECTION 1: SKILLS CAROUSEL (Single-Row Flow, Card Order: Logo -> Header -> Desc)
            =================================================================== */}
        <div className="section-header" style={{ marginBottom: '2rem' }}>
          <span className="section-tag">{skills.sectionTag}</span>
          <h2 className="section-title">
            {skills.sectionTitle} <span className="text-gradient">{skills.sectionGradient}</span>
          </h2>
          <p className="section-desc">
            {skills.sectionDesc}
          </p>
        </div>

        {/* 1-ROW CATEGORY TABS */}
        <div className="category-scroll-container">
          <div className="category-tabs-bar">
            {skills.categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    if (playClickSound) playClickSound();
                    setActiveCategory(cat.id);
                  }}
                  onMouseEnter={playHoverSound}
                  className={`category-pill-btn ${isActive ? 'active' : ''}`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* If 'All' is selected: Single-Row Infinite Smooth Carousel (Logo -> Header -> Desc) */}
        {activeCategory === 'all' ? (
          <div style={{ position: 'relative', marginBottom: '5.5rem' }}>
            {/* Edge Fade Masks */}
            <div className="marquee-mask-left" />
            <div className="marquee-mask-right" />

            {/* 1 Single Direction Infinite Continuous Marquee */}
            <div className="marquee-wrapper">
              <div className="marquee-content marquee-single">
                {infiniteSkills.map((skill, idx) => (
                  <div
                    key={`skill-${idx}`}
                    className="glass-panel skill-card-vertical"
                    onMouseEnter={playHoverSound}
                  >
                    {/* 1. LOGO */}
                    <div className="skill-card-icon-wrap">
                      <TechIcon name={skill.name} size={32} />
                    </div>

                    {/* 2. HEADER */}
                    <div className="skill-card-header">
                      {skill.name}
                    </div>

                    {/* 3. DESC */}
                    {skill.badge && (
                      <div className="skill-card-desc">
                        {skill.badge}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Filtered Category Cards Grid (Logo -> Header -> Desc) */
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
              gap: '1.1rem',
              maxWidth: '1100px',
              margin: '0 auto 5.5rem auto',
              justifyContent: 'center'
            }}
            className="filtered-skills-grid"
          >
            {filteredSkills.map((skill, idx) => (
              <div
                key={idx}
                className="glass-panel skill-card-vertical"
                onMouseEnter={playHoverSound}
              >
                {/* 1. LOGO */}
                <div className="skill-card-icon-wrap">
                  <TechIcon name={skill.name} size={34} />
                </div>

                {/* 2. HEADER */}
                <div className="skill-card-header">
                  {skill.name}
                </div>

                {/* 3. DESC */}
                {skill.badge && (
                  <div className="skill-card-desc">
                    {skill.badge}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ===================================================================
            SECTION 2: AI TOOLS CAROUSEL (Moving Cards Carousel without desc)
            =================================================================== */}
        {aiTools && (
          <div style={{ position: 'relative', marginTop: '1rem' }}>
            {/* AI Tools Header */}
            <div className="section-header" style={{ marginBottom: '2.25rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  background: 'rgba(124, 58, 237, 0.08)',
                  border: '1px solid rgba(124, 58, 237, 0.25)',
                  color: 'var(--accent-purple)',
                  fontFamily: 'var(--font-tech)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  marginBottom: '0.75rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase'
                }}
              >
                <Sparkles size={14} />
                <span>{aiTools.sectionTag}</span>
              </div>
              <h2 className="section-title">
                {aiTools.sectionTitle} <span className="text-gradient">{aiTools.sectionGradient}</span>
              </h2>
              <p className="section-desc">
                {aiTools.sectionDesc}
              </p>
            </div>

            {/* AI Tools Infinite Smooth Moving Cards Carousel (No desc) */}
            <div style={{ position: 'relative' }}>
              {/* Edge Fade Masks */}
              <div className="marquee-mask-left" />
              <div className="marquee-mask-right" />

              <div className="marquee-wrapper">
                <div className="marquee-content marquee-ai">
                  {infiniteAiTools.map((tool, idx) => (
                    <div
                      key={`ai-${idx}`}
                      className="glass-panel ai-carousel-card"
                      onMouseEnter={playHoverSound}
                      style={{
                        border: `1.5px solid ${tool.color}35`,
                        boxShadow: `0 8px 25px rgba(0, 0, 0, 0.04), 0 0 18px ${tool.color}14`
                      }}
                    >
                      {/* Ambient Accent Radial Glow */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '-15%',
                          right: '-15%',
                          width: '100px',
                          height: '100px',
                          borderRadius: '50%',
                          background: tool.gradient || `radial-gradient(circle, ${tool.color}25 0%, transparent 70%)`,
                          filter: 'blur(25px)',
                          pointerEvents: 'none',
                          zIndex: 0
                        }}
                      />

                      {/* 1. Header: Icon + Vendor Badge */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', position: 'relative', zIndex: 1 }}>
                        <div
                          className="ai-card-icon"
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '12px',
                            background: 'rgba(15, 23, 42, 0.04)',
                            border: `1px solid ${tool.color}35`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: `0 4px 12px ${tool.color}20`
                          }}
                        >
                          <TechIcon name={tool.icon || tool.name} size={28} />
                        </div>

                        <span
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            fontFamily: 'var(--font-tech)',
                            padding: '3px 8px',
                            borderRadius: '8px',
                            background: `${tool.color}15`,
                            color: tool.color,
                            border: `1px solid ${tool.color}35`,
                            letterSpacing: '0.02em',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {tool.vendor}
                        </span>
                      </div>

                      {/* 2. Tool Name (Header) */}
                      <div style={{ position: 'relative', zIndex: 1 }}>
                        <h3
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.15rem',
                            fontWeight: 700,
                            color: 'var(--text-primary)',
                            margin: 0,
                            lineHeight: 1.25
                          }}
                        >
                          {tool.name}
                        </h3>
                      </div>

                      {/* 3. Active Status Footer */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-tech)',
                          fontWeight: 600,
                          color: 'var(--text-muted)',
                          borderTop: '1px solid var(--border-subtle)',
                          paddingTop: '0.55rem',
                          position: 'relative',
                          zIndex: 1
                        }}
                      >
                        <CheckCircle2 size={12} color="#10b981" />
                        <span>Active Integration</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Styled CSS */}
      <style>{`
        /* Perfectly Centered 1-Row Category Tabs Bar */
        .category-scroll-container {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2.5rem auto;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 0.25rem 0.5rem;
        }

        .category-scroll-container::-webkit-scrollbar {
          display: none;
        }

        .category-tabs-bar {
          display: inline-flex;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          padding: 0.35rem 0.5rem;
          background: var(--bg-card);
          backdrop-filter: blur(16px);
          border-radius: 9999px;
          border: 1px solid var(--border-subtle);
          box-shadow: var(--shadow-sm);
          white-space: nowrap;
          margin: 0 auto;
        }

        .category-pill-btn {
          padding: 0.45rem 1rem;
          border-radius: 9999px;
          border: none;
          background: transparent;
          color: var(--text-secondary);
          font-family: var(--font-tech);
          font-weight: 600;
          font-size: 0.83rem;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
          text-align: center;
        }

        .category-pill-btn:hover {
          color: var(--accent-cyan);
        }

        .category-pill-btn.active {
          background: linear-gradient(135deg, #0284c7 0%, #2563eb 100%);
          color: #ffffff;
          font-weight: 700;
          box-shadow: 0 4px 14px rgba(2, 132, 199, 0.3);
        }

        /* 1 Single-Row Continuous Infinite Marquee */
        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          display: flex;
          position: relative;
        }

        .marquee-content {
          display: flex;
          gap: 1rem;
          flex-shrink: 0;
          will-change: transform;
        }

        .marquee-single {
          animation: marqueeSingle 45s linear infinite;
        }

        .marquee-ai {
          animation: marqueeAi 35s linear infinite;
        }

        .marquee-wrapper:hover .marquee-content {
          animation-play-state: paused;
        }

        @keyframes marqueeSingle {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }

        @keyframes marqueeAi {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-25%); }
        }

        /* Edge Fade Mask */
        .marquee-mask-left {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 70px;
          background: linear-gradient(to right, var(--bg-primary) 0%, transparent 100%);
          z-index: 5;
          pointer-events: none;
        }

        .marquee-mask-right {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          width: 70px;
          background: linear-gradient(to left, var(--bg-primary) 0%, transparent 100%);
          z-index: 5;
          pointer-events: none;
        }

        /* Skill Card (Order: 1. Logo, 2. Header, 3. Desc) */
        .skill-card-vertical {
          width: 165px;
          min-width: 165px;
          padding: 1.15rem 0.9rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justifyContent: center;
          text-align: center;
          gap: 0.65rem;
          border-radius: 18px;
          border: 1px solid var(--border-subtle);
          background: var(--bg-card);
          box-shadow: var(--shadow-sm);
          cursor: pointer;
          user-select: none;
          flex-shrink: 0;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .skill-card-vertical:hover {
          transform: translateY(-5px) scale(1.02);
          border-color: var(--accent-cyan);
          box-shadow: 0 10px 25px rgba(2, 132, 199, 0.18);
          background: var(--bg-card-hover);
        }

        .skill-card-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(15, 23, 42, 0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .skill-card-vertical:hover .skill-card-icon-wrap {
          transform: scale(1.12);
        }

        .skill-card-header {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.92rem;
          color: var(--text-primary);
          line-height: 1.25;
        }

        .skill-card-desc {
          font-family: var(--font-code);
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--accent-cyan);
          background: rgba(2, 132, 199, 0.08);
          padding: 2px 7px;
          border-radius: 6px;
          line-height: 1.2;
          white-space: nowrap;
        }

        /* AI Moving Carousel Card (Simplified Without Desc) */
        .ai-carousel-card {
          width: 220px;
          min-width: 220px;
          padding: 1.1rem;
          border-radius: 18px;
          background: var(--bg-card);
          backdrop-filter: blur(16px);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          gap: 0.75rem;
          cursor: default;
          user-select: none;
          flex-shrink: 0;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ai-carousel-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1) !important;
          background: var(--bg-card-hover);
        }

        .ai-carousel-card:hover .ai-card-icon {
          transform: scale(1.1);
        }

        @media (max-width: 640px) {
          .marquee-mask-left, .marquee-mask-right {
            width: 35px;
          }
          .skill-card-vertical {
            width: 145px;
            min-width: 145px;
            padding: 1rem 0.75rem;
          }
          .ai-carousel-card {
            width: 195px;
            min-width: 195px;
            padding: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
}
