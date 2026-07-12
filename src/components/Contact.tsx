import React from "react";
import { Github, Linkedin, Phone, Instagram, Send } from "lucide-react";
import AIAssistant from "./AIAssistant";

export default function Contact() {
  return (
    <section className="py-24 px-6 md:px-12 relative border-b border-white/[0.04] bg-[#0A0A0B]" id="contact">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-stretch">
          
          <div className="contact-left flex flex-col justify-between">
            <div>
              <div className="font-mono text-[10px] text-red-500 uppercase tracking-widest flex items-center gap-2 mb-3">
                <span className="w-6 h-[1px] bg-red-500"></span>
                Contact · System Handshake
              </div>
              <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-white mb-6">
                Let's make something<span className="text-red-500">.</span>
              </h2>
              <p className="text-zinc-400 text-sm md:text-base max-w-xl mb-8 leading-relaxed">
                Got a custom system architecture to build, a web application to optimize, or a brand experience to scale? Send the details. I'll analyze your requirements and let you know honestly if we are a perfect match.
              </p>
            </div>

            <div className="social-list border-t border-white/[0.08] mt-6">
              <a 
                href="tel:+251929260629" 
                className="flex items-center justify-between py-5 border-b border-white/[0.08] group hover:pl-2 transition-all duration-300 no-shutter"
              >
                <div className="flex items-center gap-4 text-white">
                  <Phone size={18} className="text-zinc-400 group-hover:text-red-500 transition-colors" />
                  <span className="font-sans font-semibold text-base group-hover:text-red-500 transition-colors">Phone / Mobile</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-zinc-500">+251 929 260 629</span>
                  <div className="w-2 h-2 border-t border-r border-zinc-500 transform rotate-45 group-hover:border-red-500 transition-colors" />
                </div>
              </a>

              <a 
                href="https://t.me/yared__Te" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-between py-5 border-b border-white/[0.08] group hover:pl-2 transition-all duration-300 no-shutter"
              >
                <div className="flex items-center gap-4 text-white">
                  <Send size={18} className="text-zinc-400 group-hover:text-red-500 transition-colors" />
                  <span className="font-sans font-semibold text-base group-hover:text-red-500 transition-colors">Telegram</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-zinc-500">@yared__Te</span>
                  <div className="w-2 h-2 border-t border-r border-zinc-500 transform rotate-45 group-hover:border-red-500 transition-colors" />
                </div>
              </a>

              <a 
                href="https://instagram.com/yared__te" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-between py-5 border-b border-white/[0.08] group hover:pl-2 transition-all duration-300 no-shutter"
              >
                <div className="flex items-center gap-4 text-white">
                  <Instagram size={18} className="text-zinc-400 group-hover:text-red-500 transition-colors" />
                  <span className="font-sans font-semibold text-base group-hover:text-red-500 transition-colors">Instagram</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-zinc-500">@yared__te</span>
                  <div className="w-2 h-2 border-t border-r border-zinc-500 transform rotate-45 group-hover:border-red-500 transition-colors" />
                </div>
              </a>

              <a 
                href="https://github.com/yata13" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-between py-5 border-b border-white/[0.08] group hover:pl-2 transition-all duration-300 no-shutter"
              >
                <div className="flex items-center gap-4 text-white">
                  <Github size={18} className="text-zinc-400 group-hover:text-red-500 transition-colors" />
                  <span className="font-sans font-semibold text-base group-hover:text-red-500 transition-colors">GitHub</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-zinc-500">github.com/yata13</span>
                  <div className="w-2 h-2 border-t border-r border-zinc-500 transform rotate-45 group-hover:border-red-500 transition-colors" />
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/yared-tesfahun-10b102251/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-between py-5 border-b border-white/[0.08] group hover:pl-2 transition-all duration-300 no-shutter"
              >
                <div className="flex items-center gap-4 text-white">
                  <Linkedin size={18} className="text-zinc-400 group-hover:text-red-500 transition-colors" />
                  <span className="font-sans font-semibold text-base group-hover:text-red-500 transition-colors">LinkedIn</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-zinc-500">yared-tesfahun</span>
                  <div className="w-2 h-2 border-t border-r border-zinc-500 transform rotate-45 group-hover:border-red-500 transition-colors" />
                </div>
              </a>

              <a 
                href="https://sefed.codegrowths.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-between py-5 border-b border-white/[0.08] group hover:pl-2 transition-all duration-300 no-shutter"
              >
                <div className="flex items-center gap-4 text-white">
                  <span className="text-zinc-400 group-hover:text-red-500 font-bold font-sans text-lg select-none transition-colors w-[18px] text-center">ሰ</span>
                  <span className="font-sans font-semibold text-base group-hover:text-red-500 transition-colors">Sefed Profile</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-zinc-500">sefed.studio</span>
                  <div className="w-2 h-2 border-t border-r border-zinc-500 transform rotate-45 group-hover:border-red-500 transition-colors" />
                </div>
              </a>
            </div>
          </div>

          <AIAssistant />

        </div>
      </div>
    </section>
  );
}
