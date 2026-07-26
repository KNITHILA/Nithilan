import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center py-6 px-6 md:px-12 z-50">
      
      {/* Empty div to keep the center menu perfectly balanced */}
      <div className="hidden md:block w-32"></div>
      
      {/* Centered Navigation Links */}
      <ul className="flex gap-4 md:gap-8 text-[10px] md:text-xs font-black uppercase tracking-widest text-white drop-shadow-md bg-white/[0.03] border border-white/10 px-6 md:px-8 py-3 rounded-full backdrop-blur-md">
        <li className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)] text-gray-300 cursor-pointer transition-all">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)] text-gray-300 cursor-pointer transition-all">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)] text-gray-300 cursor-pointer transition-all">
          <a href="#skills">Skills</a>
        </li>
        <li className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)] text-gray-300 cursor-pointer transition-all">
          <a href="#experience">Experience</a>
        </li>
        <li className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)] text-gray-300 cursor-pointer transition-all">
          <a href="#projects">Projects</a>
        </li>
      </ul>

      {/* Updated Let's Talk Button pointing to #contact */}
      <div className="w-32 flex justify-end">
        <a 
          href="#contact" 
          className="text-[10px] font-black uppercase tracking-widest bg-white text-black px-5 py-2.5 rounded-full hover:bg-gray-200 hover:scale-105 transition-all shadow-[0_0_15px_rgba(255,255,255,0.4)]"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

export default Navbar;