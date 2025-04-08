"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Animation variants
const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  })
};

// Add interface for visible sections
interface VisibleSection {
  id: string;
  visibleHeight: number;
  distanceFromCenter: number;
}

const logoVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const activeSectionVariants = {
  initial: { width: '0%', opacity: 0 },
  animate: { width: '100%', opacity: 1, transition: { duration: 0.3 } },
  exit: { width: '0%', opacity: 0, transition: { duration: 0.3 } }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active link based on scroll position
      const sections = document.querySelectorAll('section[id]');
      let found = false;
      
      // Create an array to collect visible sections with their visibility area
      const visibleSections: VisibleSection[] = [];
      
      sections.forEach(section => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;
        const sectionId = section.getAttribute('id') || 'home';
        
        // Calculate how much of the section is visible
        const viewportHeight = window.innerHeight;
        const rect = sectionElement.getBoundingClientRect();
        const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        
        // Only consider sections that are actually visible in the viewport
        if (visibleHeight > 100) {
          visibleSections.push({
            id: sectionId,
            visibleHeight: visibleHeight,
            distanceFromCenter: Math.abs((viewportHeight / 2) - ((rect.top + rect.bottom) / 2))
          });
        }
      });
      
      // If we have visible sections, select the one with the most visibility
      // or closest to the center if multiple sections have similar visibility
      if (visibleSections.length > 0) {
        // Sort first by visible height (descending), then by distance from center (ascending)
        visibleSections.sort((a, b) => {
          // If the difference in visible height is significant
          if (Math.abs(a.visibleHeight - b.visibleHeight) > 100) {
            return b.visibleHeight - a.visibleHeight;
          }
          // Otherwise use distance from center
          return a.distanceFromCenter - b.distanceFromCenter;
        });
        
        setActiveLink(visibleSections[0].id);
        found = true;
      }
      
      // If no section is found visible enough, default to home
      if (!found) {
        setActiveLink('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'academics', label: 'Academics' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'publications', label: 'Publications' },
    { id: 'personal-life', label: 'Personal Life' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-primary/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-2xl font-bold tracking-tight">
            <span className="text-light">Sameer</span>
            <span className="text-secondary">Majety</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:flex space-x-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link text-light hover:text-secondary transition-colors ${activeLink === item.id ? 'text-secondary' : ''}`}
              onClick={() => setActiveLink(item.id)}
            >
              {item.label}
            </Link>
          ))}
        </motion.nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-light focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary/95 backdrop-blur-md shadow-xl border-t border-gray/10"
          >
            <div className="container mx-auto py-4 px-6">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={`#${item.id}`}
                    className={`text-light hover:text-secondary transition-colors py-2 ${
                      activeLink === item.id ? 'text-secondary' : ''
                    }`}
                    onClick={() => {
                      closeMenu();
                      setActiveLink(item.id);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar; 