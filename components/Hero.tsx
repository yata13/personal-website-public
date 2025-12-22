import React from 'react';
import { SOCIALS } from '../constants';
import { ArrowRight, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden bg-obsidian">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[600px] bg-accent/5 blur-[160px] pointer-events-none rounded-full" />
      
      <div className="z-10 flex flex-col items-center text-center max-w-5xl">
        {/* Availability Badge */}
        <div className="mb-8 flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-widest uppercase animate-pulse">
          <span className="w-2 h-2 bg-accent rounded-full"></span>
          Available for new projects
        </div>

        <h1 className="text-6xl md:text-[120px] font-display font-black leading-[0.9] tracking-tighter mb-8 flex flex-col">
          <span>FULL-STACK</span>
          <span className="gradient-text">ARCHITECT</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light mb-12 leading-relaxed">
          I build high-performance, accessible digital products that merge 
          <span className="text-white font-medium"> brutalist efficiency </span> 
          with <span className="text-accent font-medium"> fluid aesthetics</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mb-16">
          <a 
            href="#portfolio" 
            className="group px-10 py-5 bg-accent text-obsidian font-bold rounded-2xl flex items-center gap-3 hover:bg-white transition-all duration-500 shadow-[0_0_40px_-10px_rgba(45,212,191,0.5)]"
          >
            View Projects <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </a>
          <div className="flex items-center gap-4">
            {SOCIALS.map((social, idx) => (
              <a 
                key={idx}
                href={social.href}
                className="w-14 h-14 bento-card flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/40 transition-all"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Floating Code Bit */}
      <div className="hidden lg:block absolute bottom-20 left-[10%] animate-float">
        <div className="bento-card p-6 border-accent/10 bg-obsidian-soft/40 backdrop-blur-md">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
          <p className="font-mono text-sm text-accent/80">const stack = ['React', 'Node', 'Rust'];</p>
          <p className="font-mono text-sm text-gray-500">status: 'Building excellence...'</p>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <span className="text-[10px] uppercase tracking-[0.3em]">Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;