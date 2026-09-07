import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Mail, MessageCircle, Clock } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { data } = useLanguage();
  const { personal, footer } = data;
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('id-ID', {
          timeZone: 'Asia/Jakarta',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const directWaUrl = `https://wa.me/6285710815159?text=${encodeURIComponent('Halo Helmy Wahyudi, saya ingin berdiskusi.')}`;

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-subtle)',
        padding: '3.5rem 0 2rem 0',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Top Footer Row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '2rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid var(--border-subtle)'
          }}
        >
          {/* Brand Info */}
          <div style={{ maxWidth: '380px', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  padding: '2px',
                  background: 'linear-gradient(135deg, #0284c7 0%, #7c3aed 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 10px rgba(2, 132, 199, 0.25)',
                  overflow: 'hidden',
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
                    objectFit: 'cover'
                  }}
                />
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.15rem', color: 'var(--text-primary)' }}>
                {personal.name}
              </span>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {personal.tagline}
            </p>

            {/* Live Clock Widget */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.35rem 0.75rem',
                borderRadius: '8px',
                background: 'rgba(148, 163, 184, 0.08)',
                border: '1px solid var(--border-subtle)',
                width: 'fit-content'
              }}
            >
              <Clock size={13} color="var(--accent-cyan)" />
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-code)', color: 'var(--text-secondary)' }}>
                Jakarta, ID: <strong style={{ color: 'var(--text-primary)' }}>{time || '12:00:00'} {footer.timeLabel}</strong>
              </span>
            </div>
          </div>

          {/* Quick Nav Links & Socials */}
          <div style={{ display: 'flex', gap: 'clamp(2rem, 5vw, 3.5rem)', flexWrap: 'wrap' }}>
            <div>
              <h4 style={{ fontSize: '0.8rem', fontFamily: 'var(--font-tech)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                {footer.navTitle}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem' }}>
                {footer.navItems.map((item, nIdx) => (
                  <li key={nIdx}>
                    <a href={item.href} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: '0.8rem', fontFamily: 'var(--font-tech)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                {footer.socialTitle}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.88rem' }}>
                <li><a href={directWaUrl} target="_blank" rel="noreferrer" style={{ color: '#10b981', textDecoration: 'none', fontWeight: 600 }}>WhatsApp (085710815159)</a></li>
                <li><a href={personal.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>GitHub</a></li>
                <li><a href={personal.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>LinkedIn</a></li>
                <li><a href={personal.instagram} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Instagram</a></li>
                <li><a href={`mailto:${personal.email}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>{footer.directEmailLabel}</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div
          style={{
            paddingTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.8rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} {personal.name}. {footer.copyright}
          </div>

          <button
            onClick={scrollToTop}
            aria-label={footer.backToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '9999px',
              padding: '0.4rem 0.85rem',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-tech)',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: 'var(--shadow-sm)',
              transition: 'all 0.2s ease'
            }}
          >
            <span>{footer.backToTop}</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
