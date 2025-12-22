import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, Layers } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(PROJECTS.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-32 px-6 md:px-[10%] bg-obsidian">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Showcase</span>
          <h2 className="text-5xl md:text-8xl font-display font-black mb-12 italic">SELECTED WORKS</h2>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all duration-300 border uppercase tracking-widest ${
                  filter === cat 
                    ? 'bg-accent text-obsidian border-accent' 
                    : 'bg-transparent text-gray-500 border-white/10 hover:border-accent/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bento-card overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-obsidian/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
                  <a href={project.link} className="w-14 h-14 bg-accent text-obsidian rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <ExternalLink size={24} />
                  </a>
                  <a href="#" className="w-14 h-14 bg-white text-obsidian rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <Github size={24} />
                  </a>
                </div>
              </div>
              
              <div className="p-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-accent/10 text-accent text-[10px] font-black uppercase tracking-widest rounded-md border border-accent/20">
                    {project.category}
                  </span>
                </div>
                
                <h4 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-accent transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-gray-500 text-lg mb-10 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                   <div className="flex gap-4">
                     {['React', 'Node'].map(tech => (
                       <span key={tech} className="text-[10px] font-bold text-gray-700 uppercase tracking-widest">#{tech}</span>
                     ))}
                   </div>
                   <Layers size={16} className="text-gray-800" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;