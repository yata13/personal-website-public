
import React from 'react';
import { SOCIALS } from '../constants';
import { Code2, Server, Palette, Laptop } from 'lucide-react';

const professions = [
  { name: 'Web Developer', icon: <Code2 className="mb-2" size={32} />, angle: 0 },
  { name: 'Backend Developer', icon: <Server className="mb-2" size={32} />, angle: 90 },
  { name: 'UI/UX Designer', icon: <Palette className="mb-2" size={32} />, angle: 180 },
  { name: 'Tech Enthusiast', icon: <Laptop className="mb-2" size={32} />, angle: 270 },
];

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden px-6 md:px-[10%]">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px] animate-pulse-slow" />

      {/* Content */}
      <div className="max-w-2xl z-10">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 text-primary dark:text-primary-light tracking-widest uppercase">Hello, I am</h3>
        <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight">
          Yared <span className="gradient-text">Tesfahun</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
          I'm a passionate full-stack web developer crafting modern digital experiences with
          <span className="font-bold text-slate-900 dark:text-white"> React, Node.js, and Cloud Tech</span>.
        </p>
        {/* Socials */}
        <div className="flex gap-4 mb-10">
          {SOCIALS.map((social, idx) => (
            <a 
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-white hover:bg-main-gradient hover:border-transparent transition-all duration-500 shadow-sm"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a 
            href="#" 
            className="px-10 py-4 bg-main-gradient text-white font-bold rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
          >
            Download CV
          </a>
          <a 
            href="#portfolio" 
            className="px-10 py-4 glass-card text-slate-900 dark:text-white font-bold rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 border border-slate-200 dark:border-slate-700"
          >
            My Work
          </a>
        </div>
      </div>

      {/* Rotating Background Animation (Desktop Only) */}
      <div className="hidden lg:block absolute right-[-5%] top-1/2 -translate-y-1/2 w-[900px] h-[900px] pointer-events-none">
        <div className="relative w-full h-full flex items-center justify-center animate-spin-slow">
          {/* Main Ring */}
          <div className="w-[600px] h-[600px] border-[1px] border-dashed border-primary/40 rounded-full" />
          <div className="absolute w-[450px] h-[450px] border-[1px] border-secondary/30 rounded-full" />
          
          {professions.map((prof, i) => (
            <div 
              key={i}
              className="absolute glass-card p-6 rounded-3xl flex flex-col items-center justify-center text-primary shadow-2xl border border-primary/10 w-44 h-44"
              style={{
                transform: `rotate(${prof.angle}deg) translate(300px) rotate(-${prof.angle}deg)`,
                animation: `counterRotate 20s linear infinite`
              }}
            >
              <div className="p-3 bg-main-gradient text-white rounded-2xl mb-3 shadow-lg shadow-primary/20">
                {prof.icon}
              </div>
              <h3 className="text-sm font-black uppercase tracking-tighter text-slate-800 dark:text-white text-center">{prof.name}</h3>
            </div>
          ))}
        </div>
        {/* Soft fading overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-lightBg dark:from-darkBg via-transparent to-transparent z-0" />
      </div>

      <style>{`
        @keyframes counterRotate {
          0% { transform: rotate(0deg) translate(300px) rotate(0deg); }
          100% { transform: rotate(360deg) translate(300px) rotate(-360deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
