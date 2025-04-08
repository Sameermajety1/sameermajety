"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElementProps {
  size?: number;
  position?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  color?: string;
  delay?: number;
  duration?: number;
  blurAmount?: number;
  opacity?: number;
  className?: string;
}

const FloatingElement: React.FC<FloatingElementProps> = ({
  size = 100,
  position = {},
  color = 'rgba(125, 255, 179, 0.15)',
  delay = 0,
  duration = 5,
  blurAmount = 40,
  opacity = 0.3,
  className = '',
}) => {
  const { top, left, right, bottom } = position;
  
  return (
    <motion.div
      className={`absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        top, left, right, bottom,
        backgroundColor: color,
        filter: `blur(${blurAmount}px)`,
      }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity, 
        x: [0, 30, 0], 
        y: [0, 20, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{ 
        delay, 
        duration, 
        repeat: Infinity, 
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
    />
  );
};

interface FloatingParticleProps {
  size?: number;
  position?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  color?: string;
  delay?: number;
  duration?: number;
  opacity?: number;
  className?: string;
}

const FloatingParticle: React.FC<FloatingParticleProps> = ({
  size = 6,
  position = {},
  color = 'rgba(125, 255, 179, 0.7)',
  delay = 0,
  duration = 3,
  opacity = 0.7,
  className = '',
}) => {
  const { top, left, right, bottom } = position;
  
  return (
    <motion.div
      className={`absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        top, left, right, bottom,
        backgroundColor: color,
      }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity, 
        x: [0, 50, 0], 
        y: [0, -30, 0],
      }}
      transition={{ 
        delay, 
        duration, 
        repeat: Infinity, 
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
    />
  );
};

const FloatingElements: React.FC = () => {
  return (
    <>
      {/* Large blurred elements */}
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
      <FloatingElement
        size={150}
        position={{ bottom: '10%', left: '10%' }}
        color="rgba(6, 182, 212, 0.12)"
        delay={0.8}
        duration={7}
        blurAmount={50}
      />
      <FloatingElement
        size={180}
        position={{ top: '30%', right: '15%' }}
        color="rgba(125, 255, 179, 0.08)"
        delay={2}
        duration={9}
        blurAmount={55}
      />
      
      {/* Small particles */}
      {Array.from({ length: 15 }).map((_, index) => {
        // Generate random positions
        const top = `${Math.random() * 100}%`;
        const left = `${Math.random() * 100}%`;
        const size = Math.random() * 6 + 3;
        const opacity = Math.random() * 0.5 + 0.3;
        const delay = Math.random() * 3;
        const duration = Math.random() * 5 + 3;
        
        return (
          <FloatingParticle
            key={index}
            size={size}
            position={{ top, left }}
            opacity={opacity}
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