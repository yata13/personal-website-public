
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
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 md:px-[10%] ${
        isSticky 
          ? 'bg-white/80 dark:bg-darkBg/80 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-primary tracking-wider">
          Yared.
        </a>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-lg font-medium transition-colors hover:text-primary ${
                activeSection === link.href.slice(1) 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-gray-700 dark:text-gray-200'
              } ${!isSticky && activeSection !== link.href.slice(1) ? 'md:text-white dark:md:text-gray-200' : ''}`}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors ${
              isSticky ? 'text-gray-700 dark:text-yellow-400' : 'text-white'
            }`}
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </nav>

        {/* Mobile Navbar Controls */}
        <div className="flex md:hidden items-center gap-4">
          <button onClick={toggleDarkMode} className="p-2 text-primary">
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-primary">
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`
        md:hidden absolute top-full left-0 w-full bg-white dark:bg-darkBg shadow-xl transition-all duration-300 overflow-hidden
        ${isMenuOpen ? 'max-h-96 py-6' : 'max-h-0'}
      `}>
        <nav className="flex flex-col items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-xl font-semibold ${
                activeSection === link.href.slice(1) ? 'text-primary' : 'text-gray-700 dark:text-gray-200'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
