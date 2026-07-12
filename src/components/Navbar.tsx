import React from "react";

interface NavbarProps {
  isDarkMode?: boolean;
  onToggleTheme?: () => void;
}

export default function Navbar({ isDarkMode, onToggleTheme }: NavbarProps) {
  return (
    <nav 
      id="nav" 
      className="fixed top-0 left-0 right-0 z-[7500] backdrop-blur-md transition-all duration-500 border-b border-white/[0.04] bg-[#0A0A0B]/75 text-[#F5F5F6]"
    >
      <div className="max-w-[1440px] mx-auto w-full px-6 py-4 md:px-12 flex items-center justify-between">
        {/* Brand logo link */}
        <a 
          href="#top" 
          className="flex items-center gap-2.5 font-mono font-bold text-xs tracking-wider no-shutter text-[#F5F5F6]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
          </span>
          YATA<span className="text-zinc-500 font-normal">/</span>YARED.T
        </a>

        {/* Main navigation anchors */}
        <div className="flex items-center gap-6 md:gap-7">
          <div className="hidden md:flex items-center gap-6 lg:gap-7">
            <a href="#work" className="font-mono text-[10px] uppercase tracking-widest text-[#94A3B8] hover:text-[#EF4444] transition-colors no-shutter">
              Work
            </a>
            <a href="#services" className="font-mono text-[10px] uppercase tracking-widest text-[#94A3B8] hover:text-[#EF4444] transition-colors no-shutter">
              Services
            </a>
            <a href="#about" className="font-mono text-[10px] uppercase tracking-widest text-[#94A3B8] hover:text-[#EF4444] transition-colors no-shutter">
              About Yata
            </a>
            
            {/* Highlighted Sefed Studio Anchor Link inline */}
            <a 
              href="#sefed-studio" 
              className="font-mono text-[10px] uppercase tracking-widest text-[#F5F5F6] hover:text-amber-400 transition-colors no-shutter flex items-center gap-1.5 px-2.5 py-1 rounded border border-amber-500/15 bg-amber-500/5"
            >
              <span className="text-amber-500 font-bold font-sans text-[11px] select-none">ሰ</span>
              Sefed Studio
            </a>

            <a href="#contact" className="font-mono text-[10px] uppercase tracking-widest text-[#94A3B8] hover:text-[#EF4444] transition-colors no-shutter">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
