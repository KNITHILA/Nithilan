import React, { useEffect, useState } from 'react';

const ScrollTracker = () => {
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const container = document.getElementById('scroll-container');
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      
      const currentProgress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setProgress(currentProgress);

      const index = Math.round(scrollTop / container.clientHeight);
      setActiveIndex(index + 1);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-4 md:left-10 top-0 bottom-0 w-[40px] z-50 flex flex-col items-center justify-center pointer-events-none hidden md:flex">
      
      {/* Dark Track Line */}
      <div className="absolute inset-0 w-[1px] bg-white/10 mx-auto"></div>

      {/* Glowing Progress Fill Line */}
      <div 
        className="absolute top-0 w-[2px] bg-white transition-all duration-150 ease-out shadow-[0_0_15px_3px_rgba(255,255,255,0.9)]"
        style={{ height: `${progress}%` }}
      ></div>

      {/* Glowing Center Text Mask */}
      <div className="bg-[#0a0a0a] py-6 px-2 z-10 flex items-center justify-center shadow-[0_0_20px_10px_rgba(10,10,10,1)]">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] whitespace-nowrap">
          {activeIndex} SCROLL
        </span>
      </div>

    </div>
  );
};

export default ScrollTracker;