import React, { useState, useRef } from "react";
import { ArrowUpRight, FolderGit2, X, ExternalLink, ShieldCheck, Terminal, Globe, MousePointerClick, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import ImageGallery from "./ImageGallery";

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<"live" | "all">("all");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredProjects = filter === "live"
    ? PROJECTS.filter(p => !!p.liveUrl)
    : PROJECTS;

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = 460; // Approximate card width in px
      const gap = 24; // Gap between cards in px
      const scrollAmount = direction === "left" ? -(cardWidth + gap) : (cardWidth + gap);
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 relative border-b border-white/[0.04] bg-[#070708] overflow-hidden" id="work">
      {/* Subtle warm backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/[0.015] rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Simple & Clean Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="font-mono text-[9px] text-[#EF4444] uppercase tracking-[0.25em] flex items-center gap-2.5 mb-4">
              <span className="w-6 h-[1.5px] bg-[#EF4444] inline-block"></span>
              MY SELECTED PORTFOLIO
            </div>
            <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tighter text-white">
              Systems I have built.
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mt-4">
              An interactive repository of production apps and full-stack solutions. 
              Use the filter switch or the navigation buttons to explore the portfolio.
            </p>
          </div>

          {/* Interactive filter switcher and custom navigation buttons */}
          <div className="flex flex-wrap items-center gap-4 self-start md:self-end">
            <div className="flex bg-white/[0.02] border border-white/[0.08] p-1 rounded-xl">
              <button
                onClick={() => setFilter("live")}
                className={`px-4 py-1.5 rounded-lg font-mono text-[10px] uppercase tracking-wider transition-all duration-300 ${
                  filter === "live"
                    ? "bg-[#EF4444]/10 text-[#EF4444] border border-[#EF4444]/20 font-bold"
                    : "text-zinc-400 hover:text-white border border-transparent"
                }`}
              >
                Live Production ({PROJECTS.filter(p => !!p.liveUrl).length})
              </button>
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-1.5 rounded-lg font-mono text-[10px] uppercase tracking-wider transition-all duration-300 ${
                  filter === "all"
                    ? "bg-[#EF4444]/10 text-[#EF4444] border border-[#EF4444]/20 font-bold"
                    : "text-zinc-400 hover:text-white border border-transparent"
                }`}
              >
                All Systems ({PROJECTS.length})
              </button>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/20 text-zinc-400 hover:text-white flex items-center justify-center transition-all duration-300"
                title="Scroll Left"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/20 text-zinc-400 hover:text-white flex items-center justify-center transition-all duration-300"
                title="Scroll Right"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Slider Layout */}
        <div className="relative group/slider">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 pt-2 scrollbar-thin scrollbar-track-white/[0.02] scrollbar-thumb-white/[0.08] px-1 will-change-scroll transform-gpu"
          >
            {filteredProjects.map((project, index) => {
              return (
                <div 
                  key={project.id}
                  className="snap-center shrink-0 w-[290px] xs:w-[325px] sm:w-[420px] md:w-[460px] h-[520px] flex flex-col justify-between p-5 md:p-6 rounded-2xl bg-[#0e0e12] border-[0.5px] border-white/[0.08] relative overflow-hidden group shadow-lg transition-[background-color,border-color,box-shadow,transform] duration-300 ease-out transform-gpu will-change-transform hover:bg-[#121216] hover:border-white/[0.18] hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.02)]"
                >
                  {/* Corner backglow on hover */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/[0.005] rounded-full filter blur-xl group-hover:bg-red-500/[0.01] transition-colors pointer-events-none" />

                  {/* Top part: Number, Title, Live Status */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-red-400 font-bold tracking-widest bg-red-500/10 px-2 py-0.5 rounded select-none">
                        {project.fno || `F/0${index + 1}`}
                      </span>
                      
                      <div className="flex items-center gap-2">
                        {project.liveUrl ? (
                          <span className="flex items-center gap-1 text-[8px] tracking-wider font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-normal uppercase select-none">
                            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                            Live Production
                          </span>
                        ) : (
                          <span className="text-[8px] tracking-wider font-mono text-zinc-400 bg-white/[0.03] px-2 py-0.5 rounded font-normal uppercase select-none">
                            Local Host
                          </span>
                        )}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-bold font-sans text-white group-hover:text-red-400 transition-colors duration-300 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-zinc-400 text-[11px] md:text-xs mt-1 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Display the project's primary image with premium glass aesthetic */}
                    {project.images && project.images.length > 0 && (
                      <div className="relative w-full h-[230px] md:h-[245px] lg:h-[255px] overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c0c0e]/60 shadow-inner group/img cursor-pointer shrink-0" onClick={() => setSelectedProject(project)}>
                        <img 
                          src={project.images[0]} 
                          alt={`${project.title} screenshot`} 
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105 transform-gpu"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none" />
                        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center z-10">
                          <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-300 bg-black/40 backdrop-blur-md px-2 py-1 rounded">
                            SYSTEM PREVIEW
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom part: Badges and Action button */}
                  <div className="pt-3 mt-auto space-y-3">
                    {/* Tech badges list */}
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="font-mono text-[8px] uppercase tracking-wider text-zinc-400 bg-white/[0.03] px-2.5 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Launch details modal trigger */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 inline-flex items-center justify-center gap-2 font-mono text-[9px] uppercase tracking-widest text-white bg-white/[0.03] hover:bg-white/[0.08] hover:text-white px-3 py-2 rounded-md transition-all duration-300 h-9"
                      >
                        <span>Inspect System Specs</span>
                        <ArrowUpRight size={12} />
                      </button>

                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 hover:text-emerald-300 transition-colors shrink-0"
                          title="Launch Live Application"
                        >
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Stamp */}
        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <span className="flex items-center gap-1.5 select-none">
            <FolderGit2 size={12} className="text-red-500" />
            <span>PORTFOLIO INDEX · SELECTED ARCHITECTURE</span>
          </span>
          <span className="select-none text-[10px]">
            &copy; {new Date().getFullYear()} YARED TESFAHUN · ADDIS ABABA
          </span>
        </div>

      </div>

      {/* High-fidelity details screenshot modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-y-auto">
            {/* Dark Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#000]/95 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-[#0c0c0e] border border-white/10 rounded-xl max-w-2xl w-full relative z-10 overflow-hidden shadow-2xl flex flex-col max-h-[90vh] md:max-h-[85vh]"
            >
              {/* Header block */}
              <div className="p-6 pb-4 border-b border-white/5 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-mono text-xs text-red-500 font-bold tracking-wider uppercase bg-red-500/10 px-2 py-0.5 rounded">
                      SYSTEM {selectedProject.fno}
                    </span>
                    <span className="text-zinc-600 font-mono text-xs">·</span>
                    <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
                      {selectedProject.role || "Developer"}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-sans text-white leading-tight">
                    {selectedProject.title}
                  </h3>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="w-8 h-8 rounded-full bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-all shrink-0"
                  aria-label="Close project modal"
                  title="Close Modal"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Scrollable body content */}
              <div className="p-6 overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-zinc-800">
                
                {/* Interactive screenshot gallery */}
                <div className="relative z-10">
                  <ImageGallery 
                    images={selectedProject.images} 
                    projectTitle={selectedProject.title} 
                  />
                </div>

                {/* System Specs and detail description */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider mb-2 select-none">
                      Architectural Overview
                    </h4>
                    <p className="text-zinc-300 text-xs md:text-sm leading-relaxed">
                      {selectedProject.longDescription || selectedProject.description}
                    </p>
                  </div>

                  {/* Built Features bullets */}
                  {selectedProject.features && selectedProject.features.length > 0 && (
                    <div>
                      <h4 className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider mb-2 select-none">
                        Core System Features
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedProject.features.map((feature, i) => (
                          <li key={i} className="text-zinc-400 text-xs flex items-start gap-2">
                            <ShieldCheck size={14} className="text-red-500 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech stack badges expanded */}
                  <div>
                    <h4 className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider mb-2 select-none">
                      Core Technologies Utilized
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="font-mono text-[9px] uppercase tracking-wider text-zinc-300 bg-white/[0.02] border border-white/[0.08] px-2.5 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Footer */}
              <div className="p-5 border-t border-white/5 bg-zinc-950/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                {selectedProject.liveUrl ? (
                  <>
                    <div className="text-[11px] font-mono text-zinc-500 flex items-center gap-1.5 select-none">
                      <Globe size={12} className="text-emerald-500" />
                      <span>Production environment is fully hosted & responsive.</span>
                    </div>
                    <a 
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-black bg-white hover:bg-zinc-200 transition-all px-5 py-2.5 rounded-lg shrink-0"
                    >
                      <span>Launch Live App</span>
                      <ExternalLink size={13} />
                    </a>
                  </>
                ) : (
                  <>
                    <div className="text-[11px] font-mono text-zinc-500 flex items-start sm:items-center gap-1.5">
                      <Terminal size={13} className="text-red-500 shrink-0 mt-0.5 sm:mt-0" />
                      <span>Local system host. Interactive screenshots rendered above.</span>
                    </div>
                    <button 
                      disabled
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-zinc-600 bg-white/[0.03] border border-white/[0.08] px-5 py-2.5 rounded-lg cursor-not-allowed shrink-0 select-none"
                    >
                      <span>Local System Only</span>
                    </button>
                  </>
                )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
