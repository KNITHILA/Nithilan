import React from 'react';
import HeroSection from './components/hero/HeroSection';
import AboutSection from './components/about/AboutSection';
import SkillsSection from './components/skills/SkillsSection';
import ExperienceSection from './components/experience/ExperienceSection';
import ProjectsSection from './components/projects/ProjectsSection';
import ContactSection from './components/contact/ContactSection';
import ScrollTracker from './components/ui/ScrollTracker';

function App() {
  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-[#0a0a0a]">
      {/* Minimalist Glowing Scroll Tracker */}
      <ScrollTracker />
      
      {/* Scrollable Container */}
      <main id="scroll-container" className="absolute inset-0 overflow-x-hidden overflow-y-auto snap-y snap-mandatory scroll-smooth bg-[#0a0a0a]">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;