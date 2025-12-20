
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-[10%] relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative group">
            {/* Multi-layered border animation */}
            <div className="absolute -inset-4 bg-main-gradient rounded-[40px] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="absolute -inset-1 bg-main-gradient rounded-[32px] opacity-100"></div>
            <img 
              src="about.png" 
              alt="Yared Tesfahun" 
              className="relative w-[320px] h-[440px] md:w-[420px] md:h-[540px] object-cover rounded-[28px] shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <span className="text-primary font-bold tracking-[0.3em] uppercase mb-4 block">Our Story</span>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">About <span className="gradient-text">Me</span></h2>
          <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100">
            Self-taught developer creating digital excellence from Addis Ababa.
          </h3>
          <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            <p>
              I believe that technology should be as beautiful as it is functional. My journey into the world of web development was fueled by a curiosity for how the digital world works and a drive to create something meaningful.
            </p>
            <p>
              With expertise spanning the full stack, from crafting pixel-perfect interfaces in <span className="text-primary font-bold">React</span> to architecting robust <span className="text-secondary font-bold">Node.js</span> backends, I bring a holistic approach to every project.
            </p>
          </div>
          <div className="mt-10 flex gap-6">
            <div className="flex flex-col">
              <span className="text-4xl font-black gradient-text">3+</span>
              <span className="text-sm uppercase font-bold text-slate-500">Years Exp.</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-black gradient-text">20+</span>
              <span className="text-sm uppercase font-bold text-slate-500">Projects</span>
            </div>
          </div>
          <button className="mt-10 px-10 py-4 bg-main-gradient text-white font-bold rounded-2xl shadow-xl hover:shadow-primary/40 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
