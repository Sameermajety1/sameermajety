"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FloatingElement } from './FloatingElements';

interface Publication {
  title: string;
  journal: string;
  year: number;
  date: string;
  authors: string;
  abstract: string;
  keywords?: string[];
  impactFactor?: number;
  link: string;
}

// Combined publications data
const publications: Publication[] = [
  {
    title: "Novel Approaches in Antimicrobial Resistance Management",
    journal: "Journal of Medical Microbiology",
    year: 2023,
    date: "June 2023",
    authors: "Singh A., Patel R., Mehta S.",
    abstract: "This study explores innovative strategies to combat the growing challenge of antimicrobial resistance in hospital settings. Through a systematic review of current practices and emerging technologies, we identify several promising approaches that could significantly reduce resistance patterns.",
    keywords: ["Antimicrobial Resistance", "Hospital Infections", "Treatment Protocols"],
    impactFactor: 3.8,
    link: "#"
  },
  {
    title: "Impact of Telemedicine on Rural Healthcare Access During the COVID-19 Pandemic",
    journal: "Digital Health Solutions",
    year: 2023,
    date: "April 2023",
    authors: "Singh A., Kumar V., Johnson T.",
    abstract: "This paper examines how telemedicine initiatives improved healthcare access for rural populations during the COVID-19 pandemic. Using mixed-methods research, we demonstrate substantial improvements in access metrics while identifying persistent challenges in technological infrastructure.",
    keywords: ["Telemedicine", "Rural Health", "COVID-19", "Access Barriers"],
    impactFactor: 4.2,
    link: "#"
  },
  {
    title: "Machine Learning Applications in Diagnostic Imaging",
    journal: "Medical Artificial Intelligence",
    year: 2022,
    date: "November 2022",
    authors: "Roberts K., Singh A., Williams J.",
    abstract: "This paper explores the current state and future potential of machine learning algorithms in enhancing diagnostic accuracy in medical imaging. Our review examines the performance of various ML models across different imaging modalities and diagnostic challenges.",
    keywords: ["Machine Learning", "Diagnostic Imaging", "AI", "Radiology"],
    impactFactor: 4.9,
    link: "#"
  },
  {
    title: "Ethical Considerations in AI-Driven Healthcare Systems",
    journal: "Bioethics Today",
    year: 2021,
    date: "December 2021",
    authors: "Singh A., Greene P.",
    abstract: "An exploration of ethical challenges and considerations when implementing AI-based diagnostic and decision support systems in clinical settings.",
    keywords: ["AI Ethics", "Healthcare", "Decision Support", "Medical Ethics"],
    impactFactor: 3.5,
    link: "#"
  }
];

const Publications = () => {
  return (
    <div className="relative">
      {/* Minimal floating elements */}
      <FloatingElement
        size={180}
        position={{ top: '5%', right: '15%' }}
        color="rgba(139, 92, 246, 0.08)"
        duration={8}
        blurAmount={50}
      />
      
      <div className="container mx-auto px-6 py-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block bg-gradient-to-r from-secondary/10 to-accent/10 px-8 py-3 rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.h2 
              className="section-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Research & <span className="gradient-text">Publications</span>
            </motion.h2>
          </motion.div>
          <motion.p 
            className="text-xl text-gray max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Contributing to medical knowledge through research and scholarly articles
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {publications.map((pub, index) => (
            <motion.div 
              key={index}
              className="card group hover:shadow-glow transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-light group-hover:text-secondary transition-colors flex-1 mr-4">
                    {pub.title}
                  </h3>
                  <span className="text-2xl font-bold text-secondary whitespace-nowrap">
                      {pub.year}
                  </span>
                  </div>
                
                <div className="flex flex-wrap gap-2 mb-3 text-sm">
                  <span className="text-accent">{pub.journal}</span>
                  <span className="text-gray">•</span>
                  <span className="text-gray">{pub.authors}</span>
                </div>
                
                <p className="text-gray mb-4 line-clamp-3">
                  {pub.abstract}
                </p>
                
                {pub.keywords && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.keywords.map((keyword, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 bg-primary/50 text-xs text-gray rounded-full border border-gray/20"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="flex justify-between items-center mt-4">
                  {pub.impactFactor && (
                    <div className="text-sm">
                      <span className="text-gray">Impact Factor: </span>
                      <span className="text-accent font-semibold">{pub.impactFactor}</span>
                    </div>
                  )}
                  
                    <a 
                      href={pub.link} 
                    className="text-secondary text-sm hover:underline flex items-center gap-1"
                    >
                      Read full paper
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a href="#contact" className="btn-outline inline-flex items-center gap-2">
            Discuss Research Opportunities
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Publications; 