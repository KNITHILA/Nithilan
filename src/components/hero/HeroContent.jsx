import React from 'react';
import Button from '../ui/Button';

const HeroContent = () => {
  return (
    <div className="absolute bottom-10 md:bottom-12 z-30 flex flex-col items-center text-center pointer-events-none w-full px-4">
      {/* Slogan */}
      <p className="text-white text-lg md:text-xl font-medium italic mb-2 drop-shadow-lg">
        "Like every instrument, every life finds its own rhythm."
      </p>
      
      {/* Main Title */}
      <h2 className="text-white text-5xl md:text-7xl font-black leading-none tracking-tight drop-shadow-2xl mb-6 uppercase">
        Developer
      </h2>
      
      {/* Buttons */}
      <div className="flex gap-4 pointer-events-auto">
        <Button>Projects</Button>
        <Button>Download Resume</Button>
      </div>
    </div>
  );
};

export default HeroContent;