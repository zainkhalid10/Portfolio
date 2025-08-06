import React, { useRef, useEffect, useState } from 'react';

function useTypewriter(text, inView, speed = 8) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    if (!inView) return;
    setDisplayed('');
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, inView, speed]);
  return displayed;
}

export default function About({ isDark }) {
  const ref = useRef();
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const typeText = `I’m a highly motivated final-year Computer Science student at FAST NUCES with a strong foundation in full-stack development and a passion for creating seamless digital experiences. Proficient in multiple programming languages including Python, Java, C++, and JavaScript, I bring hands-on experience in both front-end and back-end development, as well as database integration.\n\nI specialize in building responsive user interfaces using React, Tailwind CSS, and Flutter, and have developed scalable backend solutions with Flutter, Node.js, Express, and Django. My experience also includes working with modern databases such as MongoDB, MySQL, and PostgreSQL, enabling me to deliver complete, end-to-end software solutions.

With a solid grasp of data structures, algorithms, and software engineering principles, I thrive in fast-paced, collaborative environments. I'm now looking to apply my skills and creativity to innovative projects that push boundaries and drive real impact.
\n\nIslamabad, 47080 | +923030603432 | of.mzain@gmail.com\n\nMuhammad Zain`;
  const typed = useTypewriter(typeText, inView, 8);
  // Split the typed text into paragraphs for rendering
  const [p1, p2, p3, p4] = typed.split('\n');
  return (
    <section id="about" className={`py-16 ${isDark ? 'bg-[#1e293b]/80' : 'bg-white/70'}` + ' font-[\'Fredoka\'],[\'Baloo 2\'],cursive'}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&family=Baloo+2:wght@400;700&display=swap');`}</style>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className={`text-3xl md:text-5xl font-bold mb-6 text-center ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>About Me</h2>
        <div ref={ref} className={`${isDark ? 'bg-[#0f172a] text-white' : 'bg-white text-gray-800'} rounded-xl shadow-lg p-8 md:p-14` + ' font-[\'Fredoka\'],[\'Baloo 2\'],cursive'}>
          <p className="text-2xl md:text-3xl mb-4 min-h-[3.5rem]">{p1 || ''}</p>
          <p className="text-xl md:text-2xl mb-4">{p2 || ''}</p>
          <p className={`text-lg md:text-xl ${isDark ? 'text-blue-200' : 'text-gray-500'} mb-2`}>{p3 || ''}</p>
          <p className={`text-lg md:text-xl mt-2 font-bold ${isDark ? 'text-blue-200' : 'text-gray-500'}`}>{p4 || ''}</p>
          {typed.length < typeText.length && <span className="animate-pulse text-2xl md:text-3xl">|</span>}
        </div>
      </div>
    </section>
  );
} 
