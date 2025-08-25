import React from 'react';
import { motion } from 'framer-motion';
import { FloatingParticle } from '../components/FloatingElements';

const Academics = () => {
  return (
    <div className="relative" id="academics">
      {/* Add individual floating elements specific to this section */}
      <FloatingParticle
        size={4}
        position={{ top: '15%', right: '10%' }}
        color="rgba(229, 184, 11, 0.6)"
        duration={7}
      />
      <FloatingParticle
        size={3}
        position={{ bottom: '25%', left: '15%' }}
        color="rgba(4, 71, 171, 0.7)"
        delay={1}
        duration={5}
      />
      <FloatingParticle
        size={5}
        position={{ top: '30%', left: '25%' }}
        color="rgba(220, 20, 60, 0.6)"
        delay={0.8}
        duration={4}
      />
      
      <div className="container mx-auto px-6 pt-24 pb-10">
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
              Medical <span className="gradient-text">Education</span>
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

        {/* Timeline containers and content remain unchanged below */}
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
                      <span className="text-right text-gray-300">Awarded "Excellent Graduate Distinction"</span>
                      <span className="w-3 h-3 rounded-full bg-secondary ml-3"></span>
                    </li>
                    <li className="flex items-center justify-end">
                      <span className="text-right text-gray-300">President of Student Union</span>
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
                  
                  <h3 className="text-3xl font-bold mb-2">Bachelor of Medicine and Bachelor of Surgery</h3>
                  <p className="text-xl mb-1">The School of Medicine, <br/> Xiamen University</p>
                  <p className="text-gray-400">China</p>
                  <p className="text-gray-400 mt-2">Graduated in June 2025</p>
                </motion.div>
              </div>
            </div>

            {/* Scholarships section - Second item on timeline */}
            <div className="flex items-start relative mb-8">
              {/* Left column - Scholarship details */}
              <div className="w-1/2 pr-8 text-right">
                <motion.div
                  className="mb-6 bg-gradient-to-l from-secondary/5 to-secondary/10 p-5 rounded-2xl shadow-lg"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {/* <h3 className="text-xl font-bold mb-4 text-accent">Scholarships</h3> */}
                  <ul className="space-y-4">
                    <li className="flex items-center justify-end">
                      <span className="text-right text-gray-300">1</span>
                      <span className="w-3 h-3 rounded-full bg-secondary ml-3"></span>
                    </li>
                    <li className="flex items-center justify-end">
                      <span className="text-right text-gray-300">2</span>
                      <span className="w-3 h-3 rounded-full bg-secondary ml-3"></span>
                    </li>
                      <li className="flex items-center justify-end">
                        <span className="text-right text-gray-300">3</span>
                        <span className="w-3 h-3 rounded-full bg-secondary ml-3"></span>
                      </li>
                      <li className="flex items-center justify-end">
                        <span className="text-right text-gray-300">4</span>
                        <span className="w-3 h-3 rounded-full bg-secondary ml-3"></span>
                      </li>
                      <li className="flex items-center justify-end">
                        <span className="text-right text-gray-300">5</span>
                        <span className="w-3 h-3 rounded-full bg-secondary ml-3"></span>
                      </li>
                      <li className="flex items-center justify-end">
                        <span className="text-right text-gray-300">6</span>
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
                    boxShadow: '0 0 20px rgba(4, 71, 171, 0.8)'
                  }}
                >
                  <motion.div 
                    className="absolute inset-0 rounded-full"
                    animate={{ 
                      boxShadow: [
                        '0 0 0 0px rgba(4, 71, 171, 0.8)', 
                        '0 0 0 12px rgba(4, 71, 171, 0)'
                      ]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>
              </div>

              {/* Right column - Scholarship highlights */}
              <div className="md:w-1/2 w-full md:pl-8 pl-12">
                <motion.div
                  className="mb-6 bg-secondary/5 p-5 rounded-2xl shadow-lg"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-3xl font-bold mb-2">Scholarships</h3>
                  {/* <p className="text-xl mb-1">Merit-Based Scholarships</p>
                  <p className="text-gray-400">2021 - 2025</p>
                  <p className="text-gray-400 mt-2">Full tuition coverage and monthly stipend</p> */}
                </motion.div>
              </div>
            </div>

            {/* Timeline - 3 */}
            <div className="flex items-start relative mb-8">
              {/* Left column - Scholarship details */}
              <div className="w-1/2 pr-8 text-right">
                <motion.div
                  className="mb-6 bg-gradient-to-l from-accent/5 to-accent/10 p-5 rounded-2xl shadow-lg"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {/* <h3 className="text-xl font-bold mb-4 text-secondary">Received Honors</h3> */}
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
                    boxShadow: '0 0 20px rgba(4, 71, 171, 0.8)'
                  }}
                >
                  <motion.div 
                    className="absolute inset-0 rounded-full"
                    animate={{ 
                      boxShadow: [
                        '0 0 0 0px rgba(4, 71, 171, 0.8)', 
                        '0 0 0 12px rgba(4, 71, 171, 0)'
                      ]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </motion.div>
              </div>

              {/* Right column - Scholarship highlights */}
              <div className="md:w-1/2 w-full md:pl-8 pl-12">
                <motion.div
                  className="mb-6 bg-secondary/5 p-5 rounded-2xl shadow-lg"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-3xl font-bold mb-2">Received Honors</h3>
                  {/* <p className="text-xl mb-1">Merit-Based Scholarships</p>
                  <p className="text-gray-400">2021 - 2025</p>
                  <p className="text-gray-400 mt-2">Full tuition coverage and monthly stipend</p> */}
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

            {/* Scholarships - Mobile */}
            <motion.div
              className="mb-6 bg-secondary/5 p-5 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-4 text-secondary">Scholarships</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-secondary mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">Chinese Government Scholarship (CSC)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-secondary mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">Xiamen University Merit Scholarship</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-secondary mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">International Student Excellence Award</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="mb-6 bg-secondary/5 p-5 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-4 text-secondary">Scholarships</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-secondary mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">Chinese Government Scholarship (CSC)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-secondary mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">Xiamen University Merit Scholarship</span>
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-secondary mr-3 flex-shrink-0"></span>
                  <span className="text-gray-300">International Student Excellence Award</span>
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