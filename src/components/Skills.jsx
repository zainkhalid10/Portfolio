import React, { useState, useRef, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaAws, FaDocker, FaGitAlt, FaFigma, FaJava, FaLinux, FaPhp, FaLaravel } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiPostgresql, SiRedux, SiTypescript, SiKubernetes, SiJest, SiCplusplus, SiTensorflow, SiPytorch, SiOpencv, SiCypress, SiSelenium, SiTailwindcss, SiVuedotjs, SiAngular, SiNextdotjs, SiWordpress, SiFirebase, SiFlutter, SiSwift, SiKeras, SiScikitlearn, SiFastapi, SiExpress, SiGitlab, SiTerraform, SiFramer, SiAdobephotoshop, SiAdobelightroom, SiCanva, SiInvision, SiOpenai } from 'react-icons/si';
import { FaVideo } from 'react-icons/fa';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    label: 'Web Development',
    skills: [FaHtml5, FaCss3Alt, FaJs, FaReact, SiRedux, SiTypescript, SiTailwindcss, SiVuedotjs, SiAngular, SiNextdotjs, SiWordpress],
  },
  {
    label: 'UI/UX Design',
    skills: [FaFigma, SiAdobephotoshop, SiAdobelightroom, SiCanva, SiFramer, SiInvision],
  },
  {
    label: 'Mobile Development',
    skills: [SiFlutter, FaReact, SiFirebase, SiSwift],
  },
  {
    label: 'Backend',
    skills: [FaNodeJs, SiExpress, SiMysql, SiMongodb, SiPostgresql, FaPython, FaJava, SiCplusplus, FaPhp, FaLaravel, SiFastapi],
  },
  {
    label: 'DevOps',
    skills: [FaDocker, SiKubernetes, FaAws, SiGitlab, FaGitAlt, SiTerraform, FaLinux],
  },
  {
    label: 'Video Creation',
    skills: [
      { type: 'img', src: '/pp.png', alt: 'Premiere Pro' },
      { type: 'img', src: '/Davinci.png', alt: 'DaVinci Resolve' },
      { type: 'img', src: '/cc.png', alt: 'Cap CutR' },
    ],
  },
  {
    label: 'Databases & BaaS',
    skills: [FaDatabase, SiMysql, SiMongodb, SiPostgresql, SiFirebase],
  },
  {
    label: 'AI & Machine Learning',
    skills: [SiTensorflow, SiPytorch, SiKeras, SiScikitlearn, SiOpencv, SiOpenai],
  },
];

const tabs = ['Skills', 'Awards', 'Experience'];

const awards = [
  'Runner up Coin and Stamp (World Space Week)',
  'Google watch and webcam privacy cover (Google I/O Islamabad)',
];

const experience = [
  'Volunteer Team Media (Nascon Got Talent, Fast Adventure Society, Takhleeq Society)',
  'Head Team Media (Fast Adventure Society, Takhleeq Society)',
];

export default function Skills({ isDark }) {
  const [activeTab, setActiveTab] = useState('Skills');
  const ref = useRef();
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (activeTab !== 'Skills') return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [activeTab]);
  return (
    <section id="skills" className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Tab bar */}
        <div className="flex gap-8 border-b border-blue-900/30 mb-8">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-2 text-lg font-semibold transition-colors duration-200 border-b-2 ${activeTab === tab ? 'border-blue-400 text-blue-400' : 'border-transparent text-blue-200 hover:text-blue-400'}`}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Skills grid */}
        {activeTab === 'Skills' && (
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{
                  opacity: 0,
                  x: inView ? (i % 2 === 0 ? '-100vw' : '100vw') : 0
                }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: (i % 2 === 0 ? '-100vw' : '100vw') }}
                transition={{ duration: 0.8, type: 'spring', bounce: 0.18, delay: inView ? i * 0.08 : 0 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`font-medium text-base md:text-lg ${isDark ? 'text-blue-100' : 'text-blue-700'}`}>{cat.label}</span>
                  <span className="text-blue-400">-</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((Icon, idx) => (
                    <span
                      key={idx}
                      className={`text-2xl md:text-3xl ${isDark ? 'text-blue-200 hover:text-blue-400' : 'text-blue-700 hover:text-purple-600'} transition-colors duration-200 hover:scale-125 cursor-pointer drop-shadow-lg`}
                      tabIndex={0}
                    >
                      {typeof Icon === 'object' && Icon.type === 'img' ? (
                        <img src={Icon.src} alt={Icon.alt} className="w-8 h-8 md:w-12 md:h-12 object-contain inline" />
                      ) : (
                      <Icon />
                      )}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
        {/* Awards tab content */}
        {activeTab === 'Awards' && (
          <div className="max-w-3xl mx-auto px-4 py-8">
            <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>Honors & Awards</h2>
            <ul className={`list-disc list-inside text-lg space-y-2 ${isDark ? 'text-blue-100' : 'text-gray-700'}`}>
              {awards.map((award, idx) => (
                <li key={idx}>{award}</li>
              ))}
            </ul>
          </div>
        )}
        {/* Placeholder for Experience  */}
        {(activeTab === 'Experience' ) && (
          <div className="max-w-3xl mx-auto px-4 py-8">
            <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>Experience</h2>
            <ul className={`list-disc list-inside text-lg space-y-2 ${isDark ? 'text-blue-100' : 'text-gray-700'}`}>
              {experience.map((experience, idx) => (
                <li key={idx}>{experience}</li>
              ))}
            </ul>
          </div>
        )
        )}
      </div>
    </section>
  );
} 
