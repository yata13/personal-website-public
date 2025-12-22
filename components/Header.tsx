import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        if (id && top >= offset && top < offset + height) {
          setActiveSection(id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-0 w-full z-50 px-6 flex justify-center pointer-events-none">
      <nav className={`
        nav-capsule px-6 py-3 flex items-center gap-8 transition-all duration-500 pointer-events-auto
        ${isSticky ? 'shadow-2xl translate-y-[-4px]' : ''}
      `}>
        <a href="#home" className="text-xl font-display font-bold text-accent mr-4">
          YT<span className="text-white">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-tight transition-all hover:text-accent ${
                activeSection === link.href.slice(1) 
                  ? 'text-accent' 
                  : 'text-gray-400'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="h-4 w-[1px] bg-white/10 hidden md:block"></div>

        <button 
          onClick={toggleDarkMode}
          className="p-1.5 rounded-full text-gray-400 hover:text-accent transition-colors"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden text-gray-400 hover:text-accent"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-x-6 top-24 bg-obsidian-soft/95 backdrop-blur-xl rounded-3xl border border-white/5 p-8 transition-all duration-500 md:hidden pointer-events-auto
        ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-20px] pointer-events-none'}
      `}>
        <div className="flex flex-col gap-6 items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-display font-medium text-gray-200 hover:text-accent"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;