import React from 'react';
import { motion } from 'framer-motion';
import { FloatingParticle } from '../components/FloatingElements';

// Shared data used to render mobile cards in sync with desktop content
const experienceItems = [
  {
    date: 'August 2025 - September 2025',
    title: 'Research Assistant - Internal Medicine',
    location: 'Nnn, Baton Rouge, LA, United States of America',
    focus: 'Primary Focus: Clinical / Translational science',
  },
  {
    date: 'July 2025 - August 2025',
    title: 'Internal Medicine Observership (Outpatient)',
    location: 'Corewell Health, Dearborn, MI, United States of America',
    focus: 'Primary Focus: Clinical / Translational science',
  },
  {
    date: 'May 2025 - June 2025',
    title: 'Internal Medicine Observership (Outpatient)',
    location: 'Curewell Medical Center, Chicago, IL, United States of America',
    focus: 'Primary Focus: Clinical / Translational science',
  },
  {
    date: 'September 2024 - Present',
    title: 'Tutor and Mentor',
    location: 'IMRC, Hyderabad, India',
    focus: 'Primary Focus: Medical Education',
  },
  {
    date: 'March 2024 - Present',
    title: 'Founder and Mentor - Competitive Exam Mentorship Program',
    location: 'School of Medicine, Xiamen University, Xiamen, China',
    focus: 'Primary Focus: Medical Education',
  },
  {
    date: 'June 2023 - Present',
    title: 'Medical Volunteer Doctor',
    location: 'Indian Red Cross Society, Kakinada, 533001, India',
    focus: 'Primary Focus: Community involvement / Outreach',
  },
  {
    date: 'September 2022 - September 2023',
    title: 'Clinical Intern',
    location: 'Rangaraya Medical College, Kakinada, 533001, India',
    focus: 'Primary Focus: Clinical / Translational science',
  },
  {
    date: 'September 2019 - May 2022',
    title: 'Student Body Leadership - President',
    location: 'School of Medicine, Xiamen University, Xiamen, China',
    focus: 'Primary Focus: Medical Education',
  },
];

const Experience = () => {
  return (
    <div className="relative" id="experience">
      {/* Add individual floating elements specific to this section */}
      <FloatingParticle
        size={4}
        position={{ top: '15%', right: '10%' }}
        color="rgba(4, 71, 171, 0.6)"
        duration={7}
      />
      <FloatingParticle
        size={3}
        position={{ bottom: '25%', left: '15%' }}
        color="rgba(229, 184, 11, 0.7)"
        delay={1}
        duration={5}
      />
      <FloatingParticle
        size={5}
        position={{ top: '30%', left: '25%' }}
        color="rgba(4, 71, 171, 0.6)"
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
            className="inline-block bg-gradient-to-r from-accent/10 to-secondary/10 px-8 py-3 rounded-full mb-6"
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
              Clinical <span className="gradient-text">Experience</span>
            </motion.h2>
          </motion.div>
          <motion.p 
            className="text-xl text-gray max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            My journey through medical practice and clinical training
          </motion.p>
        </motion.div>

        <div className="flex justify-center">
          {/* Desktop timeline */}
          <div className="relative max-w-4xl w-full md:block hidden">
            {/* Timeline line in the center - Desktop version */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full rounded-full z-0"
              style={{ 
                background: 'linear-gradient(to bottom, #0047AB, #E5B80B, #0047AB)',
                boxShadow: '0 0 15px rgba(4, 71, 171, 0.6)'
              }}
            >
              {/* Pulsing effect */}
              <div className="absolute inset-0 rounded-full animate-pulse opacity-50"></div>
            </div>

            {/* House Surgeon */}
            <div className="flex items-start relative mb-6 mt-0">
              {/* Timeline dot in the middle */}
              <div className="absolute left-1/2 top-4 transform -translate-x-1/2 z-20">
                <motion.div
                  className="w-8 h-8 bg-accent rounded-full"
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

              {/* Left column empty */}
              <div className="w-1/2 pr-8 text-right">
              </div>
              
              {/* Right column - House Surgeon details */}
              <div className="w-1/2 pl-8">
                <motion.div
                  className="mb-6 bg-gradient-to-r from-accent/5 to-accent/15 p-5 rounded-2xl shadow-lg"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-accent text-sm mb-2 block bg-accent/10 px-4 py-1 rounded-full w-fit">August 2025 - September 2025</span>
                  <h3 className="text-2xl font-bold mb-2">Research Assistant - Internal Medicine</h3>
                  <p className="text-lg mb-1 italic">Nnn, Baton Rouge, LA, United States of America</p>
                  <p className="text-gray-300 mt-3">
                  Primary Focus: Clinical / Translational science
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Clinical Extern 1 */}
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

              {/* Left column - Clinical Extern details */}
              <div className="w-1/2 pr-8 text-right">
                <motion.div
                  className="mb-6 bg-gradient-to-l from-secondary/5 to-secondary/15 p-5 rounded-2xl shadow-lg"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex justify-end">
                    <span className="text-secondary text-sm mb-2 block bg-secondary/10 px-4 py-1 rounded-full w-fit">July 2025 - August 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2"> Internal Medicine Observership (Outpatient)</h3>
                  <p className="text-lg mb-1 italic"> Corewell Health, Dearborn, MI, United States of America</p>
                  <p className="text-gray-300 mt-3">
                  Primary Focus: Clinical / Translational science
                  </p>
                </motion.div>
              </div>
              
              {/* Right column empty */}
              <div className="w-1/2 pl-8">
              </div>
            </div>

            {/* Clinical Extern 2 */}
            <div className="flex items-start relative mb-6">
              {/* Timeline dot in the middle */}
              <div className="absolute left-1/2 top-4 transform -translate-x-1/2 z-20">
                <motion.div
                  className="w-8 h-8 bg-accent rounded-full"
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

              {/* Left column empty */}
              <div className="w-1/2 pr-8 text-right">
              </div>
              
              {/* Right column - Clinical Extern details */}
              <div className="w-1/2 pl-8">
                <motion.div
                  className="mb-6 bg-gradient-to-r from-accent/5 to-accent/15 p-5 rounded-2xl shadow-lg"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-accent text-sm mb-2 block bg-accent/10 px-4 py-1 rounded-full w-fit">May 2025 - June 2025</span>
                  <h3 className="text-2xl font-bold mb-2">Internal Medicine Observership (Outpatient)</h3>
                  <p className="text-lg mb-1 italic">Curewell Medical Center,  Chicago, IL, United States of America</p>
                  <p className="text-gray-300 mt-3">
                  Primary Focus: Clinical / Translational science
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Clinical Extern 3 */}
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

              {/* Left column - Clinical Extern details */}
              <div className="w-1/2 pr-8 text-right">
                <motion.div
                  className="mb-6 bg-gradient-to-l from-secondary/5 to-secondary/15 p-5 rounded-2xl shadow-lg"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex justify-end">
                    <span className="text-secondary text-sm mb-2 block bg-secondary/10 px-4 py-1 rounded-full w-fit">September 2024 - Present</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Tutor and Mentor</h3>
                  <p className="text-lg mb-1 italic">Interdisciplinary Medical Research Consortium
                  IMRC, Hyderabad, India</p>
                  <p className="text-gray-300 mt-3">
                  Primary Focus: Medical Education
                  </p>
                </motion.div>
              </div>
              
              {/* Right column empty */}
              <div className="w-1/2 pl-8">
              </div>
            </div>

            {/* Clinical Extern 4 */}
            <div className="flex items-start relative mb-6">
              {/* Timeline dot in the middle */}
              <div className="absolute left-1/2 top-4 transform -translate-x-1/2 z-20">
                <motion.div
                  className="w-8 h-8 bg-accent rounded-full"
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

              {/* Left column empty */}
              <div className="w-1/2 pr-8 text-right">
              </div>
              
              {/* Right column - Clinical Extern details */}
              <div className="w-1/2 pl-8">
                <motion.div
                  className="mb-6 bg-gradient-to-r from-accent/5 to-accent/15 p-5 rounded-2xl shadow-lg"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-accent text-sm mb-2 block bg-accent/10 px-4 py-1 rounded-full w-fit">March 2024 - Present</span>
                  <h3 className="text-2xl font-bold mb-2"> Founder and Mentor - Competitive Exam Mentorship Program</h3>
                  <p className="text-lg mb-1 italic"> School of Medicine, Xiamen University, Xiamen, China</p>
                  <p className="text-gray-300 mt-3">
                  Primary Focus: Medical Education
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Clinical Extern 5 */}
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

              {/* Left column - Clinical Extern details */}
              <div className="w-1/2 pr-8 text-right">
                <motion.div
                  className="mb-6 bg-gradient-to-l from-secondary/5 to-secondary/15 p-5 rounded-2xl shadow-lg"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex justify-end">
                    <span className="text-secondary text-sm mb-2 block bg-secondary/10 px-4 py-1 rounded-full w-fit">June 2023 - Present</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Medical Volunteer Doctor</h3>
                  <p className="text-lg mb-1 italic">Indian Red Cross Society, Kakinada, 533001, India</p>
                  <p className="text-gray-300 mt-3">
                  Primary Focus: Community involvement / Outreach
                  </p>
                </motion.div>
              </div>
              
              {/* Right column empty */}
              <div className="w-1/2 pl-8">
              </div>
            </div>

            {/* Clinical Extern 6 */}
            <div className="flex items-start relative mb-6">
              {/* Timeline dot in the middle */}
              <div className="absolute left-1/2 top-4 transform -translate-x-1/2 z-20">
                <motion.div
                  className="w-8 h-8 bg-accent rounded-full"
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

              {/* Left column empty */}
              <div className="w-1/2 pr-8 text-right">
              </div>
              
              {/* Right column - Clinical Extern details */}
              <div className="w-1/2 pl-8">
                <motion.div
                  className="mb-6 bg-gradient-to-r from-accent/5 to-accent/15 p-5 rounded-2xl shadow-lg"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-accent text-sm mb-2 block bg-accent/10 px-4 py-1 rounded-full w-fit">September 2022 - Septempber 2023</span>
                  <h3 className="text-2xl font-bold mb-2">Clinical Intern</h3>
                  <p className="text-lg mb-1 italic">Rangaraya Medical College, Kakinada, 533001, India</p>
                  <p className="text-gray-300 mt-3">
                  Primary Focus: Clinical / Translational science
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Clinical Extern 7 */}
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

              {/* Left column - Clinical Extern details */}
              <div className="w-1/2 pr-8 text-right">
                <motion.div
                  className="mb-6 bg-gradient-to-l from-secondary/5 to-secondary/15 p-5 rounded-2xl shadow-lg"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex justify-end">
                    <span className="text-secondary text-sm mb-2 block bg-secondary/10 px-4 py-1 rounded-full w-fit">September 2019 - May 2022</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2"> Student Body Leadership - President</h3>
                  <p className="text-lg mb-1 italic"> School of Medicine, Xiamen University, Xiamen, China</p>
                  <p className="text-gray-300 mt-3">
                  Primary Focus: Medical Education
                  </p>
                </motion.div>
              </div>
              
              {/* Right column empty */}
              <div className="w-1/2 pl-8">
              </div>
            </div>
          </div>

          {/* Mobile timeline (single-sided) */}
          <div className="relative max-w-4xl w-full md:hidden block">
            {/* Timeline line on the left - Mobile version */}
            <div 
              className="absolute left-[16px] top-0 w-2 h-full rounded-full z-0"
              style={{ 
                background: 'linear-gradient(to bottom, #0047AB, #E5B80B, #0047AB)',
                boxShadow: '0 0 15px rgba(4, 71, 171, 0.6)'
              }}
            >
              {/* Pulsing effect */}
              <div className="absolute inset-0 rounded-full animate-pulse opacity-50"></div>
            </div>

            {/* Render all items from shared data */}
            {experienceItems.map((item, idx) => (
              <div key={idx} className={`relative mb-6 pl-12 ${idx === 0 ? 'mt-0' : ''}`}>
                {/* Timeline dot on the left */}
                <div className="absolute left-0 top-4 z-20">
                  <motion.div
                    className="w-8 h-8 bg-secondary rounded-full"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    style={{ boxShadow: '0 0 20px rgba(4, 71, 171, 0.8)' }}
                  >
                    <motion.div 
                      className="absolute inset-0 rounded-full"
                      animate={{ boxShadow: ['0 0 0 0px rgba(4, 71, 171, 0.8)', '0 0 0 12px rgba(4, 71, 171, 0)'] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </motion.div>
                </div>

                {/* Card */}
                <motion.div
                  className="mb-6 bg-gradient-to-r from-accent/5 to-accent/15 p-5 rounded-2xl shadow-lg"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-accent text-sm mb-2 block bg-accent/10 px-4 py-1 rounded-full w-fit">{item.date}</span>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-lg mb-1 italic">{item.location}</p>
                  <p className="text-gray-300 mt-3">{item.focus}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience; 