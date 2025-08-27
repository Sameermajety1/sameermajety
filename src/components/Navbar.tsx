import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'academics', 'experience', 'research-publications', 'leadership-and-service', 'personal-life', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: 'home', label: 'Home' },
    { path: 'academics', label: 'Academics' },
    { path: 'experience', label: 'Experience' },
    { path: 'research-publications', label: 'Research & Publications' },
    { path: 'leadership-and-service', label: 'Leadership & Service' },
    { path: 'personal-life', label: 'Life' },
    { path: 'gallery', label: 'Gallery' },
    { path: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-primary/95 backdrop-blur-xl shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <span className="font-bold text-lg">
              <span className="text-light">Sameer</span>
              <span className="text-secondary">Majety</span>
            </span>
          </button>

          {/* Navigation Links - Desktop Only */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.path;
              return (
              <button
                  key={item.path}
                  onClick={() => scrollToSection(item.path)}
                  className="relative font-medium transition-colors duration-300 text-light hover:text-secondary group"
                >
                  {item.label}
                  {/* Active underline */}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary"
                      layoutId="activeTab"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {/* Hover underline - only show when not active */}
                  {!isActive && (
                  <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 
