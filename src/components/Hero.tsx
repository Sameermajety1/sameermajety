import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FloatingParticle } from './FloatingElements';

// Optimized text animation variants
const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      staggerChildren: 0.05
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3 }
  }
};

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <></>;

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Light overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90" />
      
      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 pt-16 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left pt-4 lg:pt-8"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-8"
              variants={childVariants}
            >
              <span className="block mb-2">Gayatri Prabhakara</span>
              <span className="gradient-text text-accent">Sameer Kumar Majety, M.B.B.S</span>
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray max-w-3xl lg:max-w-2xl mx-auto lg:mx-0 mb-8 md:mb-12"
              variants={childVariants}
            >
              Dedicated to Patient Care, Medical Research, and Professional Growth
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4 mb-8 md:mb-16"
              variants={childVariants}
            >
              <motion.a 
                href="/academics" 
                className="button-primary w-full sm:w-auto text-base sm:text-lg py-3 px-6 sm:px-8"
                whileHover={{ 
                  scale: reducedMotion ? 1 : 1.05,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Start Here
              </motion.a>
              <motion.a 
                href="/contact" 
                className="button-secondary w-full sm:w-auto text-base sm:text-lg py-3 px-6 sm:px-8"
                whileHover={{ 
                  scale: reducedMotion ? 1 : 1.05,
                  borderColor: "rgba(59, 130, 246, 0.8)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Stats - shown on desktop */}
            <div className="hidden lg:flex flex-wrap gap-8 mt-12">
              {[
                { number: '8+', label: 'Research Publications' },
                { number: '5+', label: 'Poster Presentations' },
                { number: '6+', label: 'Medical Certifications' },
                { number: '2+', label: 'Years of Clinical Experience' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-left relative"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                >
                  <motion.div
                    className="absolute -inset-3 rounded-xl opacity-30 blur-xl bg-gradient-to-tr from-secondary to-primary"
                    animate={reducedMotion ? {} : {
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                  <motion.div 
                    className="text-4xl font-bold text-secondary mb-1 relative"
                    animate={reducedMotion ? {} : { scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: index }}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-sm text-gray relative z-10">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image - Mobile first, then desktop */}
          <motion.div 
            className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[464px] mb-8 lg:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full">
              {/* Mobile Image */}
              <img
                src="/images/hero.png"
                alt="Personal Photo"
                className="w-full h-auto max-h-[400px] object-contain rounded-full border-4 border-secondary/30 shadow-2xl lg:hidden"
                loading="eager"
              />
              {/* Desktop Image */}
              <img
                src="/images/hero.png"
                alt="Personal Photo"
                className="hidden lg:block w-full h-auto max-h-[620px] object-contain"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Simple star-like dots background */}
      {!reducedMotion && (
        <>
          <FloatingParticle
            size={3}
            position={{ top: '15%', left: '10%' }}
            color="rgba(79, 173, 243, 0.6)"
            duration={6}
          />
          <FloatingParticle
            size={4}
            position={{ top: '25%', right: '15%' }}
            color="rgba(99, 102, 241, 0.5)"
        delay={1}
        duration={7}
      />
      <FloatingParticle
            size={2}
            position={{ top: '40%', left: '20%' }}
            color="rgba(52, 211, 153, 0.7)"
        delay={2}
        duration={5}
      />
      <FloatingParticle
            size={5}
            position={{ bottom: '30%', right: '25%' }}
            color="rgba(255, 255, 255, 0.4)"
            delay={0.5}
            duration={8}
          />
          <FloatingParticle
            size={3}
            position={{ bottom: '20%', left: '15%' }}
            color="rgba(229, 184, 11, 0.6)"
        delay={1.5}
        duration={6}
      />
          <FloatingParticle
            size={4}
            position={{ top: '60%', left: '5%' }}
            color="rgba(79, 173, 243, 0.5)"
            delay={3}
            duration={7}
          />
          <FloatingParticle
            size={2}
            position={{ bottom: '50%', right: '10%' }}
            color="rgba(99, 102, 241, 0.6)"
            delay={2.5}
            duration={5}
          />
        </>
      )}
    </div>
  );
};

export default Hero; 