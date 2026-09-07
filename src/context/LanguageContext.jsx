import React, { createContext, useContext, useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

const LanguageContext = createContext();

export function LanguageProvider({ children, playClickSound }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio_lang');
      return saved === 'en' ? 'en' : 'id';
    } catch {
      return 'id';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('portfolio_lang', lang);
      document.documentElement.lang = lang;
    } catch (e) {
      // ignore
    }
  }, [lang]);

  const toggleLang = () => {
    if (playClickSound) playClickSound();
    setLang(prev => (prev === 'id' ? 'en' : 'id'));
  };

  const currentData = portfolioData[lang] || portfolioData.id;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, data: currentData }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
