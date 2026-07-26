import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="bg-[#fbff00] text-gray-900 px-8 py-3 rounded-md font-bold text-sm md:text-base hover:scale-105 transition-transform shadow-lg pointer-events-auto"
    >
      {children}
    </button>
  );
};

export default Button;