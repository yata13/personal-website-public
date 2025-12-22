import React from 'react';
import { SERVICES } from '../constants';
import { Code2, Server, Brain, Plus } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={24} />,
  Server: <Server size={24} />,
  Brain: <Brain size={24} />,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 md:px-[10%] bg-obsidian-soft">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Expertise</span>
            <h2 className="text-5xl md:text-7xl font-display font-black">SOLUTIONS<span className="text-accent">.</span></h2>
          </div>
          <p className="text-gray-500 max-w-sm text-lg italic">
            "Merging architectural precision with creative intuition."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id} 
              className={`bento-card p-10 flex flex-col group ${idx === 2 ? 'md:col-span-1' : ''}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-obsidian border border-white/5 flex items-center justify-center text-accent mb-10 group-hover:scale-110 transition-transform shadow-2xl">
                {iconMap[service.icon]}
              </div>
              
              <h3 className="text-2xl font-display font-bold text-white mb-6">
                {service.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed mb-10 flex-grow">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <span className="text-[10px] font-black uppercase tracking-widest text-accent">Availability: High</span>
                <Plus size={16} className="text-gray-600 group-hover:text-accent transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;