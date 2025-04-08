"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FloatingElement } from './FloatingElements';

// Sample publication data
const publications = [
  {
    title: "Novel Approaches in Telemedicine for Remote Patient Monitoring",
    journal: "Journal of Medical Innovation",
    year: 2023,
    authors: "Singh A., Patel R., Mehta S.",
    abstract: "This paper explores innovative telemedicine solutions that leverage AI and IoT technologies to improve remote patient monitoring, especially in rural settings.",
    link: "#"
  },
  {
    title: "Impact of AI-Assisted Diagnosis on Clinical Decision Making",
    journal: "International Journal of Medical Informatics",
    year: 2022,
    authors: "Singh A., Kumar V., Johnson T.",
    abstract: "A comprehensive study analyzing how artificial intelligence tools are transforming diagnostic processes and influencing physician decision making across specialties.",
    link: "#"
  },
  {
    title: "Machine Learning Applications in Predicting Patient Outcomes",
    journal: "Healthcare Analytics Review",
    year: 2022,
    authors: "Roberts K., Singh A., Williams J.",
    abstract: "This research demonstrates the efficacy of various machine learning algorithms in predicting patient outcomes and hospital readmission rates.",
    link: "#"
  },
  {
    title: "Ethical Considerations in AI-Driven Healthcare Systems",
    journal: "Bioethics Today",
    year: 2021,
    authors: "Singh A., Greene P.",
    abstract: "An exploration of ethical challenges and considerations when implementing AI-based diagnostic and decision support systems in clinical settings.",
    link: "#"
  }
];

const Publications = () => {
  return (
    <div className="relative">
      {/* Add floating elements for visual appeal */}
      <FloatingElement
        size={180}
        position={{ top: '5%', right: '15%' }}
        color="rgba(139, 92, 246, 0.08)"
        duration={8}
        blurAmount={50}
      />
      <FloatingElement
        size={130}
        position={{ bottom: '15%', left: '8%' }}
        color="rgba(243, 244, 246, 0.05)"
        delay={2}
        duration={7}
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
              Research <span className="gradient-text">Publications</span>
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
        
        <div className="space-y-4 max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <motion.div 
              key={index}
              className="card group hover:shadow-glow transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-20 flex-shrink-0">
                  <div className="text-center md:text-right">
                    <motion.span 
                      className="text-2xl font-bold text-secondary block"
                      whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {pub.year}
                    </motion.span>
                    <motion.div 
                      className="w-full h-1 bg-secondary mt-2 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <motion.h3 
                    className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors"
                    whileInView={{ opacity: [0, 1], y: [20, 0] }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <a href={pub.link} className="hover:underline transition-all">
                      {pub.title}
                    </a>
                  </motion.h3>
                  
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-3"
                    whileInView={{ opacity: [0, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <span className="text-sm text-accent">{pub.journal}</span>
                    <span className="text-sm text-gray">•</span>
                    <span className="text-sm text-gray">{pub.authors}</span>
                  </motion.div>
                  
                  <motion.p 
                    className="text-gray"
                    whileInView={{ opacity: [0, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {pub.abstract}
                  </motion.p>
                  
                  <motion.div 
                    className="mt-4"
                    whileInView={{ opacity: [0, 1], y: [20, 0] }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <a 
                      href={pub.link} 
                      className="text-secondary text-sm font-medium hover:underline flex items-center gap-1 transition-all"
                    >
                      Read full paper
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="#" className="btn-outline inline-flex items-center gap-2">
            View all publications
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