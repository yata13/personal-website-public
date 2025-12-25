import React from 'react';
import { Terminal, Database, Cpu, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-[10%] bg-obsidian relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Editorial Intro */}
        <div className="lg:col-span-7">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Manifesto</span>
          <h2 className="text-5xl md:text-7xl font-display font-black mb-10 leading-tight">
            DECODING <span className="text-white/20">THE</span> <br /> 
            FUTURE.
          </h2>
          <div className="space-y-8 text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
            <p>
              Based in Addis Ababa, I specialize in building the <span className="text-white font-medium">technical backbone</span> of digital products. My philosophy is simple: code should be invisible, yet indispensable.
            </p>
            <p>
              Whether it's optimizing a <span className="text-accent">PostgreSQL</span> query or crafting a 60fps interaction in <span className="text-accent">Framer Motion</span>, I treat every line of code as a piece of digital craftsmanship.
            </p>
          </div>
          
          <div className="mt-16 flex gap-12">
            <div>
              <p className="text-5xl font-display font-bold text-white">03+</p>
              <p className="text-xs uppercase tracking-widest text-muted mt-2 font-bold">Years of Obsession</p>
            </div>
            <div>
              <p className="text-5xl font-display font-bold text-white">25</p>
              <p className="text-xs uppercase tracking-widest text-muted mt-2 font-bold">Completed Sprints</p>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Bento Grid */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          <div className="bento-card p-6 flex flex-col justify-between col-span-2">
            <Terminal className="text-accent mb-4" size={24} />
            <h4 className="text-white font-bold mb-2">Core Competency</h4>
            <p className="text-sm text-gray-500">React, TypeScript, Node.js, AWS</p>
          </div>
          <div className="bento-card p-6">
            <Cpu className="text-purple-400 mb-4" size={24} />
            <h4 className="text-white font-bold text-sm">Performance</h4>
            <p className="text-xs text-gray-500 mt-2">Core Web Vitals Specialist</p>
          </div>
          <div className="bento-card p-6">
            <Database className="text-blue-400 mb-4" size={24} />
            <h4 className="text-white font-bold text-sm">Systems</h4>
            <p className="text-xs text-gray-500 mt-2">Architecture & Scale</p>
          </div>
          <div className="bento-card p-4 col-span-2 bg-gradient-to-br from-accent/20 to-transparent flex items-center justify-between group cursor-pointer">
            <span className="text-white font-bold text-sm">Download Tech Rider / CV</span>
            <Globe className="text-accent group-hover:rotate-45 transition-transform" size={20} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;