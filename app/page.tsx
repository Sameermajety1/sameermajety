"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Academics from '../components/Academics';
import Experience from '../components/Experience';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { FloatingElements } from '../components/FloatingElements';
import Publications from '../components/Publications';
import PersonalLife from '../components/PersonalLife';

export default function Home() {
  const [currentSection, setCurrentSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Calculate scroll progress
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(window.scrollY / scrollHeight);
      
      // Get the current visible section with improved detection
      const sections = ['home', 'academics', 'experience', 'achievements', 'publications', 'personal-life', 'contact'];
      const visibleSections = [];
      
      // Collect information about visible sections
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          
          // Calculate how much of the section is visible
          const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
          
          // Only consider sections that are actually visible in the viewport
          if (visibleHeight > 100) {
            visibleSections.push({
              id: sectionId,
              visibleHeight: visibleHeight,
              distanceFromCenter: Math.abs((viewportHeight / 2) - ((rect.top + rect.bottom) / 2))
            });
          }
        }
      }
      
      // If we have visible sections, select the one with the most visibility
      // or closest to the center for similar visibility levels
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
        
        setCurrentSection(visibleSections[0].id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden relative">
      <Navbar />
      
      {/* Add floating elements for the entire page */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <FloatingElements />
      </div>
      
      <motion.section 
        id="home"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <Hero />
      </motion.section>
      
      <motion.section
        id="academics"
        initial="initial"
        whileInView="animate"
        exit="exit"
        variants={pageVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="mt-[-2rem]"
      >
        <Academics />
      </motion.section>
      
      <motion.section
        id="experience"
        initial="initial"
        whileInView="animate"
        exit="exit"
        variants={pageVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="mt-[-2rem]"
      >
        <Experience />
      </motion.section>
      
      <motion.section
        id="achievements"
        initial="initial"
        whileInView="animate"
        exit="exit"
        variants={pageVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="mt-[-2rem]"
      >
        <Achievements />
      </motion.section>
      
      <motion.section
        id="publications"
        initial="initial"
        whileInView="animate"
        exit="exit"
        variants={pageVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="mt-[-2rem]"
      >
        <Publications />
      </motion.section>
      
      <motion.section
        id="personal-life"
        initial="initial"
        whileInView="animate"
        exit="exit"
        variants={pageVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="mt-[-2rem]"
      >
        <PersonalLife />
      </motion.section>
      
      <motion.section
        id="contact"
        initial="initial"
        whileInView="animate"
        exit="exit"
        variants={pageVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="mt-[-2rem]"
      >
        <Contact />
      </motion.section>
      
      <Footer />
      
      {/* Floating quick navigation */}
      <motion.div 
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="flex flex-col gap-4">
          {[
            { id: 'home', label: 'Home', icon: '🏠' },
            { id: 'academics', label: 'Academics', icon: '📚' },
            { id: 'experience', label: 'Experience', icon: '👨‍⚕️' },
            { id: 'achievements', label: 'Achievements', icon: '🏆' },
            { id: 'publications', label: 'Publications', icon: '📝' },
            { id: 'personal-life', label: 'Personal Life', icon: '🌟' },
            { id: 'contact', label: 'Contact', icon: '📞' }
          ].map(item => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              className={`w-3 h-3 rounded-full ${
                currentSection === item.id ? 'bg-secondary' : 'bg-gray'
              } relative group`}
              whileHover={{ scale: 1.5 }}
            >
              <span className="absolute right-full mr-2 opacity-0 group-hover:opacity-100 whitespace-nowrap text-sm font-medium text-secondary transition-opacity duration-300">
                {item.label}
              </span>
              {currentSection === item.id && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-secondary"
                  layoutId="navIndicator"
                  initial={{}}
                  style={{ opacity: 0.5 }}
                  animate={{ scale: [1, 1.8, 1] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity 
                  }}
                />
              )}
            </motion.a>
          ))}
        </div>
      </motion.div>
      
      {/* Scroll progress indicator */}
      <motion.div 
        className="fixed bottom-0 left-0 h-1 bg-secondary z-50"
        style={{ 
          scaleX: scrollProgress,
          transformOrigin: "0% 50%"
        }}
      />
    </main>
  );
} 