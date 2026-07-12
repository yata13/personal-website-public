import React from "react";
import { Camera, Code2, Users, CheckSquare } from "lucide-react";

// Real image URLs provided by user
const yaredImg = "https://i.postimg.cc/DywCFWpL/photo-5-2025-03-06-21-09-42.jpg";
const cousinImg = "https://i.postimg.cc/YqPxHdWM/photo-2026-06-23-15-03-29.jpg";

export default function SefedStudio() {
  return (
    <section 
      id="sefed-studio" 
      className="my-8 md:my-12 mx-4 md:mx-10 py-12 md:py-16 px-6 md:px-12 rounded-[2.5rem] md:rounded-[4.5rem] bg-gradient-to-br from-white via-zinc-50 to-zinc-100 text-[#0E0E10] border border-zinc-200 shadow-[0_35px_85px_-20px_rgba(0,0,0,0.12)] relative overflow-hidden"
    >
      {/* Premium custom "strange" geometric waves and grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tech-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.75" />
              <circle cx="20" cy="20" r="1.2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-grid)" className="text-zinc-600" />
          
          {/* Futuristic flowing wavy lines to give a strange, premium pattern feel */}
          <path d="M-100,120 Q150,20 400,220 T900,70 T1400,270 T1900,20" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-zinc-500" />
          <path d="M-100,170 Q150,70 400,270 T900,120 T1400,320 T1900,70" fill="none" stroke="currentColor" strokeWidth="1" className="text-zinc-500" strokeDasharray="4 4" />
          <path d="M-100,220 Q150,120 400,320 T900,170 T1400,370 T1900,120" fill="none" stroke="currentColor" strokeWidth="0.75" className="text-zinc-600" />
          
          <path d="M-50,420 Q250,220 600,520 T1200,320 T1800,570" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-zinc-500" />
          <path d="M-50,470 Q250,270 600,570 T1200,370 T1800,620" fill="none" stroke="currentColor" strokeWidth="1" className="text-zinc-500" strokeDasharray="3 3" />
        </svg>
      </div>
      
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-zinc-200 via-zinc-100/50 to-transparent pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-8 text-left">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-black/10 border border-black/20 mb-4">
            <span className="text-black font-bold font-sans text-[11px] select-none animate-pulse">ሰ</span>
            <span className="font-mono text-[9px] tracking-widest font-extrabold uppercase text-black">PARTNER STUDIO</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-black">
            About Sefed Studio
          </h2>
          <p className="text-zinc-900 text-xs md:text-sm mt-3 max-w-3xl font-medium">
            A creative union of custom technology, digital marketing, and high-definition cinematography.
          </p>
        </div>

        {/* 2-Column Split: Dual individual frames Left, Narrative Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Portrait Framed Elements Side-by-Side */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              
              {/* Frame 1: Yared - Tech Director */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/50 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[4/5] w-full overflow-hidden rounded-t-2xl relative">
                    <img 
                      src={yaredImg} 
                      alt="Yared Tesfahun - Tech Director" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <div className="p-4">
                    <span className="font-mono text-[9px] tracking-widest text-[#EF4444] block font-bold">// TECH DIRECTOR</span>
                    <strong className="text-sm text-zinc-950 block mt-0.5">Yared Tesfahun</strong>
                  </div>
                </div>
              </div>
 
              {/* Frame 2: Cousin - Media Director */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/50 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[4/5] w-full overflow-hidden rounded-t-2xl relative">
                    <img 
                      src={cousinImg} 
                      alt="Cousin - Media Director" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <div className="p-4">
                    <span className="font-mono text-[9px] tracking-widest text-[#EF4444] block font-bold">// MEDIA DIRECTOR</span>
                    <strong className="text-sm text-zinc-950 block mt-0.5">Henok Gebreslase</strong>
                  </div>
                </div>
              </div>

            </div>

            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 font-mono text-[9px] text-zinc-900 tracking-wider font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                CO-FOUNDING PARTNERS · ADDIS ABABA
              </span>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl md:text-2xl font-bold font-sans text-black tracking-tight">
              Merging cinema artistry with robust custom code.
            </h3>
            
            <p className="text-zinc-900 text-sm md:text-base font-medium leading-relaxed">
              Founded in Addis Ababa, Sefed Studio is our collaborative creative agency. We specialize in building powerful digital identities. By merging bespoke web solutions with cinema-grade media production, we help brands establish a prominent, high-fidelity presence that captures attention.
            </p>

            {/* Structured capabilities matrix checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-black/10 border border-black/20 flex items-center justify-center text-black shrink-0 mt-0.5 animate-pulse">
                  <CheckSquare size={11} className="text-black" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-black">Web &amp; Tech Engineering</h4>
                  <p className="text-zinc-900 text-[11px] leading-relaxed font-medium">Bespoke React apps, SEO optimization, and database architecture.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-black/10 border border-black/20 flex items-center justify-center text-black shrink-0 mt-0.5">
                  <Camera size={11} className="text-black" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-black">Cinematography &amp; Media</h4>
                  <p className="text-zinc-900 text-[11px] leading-relaxed font-medium">Directing, 4K lookbooks, commercials, and DaVinci post-production.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-black/10 border border-black/20 flex items-center justify-center text-black shrink-0 mt-0.5">
                  <Users size={11} className="text-black" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-black">Marketing &amp; Branding</h4>
                  <p className="text-zinc-900 text-[11px] leading-relaxed font-medium">Unified copy strategies, visual identity, and social architectures.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-black/10 border border-black/20 flex items-center justify-center text-black shrink-0 mt-0.5">
                  <span className="text-black font-bold font-sans text-[10px] select-none">ሰ</span>
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-black">Creative Design Solutions</h4>
                  <p className="text-zinc-900 text-[11px] leading-relaxed font-medium">High-fidelity prototypes, graphics suites, and user flows.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
