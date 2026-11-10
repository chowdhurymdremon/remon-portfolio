import React, { useState, useEffect } from 'react';

/**
 * Thin cyan scroll progress bar fixed at the very top of the page.
 * Tracks global window scroll progress from 0% to 100% with smooth hardware acceleration.
 */
export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const currentScroll = window.scrollY;
            const progress = Math.min(Math.max((currentScroll / totalHeight) * 100, 0), 100);
            setScrollProgress(progress);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 h-[2.5px] bg-slate-900/40 pointer-events-none"
    >
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 shadow-[0_0_10px_rgba(6,182,212,0.85),0_0_4px_rgba(0,242,254,1)] transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
