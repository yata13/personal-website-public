import React from 'react';
import { ArrowUpRight, Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { SOCIALS } from '../constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-obsidian py-32 px-6 md:px-[10%] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-24">
          <div>
            <h2 className="text-6xl md:text-8xl font-display font-black mb-10 tracking-tighter">
              LET'S <br /> <span className="text-accent">BUILD</span>.
            </h2>
            <p className="text-gray-500 text-xl max-w-md mb-12">
              Currently accepting new projects and consulting opportunities for Q3 2025.
            </p>
            <div className="flex gap-4">
              {SOCIALS.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  className="w-12 h-12 bento-card flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/40 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-accent text-[10px] font-black uppercase tracking-widest mb-8">Navigation</h4>
              <nav className="flex flex-col gap-4 text-gray-400 font-medium">
                <a href="#home" className="hover:text-white transition-colors">Home</a>
                <a href="#about" className="hover:text-white transition-colors">About</a>
                <a href="#services" className="hover:text-white transition-colors">Expertise</a>
                <a href="#portfolio" className="hover:text-white transition-colors">Works</a>
              </nav>
            </div>
            <div>
              <h4 className="text-accent text-[10px] font-black uppercase tracking-widest mb-8">Location</h4>
              <p className="text-gray-400 font-medium leading-loose">
                Addis Ababa,<br />
                Ethiopia <br />
                GMT +3
              </p>
              <button 
                onClick={scrollToTop}
                className="mt-12 text-white font-bold flex items-center gap-2 group border-b border-accent pb-2"
              >
                Back to Top <ArrowUpRight size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">
          <p>© 2025 YARED TESFAHUN</p>
          <p className="mt-4 md:mt-0">ESTABLISHED IN ADDIS ABABA</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;