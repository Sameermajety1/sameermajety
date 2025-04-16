"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { FloatingElements } from './FloatingElements';
import MedicalAnimations from './MedicalAnimations';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

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
  const pathname = usePathname();
  
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
        className={`${pageId !== 'home' ? 'pt-16' : ''} pb-24 md:pb-16`}
      >
        {children}
      </motion.section>
      
      {/* Mobile Navigation Bar - shown only on small screens */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-20">
        <div className="bg-primary/90 backdrop-blur-md border-t border-white/10 px-2 py-3">
          <div className="flex justify-around items-center">
            {[
              { path: "/", icon: "🏠", label: "Home" },
              { path: "/academics", icon: "📚", label: "Academics" },
              { path: "/experience", icon: "👨‍⚕️", label: "Experience" },
              { path: "/research-publications", icon: "🔬", label: "Research" },
              { path: "/personal-life", icon: "🌟", label: "Personal" },
              { path: "/contact", icon: "📞", label: "Contact" }
            ].map((item, index) => {
              const isActive = pathname === item.path;
              return (
                <Link 
                  key={item.path}
                  href={item.path} 
                  className={`flex flex-col items-center transition-transform duration-200 hover:scale-110 ${
                    isActive ? 'text-secondary scale-110' : 'hover:text-secondary'
                  }`}
                >
                  <span className="text-xl mb-1">{item.icon}</span>
                  <span className="text-xs font-medium">{item.label}</span>
                  {isActive && (
                    <div className="w-1 h-1 rounded-full bg-secondary mt-1"></div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default PageLayout; 