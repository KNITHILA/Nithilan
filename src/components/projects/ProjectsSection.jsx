import React from 'react';
import Reveal from '../ui/Reveal';

const ProjectsSection = () => {
  const projects = [
    {
      title: "BLIND - AI Privacy System",
      tech: "Flutter, FastAPI",
      description: "Real-time AI privacy protection app. Secured 2nd Prize at the Nexathon Hackathon.",
      tag: "Award Winning"
    },
    {
      title: "GPA Mate",
      tech: "React, TypeScript, FastAPI",
      description: "Full-stack academic platform built to parse, analyze, and automate university exam data.",
      tag: "Full-Stack"
    },
    {
      title: "Noise Conflict Estimator",
      tech: "Flutter, SQLite",
      description: "Mobile smart-monitoring tool providing real-time sound awareness with color-coded risk indicators.",
      tag: "Mobile App"
    },
    {
      title: "Smart Parking System",
      tech: "React, Firebase",
      description: "Web-based reservation platform enabling advance slot bookings and QR verification.",
      tag: "Web App"
    }
  ];

  return (
    <section id="projects" className="relative w-full py-24 min-h-screen bg-[#0a0a0a] font-sans text-white flex flex-col justify-center snap-start overflow-hidden pl-16 md:pl-32 pr-6 md:pr-16">
      
      {/* Abstract Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] pointer-events-none"></div>

      <Reveal>
        <div className="max-w-5xl mx-auto w-full relative z-10">
          
          <div className="mb-16 border-b border-white/10 pb-8">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-500 mb-2 block">05 // Builds</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase text-white drop-shadow-lg">
              Featured Projects.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((proj, index) => (
              <div key={index} className="group relative bg-white/[0.03] border border-white/10 p-8 rounded-3xl backdrop-blur-xl hover:bg-white/[0.06] transition-all duration-500 overflow-hidden cursor-pointer">
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[9px] font-black text-black bg-white px-2 py-1 rounded uppercase tracking-[0.2em] shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                        {proj.tag}
                      </span>
                      <span className="text-white bg-white/10 p-2 rounded-full group-hover:bg-white group-hover:text-black transition-all group-hover:rotate-45">
                        ↗
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-white uppercase tracking-wide mb-2 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all">
                      {proj.title}
                    </h3>
                    <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest border-b border-white/10 pb-3 inline-block">
                      {proj.tech}
                    </p>
                  </div>
                  <p className="text-sm text-gray-300 font-light leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Reveal>
    </section>
  );
};

export default ProjectsSection;