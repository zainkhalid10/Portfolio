import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import WelcomeScreen from './components/WelcomeScreen';
import { useRef } from 'react';
import { Analytics } from '@vercel/analytics/react';

export function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const toggleDark = () => setIsDark(d => !d);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (showWelcome) {
    return <WelcomeScreen />;
  }

  return (
    <div className={
      `min-h-screen flex flex-col transition-colors duration-300 ` +
      (isDark ? 'bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white' : 'bg-gradient-to-br from-blue-50 to-purple-100 text-gray-900')
    }>
      <Navbar />
      <main className="flex-1">
        <Hero isDark={isDark} toggleDark={toggleDark} />
        <About isDark={isDark} />
        <Skills isDark={isDark} />
        <Projects isDark={isDark} />
        <Education isDark={isDark} />
        <WorkExperience isDark={isDark} />
        <Certifications isDark={isDark} />
        <Contact isDark={isDark} />
      </main>
      <footer className="text-center py-6 text-gray-500 text-sm">
        © 2024 Muhammad Zain. All rights reserved.
      </footer>
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
          className="fixed bottom-6 right-6 z-40 bg-blue-600 dark:bg-blue-500 text-white dark:text-gray-900 rounded-full shadow-lg p-3 hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
} 
