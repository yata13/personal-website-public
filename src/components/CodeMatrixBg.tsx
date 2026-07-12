import React, { useEffect, useState } from "react";

export default function CodeMatrixBg() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const snippets = [
    "const db = connectPool();",
    "import { useState } from 'react';",
    "export default function App() {",
    "await db.query('SELECT * FROM pos_inventory');",
    "npm run build && node dist/server.cjs",
    "const yata = new FullStackDeveloper();",
    "yata.optimizeSEO({ target: 'page_one' });",
    "process.env.GEMINI_API_KEY",
    "socket.emit('message', { status: 200 });",
    "// 4K Cinema Raw encoding pipeline stable",
    "git commit -m 'feat: optimized load times to 0.4s'",
    "const res = await fetch('/api/stats');",
    "res.json({ compiled: true });"
  ];

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Dynamic atmospheric radial background glow with red accent */}
      <div 
        className="absolute inset-x-0 top-0 h-[85vh] opacity-30 md:opacity-20"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 75% 35%, rgba(255, 46, 46, 0.22), transparent 75%)"
        }}
      />

      {/* Cybernetic Tech Grid Map */}
      <div 
        className="absolute inset-0 opacity-[0.06] md:opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px"
        }}
      />

      {/* Floating Monospace Code Snippets rendering soft-glow */}
      <div className="absolute inset-0 hidden md:block opacity-[0.25]">
        {snippets.map((txt, index) => {
          // Semi-random positioning based on index to avoid layout shifting on render
          const topPercent = 12 + (index * 6.5) % 78;
          const leftPercent = 55 + (index * 13) % 40;
          const animationDelay = `${index * 0.7}s`;
          const animationDuration = `${12 + (index % 5) * 3}s`;

          return (
            <div
              key={index}
              className="absolute font-mono text-[10px] text-red-500/80 whitespace-nowrap px-2 py-1 rounded bg-[#0A0A0B]/50 border border-white/[0.04]"
              style={{
                top: `${topPercent}%`,
                left: `${leftPercent}%`,
                filter: "drop-shadow(0 2px 4px rgba(255, 46, 46, 0.1))",
                animation: "pulse-gentle infinite alternate",
                animationDelay,
                animationDuration
              }}
            >
              <span className="text-zinc-600 mr-2">[{100 + index}]</span>
              <span className="text-zinc-400">{txt}</span>
            </div>
          );
        })}
      </div>

      {/* Dynamic ambient laser lines */}
      <div className="absolute right-[15%] top-1/4 w-[1px] h-64 bg-gradient-to-b from-transparent via-red-500/10 to-transparent" />
      <div className="absolute right-[45%] top-10 w-[1px] h-40 bg-gradient-to-b from-transparent via-zinc-500/5 to-transparent" />

      {/* Keyframe stylesheet injected safely helper */}
      <style>{`
        @keyframes pulse-gentle {
          0% { opacity: 0.15; transform: translateY(0); }
          100% { opacity: 0.75; transform: translateY(-8px); }
        }
      `}</style>
    </div>
  );
}
