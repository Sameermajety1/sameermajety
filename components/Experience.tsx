"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FloatingElement, FloatingParticle } from './FloatingElements';

const Experience = () => {
  return (
    <div className="relative" id="experience">
      {/* Add individual floating elements specific to this section */}
      <FloatingElement
        size={150}
        position={{ top: '10%', right: '5%' }}
        color="rgba(4, 71, 171, 0.08)"
        duration={7}
        opacity={0.2}
      />
      <FloatingElement
        size={100}
        position={{ bottom: '20%', left: '10%' }}
        color="rgba(229, 184, 11, 0.1)"
        delay={1}
        duration={5}
        blurAmount={30}
      />
      <FloatingParticle
        size={5}
        position={{ top: '30%', left: '25%' }}
        color="rgba(4, 71, 171, 0.6)"
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
                  <span className="text-accent text-sm mb-2 block bg-accent/10 px-4 py-1 rounded-full w-fit">September 2022-March 2024</span>
                  <h3 className="text-2xl font-bold mb-2">House Surgeon</h3>
                  <p className="text-lg mb-1 italic">Rangaraya Medical College, Kakinada, India</p>
                  <p className="text-gray-300 mt-3">
                    Rotating in departments of Internal Medicine, Surgery, G Obs, Paediatrics, Emergency Medicine, Anaesthesia, Pulmonology and Community Medicine.
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
                    <span className="text-secondary text-sm mb-2 block bg-secondary/10 px-4 py-1 rounded-full w-fit">April 2022 - September 2022</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Clinical Extern</h3>
                  <p className="text-lg mb-1 italic">Pavani Multi Speciality Hospital Kakinada, India</p>
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
                  <span className="text-accent text-sm mb-2 block bg-accent/10 px-4 py-1 rounded-full w-fit">April 2021- March 2022</span>
                  <h3 className="text-2xl font-bold mb-2">Clinical Extern</h3>
                  <p className="text-lg mb-1 italic">Sri Bala Prabha Hospital Kakinada, India</p>
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
                background: 'linear-gradient(to bottom, #0047AB, #E5B80B, #0047AB)',
                boxShadow: '0 0 15px rgba(4, 71, 171, 0.6)'
              }}
            >
              {/* Pulsing effect */}
              <div className="absolute inset-0 rounded-full animate-pulse opacity-50"></div>
            </div>

            {/* House Surgeon - Mobile */}
            <div className="relative mb-6 pl-12 mt-0">
              {/* Timeline dot on the left */}
              <div className="absolute left-0 top-4 z-20">
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
              
              {/* House Surgeon details */}
              <motion.div
                className="mb-6 bg-gradient-to-r from-accent/5 to-accent/15 p-5 rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-accent text-sm mb-2 block bg-accent/10 px-4 py-1 rounded-full w-fit">September 2022-March 2024</span>
                <h3 className="text-2xl font-bold mb-2">House Surgeon</h3>
                <p className="text-lg mb-1 italic">Rangaraya Medical College, Kakinada, India</p>
                <p className="text-gray-300 mt-3">
                  Rotating in departments of Internal Medicine, Surgery, G Obs, Paediatrics, Emergency Medicine, Anaesthesia, Pulmonology and Community Medicine.
                </p>
              </motion.div>
            </div>

            {/* Clinical Extern 1 - Mobile */}
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
              
              {/* Clinical Extern 1 details */}
              <motion.div
                className="mb-6 bg-gradient-to-r from-secondary/5 to-secondary/15 p-5 rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-secondary text-sm mb-2 block bg-secondary/10 px-4 py-1 rounded-full w-fit">April 2022 - September 2022</span>
                <h3 className="text-2xl font-bold mb-2">Clinical Extern</h3>
                <p className="text-lg mb-1 italic">Pavani Multi Speciality Hospital Kakinada, India</p>
              </motion.div>
            </div>

            {/* Clinical Extern 2 - Mobile */}
            <div className="relative mb-6 pl-12">
              {/* Timeline dot on the left */}
              <div className="absolute left-0 top-4 z-20">
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
              
              {/* Clinical Extern 2 details */}
              <motion.div
                className="mb-6 bg-gradient-to-r from-accent/5 to-accent/15 p-5 rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-accent text-sm mb-2 block bg-accent/10 px-4 py-1 rounded-full w-fit">April 2021- March 2022</span>
                <h3 className="text-2xl font-bold mb-2">Clinical Extern</h3>
                <p className="text-lg mb-1 italic">Sri Bala Prabha Hospital Kakinada, India</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience; 