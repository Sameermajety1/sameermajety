"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Animation variants
const navItemVariants = {
  hidden: { opacity: 0, y: -5 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.05,
      duration: 0.3,
      ease: "easeOut"
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
  hidden: { opacity: 0, x: -10 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      delay: 0.1,
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const activeSectionVariants = {
  initial: { width: '0%', opacity: 0 },
  animate: { 
    width: '100%', 
    opacity: 1, 
    transition: { duration: 0.2 }
  },
  exit: { 
    width: '0%', 
    opacity: 0, 
    transition: { duration: 0.2 }
  }
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
    { id: '/', label: 'Home' },
    { id: '/academics', label: 'Academics' },
    { id: '/experience', label: 'Experience' },
    { id: '/research-publications', label: 'Research & Publications' },
    { id: '/personal-life', label: 'Personal Life' },
    { id: '/contact', label: 'Contact' }
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
              href={item.id}
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

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-primary/95 z-50 md:hidden flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={closeMenu}
                className="absolute top-6 right-6 text-light focus:outline-none"
                aria-label="Close Menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <nav className="flex flex-col items-center space-y-6">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.id}
                    custom={i}
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, y: 5, transition: { duration: 0.2 } }}
                  >
                    <Link
                      href={item.id}
                      className={`text-2xl font-semibold ${
                        activeLink === item.id ? 'text-secondary' : 'text-light'
                      } hover:text-secondary transition-colors`}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar; 