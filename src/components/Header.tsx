import React, { useEffect, useState } from "react";
import { HERO_SVG_BACKDROP } from "../assets";
import CodeMatrixBg from "./CodeMatrixBg";
import { Github, Twitter, Linkedin, Terminal, Activity, Layers, Cpu } from "lucide-react";

export default function Header() {
  const [recTime, setRecTime] = useState("00:00:00");
  const [typedIndex, setTypedIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Full-Stack Developer",
    "Systems Architect",
    "Technical SEO Specialist",
    "Sefed Studio Engineer",
    "Digital Product Builder"
  ];

  // Up-time recorder simulator
  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const s = Math.floor((Date.now() - start) / 1000);
      const hh = Math.floor(s / 3600), mm = Math.floor((s % 3600) / 60), ss = s % 60;
      const pad = (n: number) => (n < 10 ? "0" : "") + n;
      setRecTime(`${pad(hh)}:${pad(mm)}:${pad(ss)}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Text typer simulator
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = roles[typedIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentWord.substring(0, typedText.length - 1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentWord.substring(0, typedText.length + 1));
      }, 100);
    }

    if (!isDeleting && typedText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setTypedIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, typedIndex]);

  return (
    <header className="relative min-h-screen bg-[#0A0A0B] flex flex-col justify-between px-6 pt-24 pb-12 md:px-12 md:pb-16 overflow-hidden md:justify-center border-b border-white/[0.04]" id="top">
      {/* Cybernetic HUD layout corners (confined strictly to the Home/Header section) */}
      <div className="absolute inset-0 z-[40] pointer-events-none" aria-hidden="true">
        <span className="absolute w-[30px] h-[30px] border-t-2 border-l-2 border-red-500 top-4 left-4 opacity-70"></span>
        <span className="absolute w-[30px] h-[30px] border-t-2 border-r-2 border-red-500 top-4 right-4 opacity-70"></span>
        <span className="absolute w-[30px] h-[30px] border-b-2 border-l-2 border-red-500 bottom-4 left-4 opacity-70"></span>
        <span className="absolute w-[30px] h-[30px] border-b-2 border-r-2 border-red-500 bottom-4 right-4 opacity-70"></span>
      </div>

      {/* Code Matrix Grid Background replacing old Rotating Cam Lens */}
      <CodeMatrixBg />

      {/* Styled vector background placed absolutely BEHIND the text */}
      <div 
        className="absolute z-0 right-0 bottom-0 top-0 w-full md:w-3/5 pointer-events-none opacity-20 md:opacity-30 select-none mix-blend-lighten"
        dangerouslySetInnerHTML={{ __html: HERO_SVG_BACKDROP }}
      />

      {/* Ambient dark shadow behind the image to create a sleek clean aesthetic */}
      <div 
        className="absolute z-0 left-1/2 -translate-x-1/2 top-1/4 w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full blur-[120px] md:blur-[180px] opacity-80 pointer-events-none"
        style={{ background: "radial-gradient(circle, #000000 0%, transparent 70%)" }}
      />
      <div 
        className="absolute z-0 left-1/2 -translate-x-1/3 bottom-10 w-[250px] md:w-[450px] h-[250px] md:h-[450px] rounded-full blur-[90px] md:blur-[140px] opacity-60 pointer-events-none"
        style={{ background: "radial-gradient(circle, #050506 0%, transparent 70%)" }}
      />

      {/* Styled background image placed absolutely BEHIND the text (similar to the AXON reference) */}
      <div className="absolute z-[8] inset-x-0 bottom-0 top-0 pointer-events-none opacity-85 md:opacity-100 select-none flex items-end justify-center md:justify-end md:pr-[12%] lg:pr-[16%]">
        <img 
          src="https://i.postimg.cc/kGgjc6x7/DSC06374.png" 
          alt="Yared 'Yata' Tesfahun" 
          className="h-[75%] md:h-[95%] w-auto object-contain object-bottom pointer-events-none filter drop-shadow-[0_0_60px_rgba(0,0,0,0.95)] saturate-[1.05] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Main Content Wrapper - centered to align perfectly on wide monitors */}
      <div className="max-w-[1440px] mx-auto w-full relative flex flex-col justify-between flex-1">
        {/* Top kicker overlay */}
        <div className="relative z-30 font-mono text-[10px] tracking-[0.2em] uppercase text-zinc-400 flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-red-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            LIVE COMPILE
          </span>
          · INDEPENDENT DEVELOPER · ADDIS ABABA
        </div>

        {/* Massive Display Brand Typography - sits cleanly with perfect editorial contrast */}
        <div className="relative py-10 my-auto text-left select-none w-full max-w-5xl z-[15]">
          <h1 className="font-sans font-black text-[12vw] md:text-[7vw] lg:text-[7.5vw] leading-[0.85] tracking-tighter text-[#F5F5F6] flex flex-col relative">
            <span className="text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">YARED</span>
            <span className="text-zinc-500 ml-[2vw] drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              TESFA<span className="text-red-500 italic font-black">HUN</span>
            </span>
          </h1>
        </div>

        {/* Bottom control row */}
        <div className="relative z-30 grid grid-cols-1 md:grid-cols-2 gap-8 items-end w-full">
          <div className="max-w-md">
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6">
              I draft robust full-stack code, 
              <strong className="text-white font-semibold"> rank pages on page one of Google</strong>, 
              design performance SEO blueprints, and capture digital assets in pristine 4K.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <a href="#work" className="font-mono text-xs bg-red-600 text-white hover:bg-red-500 px-5 py-3 rounded-lg flex items-center gap-2 transition-all font-semibold hover:shadow-[0_0_15px_rgba(239,68,68,0.35)] no-shutter">
                View codebase
                <span className="w-1.5 h-1.5 border-t-2 border-r-2 border-white transform rotate-45" />
              </a>
              <a href="#contact" className="font-mono text-xs text-white border border-white/[0.1] hover:border-red-500/50 bg-white/[0.01] px-5 py-3 rounded-lg hover:text-red-500 transition-colors no-shutter">
                Start Project
              </a>
            </div>
            <div className="flex gap-4 font-mono text-[11px] text-zinc-500">
              <a href="https://github.com/yata13" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 flex items-center gap-1.5 transition-colors no-shutter">
                <Github size={13} />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/yared-tesfahun-10b102251/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 flex items-center gap-1.5 transition-colors no-shutter">
                <Linkedin size={13} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="text-left md:text-right font-mono">
            <div className="text-white text-base md:text-xl font-bold flex items-center md:justify-end gap-2 mb-4 h-6">
              <span className="text-red-500 text-xs">//</span>
              <span>{typedText}</span>
              <span className="w-[8px] h-[1.1em] bg-red-500 inline-block animate-pulse align-middle" />
            </div>
            
            <div className="flex flex-wrap gap-6 justify-start md:justify-end text-xs">
              <div className="flex flex-col gap-0.5 md:items-end">
                <span className="text-white font-bold flex items-center gap-1.5">
                  <Cpu size={12} className="text-red-500" />
                  VITE + CJS
                </span>
                <span className="text-[9px] uppercase tracking-widest text-zinc-500">Engine</span>
              </div>
              <div className="flex flex-col gap-0.5 md:items-end">
                <span className="text-white font-bold flex items-center gap-1.5">
                  <Activity size={12} className="text-red-500" />
                  14ms
                </span>
                <span className="text-[9px] uppercase tracking-widest text-zinc-500">Latency</span>
              </div>
              <div className="flex flex-col gap-0.5 md:items-end">
                <span className="text-white font-bold flex items-center gap-1.5">
                  <Layers size={12} className="text-red-500" />
                  24MB
                </span>
                <span className="text-[9px] uppercase tracking-widest text-zinc-500">Memory footprint</span>
              </div>
              <div className="flex flex-col gap-0.5 md:items-end">
                <span className="text-white font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                  {recTime}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-zinc-500">Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
