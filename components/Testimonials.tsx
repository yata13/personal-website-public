import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="feedback" className="py-32 px-6 md:px-[10%] bg-obsidian-soft relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Endorsements</span>
          <h2 className="text-5xl md:text-7xl font-display font-black text-white leading-tight">
            VALUABLE <br /> <span className="text-accent">FEEDBACK.</span>
          </h2>
        </div>

        <div className="relative group">
          <div className="bento-card p-10 md:p-20 relative overflow-hidden">
            <Quote className="absolute -top-4 -left-4 text-accent/5 w-40 h-40 pointer-events-none" />
            
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="relative mb-10">
                <div className="absolute inset-0 bg-accent blur-xl opacity-20 rounded-full animate-pulse-slow"></div>
                <img 
                  src={TESTIMONIALS[current].avatar} 
                  alt={TESTIMONIALS[current].name} 
                  className="w-24 h-24 rounded-2xl relative z-10 border border-accent/30 object-cover"
                />
              </div>

              <p className="text-2xl md:text-3xl font-light text-gray-300 mb-12 leading-relaxed italic font-serif">
                "{TESTIMONIALS[current].feedback}"
              </p>
              
              <div>
                <h3 className="text-xl font-display font-bold text-white uppercase tracking-wider">
                  {TESTIMONIALS[current].name}
                </h3>
                <span className="text-accent text-xs font-bold uppercase tracking-widest mt-2 block">
                  {TESTIMONIALS[current].role}
                </span>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center mt-16 pt-10 border-t border-white/5">
              <button 
                onClick={prev}
                className="w-14 h-14 bento-card flex items-center justify-center text-gray-400 hover:text-accent transition-all group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
              </button>
              
              <div className="flex gap-3">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      idx === current ? 'w-12 bg-accent' : 'w-3 bg-white/10 hover:bg-white/20'
                    }`}
                  />
                ))}
              </div>

              <button 
                onClick={next}
                className="w-14 h-14 bento-card flex items-center justify-center text-gray-400 hover:text-accent transition-all group"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;