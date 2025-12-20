
import React from 'react';
import { Code2, Server, Layout, Laptop, Brain, Globe, Github, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Project, Service, Testimonial, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIALS = [
  { icon: <Github size={20} />, href: 'https://github.com/yata13', label: 'GitHub' },
  { icon: <Twitter size={20} />, href: 'https://twitter.com/yared_tesfahun', label: 'Twitter' },
  { icon: <Instagram size={20} />, href: 'https://www.instagram.com/yared__te/', label: 'Instagram' },
  { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/yared-tesfahun', label: 'LinkedIn' },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Frontend Development',
    description: 'Building responsive and user-friendly websites using React, HTML, CSS, and JavaScript to ensure a great user experience.',
    icon: 'Code2',
  },
  {
    id: 2,
    title: 'Backend Development',
    description: 'Developing secure APIs and backend systems with Node.js, Express, and MySQL/MongoDB to power modern applications.',
    icon: 'Server',
  },
  {
    id: 3,
    title: 'Problem Solving',
    description: 'Designing and delivering scalable solutions for business needs, including e-commerce, chat apps, and payment systems.',
    icon: 'Brain',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Banking Web App',
    description: 'Full banking system with account management, transactions, and employee dashboard.',
    image: 'pr1.png',
    link: 'https://github.com/yata13/bank-site',
    category: 'Full Stack',
  },
  {
    id: 2,
    title: 'Real-Time Chat App',
    description: 'Socket.IO chat application with login, signup, and MongoDB integration.',
    image: 'pr2.png',
    link: 'https://github.com/yata13/chat_apps',
    category: 'Real-time',
  },
  {
    id: 3,
    title: 'Clouss Fashion',
    description: 'Modern clothing brand website with cart system and admin dashboard.',
    image: 'pr3.png',
    link: 'https://enquhebesha.netlify.app/',
    category: 'E-commerce',
  },
  {
    id: 4,
    title: 'Sefed Studio',
    description: 'Sefed Studio is a full-stack web application I built from scratch. The app is fully responsive, optimized for performance',
    image: 'pr4.png',
    link: 'https://sefedstudio.netlify.app/',
    category: 'Frontend',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Dejtnu Tesfahun',
    role: 'Full-Stack',
    feedback: 'Yared delivered a clean, responsive, and well-structured web solution. His understanding of both frontend and backend development made collaboration smooth, and the final result exceeded expectations.',
    avatar: 'deju.jpg',
  },
  {
    id: 2,
    name: 'Henok G/Slase',
    role: 'CTO, TechFlow',
    feedback: 'Professional, reliable, and detail-oriented. Yared handled the project end-to-end, delivering a modern design, solid performance, and a stable deployment. Highly recommended.',
    avatar: 'henok.jpg',
  },
  {
    id: 3,
    name: 'mihreetab Nega',
    role: 'Frontend',
    feedback: 'Yared has strong frontend skills and a good eye for UI/UX. He translated requirements into a polished, user-friendly interface with clean and maintainable code.',
    avatar: 'mihret.jpg',
  },
];
