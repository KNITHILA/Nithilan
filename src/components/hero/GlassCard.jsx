import React from 'react';

const GlassCard = ({ children, className = "" }) => {
  return (
    <div className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl pointer-events-auto ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;