"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FloatingElement } from './FloatingElements';
import { FaMedal, FaSwimmer, FaFistRaised, FaDumbbell, FaSkating } from 'react-icons/fa';
import { MdSurfing, MdScubaDiving, MdKitesurfing, MdKayaking, MdHiking } from 'react-icons/md';
import ImageGallery from './ImageGallery';

interface Sport {
  title: string;
  level: string;
  icon: React.ReactNode;
}

interface Leadership {
  title: string;
  organization: string;
  duration: string;
  description: string;
}

const PersonalLife = () => {
  const sports: Sport[] = [
    {
      title: "Roller Skating",
      level: "Indian National Level",
      icon: <FaSkating className="text-yellow-400" />
    },
    {
      title: "Swimming",
      level: "Indian State Level",
      icon: <FaSwimmer className="text-blue-400" />
    },
    {
      title: "Taekwondo",
      level: "Indian National Level",
      icon: <FaFistRaised className="text-red-400" />
    },
    {
      title: "Power Lifting",
      level: "S 180kg B 120kg D 210kg",
      icon: <FaDumbbell className="text-purple-400" />
    },
    {
      title: "Skate Boarding",
      level: "Recreational",
      icon: <FaSkating className="text-green-400" />
    }
  ];

  const adventureActivities = [
    { name: "Bungee", icon: <MdSurfing /> },
    { name: "Paragliding", icon: <MdKitesurfing /> },
    { name: "Scuba Diving", icon: <MdScubaDiving /> },
    { name: "Para Sailing", icon: <MdKitesurfing /> },
    { name: "River Rafting", icon: <MdKayaking /> },
    { name: "Under Sea Walking", icon: <MdHiking /> }
  ];

  const leadershipExperiences: Leadership[] = [
    {
      title: "Member",
      organization: "Mana Cheyutha Charitable Trust",
      duration: "July 2022 to Present",
      description: "Participated in many free health camps to the slums in urban areas and difficult-to-reach tribal settlements."
    },
    {
      title: "Campaign Head",
      organization: "Anti-Smoking Campaign",
      duration: "September 2020",
      description: "School of Medicine -Xiamen University, China"
    },
    {
      title: "President",
      organization: "Vth Student Union",
      duration: "September 2019 to May 2022",
      description: "School of Medicine -Xiamen University, China"
    },
    {
      title: "Department Head (Publicity)",
      organization: "IVth Student Union",
      duration: "May 2018 to August 2019",
      description: "School of Medicine -Xiamen University, China"
    },
    {
      title: "Event Organiser",
      organization: "Premier Paper Presentation 2022",
      duration: "November 2021",
      description: "School of Medicine -Xiamen University, China"
    }
  ];

  // This is a placeholder. Replace with your actual images
  const galleryImages = [
    {
      src: "/images/1.jpg",
      alt: "Gallery Image 1",
      category: "Sports"
    },
    {
      src: "/images/2.jpg",
      alt: "Gallery Image 2",
      category: "Me"
    },
    {
      src: "/images/3.jpg",
      alt: "Gallery Image 3",
      category: "Seminar"
    },
    {
      src: "/images/4.jpg",
      alt: "Gallery Image 4",
      category: "Speech"
    },
    {
      src: "/images/asram.jpg",
      alt: "Gallery Image 5",
      category: "University"
    },
    // Add more images here once you provide them
  ];

  return (
    <section id="personal-life" className="relative py-20 bg-gradient-to-b from-primary/95 to-primary min-h-screen">
      <FloatingElement
        size={300}
        position={{ top: '5%', right: '5%' }}
        color="rgba(229, 184, 11, 0.03)"
        duration={8}
      />
      <FloatingElement
        size={200}
        position={{ bottom: '10%', left: '5%' }}
        color="rgba(4, 71, 171, 0.03)"
        duration={6}
      />

      <div className="container mx-auto px-4 relative z-10">
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
              My <span className="gradient-text">Personal Life</span>
            </motion.h2>
          </motion.div>
          <motion.p 
            className="text-xl text-gray max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A glimpse into my passions and pursuits outside the medical field
          </motion.p>
        </motion.div>

        {/* Sports Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
          <h3 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <FaMedal className="text-yellow-400" /> Athletic Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sports.map((sport, index) => (
              <motion.div
                key={sport.title}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{sport.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold text-light">{sport.title}</h4>
                    <p className="text-gray-400">{sport.level}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Adventure Activities */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
          <h3 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <MdSurfing className="text-blue-400" /> Adventure Sports
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {adventureActivities.map((activity, index) => (
              <motion.div
                key={activity.name}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 flex flex-col items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-4xl text-blue-400">{activity.icon}</span>
                <span className="text-light font-medium text-center">{activity.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
          <h3 className="text-3xl font-bold mb-12 text-center">
            Leadership & <span className="text-purple-400">Volunteering</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipExperiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h4 className="font-bold text-xl mb-3 text-purple-400">{exp.title}</h4>
                <p className="text-light mb-2">{exp.organization}</p>
                <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gallery Section */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-12 text-center">
            Personal <span className="text-yellow-400">Gallery</span>
          </h3>
          <ImageGallery images={galleryImages} />
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalLife; 