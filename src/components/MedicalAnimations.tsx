"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const MedicalAnimations = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const heartbeatsRef = useRef<THREE.Group[]>([]);
  const stethoscopesRef = useRef<THREE.Group[]>([]);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize Three.js scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 20;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // Add heartbeat animations
    for (let i = 0; i < 5; i++) {
      const heartbeat = createHeartbeatLine();
      const randomX = (Math.random() - 0.5) * 30;
      const randomY = (Math.random() - 0.5) * 15;
      const randomZ = (Math.random() - 0.5) * 5 - 5;
      heartbeat.position.set(randomX, randomY, randomZ);
      scene.add(heartbeat);
      heartbeatsRef.current.push(heartbeat);
    }

    // Add stethoscope models
    for (let i = 0; i < 3; i++) {
      const stethoscope = createStethoscope();
      const randomX = (Math.random() - 0.5) * 30;
      const randomY = (Math.random() - 0.5) * 15;
      const randomZ = (Math.random() - 0.5) * 5 - 10;
      stethoscope.position.set(randomX, randomY, randomZ);
      stethoscope.rotation.x = Math.random() * Math.PI;
      stethoscope.rotation.y = Math.random() * Math.PI;
      scene.add(stethoscope);
      stethoscopesRef.current.push(stethoscope);
    }

    // Handle window resize
    const handleResize = () => {
      if (!canvasRef.current || !rendererRef.current || !cameraRef.current) return;
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      // Animate heartbeats
      heartbeatsRef.current.forEach(heartbeat => {
        heartbeat.rotation.z += 0.002;
        // Make heartbeats pulse
        const time = Date.now() * 0.001;
        const beatScale = 0.9 + Math.sin(time * 2) * 0.1;
        heartbeat.scale.set(beatScale, beatScale, beatScale);
      });

      // Animate stethoscopes
      stethoscopesRef.current.forEach((stethoscope, index) => {
        stethoscope.rotation.y += 0.005;
        stethoscope.rotation.x += 0.002;
        
        // Slight floating movement
        const time = Date.now() * 0.001 + index;
        stethoscope.position.y += Math.sin(time) * 0.005;
      });

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      
      // Clean up resources
      heartbeatsRef.current.forEach(heartbeat => {
        scene.remove(heartbeat);
        heartbeat.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose();
            if (object.material instanceof THREE.Material) {
              object.material.dispose();
            } else if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            }
          }
        });
      });
      
      stethoscopesRef.current.forEach(stethoscope => {
        scene.remove(stethoscope);
        stethoscope.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose();
            if (object.material instanceof THREE.Material) {
              object.material.dispose();
            } else if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            }
          }
        });
      });
      
      rendererRef.current?.dispose();
    };
  }, []);

  // Create a heartbeat line
  const createHeartbeatLine = () => {
    const group = new THREE.Group();
    
    // Create the heartbeat shape using points
    const points = [];
    for (let i = 0; i <= 30; i++) {
      const t = i / 30;
      let y = 0;
      
      // First flat part
      if (t < 0.2) {
        y = 0;
      } 
      // First spike up
      else if (t < 0.25) {
        y = (t - 0.2) * 20;
      } 
      // Quick drop
      else if (t < 0.3) {
        y = 1 - (t - 0.25) * 20;
      } 
      // Major spike
      else if (t < 0.35) {
        y = -1 + (t - 0.3) * 40;
      } 
      // Major drop
      else if (t < 0.4) {
        y = 3 - (t - 0.35) * 40;
      } 
      // Small bump
      else if (t < 0.45) {
        y = -1 + (t - 0.4) * 10;
      } 
      // Return to baseline
      else if (t < 0.5) {
        y = 0.5 - (t - 0.45) * 10;
      } 
      // Flat for rest
      else {
        y = 0;
      }
      
      points.push(new THREE.Vector3(t * 10 - 5, y, 0));
    }
    
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ 
      color: 0xDC143C, // Crimson red
      linewidth: 2,
      opacity: 0.8,
      transparent: true
    });
    
    const line = new THREE.Line(geometry, material);
    group.add(line);
    
    return group;
  };

  // Create a 3D Stethoscope model
  const createStethoscope = () => {
    const stethoscopeGroup = new THREE.Group();
    
    // Earpieces
    const earpiece1 = new THREE.Mesh(
      new THREE.SphereGeometry(0.2, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xDC143C }) // Crimson red
    );
    earpiece1.position.set(-0.5, 0, 0);
    stethoscopeGroup.add(earpiece1);
    
    const earpiece2 = new THREE.Mesh(
      new THREE.SphereGeometry(0.2, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xDC143C }) // Crimson red
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
      color: 0x990000, // Darker red
      transparent: true,
      opacity: 0.8
    });
    const tube = new THREE.Mesh(tubeGeometry, tubeMaterial);
    stethoscopeGroup.add(tube);
    
    // Chestpiece
    const chestpiece = new THREE.Mesh(
      new THREE.CylinderGeometry(0.3, 0.3, 0.1, 32),
      new THREE.MeshBasicMaterial({ color: 0xDC143C }) // Crimson red
    );
    chestpiece.rotation.x = Math.PI / 2;
    chestpiece.position.set(0, -2.5, 0);
    stethoscopeGroup.add(chestpiece);
    
    // Diaphragm
    const diaphragm = new THREE.Mesh(
      new THREE.CylinderGeometry(0.25, 0.25, 0.01, 32),
      new THREE.MeshBasicMaterial({ 
        color: 0xFF6B6B, // Light red
        transparent: true,
        opacity: 0.9
      })
    );
    diaphragm.rotation.x = Math.PI / 2;
    diaphragm.position.set(0, -2.53, 0);
    stethoscopeGroup.add(diaphragm);
    
    return stethoscopeGroup;
  };

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
    />
  );
};

export default MedicalAnimations; 