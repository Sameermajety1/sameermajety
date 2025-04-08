"use client";

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FloatingElement, FloatingParticle } from './FloatingElements';

interface DayEvent {
  id: number;
  time: string;
  title: string;
  description: string;
  icon?: string;
}

interface Hobby {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const TimelineEvent: React.FC<{ event: DayEvent }> = ({ event }) => {
  return (
    <div className="timeline-item min-w-[280px] w-80 flex-none mx-4">
      <div className="card h-full">
        <div className="text-secondary text-sm mb-2">{event.time}</div>
        <h3 className="text-xl font-bold text-light mb-2">{event.title}</h3>
        <p className="text-gray text-sm">{event.description}</p>
      </div>
    </div>
  );
};

const HobbyCard: React.FC<{ hobby: Hobby; index: number }> = ({ hobby, index }) => {
  return (
    <motion.div 
      className="relative overflow-hidden rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, boxShadow: `0 20px 25px -5px ${hobby.color}30, 0 10px 10px -5px ${hobby.color}20` }}
    >
      {/* Background gradient overlay */}
      <div 
        className="absolute inset-0 z-10 bg-gradient-to-t from-black to-transparent opacity-80"
      ></div>
      
      {/* Background gradient instead of image */}
      <div 
        className="absolute inset-0 w-full h-full" 
        style={{ 
          background: `linear-gradient(135deg, ${hobby.color}40 0%, ${hobby.color}10 100%)`,
          opacity: 0.8
        }}
      ></div>
      
      <div className="relative z-20 flex flex-col items-center text-center p-8 h-full">
        <div 
          className="text-5xl mb-4"
          style={{ 
            textShadow: `0 0 15px ${hobby.color}80`,
            color: hobby.color 
          }}
        >
          {hobby.icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{hobby.title}</h3>
        <p className="text-gray-200 text-sm">{hobby.description}</p>
      </div>
    </motion.div>
  );
};

const SportCard: React.FC<{ sport: { title: string, level: string, icon: React.ReactNode, color: string } }> = ({ sport }) => {
  return (
    <motion.div
      className="relative overflow-hidden p-4 rounded-xl flex items-center bg-white/5 backdrop-blur-md"
      whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div 
        className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mr-4"
        style={{ 
          background: `${sport.color}20`,
          color: sport.color,
          boxShadow: `0 0 20px ${sport.color}40`
        }}
      >
        {sport.icon}
      </div>
      <div>
        <h4 className="font-bold text-lg">{sport.title}</h4>
        <p className="text-sm text-gray-300">{sport.level}</p>
      </div>
    </motion.div>
  );
};

const PersonalLife = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Horizontal scroll effect
    if (timelineRef.current) {
      let timelineItems = gsap.utils.toArray('.timeline-item');
      
      gsap.to(timelineItems, {
        xPercent: -100 * (timelineItems.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: timelineRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${timelineRef.current!.offsetWidth}`,
          invalidateOnRefresh: true
        }
      });
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const dayEvents: DayEvent[] = [
    {
      id: 1,
      time: "5:30 AM",
      title: "Morning Workout",
      description: "Starting the day with a 30-minute workout session focusing on cardio and core strength."
    },
    {
      id: 2,
      time: "7:00 AM",
      title: "Hospital Rounds",
      description: "Checking on patients and reviewing case notes with the attending physician."
    },
    {
      id: 3,
      time: "10:00 AM",
      title: "Lecture Session",
      description: "Attending an advanced cardiology lecture with detailed case studies."
    },
    {
      id: 4,
      time: "1:00 PM",
      title: "Research Time",
      description: "Working on data analysis for ongoing research project on infectious diseases."
    },
    {
      id: 5,
      time: "4:00 PM",
      title: "Clinical Skills",
      description: "Practicing surgical suturing techniques in the skills lab with peers."
    },
    {
      id: 6,
      time: "6:30 PM",
      title: "Reading & Relaxation",
      description: "Reading medical journals, followed by playing the guitar to unwind."
    },
    {
      id: 7,
      time: "9:00 PM",
      title: "Preparation & Planning",
      description: "Preparing notes and planning for the next day before getting a good night's sleep."
    }
  ];

  const sports = [
    {
      title: "Roller Skating",
      level: "Indian National Level",
      icon: "🛼",
      color: "#E5B80B" // Gold
    },
    {
      title: "Swimming",
      level: "Indian State Level",
      icon: "🏊‍♂️",
      color: "#0047AB" // Blue
    },
    {
      title: "Taekwondo",
      level: "Indian National Level",
      icon: "🥋",
      color: "#DC143C" // Red
    },
    {
      title: "Power Lifting",
      level: "S 180kg B 120kg D 210kg",
      icon: "🏋️‍♂️",
      color: "#8A2BE2" // Purple
    },
    {
      title: "Skate Boarding",
      level: "Recreational",
      icon: "🛹",
      color: "#E5B80B" // Gold
    }
  ];

  const adventureActivities = [
    {
      id: 1,
      title: "Bungee Jumping",
      description: "Embracing the free fall and the adrenaline rush from great heights.",
      icon: "🪂",
      color: "#E5B80B" // Gold
    },
    {
      id: 2,
      title: "Paragliding",
      description: "Soaring through the skies with a panoramic view of landscapes below.",
      icon: "🪂",
      color: "#0047AB" // Blue
    },
    {
      id: 3,
      title: "Scuba Diving",
      description: "Exploring underwater ecosystems and marine life during travels.",
      icon: "🤿",
      color: "#00A86B" // Jade
    },
    {
      id: 4,
      title: "Para Sailing",
      description: "Gliding over the ocean while being towed by a boat for a unique perspective.",
      icon: "🏄‍♂️",
      color: "#DC143C" // Red
    },
    {
      id: 5,
      title: "River Rafting",
      description: "Navigating through challenging rapids and enjoying the thrill of white water.",
      icon: "🛶",
      color: "#0047AB" // Blue
    },
    {
      id: 6,
      title: "Underwater Walking",
      description: "Walking on the ocean floor with special equipment to observe marine life.",
      icon: "🧜‍♂️",
      color: "#00A86B" // Jade
    }
  ];

  return (
    <section id="personal-life" className="relative py-12 overflow-hidden">
      {/* Floating elements for visual interest */}
      <FloatingElement
        size={200}
        position={{ top: '15%', right: '10%' }}
        color="rgba(229, 184, 11, 0.1)" // Gold color
        duration={8}
        blurAmount={60}
      />
      <FloatingElement
        size={150}
        position={{ bottom: '20%', left: '5%' }}
        color="rgba(4, 71, 171, 0.08)" // Blue color
        delay={1}
        duration={7}
      />
      <FloatingParticle
        size={8}
        position={{ top: '40%', left: '15%' }}
        color="rgba(220, 20, 60, 0.7)" // Red color
        delay={0.5}
        duration={5}
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
              Personal <span className="gradient-text">Life</span>
            </motion.h2>
          </motion.div>
          <motion.p 
            className="text-xl text-gray max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Beyond medicine - exploring my interests, hobbies, and personal journey
          </motion.p>
        </motion.div>

        {/* Sports Section */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-light text-center mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="gradient-text-gold">Sports</span> Achievements
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {sports.map((sport, index) => (
              <SportCard key={index} sport={sport} />
            ))}
          </div>
        </div>

        {/* Adventure Activities Section */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-light text-center mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="gradient-text-blue">Adventure</span> Activities
          </motion.h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {adventureActivities.map((activity, index) => (
              <HobbyCard key={activity.id} hobby={activity} index={index} />
            ))}
          </div>
        </div>

        {/* Day in my life section */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-light text-center mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            A <span className="gradient-text-red">Day</span> in My Life
          </motion.h3>
          
          <div 
            ref={timelineRef} 
            className="timeline-container h-[400px] relative overflow-hidden mb-8"
          >
            <div className="absolute top-0 left-0 flex items-center h-full">
              {dayEvents.map((event) => (
                <TimelineEvent key={event.id} event={event} />
              ))}
            </div>
          </div>
          
          <motion.p 
            className="text-center text-gray italic max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Scroll horizontally to see how I balance my academic life with personal wellness
          </motion.p>
        </div>
        
        <motion.div 
          className="text-center mt-12 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a href="#contact" className="button-primary inline-block">
            Connect and Share Interests
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalLife; 