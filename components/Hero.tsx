"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import Image from 'next/image';
import { FloatingElement, FloatingParticle } from './FloatingElements';
import TWEEN from '@tweenjs/tween.js';

// Add interface for Orb type
interface Orb {
  mesh: THREE.Mesh;
  speed: number;
  distance: number;
  rotAxis: THREE.Vector3;
}

// Floating element variants
const floatingVariants = {
  animate: (custom: number) => ({
    y: [0, custom, 0],
    x: [0, custom / 2, 0],
    rotate: [0, custom / 10, 0],
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 5 + custom,
      repeat: Infinity,
      ease: "easeInOut"
    }
  })
};

// Text animation variants
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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  // DNA Particle effect
  class Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
    alpha: number;
    
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 3 + 1;
      this.speedX = Math.random() * 2 - 1;
      this.speedY = Math.random() * 2 - 1;
      this.color = '#7DFFB3';
      this.alpha = Math.random() * 0.5 + 0.1;
    }
    
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      
      if (this.size > 0.2) this.size -= 0.02;
    }
    
    draw(ctx: CanvasRenderingContext2D) {
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  // 3D animation effect with Three.js
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true, // transparent background
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // DNA helix particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 800; // Increased particle count
    
    // Create positions for particles along a double helix
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    
    // Parameters for double helix
    const radius = 2.5; // Slightly larger radius
    const spiralSpread = 8; // Extended spiral
    const turns = 7; // More turns
    
    // Populate particles
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const t = i / particleCount;
      const angle = t * Math.PI * 2 * turns;
      
      // First strand of DNA
      if (i < particleCount / 2) {
        positions[i3] = Math.cos(angle) * radius;
        positions[i3 + 1] = (t - 0.5) * spiralSpread;
        positions[i3 + 2] = Math.sin(angle) * radius;
        
        // Blue-green tint for first strand
        colors[i3] = 0.1;
        colors[i3 + 1] = 0.8;
        colors[i3 + 2] = 0.9;
      } 
      // Second strand of DNA
      else {
        positions[i3] = Math.cos(angle + Math.PI) * radius;
        positions[i3 + 1] = ((i - particleCount / 2) / (particleCount / 2) - 0.5) * spiralSpread;
        positions[i3 + 2] = Math.sin(angle + Math.PI) * radius;
        
        // Cyan-purple tint for second strand
        colors[i3] = 0.5;
        colors[i3 + 1] = 0.3;
        colors[i3 + 2] = 0.9;
      }
      
      // Varied particle sizes
      sizes[i] = Math.random() * 0.1 + 0.03;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    // Add color transition shader material for particles
    const particlesMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
      },
      vertexShader: `
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        uniform float time;
        
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z) * (1.0 + 0.3 * sin(time + position.y));
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          gl_FragColor = vec4(vColor, smoothstep(0.5, 0.0, dist));
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    
    // Create points
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    
    // Create some floating medical-themed objects
    const createMedicalSymbol = () => {
      const group = new THREE.Group();
      
      // Cross
      const crossGeometry = new THREE.BoxGeometry(0.6, 0.15, 0.15);
      const crossMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x3B82F6,
        transparent: true,
        opacity: 0.7
      });
      const cross1 = new THREE.Mesh(crossGeometry, crossMaterial);
      group.add(cross1);
      
      const cross2 = new THREE.Mesh(crossGeometry, crossMaterial);
      cross2.rotation.z = Math.PI / 2;
      group.add(cross2);
      
      // Circle
      const circleGeometry = new THREE.TorusGeometry(0.4, 0.05, 16, 32);
      const circleMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x3B82F6, 
        transparent: true, 
        opacity: 0.7 
      });
      const circle = new THREE.Mesh(circleGeometry, circleMaterial);
      group.add(circle);
      
      return group;
    };
    
    // Add more medical symbols
    const symbols: THREE.Group[] = [];
    for (let i = 0; i < 5; i++) {
      const symbol = createMedicalSymbol();
      symbol.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 5 - 3
      );
      symbol.scale.setScalar(0.5 + Math.random() * 0.5);
      scene.add(symbol);
      symbols.push(symbol);
    }
    
    // Heartbeat line
    const heartbeatGeometry = new THREE.BufferGeometry();
    const heartbeatPoints = [];
    
    // Create a more detailed heartbeat pattern
    for (let i = 0; i < 300; i++) {
      const x = (i / 300) * 15 - 7.5;
      let y = 0;
      
      // Create the ECG pattern
      if (i > 60 && i < 80) {
        y = 0.5 * (i - 60) / 20;
      } else if (i >= 80 && i < 90) {
        y = 0.5 - (i - 80) / 20;
      } else if (i >= 90 && i < 110) {
        y = 0;
      } else if (i >= 110 && i < 115) {
        y = -1.2;
      } else if (i >= 115 && i < 120) {
        y = 2.5;
      } else if (i >= 120 && i < 125) {
        y = -1;
      } else if (i >= 125 && i < 130) {
        y = 0.5;
      } else if (i >= 130 && i < 140) {
        y = 0;
      } else if (i % 60 < 5) {
        // Add small baseline fluctuations for realism
        y = Math.sin(i * 0.5) * 0.1;
      }
      
      heartbeatPoints.push(new THREE.Vector3(x, y, 0));
    }
    
    heartbeatGeometry.setFromPoints(heartbeatPoints);
    const heartbeatMaterial = new THREE.LineBasicMaterial({ 
      color: 0x06B6D4,
      linewidth: 2,
    });
    const heartbeat = new THREE.Line(heartbeatGeometry, heartbeatMaterial);
    heartbeat.position.y = -2;
    heartbeat.position.z = -2;
    scene.add(heartbeat);
    
    // Add glowing orbs
    const orbs: Orb[] = [];
    for (let i = 0; i < 12; i++) {
      const orbGeometry = new THREE.SphereGeometry(0.1 + Math.random() * 0.2, 32, 32);
      const orbMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color(
          0.3 + Math.random() * 0.7,
          0.3 + Math.random() * 0.7,
          0.7 + Math.random() * 0.3
        ),
        transparent: true,
        opacity: 0.7
      });
      const orb = new THREE.Mesh(orbGeometry, orbMaterial);
      
      orb.position.set(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10 - 5
      );
      
      scene.add(orb);
      orbs.push({
        mesh: orb,
        speed: 0.2 + Math.random() * 0.5,
        distance: 1 + Math.random() * 2,
        rotAxis: new THREE.Vector3(
          Math.random() - 0.5,
          Math.random() - 0.5,
          Math.random() - 0.5
        ).normalize()
      });
    }
    
    // Create a 3D Stethoscope model
    const createStethoscope = () => {
      const stethoscopeGroup = new THREE.Group();
      
      // Earpieces
      const earpiece1 = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0xE5B80B }) // Gold color
      );
      earpiece1.position.set(-0.5, 0, 0);
      stethoscopeGroup.add(earpiece1);
      
      const earpiece2 = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0xE5B80B }) // Gold color
      );
      earpiece2.position.set(0.5, 0, 0);
      stethoscopeGroup.add(earpiece2);
      
      // Tubing
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.5, 0, 0),
        new THREE.Vector3(-0.3, -0.3, 0.2),
        new THREE.Vector3(0, -0.5, 0.3),
        new THREE.Vector3(0.3, -0.3, 0.2),
        new THREE.Vector3(0.5, 0, 0),
        new THREE.Vector3(0, -1, 0),
        new THREE.Vector3(0, -2.5, 0),
      ]);
      
      const tubeGeometry = new THREE.TubeGeometry(curve, 64, 0.05, 16, false);
      const tubeMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x0047AB,  // Blue color
        transparent: true,
        opacity: 0.8
      });
      const tube = new THREE.Mesh(tubeGeometry, tubeMaterial);
      stethoscopeGroup.add(tube);
      
      // Chestpiece
      const chestpiece = new THREE.Mesh(
        new THREE.CylinderGeometry(0.3, 0.3, 0.1, 32),
        new THREE.MeshBasicMaterial({ color: 0xE5B80B }) // Gold color
      );
      chestpiece.rotation.x = Math.PI / 2;
      chestpiece.position.set(0, -2.5, 0);
      stethoscopeGroup.add(chestpiece);
      
      // Diaphragm
      const diaphragm = new THREE.Mesh(
        new THREE.CylinderGeometry(0.25, 0.25, 0.01, 32),
        new THREE.MeshBasicMaterial({ 
          color: 0xDC143C, // Crimson color for heartbeat visual
          transparent: true,
          opacity: 0.9
        })
      );
      diaphragm.rotation.x = Math.PI / 2;
      diaphragm.position.set(0, -2.55, 0);
      stethoscopeGroup.add(diaphragm);
      
      // Animate the diaphragm with a pulsing effect
      const pulseTween = new TWEEN.Tween(diaphragm.scale)
        .to({ x: 1.2, y: 1.2, z: 1.2 }, 800)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .repeat(Infinity)
        .yoyo(true)
        .start();
      
      // Position and scale the entire stethoscope
      stethoscopeGroup.scale.set(0.8, 0.8, 0.8);
      stethoscopeGroup.position.set(2, 0, -2);
      stethoscopeGroup.rotation.y = -Math.PI / 6;
      
      // Add animation to rotate and float
      const rotationTween = new TWEEN.Tween(stethoscopeGroup.rotation)
        .to({ y: Math.PI / 4 }, 8000)
        .easing(TWEEN.Easing.Sinusoidal.InOut)
        .repeat(Infinity)
        .yoyo(true)
        .start();
        
      const floatTween = new TWEEN.Tween(stethoscopeGroup.position)
        .to({ y: 0.5 }, 4000)
        .easing(TWEEN.Easing.Sinusoidal.InOut)
        .repeat(Infinity)
        .yoyo(true)
        .start();
      
      return stethoscopeGroup;
    };

    // Add the stethoscope to the scene
    const stethoscope = createStethoscope();
    scene.add(stethoscope);
    
    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const clock = new THREE.Clock();
    
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const elapsedTime = clock.getElapsedTime();
      
      // Update shader time uniform
      if (particlesMaterial.uniforms) {
        particlesMaterial.uniforms.time.value = elapsedTime;
      }
      
      // Rotate the particles with gentle pulsing
      particles.rotation.y = elapsedTime * 0.1;
      particles.rotation.x = Math.sin(elapsedTime * 0.05) * 0.1;
      particles.scale.set(
        1 + Math.sin(elapsedTime * 0.3) * 0.03,
        1 + Math.sin(elapsedTime * 0.3) * 0.03,
        1 + Math.sin(elapsedTime * 0.3) * 0.03
      );
      
      // Move the heartbeat
      heartbeat.position.x = (elapsedTime * 0.5) % 15 - 7.5;
      
      // Animate medical symbols
      symbols.forEach((symbol, i) => {
        symbol.rotation.x = elapsedTime * (0.1 + i * 0.01);
        symbol.rotation.z = elapsedTime * (0.2 + i * 0.01);
        symbol.position.y += Math.sin(elapsedTime * (0.5 + i * 0.1)) * 0.01;
      });
      
      // Animate glowing orbs
      orbs.forEach((orb) => {
        // Create orbit paths for the orbs
        const angle = elapsedTime * orb.speed;
        orb.mesh.position.x += Math.sin(angle) * 0.01 * orb.distance;
        orb.mesh.position.y += Math.cos(angle) * 0.01 * orb.distance;
        orb.mesh.position.z += Math.sin(angle * 1.5) * 0.01;
        
        // Pulse the orbs
        const scale = 1 + Math.sin(elapsedTime * 2 + orb.speed * 10) * 0.2;
        orb.mesh.scale.set(scale, scale, scale);
        
        // Fade opacity in/out
        (orb.mesh.material as THREE.MeshBasicMaterial).opacity = 
          0.4 + 0.3 * Math.sin(elapsedTime + orb.speed * 5);
      });
      
      // Animate camera position slightly for a floating effect
      cameraRef.current.position.x = Math.sin(elapsedTime * 0.2) * 0.8;
      cameraRef.current.position.y = Math.cos(elapsedTime * 0.2) * 0.8;
      cameraRef.current.lookAt(scene.position);
      
      // Update particle positions
      particles.children.forEach((particle) => {
        const particlePosition = particle.position as THREE.Vector3;
        particlePosition.x += Math.sin(elapsedTime * 0.05) * 0.01;
        particlePosition.y += Math.cos(elapsedTime * 0.05) * 0.01;
        particlePosition.z += Math.sin(elapsedTime * 0.05) * 0.01;
      });
      
      // Update tweens
      TWEEN.update();
      
      // Render
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      // Dispose resources
      if (particles) {
        particlesGeometry.dispose();
        particlesMaterial.dispose();
        scene.remove(particles);
      }
      
      if (heartbeat) {
        heartbeatGeometry.dispose();
        heartbeatMaterial.dispose();
        scene.remove(heartbeat);
      }
      
      symbols.forEach(symbol => {
        scene.remove(symbol);
        // Dispose of all geometries and materials
      });
      
      orbs.forEach(orb => {
        scene.remove(orb.mesh);
        (orb.mesh.geometry as THREE.SphereGeometry).dispose();
        (orb.mesh.material as THREE.MeshBasicMaterial).dispose();
      });
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D animated background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-500" 
        style={{ opacity: rendererRef.current ? 1 : 0 }}
      />
      
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
      
      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 pt-16 z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          {/* Image for mobile - shown only on small screens */}
          <div className="block lg:hidden w-full max-w-[300px] mx-auto">
            <div className="relative w-full" style={{ height: '450px' }}>
              <Image
                src="/images/hero.png"
                alt="Personal Photo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left pt-8 lg:pt-16"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4 md:mb-6"
              variants={childVariants}
            >
              <span className="block">Beyond Medicine: A Journey of</span>
              <span className="gradient-text text-accent">Passion, Precision, and Purpose</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray max-w-3xl lg:max-w-2xl mx-auto lg:mx-0 mb-8"
              variants={childVariants}
            >
              MBBS student with a vision for transformative healthcare and research
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4 mb-8"
              variants={childVariants}
            >
              <motion.a 
                href="#academics" 
                className="button-primary w-full sm:w-auto"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Explore My Journey
              </motion.a>
              <motion.a 
                href="#contact" 
                className="button-secondary w-full sm:w-auto"
                whileHover={{ 
                  scale: 1.05,
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
                { number: '5+', label: 'Years of Medical Education' },
                { number: '12+', label: 'Research Papers' },
                { number: '20+', label: 'Medical Certifications' }
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
                    animate={{
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
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: index }}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-sm text-gray relative z-10">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image for desktop - hidden on small screens */}
          <motion.div 
            className="hidden lg:block w-full max-w-[400px] -mt-8"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative w-full" style={{ height: '600px' }}>
              <Image
                src="/images/hero.png"
                alt="Personal Photo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Strategic floating elements for hero section */}
      <FloatingElement
        size={300}
        position={{ top: '10%', left: '5%' }}
        color="rgba(52, 211, 153, 0.08)"
        duration={8}
        blurAmount={60}
      />
      <FloatingElement
        size={250}
        position={{ bottom: '15%', right: '8%' }}
        color="rgba(99, 102, 241, 0.07)"
        delay={1}
        duration={7}
        blurAmount={50}
      />
      
      {/* Add a few individual particles for more dynamic effect */}
      <FloatingParticle
        size={5}
        position={{ top: '30%', right: '20%' }}
        color="rgba(255, 255, 255, 0.5)"
        duration={4}
      />
      <FloatingParticle
        size={8}
        position={{ bottom: '40%', left: '25%' }}
        color="rgba(52, 211, 153, 0.8)"
        delay={2}
        duration={5}
      />
      <FloatingParticle
        size={6}
        position={{ top: '60%', left: '15%' }}
        color="rgba(99, 102, 241, 0.7)"
        delay={1.5}
        duration={6}
      />
    </div>
  );
};

export default Hero; 