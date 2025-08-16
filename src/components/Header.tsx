import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [toggleHover, setToggleHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-navy/95 backdrop-blur-md border-b border-teal/20' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-teal to-skyblue bg-clip-text text-transparent">
            Shemaiah David
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-teal ${
                  activeSection === item.href.slice(1) ? 'text-teal' : 'text-gray-300'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              onMouseEnter={() => setToggleHover(true)}
              onMouseLeave={() => setToggleHover(false)}
              className="relative p-2 rounded-full bg-navy/50 border border-teal/30 hover:border-teal/60 transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal to-skyblue opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative">
                {darkMode ? <SunIcon size={18} className="text-teal group-hover:scale-110 transition-transform" /> : <MoonIcon size={18} className="text-teal group-hover:scale-110 transition-transform" />}
              </div>
              <span className="absolute inset-0 rounded-full border border-teal/30 group-hover:border-teal/60 transition-colors"></span>
              {toggleHover && <span className="absolute inset-0 rounded-full animate-ping border border-teal/30 opacity-75" style={{
                animationDuration: '1.5s'
              }}></span>}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg bg-navy/50 border border-teal/30 hover:border-teal/60 transition-colors"
            >
              {menuOpen ? <XIcon size={18} className="text-teal" /> : <MenuIcon size={18} className="text-teal" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-800">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium py-2 border-b border-gray-800 hover:text-teal transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;