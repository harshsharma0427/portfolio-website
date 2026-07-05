import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experiences', id: 'experiences' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-neutral-900 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center space-x-3 cursor-pointer group"
          id="logo-container"
        >
          {/* Custom Styled Overlapping H & S Logo as in the photo */}
          <div className="relative w-10 h-10 flex items-center justify-center bg-black border border-neutral-800 rounded-lg overflow-hidden shadow-inner group-hover:border-cyan-500/50 transition-colors duration-300">
            {/* Horizontal line/accent of Logo */}
            <div className="absolute inset-0 flex items-center justify-center font-display font-extrabold text-lg select-none">
              <span className="text-cyan-400 font-sans tracking-tighter">H</span>
              <span className="text-white font-sans tracking-tighter -ml-1 mt-1">S</span>
            </div>
            {/* Glowing active indicator */}
            <div className="absolute -bottom-1 left-1/4 right-1/4 h-[2px] bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[1px]"></div>
          </div>
          <span className="font-display font-semibold text-lg text-white tracking-wide group-hover:text-cyan-400 transition-colors duration-300">
            Harsh Sharma
          </span>
        </div>

        {/* Desktop Navigation Section */}
        <nav className="hidden md:flex items-center space-x-3" id="desktop-nav">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-display font-medium uppercase tracking-widest transition-all duration-300 border ${
                  isActive
                    ? 'bg-neutral-900 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.15)]'
                    : 'bg-transparent border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600'
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-400 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden w-full bg-black/95 backdrop-blur-lg border-b border-neutral-900 px-6 py-4 overflow-hidden"
          >
            <div className="flex flex-col space-y-3 pb-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-link-${item.id}`}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full py-2.5 px-4 rounded-lg text-left text-sm font-display font-medium uppercase tracking-widest transition-all border ${
                      isActive
                        ? 'bg-neutral-900 border-cyan-500 text-cyan-400'
                        : 'bg-transparent border-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-950'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
