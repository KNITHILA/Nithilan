import React from 'react';
import Reveal from '../ui/Reveal';

const SkillsSection = () => {
  const skillCategories = [
    { title: "Frontend", skills: ["React.js", "TypeScript", "Tailwind CSS", "HTML5"] },
    { title: "Backend", skills: ["Node.js", "FastAPI", "Firebase", "REST APIs"] },
    { title: "Core Languages", skills: ["Python", "Java", "Dart", "JavaScript"] },
    { title: "Mobile & Tools", skills: ["Flutter", "Git", "Figma", "VS Code"] }
  ];

  return (
    <section id="skills" className="relative w-full py-24 min-h-screen bg-[#0a0a0a] font-sans text-white flex flex-col justify-center snap-start overflow-hidden pl-16 md:pl-32 pr-6 md:pr-16">
      
      {/* Abstract Background Glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

      <Reveal>
        <div className="max-w-5xl mx-auto w-full relative z-10">
          
          <div className="mb-16 border-b border-white/10 pb-8">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-500 mb-2 block">03 // The Arsenal</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase text-white drop-shadow-lg">
              Tech Stack.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white/[0.02] border border-white/10 p-8 rounded-3xl backdrop-blur-xl hover:bg-white/[0.05] hover:border-white/30 transition-all duration-300">
                <h3 className="text-sm font-black mb-6 uppercase text-white tracking-widest">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="group">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-xs font-bold text-gray-300 group-hover:text-white transition-colors">{skill}</span>
                      </div>
                      {/* Decorative Glowing Bar */}
                      <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-white/40 group-hover:bg-white group-hover:shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-500 w-[85%]"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </Reveal>
    </section>
  );
};

export default SkillsSection;