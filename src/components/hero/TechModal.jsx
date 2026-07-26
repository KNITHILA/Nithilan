import React from 'react';

const TechModal = ({ isOpen, onClose, tech }) => {
  if (!isOpen) return null;

  const details = {
    "React & TypeScript": "Building dynamic, type-safe, and responsive user interfaces with reusable component architecture under Nextera Digital.",
    "Node & FastAPI": "Developing high-performance backend systems, automated data parsers, and secure RESTful microservice architectures.",
    "Flutter Mobile": "Engineering cross-platform, native-feeling mobile applications with seamless animations and state management.",
    "Figma UI/UX": "Translating user wireframes and design systems into pixel-ready production code with optimized user experiences."
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-gray-100 transform transition-all scale-100">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide">{tech}</h3>
          <button 
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 font-bold hover:bg-gray-200 transition-colors"
          >
            ✕
          </button>
        </div>
        <p className="text-gray-600 leading-relaxed text-xs mb-5">
          {details[tech] || "Core technology utilized in modern production pipelines and full-stack software development architectures."}
        </p>
        <button 
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-gray-900 text-white font-bold text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default TechModal;