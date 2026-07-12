import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

interface LoaderProps {
  onComplete: () => void;
  key?: string | number;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing core systems...");

  useEffect(() => {
    // Fast, elegant incremental progress ticker
    if (progress < 100) {
      const delay = Math.random() * 30 + 15;
      const timer = setTimeout(() => {
        setProgress((prev) => {
          const next = prev + Math.floor(Math.random() * 4) + 2;
          return next > 100 ? 100 : next;
        });
      }, delay);
      return () => clearTimeout(timer);
    } else {
      const endTimer = setTimeout(() => {
        onComplete();
      }, 400);
      return () => clearTimeout(endTimer);
    }
  }, [progress, onComplete]);

  // Update dynamic status messages
  useEffect(() => {
    if (progress === 0) {
      setStatusText("BOOTING SYSTEM CORE...");
    } else if (progress < 30) {
      setStatusText("LOADING PORTFOLIO MODULES...");
    } else if (progress < 60) {
      setStatusText("RENDERING INTERACTIVE VIEWPORTS...");
    } else if (progress < 85) {
      setStatusText("OPTIMIZING PERFORMANCE BLUEPRINTS...");
    } else if (progress < 100) {
      setStatusText("VERIFYING LOCAL NODE PATHS...");
    } else {
      setStatusText("SYSTEM STABLE. REDIRECTING...");
    }
  }, [progress]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        filter: "blur(8px)",
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
      }}
      className="fixed inset-0 z-[99999] bg-[#0A0A0B] text-[#F5F5F6] flex flex-col items-center justify-center p-6 select-none"
    >
      {/* Soft, minimal ambient backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-red-500/[0.015] rounded-full filter blur-[120px] pointer-events-none" />

      {/* Main Content Card */}
      <div className="w-full max-w-sm flex flex-col items-center text-center space-y-8">
        
        {/* Brand Kicker */}
        <div className="space-y-1">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-mono text-[9px] tracking-[0.3em] text-red-500/80 uppercase font-bold"
          >
            YARED TESFAHUN
          </motion.div>
        </div>

        {/* Minimalist Linear Progress Bar */}
        <div className="w-full space-y-2.5">
          {/* Thin Progress line */}
          <div className="w-full h-[1px] bg-white/[0.05] rounded-full overflow-hidden relative">
            <div 
              className="h-full bg-red-500 transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Details strip: Status & precise percentage count */}
          <div className="flex items-center justify-between font-mono text-[9px] text-zinc-500 tracking-wider">
            <span className="uppercase">{statusText}</span>
            <span className="text-zinc-400 font-bold">{progress}%</span>
          </div>
        </div>

      </div>

      {/* Discrete Bottom Kicker */}
      <div className="absolute bottom-10 left-0 right-0 text-center font-mono text-[8px] text-zinc-600 tracking-[0.2em] uppercase">
        ADDIS ABABA · EST. {new Date().getFullYear()}
      </div>
    </motion.div>
  );
}
