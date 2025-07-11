import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const socials = [
  { icon: FaEnvelope, label: 'Email', link: 'mailto:of.mzain@gmail.com' },
  { icon: FaLinkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/muhammad-zain-a0313630b' },
  { icon: FaGithub, label: 'GitHub', link: 'https://github.com/zainkhalid10' },
  { icon: FaWhatsapp, label: 'WhatsApp', link: 'https://wa.me/923030603432' },
];

export default function Contact({ isDark }) {
  return (
    <section id="contact" className={`relative py-32 min-h-[60vh] flex items-center justify-center ${isDark ? 'bg-blue-900/40' : 'bg-gradient-to-br from-blue-50 to-purple-100'}`}>
      {/* Corner icons */}
      <a href="mailto:of.mzain@gmail.com" target="_blank" rel="noopener noreferrer" className="absolute top-8 left-8 text-4xl md:text-5xl transition-transform hover:scale-125" aria-label="Email">
        <FaEnvelope className={isDark ? 'text-blue-300' : 'text-blue-700'} />
      </a>
      <a href="https://www.linkedin.com/in/muhammad-zain-a0313630b" target="_blank" rel="noopener noreferrer" className="absolute top-8 right-8 text-4xl md:text-5xl transition-transform hover:scale-125" aria-label="LinkedIn">
        <FaLinkedin className={isDark ? 'text-blue-300' : 'text-blue-700'} />
      </a>
      <a href="https://github.com/zainkhalid10" target="_blank" rel="noopener noreferrer" className="absolute bottom-8 left-8 text-4xl md:text-5xl transition-transform hover:scale-125" aria-label="GitHub">
        <FaGithub className={isDark ? 'text-blue-300' : 'text-blue-700'} />
      </a>
      <a href="https://wa.me/923030603432" target="_blank" rel="noopener noreferrer" className="absolute bottom-8 right-8 text-4xl md:text-5xl transition-transform hover:scale-125" aria-label="WhatsApp">
        <FaWhatsapp className={isDark ? 'text-blue-300' : 'text-blue-700'} />
      </a>
      {/* Centered Contact Me */}
      <div className="flex flex-col items-center justify-center w-full">
        <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 text-center drop-shadow-lg ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>Contact Me</h2>
        <p className={`text-lg md:text-xl max-w-xl text-center ${isDark ? 'text-blue-100' : 'text-gray-700'}`}>Let's connect! Feel free to reach out for opportunities, collaborations, or just to say hi.</p>
      </div>
    </section>
  );
} 