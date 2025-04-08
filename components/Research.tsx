"use client";

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Paper {
  id: number;
  title: string;
  journal: string;
  date: string;
  abstract: string;
  keywords: string[];
  impactFactor?: number;
  link?: string;
}

const ResearchPaper: React.FC<{ paper: Paper; index: number }> = ({ paper, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { title, journal, date, abstract, keywords, impactFactor, link } = paper;

  return (
    <motion.div
      ref={ref}
      className="paper-card relative card p-6 hover:shadow-xl transition-all duration-300 transform-gpu hover:-translate-y-1"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
    >
      <div className="flex flex-col h-full">
        <h3 className="text-xl font-bold text-light mb-2">{title}</h3>
        <div className="mb-4 flex items-center justify-between">
          <p className="text-secondary text-sm">{journal}</p>
          <p className="text-gray text-sm">{date}</p>
        </div>
        
        <p className="text-gray text-sm mb-4 line-clamp-3">{abstract}</p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {keywords.map((keyword, idx) => (
              <span key={idx} className="px-2 py-1 bg-primary/50 text-xs text-gray rounded-full border border-gray/20">
                {keyword}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between items-center">
            {impactFactor && (
              <div className="text-sm">
                <span className="text-gray">Impact Factor: </span>
                <span className="text-accent font-semibold">{impactFactor}</span>
              </div>
            )}
            
            {link && (
              <a 
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary text-sm hover:underline"
              >
                Read Full Paper →
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Research = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Floating animation for paper cards
    const papers = document.querySelectorAll('.paper-card');
    
    papers.forEach((paper, index) => {
      gsap.to(paper, {
        y: (index % 2 === 0) ? "10" : "-10",
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.2
      });
    });
    
    // Parallax scrolling effect
    if (sectionRef.current) {
      const bgElements = sectionRef.current.querySelectorAll('.parallax-bg');
      
      bgElements.forEach((element, i) => {
        const speed = 1 - (i * 0.1);
        
        gsap.to(element, {
          y: () => `${ScrollTrigger.maxScroll(window) * speed * 0.1}px`,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true
          }
        });
      });
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const papers: Paper[] = [
    {
      id: 1,
      title: "Novel Approaches in Antimicrobial Resistance Management",
      journal: "Journal of Medical Microbiology",
      date: "June 2023",
      abstract: "This study explores innovative strategies to combat the growing challenge of antimicrobial resistance in hospital settings. Through a systematic review of current practices and emerging technologies, we identify several promising approaches that could significantly reduce resistance patterns.",
      keywords: ["Antimicrobial Resistance", "Hospital Infections", "Treatment Protocols"],
      impactFactor: 3.8,
      link: "#"
    },
    {
      id: 2,
      title: "Impact of Telemedicine on Rural Healthcare Access During the COVID-19 Pandemic",
      journal: "Digital Health Solutions",
      date: "April 2023",
      abstract: "This paper examines how telemedicine initiatives improved healthcare access for rural populations during the COVID-19 pandemic. Using mixed-methods research, we demonstrate substantial improvements in access metrics while identifying persistent challenges in technological infrastructure.",
      keywords: ["Telemedicine", "Rural Health", "COVID-19", "Access Barriers"],
      impactFactor: 4.2,
      link: "#"
    },
    {
      id: 3,
      title: "Predictive Markers for Early-Stage Alzheimer's Detection",
      journal: "Neurodegenerative Disease Journal",
      date: "January 2023",
      abstract: "Our research identifies several novel biomarkers that show promise in detecting Alzheimer's disease at preclinical stages. This longitudinal study of high-risk patients demonstrates how these markers could be integrated into routine screening protocols to improve early intervention outcomes.",
      keywords: ["Alzheimer's Disease", "Biomarkers", "Early Detection", "Screening"],
      impactFactor: 5.6,
      link: "#"
    },
    {
      id: 4,
      title: "Machine Learning Applications in Diagnostic Imaging",
      journal: "Medical Artificial Intelligence",
      date: "November 2022",
      abstract: "This paper explores the current state and future potential of machine learning algorithms in enhancing diagnostic accuracy in medical imaging. Our review examines the performance of various ML models across different imaging modalities and diagnostic challenges.",
      keywords: ["Machine Learning", "Diagnostic Imaging", "AI", "Radiology"],
      impactFactor: 4.9,
      link: "#"
    }
  ];

  return (
    <div ref={sectionRef} className="relative container mx-auto">
      {/* Parallax background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="parallax-bg absolute -top-20 -left-20 w-64 h-64 rounded-full bg-secondary/5"></div>
        <div className="parallax-bg absolute top-40 right-20 w-96 h-96 rounded-full bg-accent/5"></div>
        <div className="parallax-bg absolute bottom-40 left-40 w-80 h-80 rounded-full bg-glow/5"></div>
      </div>
      
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="section-heading">
          Research & <span className="gradient-text">Publications</span>
        </h2>
        <p className="text-xl text-gray max-w-3xl mx-auto">
          Contributing to medical knowledge through dedicated research and publications
        </p>
      </motion.div>

      {/* Research papers grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {papers.map((paper, index) => (
          <ResearchPaper key={paper.id} paper={paper} index={index} />
        ))}
      </div>
      
      {/* Call to action */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mt-16 relative z-10"
      >
        <a href="#contact" className="button-primary inline-block">
          Discuss Research Opportunities
        </a>
      </motion.div>
    </div>
  );
};

export default Research; 