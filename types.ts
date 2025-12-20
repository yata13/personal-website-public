
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  feedback: string;
  avatar: string;
}

export interface NavLink {
  name: string;
  href: string;
}
