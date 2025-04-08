"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary/95 border-t border-light/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-6 relative inline-block"
              whileHover={{ x: 5 }}
            >
              Sameer Majety
              <motion.div 
                className="absolute -bottom-2 left-0 h-1 bg-secondary"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              />
            </motion.h3>
            <p className="text-gray mb-6">
              Exploring the intersection of medicine, research, and innovation to 
              create meaningful impact in healthcare.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: "ri-twitter-fill", hover: "#1DA1F2" },
                { icon: "ri-linkedin-fill", hover: "#0A66C2" },
                { icon: "ri-github-fill", hover: "#ffffff" },
                { icon: "ri-instagram-fill", hover: "#E4405F" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-light/5 flex items-center justify-center text-light"
                  whileHover={{ 
                    backgroundColor: social.hover,
                    y: -5,
                    boxShadow: `0 10px 15px -3px ${social.hover}40`
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className={`${social.icon}`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { title: "Home", link: "#home" },
                { title: "Skills", link: "#skills" },
                { title: "Academics", link: "#academics" },
                { title: "Achievements", link: "#achievements" },
                { title: "Publications", link: "#publications" },
                { title: "Contact", link: "#contact" }
              ].map((item, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a 
                    href={item.link} 
                    className="text-gray hover:text-secondary transition-colors flex items-center"
                  >
                    <i className="ri-arrow-right-s-line mr-2"></i>
                    {item.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6">Research Areas</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "AI in Healthcare", 
                "Medical Imaging", 
                "Surgery", 
                "Diagnostics",
                "Patient Care", 
                "Medical Ethics", 
                "Telemedicine", 
                "Public Health"
              ].map((tag, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 rounded-full text-sm bg-light/5 text-light"
                  whileHover={{ 
                    backgroundColor: "rgba(125, 255, 179, 0.2)",
                    color: "rgb(125, 255, 179)"
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray mb-4">
              Subscribe to receive updates on my latest research and publications.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-3 bg-primary/30 border border-light/10 rounded-lg focus:outline-none focus:border-secondary transition-colors pr-12"
              />
              <motion.button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 flex items-center justify-center bg-secondary rounded-full text-primary"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="ri-send-plane-fill"></i>
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-light/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>&copy; {currentYear} Sameer Majety. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-secondary transition-colors">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll to top button */}
      <motion.a 
        href="#home"
        className="fixed bottom-6 right-6 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-glow z-50 text-primary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        whileHover={{ 
          y: -5,
          boxShadow: "0 0 20px 5px rgba(125, 255, 179, 0.5)" 
        }}
        whileTap={{ scale: 0.9 }}
      >
        <i className="ri-arrow-up-line text-xl"></i>
      </motion.a>
    </footer>
  );
};

export default Footer; 