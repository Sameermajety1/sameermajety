"use client";

import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface FloatingElementProps {
  size?: number;
  position?: {
    top?: string | number;
    left?: string | number;
    right?: string | number;
    bottom?: string | number;
  };
  color?: string;
  delay?: number;
  duration?: number;
  blurAmount?: number;
  opacity?: number;
}

interface FloatingParticleProps {
  size?: number;
  position?: {
    top?: string | number;
    left?: string | number;
    right?: string | number;
    bottom?: string | number;
  };
  color?: string;
  delay?: number;
  duration?: number;
}

const FloatingElement = ({
  size = 100,
  position = {},
  color = 'rgba(125, 255, 179, 0.1)',
  delay = 0,
  duration = 5,
  blurAmount = 40,
  opacity = 0.1
}: FloatingElementProps): JSX.Element => {
  const shouldReduceMotion = useReducedMotion();
  
  // Simplified animation for reduced motion
  const animation = shouldReduceMotion
    ? {
        opacity: opacity
      }
    : {
        opacity: opacity,
        scale: 1,
        y: [0, -20, 0],
        x: [0, 10, 0]
      };

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        ...position,
        width: size,
        height: size,
        background: color,
        filter: `blur(${blurAmount}px)`,
        opacity: 0,
        willChange: 'transform',
        transform: 'translate3d(0,0,0)'
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={animation}
      transition={{
        delay,
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
  );
};

const FloatingParticle = ({
  size = 4,
  position = {},
  color = 'rgba(125, 255, 179, 0.7)',
  delay = 0,
  duration = 3
}: FloatingParticleProps): JSX.Element => {
  const shouldReduceMotion = useReducedMotion();

  // Simplified animation for reduced motion
  const animation = shouldReduceMotion
    ? {
        opacity: 0.7
      }
    : {
        opacity: [0, 1, 0],
        y: [0, -30, 0],
        x: [0, 15, 0]
      };

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        ...position,
        width: size,
        height: size,
        background: color,
        willChange: 'transform',
        transform: 'translate3d(0,0,0)'
      }}
      initial={{ opacity: 0 }}
      animate={animation}
      transition={{
        delay,
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
  );
};

const FloatingElements = (): JSX.Element => {
  const [isMounted, setIsMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  
  // Only render elements after component is mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Reduce number of particles on mobile or when reduced motion is preferred
  const particleCount = shouldReduceMotion ? 5 : 15;

  if (!isMounted) return <></>;

  return (
    <>
      {/* Reduce number of large elements */}
      <FloatingElement
        size={200}
        position={{ top: '15%', left: '-5%' }}
        color="rgba(125, 255, 179, 0.1)"
        duration={8}
        blurAmount={60}
      />
      <FloatingElement
        size={300}
        position={{ top: '50%', right: '-10%' }}
        color="rgba(6, 182, 212, 0.1)"
        delay={1.5}
        duration={10}
        blurAmount={70}
      />
      
      {/* Small particles with reduced count */}
      {Array.from({ length: particleCount }).map((_, index) => {
        const top = `${Math.random() * 100}%`;
        const left = `${Math.random() * 100}%`;
        const size = Math.random() * 6 + 3;
        const delay = Math.random() * 2;
        const duration = Math.random() * 3 + 2;
        
        return (
          <FloatingParticle
            key={index}
            size={size}
            position={{ top, left }}
            delay={delay}
            duration={duration}
            color={index % 2 === 0 ? 'rgba(125, 255, 179, 0.7)' : 'rgba(6, 182, 212, 0.7)'}
          />
        );
      })}
    </>
  );
};

export { FloatingElements, FloatingElement, FloatingParticle }; 