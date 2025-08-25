import React, { useEffect, useState, useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface FloatingParticleProps {
  size: number;
  position: { top?: string; bottom?: string; left?: string; right?: string };
  color: string;
  duration?: number;
  delay?: number;
}

export const FloatingParticle: React.FC<FloatingParticleProps> = ({
  size,
  position,
  color,
  duration = 4,
  delay = 0
}) => {
  const reducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const animationVariants = useMemo(() => ({
    animate: {
      y: reducedMotion ? [0, 15, 0] : [0, -30, 0],
      x: reducedMotion ? [0, 8, 0] : [0, 15, 0],
      scale: [1, 1.2, 1],
      opacity: [0.4, 0.8, 0.4],
      transition: {
        duration: reducedMotion ? duration * 0.5 : duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }
    }
  }), [duration, delay, reducedMotion]);

  if (!isMounted) return null;

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        width: size,
        height: size,
        top: position.top,
        bottom: position.bottom,
        left: position.left,
        right: position.right,
        zIndex: 2
      }}
      variants={animationVariants}
      animate="animate"
    >
      <div
        className="w-full h-full rounded-full"
        style={{
          backgroundColor: color,
          boxShadow: `0 0 ${size * 2}px ${color}`,
        }}
      />
    </motion.div>
  );
};

// Export FloatingElement as an alias for FloatingParticle for backward compatibility
export const FloatingElement = FloatingParticle; 