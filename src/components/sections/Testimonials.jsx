import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Testimonials({ playClickSound, playHoverSound }) {
  const { data } = useLanguage();
  const { testimonials } = data;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    if (playClickSound) playClickSound();
    setCurrentIndex((prev) => (prev === 0 ? testimonials.items.length - 1 : prev - 1));
  };

  const next = () => {
    if (playClickSound) playClickSound();
    setCurrentIndex((prev) => (prev === testimonials.items.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials.items[currentIndex] || testimonials.items[0];

  return (
    <section id="testimonials" style={{ position: 'relative', padding: '6.5rem 0', overflow: 'hidden' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">{testimonials.sectionTag}</span>
          <h2 className="section-title">
            {testimonials.sectionTitle} <span className="text-gradient">{testimonials.sectionGradient}</span>
          </h2>
          <p className="section-desc">
            {testimonials.sectionDesc}
          </p>
        </div>

        {/* Featured Testimonial Card Slider */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            position: 'relative'
          }}
        >
          <div
            className="glass-panel"
            onMouseEnter={playHoverSound}
            style={{
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              position: 'relative',
              borderRadius: '28px',
              border: '1px solid rgba(15, 23, 42, 0.08)',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.96) 0%, rgba(248, 250, 252, 0.9) 100%)',
              boxShadow: '0 20px 50px rgba(15, 23, 42, 0.08)'
            }}
          >
            {/* Ambient Accent Quote Glow */}
            <div
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2.5rem',
                opacity: 0.08,
                color: '#0284c7'
              }}
            >
              <Quote size={80} />
            </div>

            {/* Rating Stars */}
            <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem' }}>
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} size={18} fill="#d97706" color="#d97706" />
              ))}
            </div>

            {/* Testimonial text */}
            <p
              style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
                color: '#0f172a',
                lineHeight: 1.7,
                fontFamily: 'var(--font-body)',
                fontStyle: 'normal',
                marginBottom: '2rem',
                position: 'relative',
                zIndex: 2,
                fontWeight: 500
              }}
            >
              "{current.content}"
            </p>

            {/* Client Info */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(15, 23, 42, 0.08)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img
                  src={current.avatar}
                  alt={current.name}
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid #0284c7',
                    boxShadow: '0 0 12px rgba(2, 132, 199, 0.25)'
                  }}
                />
                <div>
                  <h4 style={{ fontSize: '1.15rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {current.name}
                    <CheckCircle size={15} color="#0284c7" />
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-tech)', fontWeight: 500 }}>
                    {current.role}
                  </p>
                </div>
              </div>

              {/* Slider Controls */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <button
                  onClick={prev}
                  onMouseEnter={playHoverSound}
                  aria-label="Previous Testimonial"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'rgba(15, 23, 42, 0.05)',
                    border: '1px solid rgba(15, 23, 42, 0.08)',
                    color: '#0f172a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  onMouseEnter={playHoverSound}
                  aria-label="Next Testimonial"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'rgba(15, 23, 42, 0.05)',
                    border: '1px solid rgba(15, 23, 42, 0.08)',
                    color: '#0f172a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
