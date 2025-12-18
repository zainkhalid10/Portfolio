import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaMoon, FaRegMoon, FaHome, FaUser, FaCode, FaProjectDiagram, FaCertificate, FaAward, FaPhone, FaPalette, FaFilm, FaBriefcase } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/muhammad-zain-a0313630b', label: 'LinkedIn' },
  { icon: <FaGithub />, href: 'https://github.com/zainkhalid10', label: 'GitHub' },
  { icon: <FaEnvelope />, href: 'mailto:of.mzain@gmail.com', label: 'Email' },
  { icon: <FaWhatsapp />, href: 'https://wa.me/923030603432', label: 'WhatsApp' },
];

const navLinks = [
  { icon: <FaHome />, to: '#hero', label: 'Home' },
  { icon: <FaUser />, to: '#about', label: 'About' },
  { icon: <FaCode />, to: '#skills', label: 'Skills' },
  { icon: <FaProjectDiagram />, to: '#projects', label: 'Projects' },
  { icon: <FaBriefcase />, to: '#work-experience', label: 'Work Experience' },
  { icon: <FaCertificate />, to: '#certifications', label: 'Certifications' },
  { icon: <FaPhone />, to: '#contact', label: 'Contact' },
];

// NOTE: For best effect, use a video with transparent or solid background.

export default function Hero({ isDark, toggleDark }) {
  return (
    <section id="hero" className={`relative min-h-[90vh] flex flex-col justify-center transition-colors duration-300 ${isDark ? 'bg-gradient-to-br from-[#0f172a] to-[#1e293b]' : 'bg-gradient-to-br from-blue-50 to-purple-100'}` + ' overflow-hidden'}>
      {/* Top nav icons */}
      <nav className={`fixed left-1/2 top-0 -translate-x-1/2 z-40 flex flex-row gap-6 ${isDark ? 'bg-[#1e293b]/80 border-blue-900/30' : 'bg-white/80 border-blue-200'} rounded-2xl px-6 py-3 shadow-lg border`}>
        {navLinks.map((n, i) => (
          <div key={i} className="relative flex items-center group">
            <a href={n.to} aria-label={n.label} className={`text-xl ${isDark ? 'text-white/70 hover:text-blue-400' : 'text-blue-900/70 hover:text-purple-600'} transition-colors duration-200 flex items-center justify-center`}>
              {n.icon}
            </a>
            <span className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 pointer-events-none ${isDark ? 'bg-blue-900 text-white' : 'bg-white text-blue-900 border border-blue-200'} text-xs font-semibold rounded px-2 py-1 shadow-lg transition-opacity duration-200 whitespace-nowrap`}>
              {n.label}
            </span>
          </div>
        ))}
      </nav>
      {/* Animated background shapes */}
      <motion.div
        className={`absolute right-0 top-1/4 w-[40vw] h-[40vw] ${isDark ? 'bg-blue-900/20' : 'bg-purple-200/30'} rounded-full blur-3xl`}
        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        style={{ zIndex: 1 }}
      />
      {/* Main content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto gap-10 md:gap-20 py-12">
        <div className="flex-1 flex flex-col items-center md:items-start justify-center">
          <h1 className={`text-3xl md:text-5xl font-extrabold mb-6 text-center md:text-left drop-shadow-lg ${isDark ? 'text-white' : 'text-blue-900'}`}>Hi! I am Muhammad Zain</h1>
          {/* Social icons row */}
          <div className="flex gap-4 text-xl mb-8">
            {socialLinks.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className={`${isDark ? 'text-white/80 hover:text-blue-400' : 'text-blue-900/80 hover:text-purple-600'} transition-colors duration-200`}>
                {s.icon}
              </a>
            ))}
            <button className={`ml-2 text-lg transition-colors duration-200 ${isDark ? 'text-white/80 hover:text-blue-400' : 'text-blue-900/80 hover:text-purple-600'}`} aria-label="Toggle dark mode" onClick={toggleDark}>
              {isDark ? <FaMoon /> : <FaRegMoon />}
            </button>
          </div>
          <p className={`text-lg md:text-xl max-w-xl mb-8 text-center md:text-left ${isDark ? 'text-white/80' : 'text-blue-900/80'}`}>Final-year Computer Science student at FAST NUCES. Passionate about software development, AI, and building innovative digital experiences. Let's turn your vision into reality.</p>
          <div className="flex gap-4">
            <a href="#contact" className={`px-7 py-3 ${isDark ? 'bg-blue-500 hover:bg-blue-400 text-white' : 'bg-purple-600 hover:bg-purple-500 text-white'} font-semibold rounded-full shadow-lg transition-colors duration-200 text-base flex items-center gap-2`}>
              Start a Project <span className="text-lg">↓</span>
            </a>
            <a href="#projects" className={`px-7 py-3 border ${isDark ? 'border-white/30 hover:border-blue-400 text-white' : 'border-blue-200 hover:border-purple-600 text-blue-900'} font-semibold rounded-full shadow-lg transition-colors duration-200 text-base flex items-center gap-2`}>
              View Portfolio
            </a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex-1 flex justify-center md:justify-center mt-10 md:mt-0 relative"
        >
          {/* Animated shadow behind GIF */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] md:w-[80%] md:h-[80%] rounded-full z-0"
            style={{
              background: isDark ? 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, rgba(30,41,59,0.01) 80%)' : 'radial-gradient(circle, rgba(96,165,250,0.18) 0%, rgba(255,255,255,0.01) 80%)',
              filter: 'blur(24px)',
            }}
            animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          />
          <div className="w-[20rem] h-[32rem] rounded-full overflow-hidden flex items-center justify-center relative z-10 group">
  <img
    src="/Video.gif"
    alt="Muhammad Zain Character"
    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
    style={{ background: 'transparent' }}
  />
</div>

        </motion.div>
      </div>
      {/* Scroll to explore */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center gap-2 z-20">
        <span className={`${isDark ? 'text-white/70' : 'text-blue-900/70'} text-sm`}>Scroll to explore</span>
        <div className={`w-7 h-12 border-2 ${isDark ? 'border-blue-400' : 'border-purple-400'} rounded-full flex items-start justify-center`}>
          <div className={`w-2 h-2 ${isDark ? 'bg-blue-400' : 'bg-purple-400'} rounded-full mt-2 animate-bounce`} />
        </div>
      </div>
    </section>
  );
} 
