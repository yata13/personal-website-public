
import React from 'react';
import { ChevronUp } from 'lucide-react';
import { SOCIALS } from '../constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-darkBg py-20 px-6 md:px-[10%] text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-main-gradient" />
      <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-black gradient-text mb-6">Yared.</h2>
          <p className="text-slate-400 max-w-sm mb-8 text-lg leading-relaxed">
            Pioneering the future of web development through elegant code and immersive user experiences.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            {SOCIALS.map((social, idx) => (
              <a 
                key={idx}
                href={social.href}
                className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center border border-white/10 text-white hover:bg-main-gradient hover:border-transparent transition-all shadow-lg"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="text-center md:text-right">
          <nav className="flex flex-wrap gap-8 justify-center md:justify-end mb-8 text-slate-400 font-bold uppercase tracking-widest text-sm">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Work</a>
          </nav>
          <p className="text-xl font-black">© 2025 Yared Tesfahun</p>
          <p className="text-slate-500 text-sm mt-2 font-medium">Addis Ababa • Digital Excellence</p>
          <button 
            onClick={scrollToTop}
            className="mt-10 p-5 bg-white text-darkBg rounded-2xl hover:bg-main-gradient hover:text-white hover:shadow-2xl transition-all inline-flex items-center gap-3 group font-black uppercase text-sm tracking-widest shadow-xl"
          >
            Back to Peak <ChevronUp size={24} className="group-hover:-translate-y-2 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
