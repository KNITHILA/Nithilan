import React from 'react';
import Reveal from '../ui/Reveal';

const ContactSection = () => {
  const contactMethods = [
    {
      title: "Email",
      value: "nbnithilan@gmail.com",
      link: "mailto:nbnithilan@gmail.com",
      action: "Send Message",
      icon: "✉"
    },
    {
      title: "Phone",
      value: "9345283475",
      link: "tel:9345283475",
      action: "Call Now",
      icon: "✆"
    },
    {
      title: "Instagram",
      value: "__nithi_._",
      link: "https://instagram.com/__nithi_._",
      action: "Follow & DM",
      icon: "✦"
    }
  ];

  return (
    <section id="contact" className="relative w-full py-24 min-h-screen bg-[#0a0a0a] font-sans text-white flex flex-col justify-center snap-start overflow-hidden pl-16 md:pl-32 pr-6 md:pr-16">
      
      {/* Abstract Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] pointer-events-none"></div>

      <Reveal>
        <div className="max-w-5xl mx-auto w-full relative z-10">
          
          <div className="mb-12 border-b border-white/10 pb-8">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-500 mb-2 block">06 // Connect</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase text-white drop-shadow-lg">
              Initiate Dialogue.
            </h2>
            <p className="text-sm text-gray-400 mt-4 max-w-md">
              Whether you have a project in mind, need a scalable architecture, or just want to chat about tech, my inbox is open.
            </p>
          </div>

          {/* Standard Contact Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((contact, index) => (
              <a 
                key={index}
                href={contact.link}
                target={contact.title === 'Instagram' ? "_blank" : "_self"}
                rel="noreferrer"
                className="group relative bg-white/[0.03] border border-white/10 p-8 rounded-3xl backdrop-blur-xl hover:bg-white/[0.08] transition-all duration-500 flex flex-col justify-between h-56 cursor-pointer overflow-hidden"
              >
                {/* Hover Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex justify-between items-start">
                  <span className="text-2xl text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)] transition-all">
                    {contact.icon}
                  </span>
                  <span className="text-white bg-white/10 w-8 h-8 flex items-center justify-center rounded-full group-hover:bg-white group-hover:text-black transition-all group-hover:-rotate-45">
                    →
                  </span>
                </div>

                <div className="relative z-10">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1 group-hover:text-gray-300 transition-colors">
                    {contact.title}
                  </p>
                  <h3 className="text-lg font-bold text-white tracking-wide mb-3 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">
                    {contact.value}
                  </h3>
                  <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full bg-white w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
                  </div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mt-4">
                    {contact.action}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Big Prominent GitHub Banner */}
          <a 
            href="https://github.com/KNITHILA/KNITHILAN"
            target="_blank"
            rel="noreferrer"
            className="mt-6 group relative bg-white/[0.03] border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-xl hover:bg-white/[0.08] transition-all duration-500 flex flex-col md:flex-row items-center justify-between cursor-pointer overflow-hidden"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex items-center gap-6 md:gap-10">
              {/* SVG GitHub Logo */}
              <svg 
                className="w-16 h-16 md:w-20 md:h-20 fill-white group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-500" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight uppercase group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all">
                  Explore My Code
                </h3>
                <p className="text-gray-400 text-sm mt-2 font-mono group-hover:text-white transition-colors">
                  github.com/KNITHILA/KNITHILAN
                </p>
              </div>
            </div>

            <div className="relative z-10 mt-6 md:mt-0">
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] transition-all duration-300">
                <span className="text-xl group-hover:rotate-45 transition-transform duration-500">↗</span>
              </div>
            </div>
          </a>

          {/* Minimalist Footer */}
          <div className="mt-16 text-center border-t border-white/10 pt-8">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-600">
              © {new Date().getFullYear()} Nithilan B.
            </p>
          </div>

        </div>
      </Reveal>
    </section>
  );
};

export default ContactSection;