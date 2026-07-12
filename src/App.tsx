import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import SefedStudio from "./components/SefedStudio";
import Loader from "./components/Loader";
import { MARQUEE_ITEMS, STATS } from "./data";

export default function App() {
  const [hasLoaded, setHasLoaded] = useState(false);

  // Scroll Reveal transition helper
  const scrollRevealProps = {
    initial: { opacity: 0, y: 35 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-120px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <>
      {/* 1. Initial Interactive Loader Overlay */}
      <AnimatePresence mode="wait">
        {!hasLoaded && (
          <Loader key="loader" onComplete={() => setHasLoaded(true)} />
        )}
      </AnimatePresence>

      {/* 2. Main Web Application with Entrance Animation */}
      {hasLoaded && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="min-h-screen bg-[#0A0A0B] text-[#F5F5F6] relative transition-colors duration-500 overflow-x-hidden font-sans selection:bg-red-500 selection:text-white"
        >
          {/* Visual atmospheric grain overlay */}
          <div className="fixed inset-[-50%] z-[9000] pointer-events-none opacity-[0.045] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg_xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22_width%3D%22160%22_height%3D%22160%22%3E%3Cfilter_id%3D%22n%22%3E%3CfeTurbulence_type%3D%22fractalNoise%22_baseFrequency%3D%220.85%22_numOctaves%3D%223%22_stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect_width%3D%22100%25%22_height%3D%22100%25%22_filter%3D%22url%28%23n%29%22%2F%3E%3C%2Fsvg%3E')] animate-[grainshift_1.2s_steps(4)_infinite]" />

          {/* Navigation Header */}
          <Navbar />

          {/* Hero Header */}
          <Header />

          {/* Infinite Monospace Scrolling Skills Marquee Banner */}
          <div className="border-t border-b border-white/[0.08] py-4 overflow-hidden relative bg-[#0F0F11]" aria-hidden="true">
            <div className="flex w-max gap-0 animate-[scrollx_38s_linear_infinite] hover:[animation-play-state:paused]">
              {/* Render twice for seamless looping */}
              {[1, 2].map((loopIdx) => (
                <div key={loopIdx} className="flex whitespace-nowrap">
                  {MARQUEE_ITEMS.map((tag, idx) => (
                    <span key={`${tag}-${idx}`} className="font-sans font-semibold text-xs md:text-sm text-zinc-400 px-6 flex items-center gap-6">
                      {tag}
                      <span className="w-1.5 h-1.5 bg-red-500 rotate-45 transform block"></span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* About Section */}
          <motion.div {...scrollRevealProps}>
            <About />
          </motion.div>

          {/* Services Section */}
          <motion.div {...scrollRevealProps}>
            <Services />
          </motion.div>

          {/* Live System Counter Statistics */}
          <motion.div {...scrollRevealProps}>
            <section className="bg-[#0F0F11] border-t border-b border-white/[0.04]">
              <div className="max-w-[1440px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04]">
                {STATS.map((s, idx) => (
                  <div key={idx} className="bg-[#0F0F11] p-8 md:p-12 text-left">
                    <div className="font-sans font-extrabold text-4xl md:text-6xl text-white tracking-tighter leading-none flex items-baseline gap-0.5">
                      <span>{s.value}</span>
                      <span className="text-red-500 text-2xl md:text-3xl">{s.suffix}</span>
                    </div>
                    <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mt-4">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>

          {/* Industrial Work Grid */}
          <motion.div {...scrollRevealProps}>
            <Work />
          </motion.div>

          {/* Embedded Sefed Studio Section */}
          <motion.div {...scrollRevealProps}>
            <SefedStudio />
          </motion.div>

          {/* Contact Section */}
          <motion.div {...scrollRevealProps}>
            <Contact />
          </motion.div>

          {/* Modular footer elements */}
          <footer className="py-8 px-6 md:px-12 border-t border-white/[0.04]">
            <div className="max-w-[1440px] mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="font-mono text-[11px] text-zinc-500">
                © {new Date().getFullYear()} <strong className="text-white font-semibold">Yared Tesfahun</strong> — Custom-built in Addis Ababa
              </div>
              <div className="font-mono text-[10px] text-zinc-500 flex flex-wrap gap-4 items-center tracking-wider">
                <span>SEFED STUDIO Partner</span>
                <span>·</span>
                <span><span className="text-red-500">●</span> ACTIVE DEVELOPER</span>
                <span>·</span>
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </footer>

          {/* Clicking milestone tag floating canvas overlay removed */}

          {/* Custom Styles Injection */}
      <style>{`
        @keyframes scrollx {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes tagpop {
          0% { opacity: 0; transform: translate(-50%, -30%) scale(0.7); }
          15% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          80% { opacity: 1; }
          100% { opacity: 0; transform: translate(-50%, -90%) scale(0.95); }
        }
        @keyframes grainshift {
          0% { transform: translate(0,0); }
          25% { transform: translate(-4%, 2%); }
          50% { transform: translate(3%, -3%); }
          75% { transform: translate(-2%, 4%); }
          100% { transform: translate(2%, -2%); }
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
        </motion.div>
      )}
    </>
  );
}
