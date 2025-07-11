import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
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
  // Add more from CV if needed
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
    <section id="projects" className={`py-16 ${isDark ? 'bg-[#1e293b]/80' : 'bg-white/70'}`}>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className={`text-2xl md:text-3xl font-bold mb-8 ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>Projects</h2>
        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            className={`px-4 py-2 rounded-t-lg font-semibold transition-colors duration-200 border-b-2 ${activeTab === 'Projects' ? (isDark ? 'border-blue-400 text-blue-200' : 'border-purple-600 text-purple-700') : (isDark ? 'border-transparent text-blue-200/60' : 'border-transparent text-blue-700/60')}`}
            onClick={() => setActiveTab('Projects')}
          >
            Projects
          </button>
          <button
            className={`px-4 py-2 rounded-t-lg font-semibold transition-colors duration-200 border-b-2 ${activeTab === 'Instagram' ? (isDark ? 'border-blue-400 text-blue-200' : 'border-purple-600 text-purple-700') : (isDark ? 'border-transparent text-blue-200/60' : 'border-transparent text-blue-700/60')}`}
            onClick={() => setActiveTab('Instagram')}
          >
            Instagram Portfolio
          </button>
        </div>
        {/* Tab content */}
        {activeTab === 'Projects' && (
          <>
            <div className="flex flex-row items-center justify-center min-h-[28rem] relative w-full max-w-7xl mx-auto">
              {/* Peek previous card (left) */}
              <div
                className={`flex flex-col items-center justify-center bg-opacity-60 pointer-events-none rounded-xl shadow-lg mr-6 overflow-hidden ${isDark ? 'bg-blue-900/30 text-blue-100' : 'bg-gradient-to-br from-blue-100 to-purple-100 text-gray-700'}`}
                style={{ width: '15rem', height: '18rem', minWidth: '15rem', minHeight: '18rem', maxWidth: '15rem', maxHeight: '18rem' }}
              >
                <h3 className={`text-lg font-bold mb-1 text-center w-full ${isDark ? 'text-blue-200' : 'text-purple-700'}`}>{projects[prevIdx].title}</h3>
              </div>
              {/* Main card (fixed size, no animation) */}
              <div className={`flex flex-col items-center justify-center rounded-2xl shadow-2xl overflow-hidden ${isDark ? 'bg-blue-900/60 hover:bg-blue-900/80 text-blue-100' : 'bg-gradient-to-br from-blue-100 to-purple-100 hover:from-purple-100 hover:to-blue-100 text-gray-700'}`}
                style={{ width: '48rem', height: '22rem', minWidth: '48rem', minHeight: '22rem', maxWidth: '48rem', maxHeight: '22rem', margin: '0 0.5rem', wordBreak: 'break-word', padding: '3rem 4rem' }}
              >
                <h3 className={`text-2xl font-bold mb-5 text-center w-full ${isDark ? 'text-blue-200' : 'text-purple-700'}`}>{projects[currentIdx].title}</h3>
                <p className="mb-6 text-base md:text-lg break-words whitespace-pre-line w-full text-center" style={{maxWidth:'90%'}}>{projects[currentIdx].description}</p>
                <div className="flex flex-wrap gap-2 mb-6 justify-center w-full">
                  {projects[currentIdx].tech.map(t => (
                    <span key={t} className={`${isDark ? 'bg-blue-950/60 text-blue-200' : 'bg-white/80 text-blue-700'} px-3 py-1 rounded text-sm font-semibold shadow-sm`}>{t}</span>
                  ))}
                </div>
                <span className={`text-base underline ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>View on GitHub</span>
              </div>
              {/* Peek next card (right) */}
              <div
                className={`flex flex-col items-center justify-center bg-opacity-60 pointer-events-none rounded-xl shadow-lg ml-6 overflow-hidden ${isDark ? 'bg-blue-900/30 text-blue-100' : 'bg-gradient-to-br from-blue-100 to-purple-100 text-gray-700'}`}
                style={{ width: '15rem', height: '18rem', minWidth: '15rem', minHeight: '18rem', maxWidth: '15rem', maxHeight: '18rem' }}
              >
                <h3 className={`text-lg font-bold mb-1 text-center w-full ${isDark ? 'text-blue-200' : 'text-purple-700'}`}>{projects[nextIdx].title}</h3>
              </div>
              {/* Arrows */}
              <div className="absolute right-[-5.5rem] top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
                <button onClick={handlePrev} aria-label="Previous project" className={`rounded-full p-3 shadow-lg ${isDark ? 'bg-blue-900/80 hover:bg-blue-700 text-blue-200' : 'bg-white/90 hover:bg-purple-200 text-blue-700'} transition-all`}>
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 15l4-4 4 4"/></svg>
                </button>
                <button onClick={handleNext} aria-label="Next project" className={`rounded-full p-3 shadow-lg ${isDark ? 'bg-blue-900/80 hover:bg-blue-700 text-blue-200' : 'bg-white/90 hover:bg-purple-200 text-blue-700'} transition-all`}>
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16 9l-4 4-4-4"/></svg>
                </button>
              </div>
              {/* Project count indicator */}
              <div className="absolute left-0 bottom-0 pl-2 text-xs text-blue-400 opacity-70 select-none z-20">
                {currentIdx + 1} / {projects.length}
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