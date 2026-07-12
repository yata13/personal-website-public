import React, { useState } from "react";
import { Code, Camera, Award, Eye, X, ExternalLink, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { GEAR_ITEMS } from "../data";

const CERTIFICATIONS = [
  {
    id: "geeztech-security-tester",
    title: "Geeztech Security Tester",
    issuer: "Geeztech Cyber Security Course",
    img: "https://i.postimg.cc/ZnnzZfnm/photo-2026-07-12-12-38-17.jpg",
    type: "Cyber Security Certificate",
    date: "2026"
  }
];

export default function About() {
  const [selectedCert, setSelectedCert] = useState<typeof CERTIFICATIONS[0] | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 relative border-b border-white/[0.04] bg-[#070708]" id="about">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          
          {/* Portrait Visual Wrapper */}
          <div className="about-photo relative w-full max-w-md mx-auto lg:mx-0 group">
            {/* Soft backdrop glow to highlight the portrait */}
            <div className="absolute inset-x-4 inset-y-8 bg-red-600/10 rounded-full blur-3xl opacity-40 group-hover:opacity-75 transition-opacity duration-700 pointer-events-none" />
            
            <div className="portrait relative z-10 w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c0e] select-none">
              <img 
                src="https://i.postimg.cc/3xzytHp0/Chat-GPT-Image-Jul-10-2026-01-21-06-PM-(1).png" 
                alt="Yared 'Yata' Tesfahun Portrait Collage" 
                className="w-full h-auto object-cover filter saturate-[1.03] contrast-[1.03] transition-transform duration-700 group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="about-body">
            <div className="font-mono text-[10px] text-red-500 uppercase tracking-widest flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-red-500"></span>
              About · Key Operator
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-white mb-6">
              One brain behind the <span className="text-red-500">code</span> and the capture.
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mb-4 leading-relaxed">
              I'm <strong className="text-white">Yared &quot;Yata&quot; Tesfahun</strong> — an independent full-stack developer and cinematographer based in <strong className="text-white">Addis Ababa, Ethiopia</strong>, collaborating with <strong className="text-white">Sefed Studio</strong>.
            </p>
            <p className="text-zinc-400 text-sm md:text-base mb-4 leading-relaxed">
              With over <strong className="text-white">3 years of professional experience</strong> and <strong className="text-white">5 major full-stack projects shipped</strong> (including the official Visit Gondar app and Bella Store), I bridge the gap between technical architecture and visual conversion. I fluently read and code in <strong className="text-white">10+ programming languages</strong> — including JS, Java, C, C++, Python, Node, React, TypeScript, Bash, SQL, and MongoDB.
            </p>
            <p className="text-zinc-400 text-sm md:text-base mb-8 leading-relaxed">
              Clean algorithms and high-uptime architectures by day, dynamic framing and cinema color grading by night.
            </p>

            {/* Verified Certification */}
            <div className="mt-8 pt-8 border-t border-white/[0.04]">
              <div className="flex items-center gap-2.5 mb-5">
                <Award size={15} className="text-[#EF4444]" />
                <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-white font-bold">
                  Verified Certification & Credential
                </h3>
              </div>

              <div className="max-w-[280px]">
                {CERTIFICATIONS.map((cert) => (
                  <div 
                    key={cert.id} 
                    onClick={() => setSelectedCert(cert)}
                    className="group cursor-pointer flex flex-col"
                  >
                    {/* Thumbnail box */}
                    <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#0c0c0e] border border-white/[0.08] group-hover:border-red-500/40 transition-all duration-300 relative">
                      <img 
                        src={cert.img} 
                        alt={cert.title} 
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          // Handle fallback
                          (e.target as HTMLImageElement).style.opacity = "0.7";
                        }}
                      />
                      
                      {/* Technical hover overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1.5 backdrop-blur-xs">
                        <Eye size={16} className="text-red-400" />
                        <span className="font-mono text-[8px] uppercase tracking-widest text-white">
                          View Credential
                        </span>
                      </div>
                    </div>

                    {/* Metadata text */}
                    <div className="mt-3 px-1">
                      <h4 className="text-[11px] font-sans font-bold text-white group-hover:text-red-400 transition-colors leading-snug">
                        {cert.title}
                      </h4>
                      <p className="font-mono text-[9px] text-zinc-400 mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-screen Certificate Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md select-none"
            onClick={() => setSelectedCert(null)}
          >
            {/* Close button zone */}
            <button 
              onClick={() => setSelectedCert(null)}
              className="absolute top-6 right-6 z-52 w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-300"
              title="Close System Spec"
            >
              <X size={18} />
            </button>

            {/* Lightbox container */}
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-4xl bg-[#0b0b0d] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:grid md:grid-cols-[1.2fr_0.8fr]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Technical background grids */}
              <div className="absolute inset-0 bg-[radial-gradient(#151518_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />

              {/* Left Side: Certificate Image Showcase (Completely Frameless) */}
              <div className="relative aspect-video md:aspect-auto md:h-[500px] bg-black/40 flex items-center justify-center border-b md:border-b-0 md:border-r border-white/[0.06] overflow-hidden">
                <img 
                  src={selectedCert.img} 
                  alt={selectedCert.title} 
                  className="w-full h-full object-contain relative select-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Right Side: Information Specification Panel */}
              <div className="p-6 md:p-8 flex flex-col justify-between relative z-10">
                <div>
                  <div className="font-mono text-[9px] text-[#EF4444] uppercase tracking-[0.2em] flex items-center gap-2 mb-6">
                    <ShieldCheck size={12} className="text-[#EF4444]" />
                    <span>Verified Credential</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-sans font-black text-white leading-tight tracking-tight mb-2">
                    {selectedCert.title}
                  </h3>
                  
                  <div className="space-y-4 mt-6 border-t border-b border-white/[0.05] py-5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-mono text-zinc-500 uppercase tracking-wider">ISSUER</span>
                      <span className="font-sans font-bold text-white text-right">{selectedCert.issuer}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-mono text-zinc-500 uppercase tracking-wider">CREDENTIAL TYPE</span>
                      <span className="font-mono text-red-400 bg-red-400/5 px-2.5 py-0.5 rounded border border-red-400/10 text-[10px]">{selectedCert.type}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-mono text-zinc-500 uppercase tracking-wider">ISSUED YEAR</span>
                      <span className="font-mono text-zinc-300">{selectedCert.date}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <button 
                    onClick={() => setSelectedCert(null)}
                    className="w-full h-11 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 text-zinc-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-all duration-300"
                  >
                    Close Viewer
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

