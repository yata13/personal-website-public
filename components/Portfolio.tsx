
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(PROJECTS.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 px-6 md:px-[10%]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-[0.3em] uppercase mb-4 block">Showcase</span>
          <h2 className="text-4xl md:text-6xl font-black mb-8">Latest <span className="gradient-text">Projects</span></h2>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-2xl font-bold transition-all duration-300 border ${
                  filter === cat 
                    ? 'bg-main-gradient text-white border-transparent shadow-xl shadow-primary/20' 
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-white dark:bg-slate-900 rounded-[40px] overflow-hidden shadow-xl transition-all duration-700 hover:shadow-primary/20 flex flex-col"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkBg/90 via-darkBg/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10">
                  <div className="flex gap-4">
                    <a href={project.link} className="w-14 h-14 bg-white text-primary rounded-2xl flex items-center justify-center hover:bg-main-gradient hover:text-white transition-all shadow-xl">
                      <ExternalLink size={24} />
                    </a>
                   
                  </div>
                </div>
              </div>
              
              <div className="p-10 border-t border-slate-100 dark:border-slate-800 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-3xl font-black group-hover:text-primary transition-colors">{project.title}</h4>
                  <span className="px-4 py-1.5 bg-primary/10 text-primary text-xs font-black uppercase rounded-full border border-primary/20 tracking-widest">{project.category}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
                   {/* Mock tech stack tags */}
                   {['React', 'Node.js', 'PostgreSQL'].map(tech => (
                     <span key={tech} className="text-xs font-bold text-slate-400 dark:text-slate-600">#{tech}</span>
                   ))}
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
