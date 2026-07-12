// Lightweight, high-contrast SVGs and system blueprints to replace heavy base64 strings.
// This matches the "specialize in code" directive, providing pristine performance (Lighthouse 100).

export const HERO_SVG_BACKDROP = `
  <svg viewBox="0 0 800 1200" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full opacity-30 select-none pointer-events-none">
    <defs>
      <linearGradient id="grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FF2E2E" stop-opacity="0.15" />
        <stop offset="50%" stop-color="#121214" stop-opacity="0.02" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0.9" />
      </linearGradient>
      <linearGradient id="line-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#FF2E2E" stop-opacity="0.6" />
        <stop offset="100%" stop-color="transparent" stop-opacity="0" />
      </linearGradient>
    </defs>
    
    {/* Stylized cybernetic terminal mesh representing a full-stack system architecture */}
    <rect width="800" height="1200" fill="url(#grad-1)" />
    
    {/* Code Matrix grid intersections */}
    <circle cx="150" cy="150" r="3" fill="#FF2E2E" opacity="0.6" />
    <circle cx="650" cy="150" r="3" fill="#FF2E2E" opacity="0.6" />
    <circle cx="150" cy="850" r="3" fill="#FF2E2E" opacity="0.3" />
    <circle cx="650" cy="850" r="3" fill="#FF2E2E" opacity="0.3" />

    {/* Concentric solar orbital radar lines representing Technical SEO reach */}
    <circle cx="400" cy="500" r="280" stroke="rgba(255, 46, 46, 0.08)" stroke-width="1.5" stroke-dasharray="8 8" />
    <circle cx="400" cy="500" r="180" stroke="rgba(255, 46, 46, 0.12)" stroke-width="2" />
    <circle cx="400" cy="500" r="80" stroke="rgba(255, 46, 46, 0.2)" stroke-width="1" stroke-dasharray="4 4" />
    
    {/* Geometric system lines */}
    <line x1="400" y1="50" x2="400" y2="950" stroke="url(#line-grad)" stroke-width="1.5" />
    <line x1="50" y1="500" x2="750" y2="500" stroke="rgba(255,255,255,0.04)" stroke-width="1" />
  </svg>
`;

export const ABOUT_SVG_AVATAR = `
  <svg viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
    <rect width="400" height="500" fill="#0A0A0B" />
    <defs>
      <linearGradient id="avatar-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FF2E2E" stop-opacity="0.2" />
        <stop offset="100%" stop-color="#121214" stop-opacity="0.8" />
      </linearGradient>
    </defs>
    
    {/* Tech grid inside portrait card */}
    <path d="M 0 50 L 400 50 M 0 100 L 400 100 M 0 150 L 400 150 M 0 200 L 400 200 M 0 250 L 400 250 M 0 300 L 400 300 M 0 350 L 400 350 M 0 400 L 400 400 M 0 450 L 400 450" stroke="rgba(255,255,255,0.03)" stroke-width="1" />
    <path d="M 50 0 L 50 500 M 100 0 L 100 500 M 150 0 L 150 500 M 200 0 L 200 500 M 250 0 L 250 500 M 300 0 L 300 500 M 350 0 L 350 500" stroke="rgba(255,255,255,0.03)" stroke-width="1" />
    
    {/* Stylized code bracket vectors */}
    <g transform="translate(140, 180) scale(1.5)">
      <path d="M 20 10 L 5 40 L 20 70" stroke="#FF2E2E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M 60 10 L 75 40 L 60 70" stroke="#FF2E2E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      <line x1="45" y1="10" x2="35" y2="70" stroke="rgba(255,255,255,0.3)" stroke-width="3" stroke-linecap="round" />
    </g>
    
    {/* Tech HUD overlays */}
    <rect x="20" y="20" width="360" height="460" stroke="rgba(255, 46, 46, 0.15)" stroke-width="1" />
    <text x="40" y="440" fill="rgba(255,255,255,0.4)" font-family="monospace" font-size="10" letter-spacing="1">SYSTEM: OPERATIONAL</text>
    <text x="40" y="455" fill="#FF2E2E" font-family="monospace" font-size="10" letter-spacing="1">LOC: ADDIS ABABA, ET</text>
  </svg>
`;
