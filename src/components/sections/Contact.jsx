import React, { useState } from 'react';
import { Mail, MessageCircle, Send, CheckCircle, Sparkles, Copy, Check, ArrowUpRight, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../../context/LanguageContext';

export default function Contact() {
  const { data } = useLanguage();
  const { personal, contact } = data;
  const [formData, setFormData] = useState({ name: '', email: '', service: 'Full-Stack Web App', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('085710815159');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format WhatsApp message
    const waNumber = '6285710815159';
    const textMsg = `Halo Helmy Wahyudi,

Nama: ${formData.name}
Email/Kontak: ${formData.email}
Kebutuhan: ${formData.service}

Pesan:
${formData.message}

--
Dikirim dari Portfolio Website`;

    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(textMsg)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger Confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#10b981', '#0284c7', '#7c3aed', '#f59e0b']
        });
      } catch (err) {
        // ignore
      }

      // Open WhatsApp directly
      window.open(waUrl, '_blank');
    }, 800);
  };

  const directWaUrl = `https://wa.me/6285710815159?text=${encodeURIComponent('Halo Helmy Wahyudi, saya ingin mendiskusikan peluang proyek/kolaborasi.')}`;

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        padding: '5.5rem 0',
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">{contact.sectionTag}</span>
          <h2 className="section-title">
            {contact.sectionTitle} <span className="text-gradient">{contact.sectionGradient}</span>
          </h2>
          <p className="section-desc">
            {contact.sectionDesc}
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            maxWidth: '1080px',
            margin: '0 auto'
          }}
          className="contact-grid"
        >
          {/* Left Info Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h3 style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                {contact.leftTitle}
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.96rem' }}>
                {contact.leftDesc}
              </p>
            </div>

            {/* Direct WhatsApp Card */}
            <div
              className="glass-panel"
              style={{
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                borderLeft: '4px solid #10b981'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(16, 185, 129, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#10b981',
                    flexShrink: 0
                  }}
                >
                  <MessageCircle size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-tech)', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                    {contact.directWA}
                  </div>
                  <div style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '1rem' }}>
                    0857-1081-5159
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button
                  onClick={handleCopyPhone}
                  className="btn-secondary"
                  style={{ padding: '0.45rem 0.8rem', fontSize: '0.78rem', borderRadius: '8px' }}
                  title="Salin Nomor WA"
                >
                  {copiedPhone ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                  <span>{copiedPhone ? contact.copiedText : contact.copyText}</span>
                </button>
                <a
                  href={directWaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp"
                  style={{ padding: '0.45rem 0.95rem', fontSize: '0.82rem', borderRadius: '8px' }}
                >
                  <span>Chat WA</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Direct Email Card */}
            <div
              className="glass-panel"
              style={{
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                borderLeft: '4px solid var(--accent-cyan)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(2, 132, 199, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)',
                    flexShrink: 0
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-tech)', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                    {contact.directEmail}
                  </div>
                  <div style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.95rem', wordBreak: 'break-all' }}>
                    {personal.email}
                  </div>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="btn-secondary"
                style={{ padding: '0.45rem 0.8rem', fontSize: '0.78rem', borderRadius: '8px' }}
              >
                {copiedEmail ? <Check size={14} color="var(--accent-cyan)" /> : <Copy size={14} />}
                <span>{copiedEmail ? contact.copiedText : contact.copyText}</span>
              </button>
            </div>

            {/* Fast Response Guarantee */}
            <div
              style={{
                padding: '1.15rem 1.35rem',
                borderRadius: '14px',
                background: 'rgba(2, 132, 199, 0.06)',
                border: '1px solid rgba(2, 132, 199, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem'
              }}
            >
              <Sparkles size={20} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                <strong style={{ color: 'var(--text-primary)' }}>{contact.fastResponseTitle}</strong> {contact.fastResponseDesc}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div
            className="glass-panel"
            style={{
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              position: 'relative'
            }}
          >
            {submitted ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '2rem 0.5rem',
                  gap: '1rem'
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '2px solid #10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#10b981',
                    boxShadow: '0 0 25px rgba(16, 185, 129, 0.35)'
                  }}
                >
                  <CheckCircle size={32} />
                </div>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)' }}>{contact.successTitle}</h3>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '420px', lineHeight: 1.6, fontSize: '0.95rem' }}>
                  {contact.successDesc}
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '0.75rem' }}>
                  <a
                    href={directWaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-whatsapp"
                    style={{ fontSize: '0.9rem' }}
                  >
                    <MessageCircle size={16} />
                    <span>Buka WhatsApp Lagi</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary"
                    style={{ fontSize: '0.9rem' }}
                  >
                    {contact.sendAnother}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontFamily: 'var(--font-tech)', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 600 }}>
                    {contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={contact.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '10px',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.92rem',
                      outline: 'none',
                      transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--accent-cyan)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(2, 132, 199, 0.15)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border-subtle)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontFamily: 'var(--font-tech)', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 600 }}>
                    {contact.emailLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={contact.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '10px',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.92rem',
                      outline: 'none',
                      transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--accent-cyan)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(2, 132, 199, 0.15)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border-subtle)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontFamily: 'var(--font-tech)', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 600 }}>
                    {contact.serviceLabel}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '10px',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  >
                    {contact.serviceOptions.map((opt, oIdx) => (
                      <option key={oIdx} value={opt.value} style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontFamily: 'var(--font-tech)', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontWeight: 600 }}>
                    {contact.messageLabel}
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder={contact.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'var(--bg-input)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '10px',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.92rem',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--accent-cyan)';
                      e.target.style.boxShadow = '0 0 0 3px rgba(2, 132, 199, 0.15)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border-subtle)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-whatsapp"
                  style={{ width: '100%', marginTop: '0.5rem', opacity: isSubmitting ? 0.7 : 1 }}
                >
                  <MessageCircle size={18} />
                  <span>{isSubmitting ? contact.submittingBtn : contact.submitBtn}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 0.95fr 1.05fr !important;
          }
        }
      `}</style>
    </section>
  );
}
