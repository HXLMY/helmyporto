import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CustomCursor from './components/layout/CustomCursor';
import Hero from './components/sections/Hero';
import AboutBento from './components/sections/AboutBento';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="portfolio-app" style={{ minHeight: '100vh', position: 'relative' }}>
          {/* Custom Fluid Cursor */}
          <CustomCursor />

          {/* Floating Glassmorphism Navbar */}
          <Navbar />

          {/* Main Sections */}
          <main>
            <Hero />
            <AboutBento />
            <Projects />
            <Experience />
            <Contact />
          </main>

          {/* Modern Footer */}
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

