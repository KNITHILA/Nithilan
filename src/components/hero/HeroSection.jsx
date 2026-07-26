import React, { useState } from 'react';
import Navbar from '../layout/Navbar';
import TechModal from './TechModal';
import portraitImage from '../../assets/hero-portrait.png'; 
import Resume from '../../assets/Nithilan_Resume.pdf'; // 1. IMPORT THE PDF HERE

const HeroSection = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  const servicesList = [
    "Websites & Landing Pages",
    "Full-Stack Applications",
    "Mobile Apps (Flutter)",
    "UI/UX Design Systems"
  ];

  const techStack = [
    "React & TypeScript",
    "Node & FastAPI",
    "Flutter Mobile",
    "Figma UI/UX"
  ];

  return (
    <section id="home" className="relative w-full min-h-[100dvh] bg-[#0a0a0a] text-white flex flex-col justify-between overflow-hidden font-sans snap-start px-6 md:pl-32 md:pr-16 py-20 md:py-8">
      
      <div className="relative z-20">
        <Navbar />
      </div>

      <div className="relative z-10 my-auto grid lg:grid-cols-12 gap-6 items-center max-w-7xl mx-auto w-full pt-4">
        
        <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="w-36 h-36 md:w-48 md:h-48 rounded-full border-2 border-white/20 overflow-hidden bg-gray-800 shadow-2xl mb-6">
            <img src={portraitImage} alt="Nithilan" className="w-full h-full object-cover object-top" />
          </div>
          
          <p className="text-sm italic font-serif text-gray-300 mb-4 max-w-xs leading-relaxed">
            "Like every instrument, every life finds its own rhythm."
          </p>

          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-1">
            Nithilan B
          </h1>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 mb-4">
            Developer
          </p>
        </div>

        <div className="lg:col-span-4">
          <div className="p-7 bg-white/[0.04] backdrop-blur-2xl border border-white/10 shadow-2xl rounded-3xl flex flex-col gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400">What I Create</span>
            <div className="flex flex-col gap-2">
              {servicesList.map((service, index) => (
                <div key={index} className="group flex items-center justify-between py-2.5 border-b border-white/10 transition-all">
                  <span className="text-xs md:text-sm font-bold text-gray-200 group-hover:text-white transition-colors">{service}</span>
                  <span className="text-xs font-mono text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all">↗</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="p-7 bg-white/[0.04] backdrop-blur-2xl border border-white/10 shadow-2xl rounded-3xl flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400">Core Stack</span>
              <span className="text-[9px] bg-white/10 text-gray-300 px-2 py-0.5 rounded font-mono">Click item</span>
            </div>
            <div className="flex flex-col gap-2">
              {techStack.map((tech, index) => (
                <button key={index} onClick={() => setSelectedTech(tech)} className="group w-full text-left flex items-center justify-between py-2.5 border-b border-white/10 cursor-pointer bg-transparent hover:px-2 transition-all">
                  <span className="text-xs md:text-sm font-bold text-gray-200 group-hover:text-white">{tech}</span>
                  <span className="text-xs font-mono text-gray-500 group-hover:text-white group-hover:rotate-45 transition-all">＋</span>
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>

      <div className="relative z-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-4 border-t border-white/10 pt-6">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0"></span>
          <span className="text-[10px] md:text-xs font-mono text-gray-300 uppercase tracking-widest">Status: Available for Work</span>
        </div>
        <div className="flex flex-col sm:flex-row w-full md:w-auto items-stretch sm:items-center gap-3 md:gap-4">
          <a 
            href="#projects"
            className="text-center px-6 py-3.5 rounded-full bg-white text-gray-900 font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-gray-200 hover:-translate-y-0.5 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          >
            Explore Projects
          </a>
          <a 
            href={Resume} // 2. USE THE IMPORTED VARIABLE HERE
            download="Nithilan_Resume.pdf"
            className="text-center px-6 py-3.5 rounded-full bg-white/10 text-white font-black text-[10px] md:text-xs uppercase tracking-widest border border-white/20 hover:bg-white/20 hover:-translate-y-0.5 transition-all"
          >
            Download Resume
          </a>
        </div>
      </div>

      <TechModal isOpen={Boolean(selectedTech)} onClose={() => setSelectedTech(null)} tech={selectedTech} />
    </section>
  );
};

export default HeroSection;