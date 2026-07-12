import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { 
  Code, 
  Database, 
  Search, 
  TrendingUp, 
  Video, 
  Rss, 
  Cpu, 
  Globe, 
  Sparkles, 
  Layers, 
  Film, 
  Radio, 
  ArrowUpRight 
} from "lucide-react";

import { SERVICES } from "../data";

// Reuse our premium 3D Hover Tilt effect for cohesion
interface TiltCardProps {
  children: React.ReactNode;
  index: number;
  key?: string | number;
}

function ServiceTiltCard({ children, index }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [shineX, setShineX] = useState(50);
  const [shineY, setShineY] = useState(50);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const width = rect.width;
    const height = rect.height;
    const angleX = -((y - height / 2) / height) * 10; 
    const angleY = ((x - width / 2) / width) * 10; 

    setRotateX(angleX);
    setRotateY(angleY);

    setShineX((x / width) * 100);
    setShineY((y / height) * 100);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-2xl border bg-black/40 p-8 shadow-2xl transition-all duration-300 backdrop-blur-md flex flex-col justify-between overflow-hidden"
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: isHovered ? "transform 0.05s linear, border-color 0.3s ease, box-shadow 0.3s ease" : "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s ease, box-shadow 0.3s ease",
        borderColor: isHovered ? "rgba(255, 255, 255, 0.22)" : "rgba(255, 255, 255, 0.08)",
        boxShadow: isHovered ? "0 30px 60px -15px rgba(239, 68, 68, 0.08)" : "none",
      }}
    >
      {/* 3D Spotlight Shine Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.12 : 0,
          background: `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(239, 68, 68, 0.3) 0%, transparent 60%)`,
        }}
      />

      <div style={{ transform: "translateZ(20px)" }} className="flex flex-col h-full justify-between">
        {children}
      </div>
    </div>
  );
}

// Map key strings to actual Lucide Icons
const iconMap: Record<string, React.ComponentType<any>> = {
  code: Code,
  database: Database,
  search: Search,
  "trending-up": TrendingUp,
  video: Video,
  rss: Rss
};

export default function Services() {
  return (
    <section className="py-28 px-6 md:px-12 relative border-b border-white/[0.04] bg-[#080809] overflow-hidden" id="services">
      {/* Absolute grid lines overlay */}
      <div 
        className="absolute inset-0 opacity-[0.012] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px"
        }}
      />
      
      {/* Soft atmospheric amber/red glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-red-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Spacious Section Header - Extremely Clean */}
        <div className="mb-20 max-w-3xl">
          <div className="font-mono text-[9px] text-red-500 uppercase tracking-[0.25em] flex items-center gap-2.5 mb-4">
            <span className="w-6 h-[1.5px] bg-[#EF4444] inline-block"></span>
            Unified Strategic Pipeline
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tighter text-white">
            Six pillars of digital construction.
          </h2>
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mt-4">
            Every core discipline is synchronized directly into a singular workflow pipeline. No disconnected systems. No broken handoffs. Just smooth, high-fidelity deployment.
          </p>
        </div>

        {/* Elegant 3D Grid instead of heavy telemetry dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, idx) => {
            const ServiceIcon = iconMap[s.icon] || Code;
            
            return (
              <ServiceTiltCard key={s.id} index={idx}>
                <div className="space-y-6">
                  {/* Card Header */}
                  <div className="flex items-start justify-between">
                    {/* Index tag & Icon */}
                    <div className="flex items-center gap-3">
                      <div className="font-mono text-[10px] font-extrabold text-[#EF4444] bg-red-950/10 border border-white/5 px-2 py-0.5 rounded tracking-widest">
                        {s.num}
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/10 flex items-center justify-center text-zinc-400">
                        <ServiceIcon size={15} />
                      </div>
                    </div>

                    {/* Minimal graphic line decoration */}
                    <div className="flex gap-1">
                      <span className="w-1 h-1 rounded-full bg-red-500/40" />
                      <span className="w-1 h-1 rounded-full bg-zinc-700/40" />
                      <span className="w-1 h-1 rounded-full bg-zinc-700/20" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-base font-bold font-sans tracking-tight text-white group-hover:text-red-400 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-zinc-400 text-xs leading-relaxed min-h-[64px]">
                      {s.description}
                    </p>
                  </div>
                </div>

                {/* Footer specs / technologies */}
                <div className="border-t border-transparent pt-4 mt-6 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {s.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="font-mono text-[8.5px] uppercase tracking-wider text-zinc-500 bg-white/[0.005] border border-transparent px-2 py-0.5 rounded leading-none"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ArrowUpRight size={14} className="text-zinc-600 hover:text-red-500 transition-colors" />
                </div>
              </ServiceTiltCard>
            );
          })}
        </div>

        {/* Cinematic Pipeline Connection Decal */}
        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row md:items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <div className="flex items-center gap-2 select-none">
            <Cpu size={12} className="text-red-500 animate-pulse" />
            <span>OPERATING FREQUENCY: SYNCHRONIZED CORE</span>
          </div>
          <span className="select-none tracking-widest text-[9px]">// NO OUTSOURCED FRICTION · ONE WORKFLOW</span>
        </div>

      </div>
    </section>
  );
}
