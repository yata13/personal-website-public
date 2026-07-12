export interface Project {
  id: string;
  fno: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  role?: string;
  longDescription?: string;
  features?: string[];
  mockupType?: "fashion" | "chat" | "realestate" | "gondar" | "erp" | "banking" | "luxury";
  images?: string[];
}

export interface Service {
  id: string;
  num: string;
  title: string;
  description: string;
  technologies: string[];
  icon: string; // Name of Lucide icon to use
}

export interface GearItem {
  category: string;
  name: string;
  description: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}
