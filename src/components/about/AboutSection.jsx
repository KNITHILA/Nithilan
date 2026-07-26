import React from 'react';
import Reveal from '../ui/Reveal';

const AboutSection = () => {
  return (
    <section id="about" className="relative w-full py-24 min-h-screen bg-[#0a0a0a] font-sans text-white flex flex-col justify-center snap-start overflow-hidden pl-16 md:pl-32 pr-6 md:pr-16">
      
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

      <Reveal>
        <div className="max-w-6xl mx-auto w-full relative z-10">
          
          <div className="mb-12 border-b border-white/10 pb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-500 mb-2 block">02 // Profile</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase text-white drop-shadow-lg">
              Design Logic &<br />Scalable Code.
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Expanded Resume Content */}
            <div className="lg:col-span-7 space-y-6 text-sm text-gray-300 font-light leading-relaxed">
              <p>
                I am a passionate and self-motivated Information Technology student with a strong interest in building innovative solutions that solve real-world challenges[cite: 1]. I specialize in full-stack architecture and cross-platform mobile development.
              </p>
              <p>
                As a quick learner with a curious mindset, I apply excellent analytical thinking and a commitment to continuous improvement to every codebase[cite: 1]. I enjoy learning from every challenge, collaborating with diverse teams, and contributing to meaningful projects that create lasting value[cite: 1].
              </p>
              <p>
                Driven by creativity and responsibility, my goal is to grow into a highly skilled software professional while making a positive impact through technology[cite: 1]. Whether it is wiring up AI with FastAPI or crafting layouts with React, my approach remains the same: engineer it to be clean, fast, and highly scalable.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="bg-gradient-to-br from-white/[0.08] to-transparent p-6 rounded-3xl border border-white/10 backdrop-blur-md hover:border-white/30 transition-all group">
                <h3 className="text-sm font-black mb-1 uppercase text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">UI/UX to Production</h3>
                <p className="text-xs text-gray-400">Taking wireframes and interactive layouts from Figma and translating them into pixel-perfect components.</p>
              </div>
              <div className="bg-gradient-to-br from-white/[0.08] to-transparent p-6 rounded-3xl border border-white/10 backdrop-blur-md hover:border-white/30 transition-all group">
                <h3 className="text-sm font-black mb-1 uppercase text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">AI & Full-Stack Logic</h3>
                <p className="text-xs text-gray-400">Integrating intelligent AI logic and automating complex data parsing workflows using secure backends.</p>
              </div>
            </div>

          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default AboutSection;