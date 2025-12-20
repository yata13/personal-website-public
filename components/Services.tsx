
import React from 'react';
import { SERVICES } from '../constants';
import { Code2, Server, Brain } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={40} />,
  Server: <Server size={40} />,
  Brain: <Brain size={40} />,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-[10%] bg-slate-50/50 dark:bg-darkBg/30">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <span className="text-primary font-bold tracking-[0.3em] uppercase mb-4 block">Specializations</span>
        <h2 className="text-4xl md:text-6xl font-black mb-6">My <span className="gradient-text">Services</span></h2>
        <div className="w-24 h-2 bg-main-gradient mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {SERVICES.map((service) => (
          <div 
            key={service.id} 
            className="group relative p-10 glass-card rounded-[32px] transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden"
          >
            {/* Subtle corner gradient glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-main-gradient opacity-0 group-hover:opacity-10 transition-opacity blur-3xl" />
            
            <div className="mb-8 inline-flex items-center justify-center p-5 bg-main-gradient text-white rounded-3xl shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-500">
              {iconMap[service.icon]}
            </div>
            <h3 className="text-2xl font-black mb-5 group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 text-lg">
              {service.description}
            </p>
            <div className="flex items-center text-primary font-bold group-hover:gap-4 gap-2 transition-all cursor-pointer">
              Explore Excellence <span className="text-xl">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
