import React from 'react';

const education = [
  {
    degree: 'Bachelor of Science (B.S.) - Computer Science',
    school: 'National University Of Computing and Emerging Sciences (FAST), Islamabad',
    period: 'Sep 2021 - Sep 2025 (Expected)',
    projects: [
      'Tetris (C++/SFML)',
      'Resort Management System (Java/MySQL)',
      'Crystal Rush (C++)',
      'Taxi (C++/GLUT/OpenGL/OOP)',
      'Secure File Storage System with RBAC (AES-256, RSA-2048, HMAC-SHA256)',
      'PACMAN (Assembly language)',
    ],
  },
  {
    degree: 'Higher Secondary School Certificate - Pre-Engineering',
    school: 'HITEC School and College For Boys',
    period: '2019 - 2021',
  },
];

export default function Education({ isDark }) {
  return (
    <section id="education" className="py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 ${isDark ? 'text-purple-300' : 'text-purple-700'}`}>Education</h2>
        <ol className="relative border-l-2 sm:border-l-4 border-purple-300">
          {education.map((edu, idx) => (
            <li key={idx} className="mb-8 sm:mb-10 ml-4 sm:ml-6 group">
              <span className={`absolute -left-2.5 sm:-left-3 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 text-xs sm:text-sm ${isDark ? 'bg-purple-600 text-white ring-purple-900' : 'bg-purple-600 text-white ring-white'} rounded-full ring-2 sm:ring-4 font-bold transition-all duration-300 group-hover:scale-110 group-hover:ring-purple-400`}>{education.length - idx}</span>
              <div className={`${isDark ? 'bg-purple-900/50 text-purple-100 hover:bg-purple-900/70' : 'bg-gradient-to-br from-purple-50 to-indigo-50 hover:from-purple-100 hover:to-indigo-100 text-gray-800'} rounded-xl shadow hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 p-4 sm:p-6 cursor-pointer`}>
                <h3 className={`text-base sm:text-lg font-semibold ${isDark ? 'text-purple-200' : 'text-purple-700'}`}>{edu.degree}</h3>
                <p className="mb-1 text-sm sm:text-base">{edu.school}</p>
                <p className={`text-xs sm:text-sm mb-2 ${isDark ? 'text-purple-200' : 'text-gray-500'}`}>{edu.period}</p>
                {edu.projects && (
                  <ul className={`list-disc list-inside text-xs sm:text-sm space-y-1 ${isDark ? 'text-purple-100' : 'text-gray-700'}`}>
                    {edu.projects.map(p => <li key={p}>{p}</li>)}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
} 