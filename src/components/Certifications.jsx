import React, { useState } from 'react';

const certifications = [
  { name: 'Google AI Essentials', org: 'Google', code: 'DNYDNYF8G9TJ' },
  { name: 'Natural Language Processing (Google Cloud)', org: 'Google/Coursera', code: 'UJWNKRJ4Q52U' },
  { name: 'Google Ads for Beginners', org: 'Coursera', code: 'LUFSWCFUFMZU' },
  { name: 'Create Charts and Dashboard using Google Sheets', org: 'Coursera', code: 'UN3QSSZL7SNX' },
  { name: 'App Building with AppSheet (Google cloud)', org: 'Google Cloud', code: '' },
  { name: 'Get Started with Looker (Google cloud)', org: 'Google Cloud', code: '' },
  { name: 'Prompt Design in Vertex AI (Google cloud)', org: 'Google Cloud', code: '' },
  { name: 'Set Up an App Dev Environment (Google cloud)', org: 'Google Cloud', code: '' },
];

export default function Certifications({ isDark }) {
  const [copiedIdx, setCopiedIdx] = useState(null);

  const handleCopy = (code, idx) => {
    navigator.clipboard.writeText(code);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1200);
  };

  return (
    <section id="certifications" className={`py-16 ${isDark ? 'bg-[#1e293b]/80' : 'bg-white/70'}`}>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className={`text-2xl md:text-3xl font-bold mb-8 ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>Certifications</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={cert.name}
              className={`rounded-xl shadow p-5 flex flex-col items-start hover:scale-105 hover:shadow-2xl transition-all duration-300 group relative ${isDark ? 'bg-blue-900/40 text-blue-100' : 'bg-gradient-to-br from-blue-100 to-purple-100 text-gray-800'}`}
            >
              <div className={`font-semibold mb-1 group-hover:text-purple-300 transition-colors duration-200 ${isDark ? 'text-blue-200' : 'text-blue-800'}`}>{cert.name}</div>
              <div className={`text-sm mb-1 ${isDark ? 'text-blue-300' : 'text-gray-700'}`}>{cert.org}</div>
              {cert.code && (
                <div className="flex items-center gap-2 mt-2">
                  <span className={`text-xs ${isDark ? 'text-blue-400' : 'text-gray-500'}`}>Code: {cert.code}</span>
                  <button
                    className={`text-xs px-2 py-1 rounded font-semibold transition-colors duration-200 ${isDark ? 'bg-blue-800 hover:bg-blue-400 hover:text-white text-blue-200' : 'bg-blue-200 hover:bg-blue-400 hover:text-white'}`}
                    onClick={() => handleCopy(cert.code, idx)}
                  >
                    {copiedIdx === idx ? 'Copied!' : 'Copy Code'}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 