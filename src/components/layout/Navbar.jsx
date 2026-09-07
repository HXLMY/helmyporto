import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Globe, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';

export default function Navbar() {
  const { lang, toggleLang, data } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { nav, personal } = data;
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'projects', 'experience', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: nav.about, href: '#about', id: 'about' },
    { label: nav.projects, href: '#projects', id: 'projects' },
    { label: nav.experience, href: '#experience', id: 'experience' },
    { label: nav.contact, href: '#contact', id: 'contact' }
  ];

  const handleNavClick = (e, href) => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: '0.85rem',
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 0.75rem',
        pointerEvents: 'none'
      }}
    >
      <nav
        style={{
          pointerEvents: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          width: '100%',
          maxWidth: '1080px',
          padding: '0.55rem 1rem',
          background: 'var(--nav-bg)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '9999px',
          boxShadow: scrolled ? 'var(--shadow-md)' : 'var(--shadow-sm)',
          transition: 'all 0.3s ease'
        }}
      >
        {/* Brand Logo & Avatar */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            textDecoration: 'none',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '1.05rem',
            letterSpacing: '-0.02em',
            flexShrink: 0
          }}
        >
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              padding: '2px',
              background: 'linear-gradient(135deg, #0284c7 0%, #7c3aed 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(2, 132, 199, 0.25)',
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
          <span style={{ display: 'none' }} className="brand-text">
            {personal.name}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.6rem'
          }}
          className="desktop-nav"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                style={{
                  fontFamily: 'var(--font-tech)',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? '700' : '500',
                  color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  position: 'relative',
                  padding: '0.25rem 0',
                  transition: 'color 0.2s ease'
                }}
              >
                {item.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '16px',
                      height: '2px',
                      background: 'var(--accent-cyan)',
                      borderRadius: '2px',
                      boxShadow: '0 0 8px rgba(2, 132, 199, 0.5)'
                    }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Actions (Language Toggle, Theme Switcher & Mobile Menu) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {/* Language Switcher Pill */}
          <button
            onClick={toggleLang}
            title={nav.toggleLang}
            aria-label="Switch Language (ID/EN)"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              padding: '0.35rem 0.6rem',
              borderRadius: '9999px',
              border: '1px solid var(--border-subtle)',
              background: 'rgba(148, 163, 184, 0.08)',
              cursor: 'pointer',
              fontFamily: 'var(--font-tech)',
              fontSize: '0.78rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              transition: 'all 0.2s ease'
            }}
          >
            <Globe size={13} color="var(--accent-cyan)" />
            <span style={{ color: lang === 'id' ? 'var(--accent-cyan)' : 'var(--text-muted)' }}>ID</span>
            <span style={{ color: 'var(--border-subtle)' }}>|</span>
            <span style={{ color: lang === 'en' ? 'var(--accent-cyan)' : 'var(--text-muted)' }}>EN</span>
          </button>

          {/* Theme Toggle (Dark / Light) */}
          <button
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
            style={{
              background: 'rgba(148, 163, 184, 0.08)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '50%',
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: theme === 'dark' ? '#fbbf24' : '#0284c7',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* WhatsApp / Hire Me CTA Button (Desktop) */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)',
              color: '#ffffff',
              fontFamily: 'var(--font-tech)',
              fontWeight: 700,
              fontSize: '0.82rem',
              padding: '0.45rem 1rem',
              borderRadius: '9999px',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(2, 132, 199, 0.25)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            className="hire-btn"
          >
            <span>{nav.hireMe}</span>
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(148, 163, 184, 0.08)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '10px',
              width: '36px',
              height: '36px',
              color: 'var(--text-primary)',
              cursor: 'pointer'
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '4.8rem',
            left: '0.75rem',
            right: '0.75rem',
            pointerEvents: 'auto',
            background: 'var(--bg-dropdown)',
            backdropFilter: 'blur(25px)',
            WebkitBackdropFilter: 'blur(25px)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '20px',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
            zIndex: 99
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              style={{
                fontFamily: 'var(--font-tech)',
                fontSize: '1rem',
                fontWeight: '600',
                color: activeSection === item.id ? 'var(--accent-cyan)' : 'var(--text-primary)',
                textDecoration: 'none',
                padding: '0.6rem 0.5rem',
                borderBottom: '1px solid var(--border-subtle)'
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)',
              color: '#ffffff',
              fontFamily: 'var(--font-tech)',
              fontWeight: '700',
              padding: '0.75rem',
              borderRadius: '12px',
              textDecoration: 'none',
              marginTop: '0.4rem',
              fontSize: '0.92rem'
            }}
          >
            {nav.hireMe} <ArrowUpRight size={16} />
          </a>
        </div>
      )}

      {/* Responsive layout CSS */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .hire-btn { display: inline-flex !important; }
          .mobile-toggle { display: none !important; }
          .brand-text { display: inline !important; }
        }
      `}</style>
    </header>
  );
}
