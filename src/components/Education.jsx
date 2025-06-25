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
    <section id="education" className={`py-16 ${isDark ? '' : ''}`}>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className={`text-2xl md:text-3xl font-bold mb-8 ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>Education</h2>
        <ol className="relative border-l-4 border-blue-200">
          {education.map((edu, idx) => (
            <li key={idx} className="mb-10 ml-6">
              <span className={`absolute -left-3 flex items-center justify-center w-6 h-6 ${isDark ? 'bg-blue-600 text-white ring-blue-900' : 'bg-blue-600 text-white ring-white'} rounded-full ring-4 font-bold`}>{education.length - idx}</span>
              <div className={`${isDark ? 'bg-blue-900/40 text-blue-100' : 'bg-white text-gray-800'} rounded-xl shadow p-6`}>
                <h3 className={`text-lg font-semibold ${isDark ? 'text-blue-200' : 'text-blue-700'}`}>{edu.degree}</h3>
                <p className="mb-1">{edu.school}</p>
                <p className={`text-sm mb-2 ${isDark ? 'text-blue-200' : 'text-gray-500'}`}>{edu.period}</p>
                {edu.projects && (
                  <ul className={`list-disc list-inside text-sm ${isDark ? 'text-blue-100' : 'text-gray-700'}`}>
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