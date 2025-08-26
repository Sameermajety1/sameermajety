import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLinkedin, 
  FaGithub, 
  FaInstagram,
  FaArrowRight
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <footer className="hidden md:block bg-gradient-to-br from-primary via-primary to-primary border-t border-gray pt-20 pb-10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-pink-400/20 rounded-full blur-xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-purple-400/15 to-blue-400/15 rounded-full blur-lg"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-6 relative inline-block text-light"
              whileHover={{ x: 5 }}
            >
              Sameer Majety
              <motion.div 
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              />
            </motion.h3>
            <p className="text-gray mb-6 leading-relaxed">
              Exploring the intersection of medicine, research, and innovation to 
              create meaningful impact in healthcare.
            </p>
            <div className="flex space-x-4">
              {[
                
                { icon: FaLinkedin, hover: "#0A66C2", link: "https://www.linkedin.com/in/sameer-majety-a9a81221a/", bg: "from-indigo-400 to-indigo-500" },
                
                { icon: FaInstagram, hover: "#E4405F", link: "https://www.instagram.com/theonlysameermajety/", bg: "from-pink-400 to-purple-500" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.bg} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                  whileHover={{ 
                    y: -8,
                    scale: 1.1,
                    boxShadow: `0 20px 40px -10px ${social.hover}60`
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <social.icon className="text-xl" />
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
            <h3 className="text-xl font-bold mb-6 text-light relative">
              Quick Links
              <motion.div 
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              />
            </h3>
            <ul className="space-y-3">
              {[
                { title: "Home", sectionId: "home" },
                { title: "Academics", sectionId: "academics" },
                { title: "Experience", sectionId: "experience" },
                { title: "Research & Publications", sectionId: "research-publications" },
                { title: "Leadership & Service", sectionId: "leadership-and-service" },
                { title: "Life", sectionId: "personal-life" },
                { title: "Gallery", sectionId: "gallery" },
                { title: "Contact", sectionId: "contact" }
              ].map((item, index) => (
                <motion.li 
                  key={index} 
                  whileHover={{ x: 8 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index, duration: 0.4 }}
                >
                  <button 
                    onClick={() => scrollToSection(item.sectionId)}
                    className="text-gray hover:text-secondary transition-all duration-300 flex items-center group font-medium cursor-pointer"
                  >
                    <motion.div
                      className="mr-3 text-indigo-500 group-hover:text-indigo-600 transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      <FaArrowRight className="text-sm" />
                    </motion.div>
                    {item.title}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
          
          <motion.div
          className="border-t border-gray pt-8 flex flex-col md:flex-row justify-between items-center text-gray text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="font-medium">&copy; {currentYear} Sameer Majety. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {[
              { title: "Privacy Policy", link: "#" },
              { title: "Terms of Service", link: "#" },
              { title: "Cookie Policy", link: "#" }
            ].map((item, index) => (
              <motion.a 
                  key={index}
                href={item.link} 
                className="hover:text-secondary transition-colors font-medium"
                whileHover={{ y: -2 }}
              >
                {item.title}
              </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
    </footer>
  );
};

export default Footer; 