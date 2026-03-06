import React from 'react';
import { FaTimes, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

// Raw file URL from GitHub (same file as https://github.com/zainkhalid10/Portfolio/blob/main/CV.pdf)
const CV_PDF_URL = 'https://raw.githubusercontent.com/zainkhalid10/Portfolio/main/CV.pdf';

export default function CVViewer({ onClose, isDark }) {
  const openInNewTab = () => {
    window.open(CV_PDF_URL, '_blank', 'noopener,noreferrer');
  };

  const handleDownload = (e) => {
    e.preventDefault();
    const a = document.createElement('a');
    a.href = CV_PDF_URL;
    a.download = 'CV.pdf';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/90" aria-modal="true" role="dialog">
      <div className={`flex items-center justify-between px-4 py-3 ${isDark ? 'bg-[#1e293b]' : 'bg-gray-800'} border-b border-white/10`}>
        <h2 className="text-lg font-semibold text-white">CV</h2>
        <button
          onClick={onClose}
          className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Close"
        >
          <FaTimes className="w-6 h-6" />
        </button>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center min-h-0 p-6">
        <div className={`max-w-md w-full rounded-xl p-8 text-center ${isDark ? 'bg-[#1e293b]' : 'bg-gray-800'} border border-white/10`}>
          <p className="text-white text-lg mb-6">View or download your CV</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              onClick={openInNewTab}
              className="flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors"
            >
              <FaExternalLinkAlt /> View CV
            </button>
            <button
              type="button"
              onClick={handleDownload}
              className="flex items-center justify-center gap-2 px-5 py-3 border border-white/30 hover:bg-white/10 text-white rounded-lg font-medium transition-colors"
            >
              <FaDownload /> Download
            </button>
          </div>
          <p className="text-white/50 text-sm mt-4">View opens the PDF in a new tab. Download saves the file.</p>
        </div>
      </div>
    </div>
  );
}
