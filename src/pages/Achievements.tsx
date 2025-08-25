import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FloatingParticle } from '../components/FloatingElements';

const Achievements = () => {
  return (
    <div className="relative" id="achievements">
      {/* Add floating elements for visual appeal */}
      <FloatingParticle
        size={5}
        position={{ top: '15%', right: '10%' }}
        color="rgba(59, 130, 246, 0.6)"
        duration={8}
      />
      <FloatingParticle
        size={4}
        position={{ bottom: '35%', left: '15%' }}
        color="rgba(236, 72, 153, 0.7)"
        delay={1.5}
        duration={6}
      />
      <FloatingParticle
        size={7}
        position={{ top: '40%', right: '15%' }}
        color="rgba(124, 58, 237, 0.6)"
        duration={4.5}
      />
      <FloatingParticle
        size={5}
        position={{ bottom: '20%', right: '30%' }}
        color="rgba(236, 72, 153, 0.7)"
        delay={1}
        duration={5}
      />
      
      <div className="container mx-auto px-6 pt-24 pb-10">
        {/* Main Section heading */}
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
              My <span className="gradient-text">Achievements</span>
            </motion.h2>
          </motion.div>
          <motion.p 
            className="text-xl text-gray max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Academic excellence and recognition throughout my educational journey
          </motion.p>
        </motion.div>

        <div className="flex justify-center">
          <div className="relative max-w-4xl w-full md:block hidden">
            {/* Timeline line in the center - Desktop version */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full rounded-full z-0"
              style={{ 
                background: 'linear-gradient(to bottom, #E5B80B, #DC143C, #E5B80B)',
                boxShadow: '0 0 15px rgba(229, 184, 11, 0.6)'
              }}
            >
              {/* Pulsing effect */}
              <div className="absolute inset-0 rounded-full animate-pulse opacity-50"></div>
            </div>

            {/* CSC Scholarship */}
            <div className="flex items-start relative mb-6 mt-0">
              {/* Timeline dot in the middle */}
              <div className="absolute left-1/2 top-4 transform -translate-x-1/2 z-20">
                <motion.div
                  className="w-8 h-8 bg-glow rounded-full"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 15 
                  }}
                  style={{
                    boxShadow: '0 0 20px rgba(220, 20, 60, 0.8)'
                  }}
                >
                  <motion.div 
                    className="absolute inset-0 rounded-full"
                    animate={{ 
                      boxShadow: [
                        '0 0 0 0px rgba(220, 20, 60, 0.8)', 
                        '0 0 0 12px rgba(220, 20, 60, 0)'
                      ]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>
              </div>

              {/* Left column for rank animation */}
              <div className="w-1/2 pr-8 text-right">
                <motion.div
                  className="relative mb-6 py-2 inline-block"
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6,
                    delay: 0.3
                  }}
                >
                  <div className="absolute right-0 top-0 w-16 h-16 bg-glow/10 rounded-full flex items-center justify-center">
                    <motion.div
                      className="text-glow font-bold text-3xl"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        textShadow: [
                          '0 0 5px rgba(220, 20, 60, 0.5)',
                          '0 0 15px rgba(220, 20, 60, 0.8)',
                          '0 0 5px rgba(220, 20, 60, 0.5)'
                        ]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      1<span className="text-sm align-top">st</span>
                      <div className="text-xs font-medium mt-1">PLACE</div>
                    </motion.div>
                  </div>
                  <div className="absolute right-20 top-1/2 transform -translate-y-1/2 w-24 h-1 bg-glow/30"></div>
                </motion.div>
              </div>
              
              {/* Right column - CSC Scholarship */}
              <div className="w-1/2 pl-8">
                <motion.div
                  className="mb-6 bg-gradient-to-r from-glow/5 to-glow/15 p-5 rounded-2xl shadow-lg"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-glow text-sm mb-2 block bg-glow/10 px-4 py-1 rounded-full w-fit">2019</span>
                  <h3 className="text-2xl font-bold mb-2">Chinese Scholarship Council(CSC) Scholarship</h3>
                  <p className="text-lg mb-1 italic">Government of China</p>
                </motion.div>
              </div>
            </div>

            {/* XMU Anniversary Scholarship */}
            <div className="flex items-start relative mb-6">
              {/* Timeline dot in the middle */}
              <div className="absolute left-1/2 top-4 transform -translate-x-1/2 z-20">
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

              {/* Left column - XMU Scholarship */}
              <div className="w-1/2 pr-8 text-right">
                <motion.div
                  className="mb-6 bg-gradient-to-l from-secondary/5 to-secondary/15 p-5 rounded-2xl shadow-lg"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex justify-end">
                    <span className="text-secondary text-sm mb-2 block bg-secondary/10 px-4 py-1 rounded-full w-fit">2018</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">99th XMU Anniversary Scholarship</h3>
                  <p className="text-lg mb-1 italic">School of Medicine, XMU</p>
                </motion.div>
              </div>
              
              {/* Right column for rank animation */}
              <div className="w-1/2 pl-8">
                <motion.div
                  className="relative mb-6 py-2 inline-block"
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6,
                    delay: 0.3
                  }}
                >
                  <div className="absolute left-0 top-0 w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                    <motion.div
                      className="text-secondary font-bold text-3xl"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        textShadow: [
                          '0 0 5px rgba(229, 184, 11, 0.5)',
                          '0 0 15px rgba(229, 184, 11, 0.8)',
                          '0 0 5px rgba(229, 184, 11, 0.5)'
                        ]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      2<span className="text-sm align-top">nd</span>
                      <div className="text-xs font-medium mt-1">PLACE</div>
                    </motion.div>
                  </div>
                  <div className="absolute left-20 top-1/2 transform -translate-y-1/2 w-24 h-1 bg-secondary/30"></div>
                </motion.div>
              </div>
            </div>

            {/* Excellence Scholarships */}
            <div className="flex items-start relative mb-6">
              {/* Timeline dot in the middle */}
              <div className="absolute left-1/2 top-4 transform -translate-x-1/2 z-20">
                <motion.div
                  className="w-8 h-8 bg-glow rounded-full"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 15 
                  }}
                  style={{
                    boxShadow: '0 0 20px rgba(220, 20, 60, 0.8)'
                  }}
                >
                  <motion.div 
                    className="absolute inset-0 rounded-full"
                    animate={{ 
                      boxShadow: [
                        '0 0 0 0px rgba(220, 20, 60, 0.8)', 
                        '0 0 0 12px rgba(220, 20, 60, 0)'
                      ]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>
              </div>

              {/* Left column for rank animation */}
              <div className="w-1/2 pr-8 text-right">
                <motion.div
                  className="relative mb-6 py-2 inline-block"
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6,
                    delay: 0.3
                  }}
                >
                  <div className="absolute right-0 top-0 w-16 h-16 bg-glow/10 rounded-full flex items-center justify-center">
                    <motion.div
                      className="text-glow font-bold text-3xl"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        textShadow: [
                          '0 0 5px rgba(220, 20, 60, 0.5)',
                          '0 0 15px rgba(220, 20, 60, 0.8)',
                          '0 0 5px rgba(220, 20, 60, 0.5)'
                        ]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      1<span className="text-sm align-top">st</span>
                      <div className="text-xs font-medium mt-1">PLACE</div>
                    </motion.div>
                  </div>
                  <div className="absolute right-20 top-1/2 transform -translate-y-1/2 w-24 h-1 bg-glow/30"></div>
                </motion.div>
              </div>
              
              {/* Right column - Excellence Scholarships */}
              <div className="w-1/2 pl-8">
                <motion.div
                  className="mb-6 bg-gradient-to-r from-glow/5 to-glow/15 p-5 rounded-2xl shadow-lg"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-glow text-sm mb-2 block bg-glow/10 px-4 py-1 rounded-full w-fit">2018-2022</span>
                  <h3 className="text-2xl font-bold mb-2">4 x Overall Excellence Scholarships</h3>
                  <p className="text-lg mb-1 italic">School of Medicine, XMU</p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Mobile timeline (single-sided) */}
          <div className="relative max-w-4xl w-full md:hidden block">
            {/* Timeline line on the left - Mobile version */}
            <div 
              className="absolute left-[16px] top-0 w-2 h-full rounded-full z-0"
              style={{ 
                background: 'linear-gradient(to bottom, #E5B80B, #DC143C, #E5B80B)',
                boxShadow: '0 0 15px rgba(229, 184, 11, 0.6)'
              }}
            >
              {/* Pulsing effect */}
              <div className="absolute inset-0 rounded-full animate-pulse opacity-50"></div>
            </div>

            {/* CSC Scholarship - Mobile */}
            <div className="relative mb-6 pl-12 mt-0">
              {/* Timeline dot on the left */}
              <div className="absolute left-0 top-4 z-20">
                <motion.div
                  className="w-8 h-8 bg-glow rounded-full"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 15 
                  }}
                  style={{
                    boxShadow: '0 0 20px rgba(220, 20, 60, 0.8)'
                  }}
                >
                  <motion.div 
                    className="absolute inset-0 rounded-full"
                    animate={{ 
                      boxShadow: [
                        '0 0 0 0px rgba(220, 20, 60, 0.8)', 
                        '0 0 0 12px rgba(220, 20, 60, 0)'
                      ]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>
              </div>
              
              {/* CSC Scholarship details with integrated rank */}
              <motion.div
                className="mb-6 bg-gradient-to-r from-glow/5 to-glow/15 p-5 rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-glow text-sm block bg-glow/10 px-4 py-1 rounded-full">2019</span>
                  <div className="w-12 h-12 bg-glow/10 rounded-full flex items-center justify-center">
                    <motion.div
                      className="text-glow font-bold text-xl"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        textShadow: [
                          '0 0 5px rgba(220, 20, 60, 0.5)',
                          '0 0 15px rgba(220, 20, 60, 0.8)',
                          '0 0 5px rgba(220, 20, 60, 0.5)'
                        ]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      1<span className="text-xs align-top">st</span>
                    </motion.div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Chinese Scholarship Council(CSC) Scholarship</h3>
                <p className="text-lg mb-1 italic">Government of China</p>
              </motion.div>
            </div>

            {/* XMU Anniversary Scholarship - Mobile */}
            <div className="relative mb-6 pl-12">
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
              
              {/* XMU Anniversary details with integrated rank */}
              <motion.div
                className="mb-6 bg-gradient-to-r from-secondary/5 to-secondary/15 p-5 rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-secondary text-sm block bg-secondary/10 px-4 py-1 rounded-full">2018</span>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <motion.div
                      className="text-secondary font-bold text-xl"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        textShadow: [
                          '0 0 5px rgba(229, 184, 11, 0.5)',
                          '0 0 15px rgba(229, 184, 11, 0.8)',
                          '0 0 5px rgba(229, 184, 11, 0.5)'
                        ]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      2<span className="text-xs align-top">nd</span>
                    </motion.div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">99th XMU Anniversary Scholarship</h3>
                <p className="text-lg mb-1 italic">School of Medicine, XMU</p>
              </motion.div>
            </div>

            {/* Excellence Scholarships - Mobile */}
            <div className="relative mb-6 pl-12">
              {/* Timeline dot on the left */}
              <div className="absolute left-0 top-4 z-20">
                <motion.div
                  className="w-8 h-8 bg-glow rounded-full"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 15 
                  }}
                  style={{
                    boxShadow: '0 0 20px rgba(220, 20, 60, 0.8)'
                  }}
                >
                  <motion.div 
                    className="absolute inset-0 rounded-full"
                    animate={{ 
                      boxShadow: [
                        '0 0 0 0px rgba(220, 20, 60, 0.8)', 
                        '0 0 0 12px rgba(220, 20, 60, 0)'
                      ]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>
              </div>
              
              {/* Excellence Scholarships details with integrated rank */}
              <motion.div
                className="mb-6 bg-gradient-to-r from-glow/5 to-glow/15 p-5 rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-glow text-sm block bg-glow/10 px-4 py-1 rounded-full">2018-2022</span>
                  <div className="w-12 h-12 bg-glow/10 rounded-full flex items-center justify-center">
                    <motion.div
                      className="text-glow font-bold text-xl"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        textShadow: [
                          '0 0 5px rgba(220, 20, 60, 0.5)',
                          '0 0 15px rgba(220, 20, 60, 0.8)',
                          '0 0 5px rgba(220, 20, 60, 0.5)'
                        ]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      1<span className="text-xs align-top">st</span>
                    </motion.div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">4 x Overall Excellence Scholarships</h3>
                <p className="text-lg mb-1 italic">School of Medicine, XMU</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements; 