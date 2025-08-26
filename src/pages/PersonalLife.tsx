import React from 'react';
import { motion } from 'framer-motion';
import { FloatingParticle } from '../components/FloatingElements';
import { FaMedal, FaSwimmer, FaFistRaised, FaDumbbell, FaSkating, FaCrown, FaUsers, FaHandshake, FaHeart } from 'react-icons/fa';
import { MdSurfing, MdScubaDiving, MdKitesurfing, MdKayaking, MdHiking, MdVolunteerActivism } from 'react-icons/md';


interface Sport {
  title: string;
  level: string;
  icon: React.ReactNode;
  achievements: string[];
  color: string;
}


interface Adventure {
  name: string;
  icon: React.ReactNode;
  description: string;
  completed: boolean;
}

const PersonalLife = () => {
  const sports: Sport[] = [
    {
      title: "Roller Skating",
      level: "Indian National Level",
      icon: <FaSkating className="text-3xl" />,
      achievements: ["State Level Gold Medalist", "District Champion (7+ years)", "National Level Competitor"],
      color: "from-blue-600/90 to-indigo-700/90"
    },
    {
      title: "Swimming",
      level: "Indian State Level",
      icon: <FaSwimmer className="text-3xl" />,
      achievements: ["State Level Competitor", "Multiple District Medals", "School Swimming Champion"],
      color: "from-cyan-500/90 to-blue-600/90"
    },
    {
      title: "Taekwondo",
      level: "Indian National Level",
      icon: <FaFistRaised className="text-3xl" />,
      achievements: ["National Level Competitor", "Black Belt Holder", "Martial Arts Excellence"],
      color: "from-red-600/90 to-orange-600/90"
    },
    {
      title: "Powerlifting",
      level: "Competitive Level",
      icon: <FaDumbbell className="text-3xl" />,
      achievements: ["Squat: 180kg", "Bench: 120kg", "Deadlift: 210kg"],
      color: "from-purple-600/90 to-pink-600/90"
    }
  ];

  const adventures: Adventure[] = [
    { name: "Bungee Jumping", icon: <MdSurfing />, description: "World's 2nd Highest Bungee Jump", completed: true },
    { name: "Paragliding", icon: <MdKitesurfing />, description: "Mountain Paragliding Experience", completed: true },
    { name: "Scuba Diving", icon: <MdScubaDiving />, description: "Underwater Exploration", completed: true },
    { name: "Para Sailing", icon: <MdKitesurfing />, description: "Coastal Para Sailing", completed: true },
    { name: "River Rafting", icon: <MdKayaking />, description: "White Water Rafting", completed: true },
    { name: "Under Sea Walking", icon: <MdHiking />, description: "Ocean Floor Walking", completed: true }
  ];

  


  return (
    <div className="relative">
      {/* Floating Elements */}
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
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
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
              Life Beyond <span className="gradient-text">Medicine</span>
            </motion.h2>
          </motion.div>
          <motion.p 
            className="text-xl text-gray max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Exploring passions, pushing boundaries, and making a difference through sports, adventure, and leadership
          </motion.p>
        </motion.div>

        {/* Sports & Adventure Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          

          {/* Sports Achievements */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-3xl font-bold text-light mb-4 flex items-center justify-center gap-3">
              🏅<span className="gradient-text"> Sports Achievements</span>
              </h4>
              
            </motion.div>

            {/* Major Achievement - Roller Skating (Bigger Card) */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-indigo-700/90" />
                
                {/* Content */}
                <div className="relative z-10 p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-6xl text-white">
                          <FaSkating />
                        </div>
                        <div>
                          <h5 className="text-4xl font-bold text-white mb-2">Roller Skating</h5>
                          <div className="flex items-center gap-3">
                            <FaMedal className="text-yellow-400 text-2xl" />
                            <span className="text-yellow-300 font-bold text-xl">Indian National Level</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <motion.div 
                          className="flex items-center gap-4 bg-primary/10 backdrop-blur-sm p-4 rounded-xl border border-gray/20"
                          whileHover={{ x: 5, transition: { duration: 0.2 } }}
                        >
                          <FaMedal className="text-yellow-400 text-xl" />
                          <span className="text-white font-semibold">State Level Gold Medalist</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center gap-4 bg-primary/10 backdrop-blur-sm p-4 rounded-xl border border-gray/20"
                          whileHover={{ x: 5, transition: { duration: 0.2 } }}
                        >
                          <span className="text-2xl">🏆</span>
                          <span className="text-white font-semibold">District Champion (7+ years)</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center gap-4 bg-primary/10 backdrop-blur-sm p-4 rounded-xl border border-gray/20"
                          whileHover={{ x: 5, transition: { duration: 0.2 } }}
                        >
                          <span className="text-2xl">🥇</span>
                          <span className="text-white font-semibold">National Level Competitor</span>
                        </motion.div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-primary/10 backdrop-blur-sm rounded-2xl p-6 border border-gray/20">
                        <h6 className="text-2xl font-bold text-white mb-6">Other Sports</h6>
                        <div className="space-y-4">
                          {/* Swimming Card */}
                          <motion.div 
                            className="relative overflow-hidden rounded-xl p-4 border border-white/20 cursor-pointer group"
                            whileHover={{ y: -3, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/90 to-blue-600/90 transition-transform duration-300 group-hover:scale-105" />
                            <div className="relative z-10">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="text-3xl text-white transition-transform duration-300 group-hover:scale-110">
                                  <FaSwimmer />
                                </div>
                                <div>
                                  <h6 className="text-xl font-bold text-white">Swimming</h6>
                                  <div className="flex items-center gap-2">
                                    
                                    <span className="text-yellow-300 font-medium text-sm">Indian State Level</span>
                                  </div>
                                </div>
                              </div>
                              <div className="space-y-1">
                                <div className="flex items-center gap-2 text-white/90 transition-all duration-200 group-hover:text-white">
                                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                  <span className="text-sm">State Level Competitor</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/90 transition-all duration-200 group-hover:text-white">
                                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                  <span className="text-sm">Multiple District Medals</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/90 transition-all duration-200 group-hover:text-white">
                                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                  <span className="text-sm">School Swimming Champion</span>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                          
                          {/* Taekwondo and Powerlifting Row */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {/* Taekwondo Card */}
                            <motion.div 
                              className="relative overflow-hidden rounded-xl p-3 border border-white/20 cursor-pointer group"
                              whileHover={{ y: -2, scale: 1.03 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-br from-red-600/90 to-orange-600/90 transition-transform duration-300 group-hover:scale-105" />
                              <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="text-2xl text-white transition-transform duration-300 group-hover:scale-110">
                                    <FaFistRaised />
                                  </div>
                                  <div>
                                    <h6 className="text-lg font-bold text-white">Taekwondo</h6>
                                    <div className="flex items-center gap-1">
                                      
                                      <span className="text-yellow-300 font-medium text-xs">Indian National Level</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="space-y-1">
                                  <div className="flex items-center gap-1 text-white/90 transition-all duration-200 group-hover:text-white">
                                    <span className="w-1 h-1 bg-white rounded-full"></span>
                                    <span className="text-xs">National Level Competitor</span>
                                  </div>
                                  <div className="flex items-center gap-1 text-white/90 transition-all duration-200 group-hover:text-white">
                                    <span className="w-1 h-1 bg-white rounded-full"></span>
                                    <span className="text-xs">Blue Belt Holder</span>
                                  </div>
                                  <div className="flex items-center gap-1 text-white/90 transition-all duration-200 group-hover:text-white">
                                    <span className="w-1 h-1 bg-white rounded-full"></span>
                                    <span className="text-xs">Martial Arts Excellence</span>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                            
                            {/* Powerlifting Card */}
                            <motion.div 
                              className="relative overflow-hidden rounded-xl p-3 border border-white/20 cursor-pointer group"
                              whileHover={{ y: -2, scale: 1.03 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 to-pink-600/90 transition-transform duration-300 group-hover:scale-105" />
                              <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="text-2xl text-white transition-transform duration-300 group-hover:scale-110">
                                    <FaDumbbell />
                                  </div>
                                  <div>
                                    <h6 className="text-lg font-bold text-white">Powerlifting</h6>
                                    <div className="flex items-center gap-1">
                                      
                                      <span className="text-yellow-300 font-medium text-xs">Professional Level</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="space-y-1">
                                  <div className="flex items-center gap-1 text-white/90 transition-all duration-200 group-hover:text-white">
                                    <span className="w-1 h-1 bg-white rounded-full"></span>
                                    <span className="text-xs">Squat: 190</span>
                                  </div>
                                  <div className="flex items-center gap-1 text-white/90 transition-all duration-200 group-hover:text-white">
                                    <span className="w-1 h-1 bg-white rounded-full"></span>
                                    <span className="text-xs">Bench: 120</span>
                                  </div>
                                  <div className="flex items-center gap-1 text-white/90 transition-all duration-200 group-hover:text-white">
                                    <span className="w-1 h-1 bg-white rounded-full"></span>
                                    <span className="text-xs">Deadlift: 210</span>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Adventure Experiences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-3xl font-bold text-light mb-4 flex items-center justify-center gap-3">
              🌍<span className="gradient-text"> Adventure Sports Enthusiast</span>
              </h4>
              
            </motion.div>

            {/* Featured Adventure - Bungee Jumping */}
            <motion.div 
              className="relative h-96 rounded-3xl overflow-hidden group shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
              <img 
                src="/images/bungee.avif" 
                alt="Bungee Jumping"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 p-12 z-20">
                <h5 className="text-4xl font-bold text-white mb-4">World's 2nd Highest Bungee Jump</h5>
                <p className="text-white text-xl mb-6">An exhilarating experience at one of the world's most challenging heights</p>
                <div className="flex items-center gap-4">
                  <span className="px-4 py-2 bg-red-500/20 backdrop-blur-sm rounded-full border border-red-400/30 text-red-300">
                    ✓ Completed
                  </span>
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white">
                    Extreme Adventure
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Adventure Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {adventures.map((adventure, index) => {
                // Define vibrant colors for each adventure
                const adventureColors = [
                  { bg: 'from-red-500/80 to-pink-600/80', border: 'border-red-400/60', shadow: 'shadow-red-500/30', hover: 'from-red-500/90 to-pink-600/90' }, // Bungee Jumping
                  { bg: 'from-blue-500/80 to-cyan-600/80', border: 'border-blue-400/60', shadow: 'shadow-blue-500/30', hover: 'from-blue-500/90 to-cyan-600/90' }, // Paragliding
                  { bg: 'from-cyan-500/80 to-blue-600/80', border: 'border-cyan-400/60', shadow: 'shadow-cyan-500/30', hover: 'from-cyan-500/90 to-blue-600/90' }, // Scuba Diving
                  { bg: 'from-purple-500/80 to-indigo-600/80', border: 'border-purple-400/60', shadow: 'shadow-purple-500/30', hover: 'from-purple-500/90 to-indigo-600/90' }, // Para Sailing
                  { bg: 'from-orange-500/80 to-red-600/80', border: 'border-orange-400/60', shadow: 'shadow-orange-500/30', hover: 'from-orange-500/90 to-red-600/90' }, // River Rafting
                  { bg: 'from-teal-500/80 to-green-600/80', border: 'border-teal-400/60', shadow: 'shadow-teal-500/30', hover: 'from-teal-500/90 to-green-600/90' }  // Under Sea Walking
                ];
                
                const colors = adventureColors[index];
                
                return (
                  <motion.div
                    key={adventure.name}
                    className={`relative overflow-hidden rounded-2xl p-6 text-center group cursor-pointer h-48 bg-gradient-to-br ${colors.bg} border ${colors.border} shadow-xl ${colors.shadow} transition-all duration-300`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-white/50 rounded-tl-lg"></div>
                      <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-white/50 rounded-br-lg"></div>
                    </div>
                    
                    <div className="relative z-10 h-full flex flex-col justify-center">
                      <motion.div 
                        className="text-5xl mb-4 text-white transition-transform duration-300 group-hover:scale-110 drop-shadow-lg"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {adventure.icon}
                      </motion.div>
                      <h5 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-200 transition-colors duration-300 drop-shadow-md">{adventure.name}</h5>
                      <p className="text-sm text-white/90 group-hover:text-white transition-colors duration-300 drop-shadow-sm">{adventure.description}</p>
                      
                      {adventure.completed && (
                        <motion.div 
                          className="absolute top-4 right-4"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                            <span className="text-green-600 text-lg font-bold">✓</span>
                          </div>
                        </motion.div>
                      )}
                      
                      {/* Enhanced Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bucket List */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h5 className="text-2xl font-bold text-light mb-6 text-center">Bucket List</h5>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { name: 'Skydiving', icon: '✈️', color: 'from-blue-500/30 to-cyan-500/30' },
                  { name: 'Surfing', icon: '🌊', color: 'from-cyan-500/30 to-blue-600/30' },
                  { name: 'Skiing', icon: '🎿', color: 'from-slate-500/30 to-gray-600/30' },
                  { name: 'Mountain Biking', icon: '🚵', color: 'from-green-500/30 to-emerald-600/30' }
                ].map((item, index) => (
                  <motion.div
                    key={item.name}
                    className={`px-6 py-3 bg-gradient-to-r ${item.color} backdrop-blur-sm rounded-full border border-white/20 flex items-center gap-3 shadow-lg`}
                    whileHover={{ y: -3, scale: 1.05 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-light font-medium">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default PersonalLife;