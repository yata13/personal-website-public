
import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-20 px-6 md:px-[10%] bg-white dark:bg-darkBg overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Valuable <span className="text-primary">Feedback</span>
        </h2>

        <div className="relative bg-gray-50 dark:bg-darkBg/50 p-8 md:p-16 rounded-[40px] shadow-xl border-b-8 border-primary group">
          <Quote className="absolute top-8 left-8 text-primary/10 w-24 h-24 pointer-events-none" />
          
          <div className="relative z-10 text-center">
            <img 
              src={TESTIMONIALS[current].avatar} 
              alt={TESTIMONIALS[current].name} 
              className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-primary p-1"
            />
            <p className="text-xl md:text-2xl italic text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              "{TESTIMONIALS[current].feedback}"
            </p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {TESTIMONIALS[current].name}
            </h3>
            <span className="text-primary font-medium">
              {TESTIMONIALS[current].role}
            </span>
          </div>

          {/* Controls */}
          <button 
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-darkBg text-primary shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft size={32} />
          </button>
          <button 
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-darkBg text-primary shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight size={32} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === current ? 'w-8 bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
