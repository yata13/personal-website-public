import { Project, Service, GearItem, Stat } from "./types";

export const MARQUEE_ITEMS: string[] = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "Java",
  "C",
  "C++",
  "Bash",
  "SQL",
  "MongoDB",
  "Express",
  "MySQL",
  "REST APIs",
  "Technical SEO",
  "Web Performance",
  "Tailwind CSS",
  "Firebase",
  "Socket.IO",
  "Sony A7 IV",
  "DJI RS4",
  "Color Grading",
  "Git / GitHub"
];

export const CODE_TAGS: string[] = [
  "COMPILE_OK ✓",
  "PUSH_SUCCESS ✓",
  "RESOLVED ✓",
  "DEP_STAGE ✓",
  "DEPLOYED ✓",
  "MERGED ✓",
  "STATUS_200 ✓",
  "DB_CONNECTED ✓",
  "SEO_RANK_1 ✓",
  "A7IV_REC ✓",
  "CWD_STABLE ✓"
];

export const SERVICES: Service[] = [
  {
    id: "svc-1",
    num: "SVC/01",
    title: "Web & Full-Stack",
    description: "High-performance applications, custom portals, and server architectures crafted with TypeScript, React, and Node.js for smooth client operations.",
    technologies: ["REACT 19", "NODEJS", "EXPRESS"],
    icon: "code"
  },
  {
    id: "svc-2",
    num: "SVC/02",
    title: "Business Systems",
    description: "ERP & POS systems, warehouse/inventory controls, transaction sheets, and secure, granular role-based authorization tools tailored for retail and enterprise.",
    technologies: ["ERP", "POS", "MYSQL"],
    icon: "database"
  },
  {
    id: "svc-3",
    num: "SVC/03",
    title: "On-Page & Technical SEO",
    description: "Audit-driven search optimization. Optimizing core web vitals, index structure, schema metadata, and keyword presence to dominate rankings.",
    technologies: ["TECHNICAL", "LOCAL", "ON-PAGE"],
    icon: "search"
  },
  {
    id: "svc-4",
    num: "SVC/04",
    title: "Digital Marketing",
    description: "Targeted campaigns, conversion copywriting, social pipelines, and design assets developed to actively acquire leads and schedule bookings.",
    technologies: ["STRATEGY", "CONTENT", "COPY"],
    icon: "trending-up"
  },
  {
    id: "svc-5",
    num: "SVC/05",
    title: "Production & Video",
    description: "Premium commercial cinematography, product listings, and digital brand videos shot, lit, and color-graded using cinema gear.",
    technologies: ["SONY A7 IV", "DJI RS4"],
    icon: "video"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-bella-store",
    fno: "F/01",
    title: "Bella Fashion Store",
    description: "Timeless minimalist fashion e-commerce platform featuring sticky lookbook navigation, instant collection filtering, and custom social checkout.",
    tags: ["React", "Tailwind CSS", "E-commerce"],
    liveUrl: "https://bellafshion.netlify.app",
    mockupType: "fashion",
    role: "Lead Full-Stack Developer",
    longDescription: "A boutique high-end clothing platform built for modern fashion aesthetics. It implements responsive touch navigation, instant tag-based filtering, responsive lookbook overlays, and a custom checkout system that seamlessly forwards verified telegram/whatsapp social handles for direct store orders.",
    features: [
      "Fluid cart status synchronization with LocalStorage",
      "Dynamic media carousels and smooth scroll lookbooks",
      "Custom direct-order checkouts with handle verification",
      "Fully optimized responsive navigation for ultimate thumb reach"
    ],
    images: [
      "https://i.postimg.cc/jj9hMnXQ/bellafshion-netlify-app-(3).png",
      "https://i.postimg.cc/Dz8z2SKd/bellafshion-netlify-app-(5).png",
      "https://i.postimg.cc/prxxnT3q/bellafshion-netlify-app-(6).png",
      "https://i.postimg.cc/bvj6Ptn4/bellafshion-netlify-app-(7).png"
    ]
  },
  {
    id: "proj-liyafetil",
    fno: "F/02",
    title: "Liya Habesha Fashion",
    description: "Luxury traditional clothing showcase displaying fine custom-tailored cultural Ethiopian garments with detailed fit catalogs and responsive animations.",
    tags: ["React", "Tailwind CSS", "Luxury", "E-commerce"],
    liveUrl: "https://liyafetil.netlify.app/",
    mockupType: "luxury",
    role: "Lead Developer & Cinematographer",
    longDescription: "An ultra-premium website presenting Habesha traditional wear. Styled with high-contrast luxury serif typography, rich negative space, and custom catalog viewing. The design is tuned to reflect cultural elegance with flawless page-load optimization.",
    features: [
      "High-fidelity product catalog with detailed zoom details",
      "Interactive traditional clothing customization request flow",
      "Elegant modern design showcasing fine fabric patterns with premium load states",
      "Responsive layouts built with tailwind container controls"
    ],
    images: [
      "https://i.postimg.cc/yxZMnSSp/liyafetil-netlify-app.png",
      "https://i.postimg.cc/ZKz24nNy/liyafetil-netlify-app-(1).png",
      "https://i.postimg.cc/K8v98M8x/liyafetil-netlify-app-(2).png",
      "https://i.postimg.cc/XqqJvLmq/liyafetil-netlify-app-(3).png"
    ]
  },
  {
    id: "proj-realestate",
    fno: "F/03",
    title: "Prime Real Estate Platform",
    description: "A sophisticated property discovery application featuring localized searching, interactive map integration, and virtual listings catalog.",
    tags: ["React", "Property Search"],
    liveUrl: "https://test-realstat.netlify.app",
    mockupType: "realestate",
    role: "Frontend Engineer",
    longDescription: "A real estate explorer designed to give users a high-speed search and discovery tool for high-end properties. Built with beautiful dynamic filtering for price, location, and property type.",
    features: [
      "Interactive map integration with customized map markers",
      "Instant on-the-fly client-side property list filters",
      "Detailed property detail card grids with high-density visual specifications",
      "Optimized media carousels for premium property architectural shots"
    ],
    images: [
      "https://i.postimg.cc/rygTn53w/test-realstat-netlify-app.png",
      "https://i.postimg.cc/R0c5ctKs/test-realstat-netlify-app-(1).png",
      "https://i.postimg.cc/XvWD6zBk/test-realstat-netlify-app-(2).png"
    ]
  },
  {
    id: "proj-3",
    fno: "F/04",
    title: "Real-Time Chat App",
    description: "Low-latency communication platform featuring persistent instant messaging rooms, user online status indicators, and profile configuration.",
    tags: ["TypeScript", "Tailwind CSS", "MongoDB"],
    liveUrl: "https://chat-app13.netlify.app/",
    mockupType: "chat",
    role: "Full-Stack System Engineer",
    longDescription: "A fast, fluid multi-room instant chat utility utilizing server-sent channels and direct state synchronization. Optimized for absolute minimal bundle size and ultra-low ping.",
    features: [
      "Instant live text delivery with Socket.IO channels",
      "Persistent user-created themed discussion rooms",
      "Custom profile avatar uploads with direct cloud integration",
      "Active indicator state and typing state animations"
    ],
    images: [
      "https://i.postimg.cc/B67060xq/chat-app13-netlify-app-(i-Phone-14-Pro-Max).png",
      "https://i.postimg.cc/766FjWjM/chat-app13-netlify-app-login(i-Phone-14-Pro-Max).png",
      "https://i.postimg.cc/k5XMXwkh/chat-app13-netlify-app-(i-Phone-14-Pro-Max)-(1).png",
      "https://i.postimg.cc/k4RmBHwt/chat-app13-netlify-app-chatdashbord(i-Phone-14-Pro-Max)-(1).png"
    ]
  },
  {
    id: "proj-visit-gondar",
    fno: "F/05",
    title: "Visit Gondar Tourism",
    description: "Digital tourism & historic exploration platform featuring interactive heritage guides, local directory listings, maps, and cultural itineraries.",
    tags: ["Dart", "Flutter", "Supabase", "PostgreSQL"],
    mockupType: "gondar",
    role: "Core Architect & Designer",
    longDescription: "A digital portal built to showcase the breathtaking historic landmarks, castles, and cultural itineraries of Gondar, Ethiopia. Featuring interactive offline guides for travelers and a comprehensive local directory.",
    features: [
      "Offline-first architectural database caching",
      "Fully interactive heritage map detailing ancient castle coordinates",
      "Custom cultural itinerary generator based on travel duration",
      "Rich visual gallery exhibiting local food, music, and hotels"
    ],
    images: [
      "https://i.postimg.cc/GtFLMfWp/photo-2026-07-11-14-16-20.jpg",
      "https://i.postimg.cc/BQCZHd5M/photo-2026-07-11-14-16-34.jpg",
      "https://i.postimg.cc/T16GW9Kw/photo-2026-07-11-14-16-40.jpg",
      "https://i.postimg.cc/MKzq69kF/photo-2026-07-11-14-16-46.jpg"
    ]
  },
  {
    id: "proj-1",
    fno: "F/06",
    title: "Enterprise ERP & POS System",
    description: "Multi-store inventory monitoring, automated checkout sheets, and employee records featuring robust role-based privilege checks.",
    tags: ["React", "Node.js", "Tailwind CSS", "MySQL"],
    mockupType: "erp",
    role: "Backend & Lead Architect",
    longDescription: "A complex backend-driven commerce ERP and POS system that manages inventories across multiple active physical store locations in Addis Ababa. Includes extensive logging, automatic billing generation, and staff access controls.",
    features: [
      "Role-based secure privilege authorization system",
      "Real-time automated stock status alerts",
      "Interactive daily financial transaction checkout spreadsheets",
      "Custom invoice pdf rendering and print-ready receipts"
    ],
    images: [
      "https://i.postimg.cc/qtLmqnbG/localhost-3000.png",
      "https://i.postimg.cc/yJPfx9Qf/localhost-3000-(1).png",
      "https://i.postimg.cc/Y43X0gnd/localhost-3000-(2).png",
      "https://i.postimg.cc/VSR7vMG9/localhost-3000-(3).png",
      "https://i.postimg.cc/f3KHyX2f/localhost-3000-(4).png",
      "https://i.postimg.cc/mcwdkMXN/localhost-3000-(5).png"
    ]
  },
  {
    id: "proj-2",
    fno: "F/07",
    title: "Banking Management System",
    description: "Secure financial virtual ledger, instant transfers simulation, active transaction audit trails, and bank clerk operator dashboard.",
    tags: ["React", "CSS", "Node.js", "MySQL"],
    mockupType: "banking",
    role: "Backend System Lead",
    longDescription: "A bank clerk portal designed for micro-finance ledgers. Engineered to track balances, audit instant transfers, and maintain immutable logs of transactions, ensuring complete transactional integrity.",
    features: [
      "Double-entry secure virtual ledger bookkeeping",
      "Live transaction logs with instantaneous audit search and filtering",
      "Manager verification request workflows for transfers exceeding caps",
      "Secure session handling and transaction protection locks"
    ],
    images: [
      "https://i.postimg.cc/2LYT84gr/localhost-5173-(4).png",
      "https://i.postimg.cc/YGYbHXD2/localhost-5173-(5).png",
      "https://i.postimg.cc/9RZJhxg3/localhost-5173-Employee-Dashboard.png",
      "https://i.postimg.cc/bDk3h6C4/localhost-5173-Employee-Login-(1).png"
    ]
  }
];

export const GEAR_ITEMS: GearItem[] = [
  {
    category: "BODY",
    name: "Sony A7 IV",
    description: "33MP Full-Frame mirrorless capturing pristine low-light files, graded in S-Log3."
  },
  {
    category: "RIG",
    name: "DJI RS4 Combo",
    description: "Three-axis stabilized gimbal delivering rock-steady tracking and crane mimics."
  },
  {
    category: "GLASS",
    name: "Sigma 24-70mm f/2.8 DG DN",
    description: "Elite standard zoom lens offering edge-to-edge sharpness throughout the focal range."
  },
  {
    category: "LIGHT",
    name: "Amaran 200d LED + Softbox",
    description: "High-output daylight spotlight replicating natural lighting and modeling."
  }
];

export const STATS: Stat[] = [
  { value: 3, suffix: "yr", label: "Years Experience" },
  { value: 5, suffix: "+", label: "Big Projects Done" },
  { value: 10, suffix: "+", label: "Languages Read & Coded" },
  { value: 100, suffix: "%", label: "Client Satisfaction" }
];
