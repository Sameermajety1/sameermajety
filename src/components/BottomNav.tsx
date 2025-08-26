import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BottomNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
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

  // Navigation items with emoji icons
  const navItems = [
    { path: 'home', emoji: '🏠', label: 'Home', color: '#4FADF3' },
    { path: 'academics', emoji: '🎓', label: 'Academics', color: '#10B981' },
    { path: 'experience', emoji: '💼', label: 'Experience', color: '#F59E0B' },
    { path: 'research-publications', emoji: '📚', label: 'Research', color: '#EF4444' },
    { path: 'leadership-and-service', emoji: '👑', label: 'Leadership', color: '#8B5CF6' },
  ];

  // Additional menu items (not in main nav)
  const menuItems = [
    { path: 'personal-life', emoji: '❤️', label: 'Life', color: '#EC4899' },
    { path: 'gallery', emoji: '📸', label: 'Gallery', color: '#06B6D4' },
    { path: 'contact', emoji: '📧', label: 'Contact', color: '#84CC16' }
  ];

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (menuRef.current && !menuRef.current.contains(target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    closeMenu();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      {/* Menu Dropdown - Right Corner Above Bottom Bar */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            className="absolute bottom-full right-4 mb-2 w-48 bg-primary/95 backdrop-blur-xl border border-gray rounded-2xl shadow-2xl"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="p-3 space-y-2">
              {menuItems.map((item) => {
                const isActive = activeSection === item.path;
                
                return (
                  <button
                    key={item.path}
                    onClick={() => scrollToSection(item.path)}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 w-full text-left ${
                      isActive 
                        ? 'bg-gradient-to-r from-secondary/10 to-secondary/5 shadow-sm' 
                        : 'hover:bg-primary/50'
                    }`}
                  >
                    <div className="text-2xl">{item.emoji}</div>
                    <span className={`text-sm font-medium ${
                      isActive ? 'text-secondary' : 'text-gray'
                    }`}>
                      {item.label}
                    </span>
                    {isActive && (
                      <motion.div
                        className="ml-auto w-2 h-2 bg-secondary rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation Bar */}
      <motion.nav
        className="bg-primary/95 backdrop-blur-xl border-t border-gray shadow-lg"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="flex justify-around items-center px-2 py-3">
          {navItems.map((item) => {
            const isActive = activeSection === item.path;
            
            return (
              <button
                key={item.path}
                onClick={() => scrollToSection(item.path)}
                className="flex flex-col items-center justify-center min-w-0 flex-1 px-2 py-1"
              >
                <motion.div
                  className={`relative p-3 rounded-full transition-all duration-200 ${
                    isActive 
                      ? 'bg-gradient-to-br from-secondary to-secondary/80 shadow-lg' 
                      : 'hover:bg-primary/50'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-2xl">{item.emoji}</div>
                  {isActive && (
                    <motion.div
                      className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-lg"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.div>
                <span className={`text-xs mt-1 font-medium truncate ${
                  isActive ? 'text-secondary' : 'text-gray'
                }`}>
                  {item.label}
                </span>
              </button>
            );
          })}
          
          {/* Burger Menu Button */}
          <div className="flex flex-col items-center justify-center min-w-0 flex-1 px-2 py-1">
            <motion.button
              onClick={toggleMenu}
              className={`relative p-3 rounded-full transition-all duration-200 ${
                isMenuOpen 
                  ? 'bg-gradient-to-br from-gray-600 to-gray-700 text-light shadow-lg' 
                  : 'hover:bg-primary/50'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-2xl">🍔</div>
            </motion.button>
            <span className={`text-xs mt-1 font-medium truncate ${
              isMenuOpen ? 'text-gray' : 'text-gray'
            }`}>
              Menu
            </span>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default BottomNav;
