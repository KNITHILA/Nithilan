import React from 'react';
import Reveal from '../ui/Reveal';

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Freelance Web Developer",
      period: "Present",
      description: "Developed responsive business websites using React and TypeScript. Designed scalable frontend architectures with reusable components to transform business requirements into production-ready applications[cite: 1]."
    },
    {
      role: "Data Analytics Intern",
      period: "Recent",
      description: "Worked on data handling and analysis tasks using Python, gaining practical exposure to structured data processing and analytics workflows[cite: 1]."
    },
    {
      role: "Hardware Intern",
      period: "Recent",
      description: "Gained hands-on exposure to hardware systems, troubleshooting, and technical operations, improving debugging mindset and system workflows[cite: 1]."
    }
  ];

  const achievements = [
    {
      title: "2nd Prize at Nexathon Hackathon",
      description: "Won 2nd prize for developing BLIND, an AI-based real-time nudity detection and blurring system[cite: 1]."
    },
    {
      title: "Hackathon Competitor & Problem Solver",
      description: "Actively participated in multiple hackathons during 2023-2025, gaining practical experience in problem-solving, teamwork, and rapid product development[cite: 1]."
    },
    {
      title: "Cybersecurity & Ethical Hacking",
      description: "Completed comprehensive certification from GUVI in 2023, building security awareness and safe development practices[cite: 1]."
    }
  ];

  return (
    <section id="experience" className="relative w-full py-24 min-h-screen bg-[#0a0a0a] font-sans text-white flex flex-col justify-center snap-start overflow-hidden pl-16 md:pl-32 pr-6 md:pr-16">
      <Reveal>
        <div className="max-w-6xl mx-auto w-full relative z-10">
          
          <div className="mb-16 border-b border-white/10 pb-8">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-500 mb-2 block">04 // History</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase text-white drop-shadow-lg">
              Experience & Milestones.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Left Column: Professional Journey (Glowing Timeline) */}
            <div>
              <h3 className="text-sm font-black uppercase text-white tracking-widest mb-8 drop-shadow-md">Professional Journey</h3>
              <div className="relative border-l border-white/20 pl-8 space-y-10 ml-2">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-white group-hover:shadow-[0_0_15px_rgba(255,255,255,1)] group-hover:bg-white transition-all duration-300"></div>
                    <div className="bg-gradient-to-r from-white/[0.05] to-transparent p-6 rounded-3xl border border-white/10 backdrop-blur-md group-hover:border-white/30 transition-all duration-300">
                      <div className="flex flex-col mb-2">
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1">{exp.period}</span>
                        <h4 className="text-base font-black text-white uppercase tracking-wide">{exp.role}</h4>
                      </div>
                      <p className="text-xs text-gray-400 font-light leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Achievements */}
            <div>
              <h3 className="text-sm font-black uppercase text-white tracking-widest mb-8 drop-shadow-md">Key Achievements</h3>
              <div className="space-y-6">
                {achievements.map((item, index) => (
                  <div key={index} className="bg-white/[0.03] p-6 rounded-3xl border border-white/10 backdrop-blur-md hover:bg-white/[0.08] transition-all duration-300">
                    <h4 className="text-sm font-black text-white uppercase mb-2 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">{item.title}</h4>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </Reveal>
    </section>
  );
};

export default ExperienceSection;