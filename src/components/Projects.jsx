import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'FlowMind',
    description: 'AI-powered platform designed to create personalized daily routines based on user inputs like MBTI personality types, energy levels, and goals. An intelligent workflow management system that helps optimize productivity and mental flow.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'AI/ML', 'React'],
    link: 'https://github.com/zainkhalid10/FlowMind',
  },
  {
    title: 'Neuro-Crypt',
    description: 'Behavioral cryptocurrency analytics platform that combines psychology, sentiment analysis, and machine learning to support crypto trading decisions. Provides real-time market data, psychological bias detection, sentiment analysis, ML forecasting, and an investment simulator.',
    tech: ['TypeScript', 'Machine Learning', 'Sentiment Analysis', 'Crypto Analytics'],
    link: 'https://github.com/zainkhalid10/Neuro-Crypt',
  },
  {
    title: 'Generative Ad',
    description: 'AI-powered advertisement generation platform that automatically creates compelling ad content. Uses advanced machine learning models to generate creative ad variations, optimize targeting, and enhance marketing campaign effectiveness.',
    tech: ['AI/ML', 'Generative AI', 'Python', 'Deep Learning', 'Marketing'],
    link: 'https://github.com/zainkhalid10/Generative-Ad',
  },
  {
    title: 'Theft-Detection',
    description: 'Real-time Video Theft Detection using YOLOv8 and ByteTrack. Detects and tracks people in surveillance videos, identifies suspicious activities, and annotates videos with bounding boxes and alerts.',
    tech: ['YOLOv8', 'ByteTrack', 'Deep Learning', 'Python'],
    link: 'https://github.com/zainkhalid10/Theft-Detection',
  },
  {
    title: 'Body-parts-detector',
    description: 'Real-time Body Part Detector Using MediaPipe. Detects when a user points to a specific body part using their index finger. Built with OpenCV and MediaPipe Pose and Hands modules.',
    tech: ['OpenCV', 'MediaPipe', 'Python'],
    link: 'https://github.com/zainkhalid10/Computer_Vision',
  },
  {
    title: 'Finger Gesture Calculator',
    description: 'Finger-based gesture calculator using MediaPipe and OpenCV. Perform arithmetic operations using hand gestures in front of a webcam.',
    tech: ['MediaPipe', 'OpenCV', 'Python'],
    link: 'https://github.com/zainkhalid10/Computer_Vision',
  },
  {
    title: 'FingerTracker',
    description: 'Gesture-Based Drawing Using MediaPipe and OpenCV. Draw on a virtual canvas using your left index finger, toggle drawing mode with a right-hand fist gesture.',
    tech: ['MediaPipe', 'OpenCV', 'Python'],
    link: 'https://github.com/zainkhalid10/Computer_Vision',
  },
  {
    title: 'VanishingShirt',
    description: 'Real-Time Shirt Vanishing Effect Using MediaPipe and OpenCV. Parts of a person become invisible and are replaced by a background, toggled by a palm gesture.',
    tech: ['MediaPipe', 'OpenCV', 'Python'],
    link: 'https://github.com/zainkhalid10/Computer_Vision',
  },
  {
    title: 'Secure File Storage System with RBAC',
    description: 'A Flask-based secure file storage system with Role-Based Access Control (RBAC), AES-256 file encryption, RSA key exchange, user authentication, and HMAC-SHA256 audit logging. Designed for secure file management with proper access controls.',
    tech: ['Flask', 'Python', 'AES-256', 'RSA', 'RBAC', 'Security'],
    link: 'https://github.com/zainkhalid10/Secure-File-Storage-System-with-RBAC',
  },
  {
    title: 'Tetris Game',
    description: 'Classic Tetris game implementation with basic functionalities. Built using C++ with game logic, scoring system, and interactive gameplay.',
    tech: ['C++', 'Game Development', 'SFML'],
    link: 'https://github.com/zainkhalid10/Tetris-Game',
  },
];

const instagramAccounts = [
  {
    username: '@onlyzainss',
    link: 'https://instagram.com/onlyzainss',
  },
  {
    username: '@c.art.___',
    link: 'https://instagram.com/c.art.___',
  },
];

export default function Projects({ isDark }) {
  const [activeTab, setActiveTab] = useState('Projects');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev
  const handlePrev = () => {
    setDirection(-1);
    setCurrentIdx(idx => (idx - 1 + projects.length) % projects.length);
  };
  const handleNext = () => {
    setDirection(1);
    setCurrentIdx(idx => (idx + 1) % projects.length);
  };
  // Helper to get prev/next indices
  const prevIdx = (currentIdx - 1 + projects.length) % projects.length;
  const nextIdx = (currentIdx + 1) % projects.length;
  return (
    <section id="projects" className={`py-16 overflow-x-hidden ${isDark ? 'bg-[#1e293b]/80' : 'bg-white/70'}`}>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>Projects</h2>
        {/* Tabs */}
        <div className="flex gap-2 sm:gap-4 mb-6 sm:mb-8">
          <button
            className={`px-3 sm:px-4 py-2 rounded-t-lg text-sm sm:text-base font-semibold transition-colors duration-200 border-b-2 ${activeTab === 'Projects' ? (isDark ? 'border-blue-400 text-blue-200' : 'border-purple-600 text-purple-700') : (isDark ? 'border-transparent text-blue-200/60' : 'border-transparent text-blue-700/60')}`}
            onClick={() => setActiveTab('Projects')}
          >
            Projects
          </button>
          <button
            className={`px-3 sm:px-4 py-2 rounded-t-lg text-sm sm:text-base font-semibold transition-colors duration-200 border-b-2 ${activeTab === 'Instagram' ? (isDark ? 'border-blue-400 text-blue-200' : 'border-purple-600 text-purple-700') : (isDark ? 'border-transparent text-blue-200/60' : 'border-transparent text-blue-700/60')}`}
            onClick={() => setActiveTab('Instagram')}
          >
            Instagram Portfolio
          </button>
        </div>
        {/* Tab content */}
        {activeTab === 'Projects' && (
          <>
            <div className="relative w-full max-w-6xl mx-auto mb-8 overflow-hidden">
              {/* Main card container */}
              <div className="relative flex items-center justify-center min-h-[28rem] px-4 md:px-0">
                {/* Peek previous card (left) - hidden on mobile */}
                <div
                  className={`hidden lg:flex flex-col items-center justify-center bg-opacity-60 pointer-events-none rounded-xl shadow-lg mr-4 overflow-hidden flex-shrink-0 ${isDark ? 'bg-blue-900/30 text-blue-100' : 'bg-gradient-to-br from-blue-100 to-purple-100 text-gray-700'}`}
                  style={{ width: '12rem', height: '16rem', minWidth: '12rem', minHeight: '16rem', maxWidth: '12rem', maxHeight: '16rem' }}
                >
                  <h3 className={`text-base font-bold mb-1 text-center w-full px-2 ${isDark ? 'text-blue-200' : 'text-purple-700'}`}>{projects[prevIdx].title}</h3>
                </div>
                
                {/* Main card */}
                <a 
                  href={projects[currentIdx].link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center justify-center rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] p-6 sm:p-8 md:p-10 flex-shrink-0 ${isDark ? 'bg-blue-900/60 hover:bg-blue-900/80 text-blue-100' : 'bg-gradient-to-br from-blue-100 to-purple-100 hover:from-purple-100 hover:to-blue-100 text-gray-700'}`}
                  style={{ width: '100%', maxWidth: '42rem', minHeight: '20rem', wordBreak: 'break-word' }}
                >
                  <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-center w-full ${isDark ? 'text-blue-200' : 'text-purple-700'}`}>{projects[currentIdx].title}</h3>
                  <p className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg break-words whitespace-pre-line w-full text-center leading-relaxed">{projects[currentIdx].description}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6 justify-center w-full">
                    {projects[currentIdx].tech.map(t => (
                      <span key={t} className={`${isDark ? 'bg-blue-950/60 text-blue-200' : 'bg-white/80 text-blue-700'} px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-sm`}>{t}</span>
                    ))}
                  </div>
                  <span className={`text-base font-semibold ${isDark ? 'text-blue-300 hover:text-blue-400' : 'text-blue-600 hover:text-purple-600'} transition-colors flex items-center gap-2`}>
                    View on GitHub
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </a>
                
                {/* Peek next card (right) - hidden on mobile */}
                <div
                  className={`hidden lg:flex flex-col items-center justify-center bg-opacity-60 pointer-events-none rounded-xl shadow-lg ml-4 overflow-hidden flex-shrink-0 ${isDark ? 'bg-blue-900/30 text-blue-100' : 'bg-gradient-to-br from-blue-100 to-purple-100 text-gray-700'}`}
                  style={{ width: '12rem', height: '16rem', minWidth: '12rem', minHeight: '16rem', maxWidth: '12rem', maxHeight: '16rem' }}
                >
                  <h3 className={`text-base font-bold mb-1 text-center w-full px-2 ${isDark ? 'text-blue-200' : 'text-purple-700'}`}>{projects[nextIdx].title}</h3>
                </div>
              </div>

              {/* Navigation controls - modern design */}
              <div className="flex items-center justify-center gap-2 sm:gap-4 mt-4 sm:mt-6 px-4">
                {/* Previous button */}
                <button 
                  onClick={handlePrev} 
                  aria-label="Previous project" 
                  className={`group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 ${isDark ? 'bg-blue-800/80 hover:bg-blue-700 text-blue-200 hover:text-white' : 'bg-white/90 hover:bg-purple-200 text-blue-700 hover:text-purple-700'}`}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Dot indicators */}
                <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-4 overflow-x-auto scrollbar-hide max-w-[calc(100vw-8rem)] sm:max-w-none">
                  {projects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIdx(idx)}
                      aria-label={`Go to project ${idx + 1}`}
                      className={`transition-all duration-200 rounded-full flex-shrink-0 ${
                        idx === currentIdx
                          ? `${isDark ? 'bg-blue-400' : 'bg-purple-600'} w-2.5 h-2.5 sm:w-3 sm:h-3`
                          : `${isDark ? 'bg-blue-400/40 hover:bg-blue-400/60' : 'bg-purple-400/40 hover:bg-purple-400/60'} w-2 h-2`
                      }`}
                    />
                  ))}
                </div>

                {/* Next button */}
                <button 
                  onClick={handleNext} 
                  aria-label="Next project" 
                  className={`group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 ${isDark ? 'bg-blue-800/80 hover:bg-blue-700 text-blue-200 hover:text-white' : 'bg-white/90 hover:bg-purple-200 text-blue-700 hover:text-purple-700'}`}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Project counter */}
              <div className={`text-center mt-4 text-sm ${isDark ? 'text-blue-300/70' : 'text-blue-600/70'}`}>
                {currentIdx + 1} of {projects.length}
              </div>
            </div>
        <div className="text-center mt-8">
          <a href="https://github.com/zainkhalid10" target="_blank" rel="noopener noreferrer" className={`font-semibold underline transition-colors ${isDark ? 'text-blue-300 hover:text-blue-400' : 'text-blue-700 hover:text-purple-600'}`}>See more on GitHub</a>
        </div>
          </>
        )}
        {activeTab === 'Instagram' && (
          <div className="grid md:grid-cols-2 gap-8">
            {instagramAccounts.map((acc, idx) => (
              <a
                key={acc.username}
                href={acc.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block ${isDark ? 'bg-blue-900/40 hover:bg-blue-900/60 text-blue-100' : 'bg-gradient-to-br from-blue-100 to-purple-100 hover:from-purple-100 hover:to-blue-100 text-gray-700'} rounded-xl shadow-lg p-6 transition-all duration-300 text-center`}
              >
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-blue-200' : 'text-purple-700'}`}>{acc.username}</h3>
                <span className={`text-sm underline ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>View on Instagram</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
} 