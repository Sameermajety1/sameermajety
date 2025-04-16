"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { FloatingElements } from './FloatingElements';
import MedicalAnimations from './MedicalAnimations';

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

interface PageLayoutProps {
  children: React.ReactNode;
  pageId: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, pageId }) => {
  return (
    <main className="min-h-screen overflow-x-hidden relative">
      <Navbar />
      
      {/* Background animations */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <FloatingElements />
        <MedicalAnimations />
      </div>
      
      <motion.section 
        id={pageId}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        className={pageId !== 'home' ? 'pt-16' : ''}
      >
        {children}
      </motion.section>
      
      <Footer />
    </main>
  );
};

export default PageLayout; 