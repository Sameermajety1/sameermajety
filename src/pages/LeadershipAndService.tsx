import { motion } from 'framer-motion';
import { FaCrown, FaBullhorn, FaHandsHelping, FaLightbulb, FaUserGraduate } from 'react-icons/fa';
import { FloatingParticle } from '../components/FloatingElements';

interface LeadershipRole {
  title: string;
  position: string;
  description: string;
  icon: React.ElementType;
  colorClass: string;
}

const iconColors = {
  crown: "from-purple-500 to-purple-700",
  bullhorn: "from-emerald-500 to-emerald-700",
  helping: "from-rose-500 to-rose-700",
  lightbulb: "from-amber-500 to-amber-700",
  graduate: "from-cyan-500 to-cyan-700"
};

const leadershipRoles: LeadershipRole[] = [
  {
    title: "Student Union Leadership",
    position: "President of 5th Student Union",
    description: "Led and represented the student body, organizing various academic and cultural events while fostering student engagement and community building.",
    icon: FaCrown,
    colorClass: iconColors.crown
  },
  {
    title: "Department Leadership",
    position: "Department Head – Publicity",
    description: "Managed and coordinated publicity initiatives, enhancing department visibility and communication strategies.",
    icon: FaBullhorn,
    colorClass: iconColors.bullhorn
  },
  {
    title: "Community Service",
    position: "Volunteer Activities",
    description: "Actively participated in various community service initiatives, contributing to social welfare and community development.",
    icon: FaHandsHelping,
    colorClass: iconColors.helping
  },
  {
    title: "Educational Leadership",
    position: "Founder & Head Mentor – Competitive Exam Mentorship Program",
    description: "Established and led a mentorship program to guide students in competitive exam preparation, fostering academic excellence.",
    icon: FaLightbulb,
    colorClass: iconColors.lightbulb
  },
  {
    title: "Academic Mentorship",
    position: "Tutor & Mentor – Interdisciplinary Medical Research Consortium (IMRC)",
    description: "Provided guidance and support in interdisciplinary medical research, promoting collaborative learning and research excellence.",
    icon: FaUserGraduate,
    colorClass: iconColors.graduate
  }
];

const LeadershipAndService = () => {
  return (
    <div className="relative">
      {/* Add floating elements for visual interest */}
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
      
      <div className="container mx-auto px-6 pt-8 md:pt-16 pb-8">
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
              Leadership & <span className="gradient-text">Service</span>
            </motion.h2>
          </motion.div>
          <motion.p 
            className="text-xl text-gray max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            My contributions to community and leadership roles
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {leadershipRoles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group backdrop-blur-sm"
            >
              <div className="flex flex-col items-center mb-4">
                <div className="relative mb-4">
                  <motion.div
                    className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${role.colorClass} rounded-xl transform group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <role.icon className="w-9 h-9 text-white" />
                  </motion.div>
                  <motion.div 
                    className="absolute inset-0 rounded-xl"
                    animate={{ 
                      boxShadow: [
                        `0 0 0 0px ${index % 2 === 0 ? 'rgba(255, 255, 255, 0.2)' : 'rgba(4, 71, 171, 0.2)'}`, 
                        `0 0 0 12px ${index % 2 === 0 ? 'rgba(255, 255, 255, 0)' : 'rgba(4, 71, 171, 0)'}`
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <h3 className={`text-xl font-bold mb-1 text-center bg-gradient-to-r ${role.colorClass} bg-clip-text text-transparent`}>{role.title}</h3>
                <h4 className="text-lg font-medium mb-3 text-center text-accent font-serif italic">{role.position}</h4>
              </div>
              <p className="text-gray-400 leading-relaxed text-center text-base">{role.description}</p>
            </motion.div>
          ))}
          
          {/* Interactive lightning spinner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="lg:block hidden relative bg-gradient-to-r from-gray-900/30 to-gray-800/30 rounded-xl p-6 backdrop-blur-sm overflow-hidden cursor-pointer"
          >
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="relative"
                whileTap={{ 
                  rotate: 360,
                  transition: { 
                    duration: 0.5,
                    ease: "linear",
                    repeat: 3
                  }
                }}
              >
                <motion.div
                  className="text-5xl"
                  animate={{ 
                    filter: [
                      'drop-shadow(0 0 8px rgba(4, 71, 171, 0.6))',
                      'drop-shadow(0 0 15px rgba(4, 71, 171, 0.8))',
                      'drop-shadow(0 0 8px rgba(4, 71, 171, 0.6))'
                    ]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ⚡
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipAndService;
