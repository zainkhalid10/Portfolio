import React from 'react';

const workExperience = [
  {
    title: 'Content Manager',
    company: 'American Darling (US)',
    period: 'Oct 2025 - Nov 2026',
  },
  {
    title: 'Employee',
    company: 'StratifyOne (UK)',
    period: 'Jul 2025 - Sep 2025',
  },
];

export default function WorkExperience({ isDark }) {
  return (
    <section id="work-experience" className={`py-16 ${isDark ? 'bg-[#1e293b]/80' : 'bg-white/70'}`}>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className={`text-2xl md:text-3xl font-bold mb-8 ${isDark ? 'text-purple-300' : 'text-purple-700'}`}>Work Experience</h2>
        <ol className="relative border-l-4 border-purple-300">
          {workExperience.map((work, idx) => (
            <li key={idx} className="mb-10 ml-6">
              <span className={`absolute -left-3 flex items-center justify-center w-6 h-6 ${isDark ? 'bg-purple-600 text-white ring-purple-900' : 'bg-purple-600 text-white ring-white'} rounded-full ring-4 font-bold`}>{workExperience.length - idx}</span>
              <div className={`${isDark ? 'bg-purple-900/50 text-purple-100' : 'bg-gradient-to-br from-purple-50 to-indigo-50 text-gray-800'} rounded-xl shadow p-6`}>
                <h3 className={`text-lg font-semibold ${isDark ? 'text-purple-200' : 'text-purple-700'}`}>{work.title}</h3>
                <p className="mb-1">{work.company}</p>
                <p className={`text-sm mb-2 ${isDark ? 'text-purple-200' : 'text-gray-500'}`}>{work.period}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

