"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { FloatingElement, FloatingParticle } from './FloatingElements';

interface AcademicYearProps {
  year: string;
  title: string;
  subjects: string[];
  achievements: string[];
  index: number;
}

const AcademicYear: React.FC<AcademicYearProps> = ({ year, title, subjects, achievements, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      ref={ref}
      className="card mb-8 overflow-hidden transition-all hover:shadow-xl hover:shadow-secondary/10"
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index}
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-2xl font-bold text-secondary">{year}</h3>
          <p className="text-gray">{title}</p>
        </div>
        <div className="md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold text-light mb-2">Subjects</h4>
              <ul className="list-disc list-inside text-gray space-y-1">
                {subjects.map((subject, idx) => (
                  <li key={idx}>{subject}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-light mb-2">Highlights</h4>
              <ul className="list-disc list-inside text-gray space-y-1">
                {achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Academics = () => {
  const [counterRef, counterInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationData = [
    {
      year: "Expected Graduation - 2025",
      degree: "Bachelor of Medicine and Bachelor of Surgery",
      institution: "Xiamen University",
      location: "China",
      //description: "Currently pursuing medical degree with focus on research methodologies and innovative healthcare solutions.",
      //image: "/images/asram.jpg" // Add this image if available
    }
  ];

  return (
    <div className="relative" id="academics">
      {/* Add individual floating elements specific to this section */}
      <FloatingElement
        size={150}
        position={{ top: '10%', right: '5%' }}
        color="rgba(229, 184, 11, 0.08)"
        duration={7}
        opacity={0.2}
      />
      <FloatingElement
        size={100}
        position={{ bottom: '20%', left: '10%' }}
        color="rgba(4, 71, 171, 0.1)"
        delay={1}
        duration={5}
        blurAmount={30}
      />
      <FloatingParticle
        size={5}
        position={{ top: '30%', left: '25%' }}
        color="rgba(220, 20, 60, 0.6)"
        delay={0.8}
        duration={4}
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
              Academic <span className="gradient-text">Journey</span>
            </motion.h2>
          </motion.div>
          <motion.p 
            className="text-xl text-gray max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            My educational path has been shaped by a relentless pursuit of excellence in medical sciences
          </motion.p>
        </motion.div>

        <div className="flex justify-center">
          <div className="relative max-w-4xl w-full md:block hidden">
            {/* Timeline line in the center */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full rounded-full z-0"
              style={{ 
                background: 'linear-gradient(to bottom, #E5B80B, #0047AB, #DC143C)',
                boxShadow: '0 0 15px rgba(229, 184, 11, 0.6)'
              }}
            >
              {/* Pulsing effect */}
              <div className="absolute inset-0 rounded-full animate-pulse opacity-50"></div>
            </div>

            {/* Academic section - First item on timeline */}
            <div className="flex items-start relative mb-8">
              {/* Left column - Highlights */}
              <div className="w-1/2 pr-8 text-right">
                <motion.div
                  className="mb-6 bg-secondary/5 p-5 rounded-2xl shadow-lg"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-xl font-bold mb-4 text-secondary">Highlights</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center justify-end">
                      <span className="text-right text-gray-300">Ranked in the top 1% of my batch in the following subjects:</span>
                      <span className="w-3 h-3 rounded-full bg-secondary ml-3"></span>
                    </li>
                    <li className="flex items-center justify-end">
                      <span className="text-right text-gray-300">Physiology, Biochemistry, Pathology, Microbiology</span>
                      <span className="w-3 h-3 rounded-full bg-secondary ml-3"></span>
                    </li>
                    <li className="flex items-center justify-end">
                      <span className="text-right text-gray-300">Physical Diagnostics, Surgery-II, Orthopedics</span>
                      <span className="w-3 h-3 rounded-full bg-secondary ml-3"></span>
                    </li>
                    <li className="flex items-center justify-end">
                      <span className="text-right text-gray-300">Psychiatry and Neurology, Infectious Diseases</span>
                      <span className="w-3 h-3 rounded-full bg-secondary ml-3"></span>
                    </li>
                    <li className="flex items-center justify-end">
                      <span className="text-right text-gray-300">Dermatology, and Emergency Medicine</span>
                      <span className="w-3 h-3 rounded-full bg-secondary ml-3"></span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* Timeline dot in the middle */}
              <div className="absolute md:left-1/2 left-0 top-4 transform md:-translate-x-1/2 z-20">
                <motion.div
                  className="w-8 h-8 bg-secondary rounded-full"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 15 
                  }}
                  style={{
                    boxShadow: '0 0 20px rgba(229, 184, 11, 0.8)'
                  }}
                >
                  <motion.div 
                    className="absolute inset-0 rounded-full"
                    animate={{ 
                      boxShadow: [
                        '0 0 0 0px rgba(229, 184, 11, 0.8)', 
                        '0 0 0 12px rgba(229, 184, 11, 0)'
                      ]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>
              </div>

              {/* Right column - Education details */}
              <div className="md:w-1/2 w-full md:pl-8 pl-12">
                <motion.div
                  className="mb-6 bg-gradient-to-r from-secondary/5 to-secondary/10 p-5 rounded-2xl shadow-lg"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-secondary text-sm mb-2 block bg-secondary/10 px-4 py-1 rounded-full w-fit">Expected Graduation - 2025</span>
                  <h3 className="text-3xl font-bold mb-2">Bachelor of Medicine and Bachelor of Surgery</h3>
                  <p className="text-xl mb-1">Xiamen University</p>
                  <p className="text-gray-400">China</p>
                  <p className="text-gray-400 mt-2">Expected Graduation - June 2025</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline line in the center - Mobile version */}
        <div className="md:hidden block relative max-w-4xl w-full h-full mx-auto">
          <div 
            className="absolute left-[16px] top-0 w-2 h-full rounded-full z-0"
            style={{ 
              background: 'linear-gradient(to bottom, #E5B80B, #0047AB, #DC143C)',
              boxShadow: '0 0 15px rgba(229, 184, 11, 0.6)'
            }}
          >
            {/* Pulsing effect */}
            <div className="absolute inset-0 rounded-full animate-pulse opacity-50"></div>
          </div>
          
          {/* Academic section - Mobile timeline entries */}
          <div className="relative pl-12 mb-8 mt-16">
            {/* Timeline dot on the left */}
            <div className="absolute left-0 top-4 z-20">
              <motion.div
                className="w-8 h-8 bg-secondary rounded-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 15 
                }}
                style={{
                  boxShadow: '0 0 20px rgba(229, 184, 11, 0.8)'
                }}
              >
                <motion.div 
                  className="absolute inset-0 rounded-full"
                  animate={{ 
                    boxShadow: [
                      '0 0 0 0px rgba(229, 184, 11, 0.8)', 
                      '0 0 0 12px rgba(229, 184, 11, 0)'
                    ]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
            </div>
            
            {/* Education details - Mobile */}
            <motion.div
              className="mb-6 bg-gradient-to-r from-secondary/5 to-secondary/10 p-5 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-secondary text-sm mb-2 block bg-secondary/10 px-4 py-1 rounded-full w-fit">Expected Graduation - 2025</span>
              <h3 className="text-3xl font-bold mb-2">Bachelor of Medicine and Bachelor of Surgery</h3>
              <p className="text-xl mb-1">Xiamen University</p>
              <p className="text-gray-400">China</p>
              <p className="text-gray-400 mt-2">Expected Graduation - June 2025</p>
            </motion.div>
            
            {/* Highlights - Mobile */}
            <motion.div
              className="mb-6 bg-secondary/5 p-5 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-4 text-secondary">Highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-secondary mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">Ranked in the top 1% of my batch in the following subjects:</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-secondary mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">Physiology, Biochemistry, Pathology, Microbiology</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-secondary mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">Physical Diagnostics, Surgery-II, Orthopedics</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-secondary mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">Psychiatry and Neurology, Infectious Diseases</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-secondary mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">Dermatology, and Emergency Medicine</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Academics; 