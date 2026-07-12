import React, { useState, useRef, useEffect } from "react";
import { ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ImageGalleryProps {
  images?: string[];
  projectTitle: string;
}

export default function ImageGallery({ images = [], projectTitle }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scale, setScale] = useState(1);
  
  // Drag-to-pan refs and states
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, images.length]);

  // Reset zoom when active image changes
  useEffect(() => {
    setScale(1);
  }, [activeIndex]);

  if (images.length === 0) {
    return (
      <div className="w-full h-72 bg-zinc-950 border border-white/5 rounded-lg flex items-center justify-center font-mono text-xs text-zinc-500">
        No screenshots registered for this system.
      </div>
    );
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.5, 3));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.5, 1));
  };

  const resetZoom = () => {
    setScale(1);
  };

  // Drag to pan handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setStartY(e.pageY - (containerRef.current?.offsetTop || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
    setScrollTop(containerRef.current?.scrollTop || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const y = e.pageY - (containerRef.current?.offsetTop || 0);
    const walkX = (x - startX) * 1.5;
    const walkY = (y - startY) * 1.5;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walkX;
      containerRef.current.scrollTop = scrollTop - walkY;
    }
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full flex flex-col gap-4 font-sans select-none">
      
      {/* Gallery Header Tool bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-zinc-950/40 p-3 rounded-lg border border-white/[0.05]">
        
        {/* Info Badge */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-widest text-[#EF4444] bg-[#EF4444]/10 px-2 py-0.5 rounded font-bold">
            ሰ GALLERY
          </span>
          <span className="text-zinc-600 font-mono text-xs">·</span>
          <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest">
            SCREEN {activeIndex + 1} OF {images.length}
          </span>
        </div>

        {/* Zoom Controls */}
        <div className="flex items-center gap-1.5 self-end sm:self-auto">
          {/* Zoom Level Indicator */}
          <span className="font-mono text-[9px] text-zinc-500 mr-1 text-right min-w-[36px]">
            {Math.round(scale * 100)}%
          </span>

          <button
            onClick={zoomOut}
            disabled={scale <= 1}
            title="Zoom Out"
            className="w-7 h-7 rounded bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ZoomOut size={13} />
          </button>

          <button
            onClick={zoomIn}
            disabled={scale >= 3}
            title="Zoom In"
            className="w-7 h-7 rounded bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ZoomIn size={13} />
          </button>

          {scale > 1 && (
            <button
              onClick={resetZoom}
              title="Reset Zoom"
              className="w-7 h-7 rounded bg-[#EF4444]/10 hover:bg-[#EF4444]/20 border border-[#EF4444]/20 flex items-center justify-center text-red-400 transition-all"
            >
              <RotateCcw size={13} />
            </button>
          )}
        </div>

      </div>

      {/* Main Viewport */}
      <div className="relative aspect-video w-full bg-black rounded-lg border border-white/[0.08] overflow-hidden group/gallery">
        
        {/* Click and Drag Panning Container */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`w-full h-full flex items-center justify-center overflow-auto scrollbar-none transition-all duration-100 ${
            scale > 1 ? "cursor-grab active:cursor-grabbing" : ""
          }`}
        >
          {/* Main Display Image */}
          <AnimatePresence mode="wait">
            <motion.img
              key={activeIndex}
              src={images[activeIndex]}
              alt={`${projectTitle} screenshot ${activeIndex + 1}`}
              referrerPolicy="no-referrer"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              style={{
                transform: `scale(${scale})`,
                transformOrigin: "center center",
                transition: isDragging ? "none" : "transform 0.15s ease-out",
                width: scale > 1 ? "120%" : "100%",
                height: scale > 1 ? "120%" : "100%",
                objectFit: "contain",
              }}
              className="pointer-events-none select-none max-h-full"
            />
          </AnimatePresence>
        </div>

        {/* Drag Helper overlay */}
        {scale > 1 && (
          <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-[8px] font-mono tracking-widest text-zinc-400 uppercase border border-white/5 px-2 py-1 rounded select-none pointer-events-none">
            DRAG TO PAN SCREEN
          </div>
        )}

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-black/80 hover:scale-105 transition-all opacity-0 group-hover/gallery:opacity-100 focus:opacity-100"
              aria-label="Previous screenshot"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-black/80 hover:scale-105 transition-all opacity-0 group-hover/gallery:opacity-100 focus:opacity-100"
              aria-label="Next screenshot"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}

      </div>

      {/* Thumbnails strip */}
      {images.length > 1 && (
        <div className="space-y-1.5">
          <div className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest select-none">
            SCROLL & SELECT SYSTEM SCREENSHOT
          </div>
          <div className="flex gap-2.5 overflow-x-auto pb-1.5 scrollbar-thin scrollbar-thumb-zinc-800">
            {images.map((imgUrl, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`relative w-20 sm:w-24 aspect-video rounded-md border overflow-hidden shrink-0 transition-all ${
                    isActive 
                      ? "border-[#EF4444] ring-1 ring-[#EF4444]/30" 
                      : "border-white/10 hover:border-white/20 hover:scale-[1.02]"
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`Thumbnail ${i + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover pointer-events-none select-none"
                  />
                  {isActive && (
                    <div className="absolute inset-0 bg-[#EF4444]/10 flex items-center justify-center">
                      <div className="text-[8px] font-mono text-white bg-[#EF4444] px-1 rounded">
                        ACTIVE
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
}
