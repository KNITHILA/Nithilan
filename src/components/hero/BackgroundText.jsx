import React from 'react';

const BackgroundText = ({ text }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-gray-900/[0.08] leading-none whitespace-nowrap">
        {text}
      </h2>
    </div>
  );
};

export default BackgroundText;