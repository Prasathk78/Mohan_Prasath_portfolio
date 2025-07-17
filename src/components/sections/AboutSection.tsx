
import { motion } from 'framer-motion';
import { Code, Award, Users, Zap } from 'lucide-react';

const achievements = [
  { icon: Code, title: '50+ Projects', description: 'Built diverse applications' },
  { icon: Award, title: '5+ Years', description: 'Professional experience' },
  { icon: Users, title: '100K+ Users', description: 'Impacted globally' },
  { icon: Zap, title: 'Fast Delivery', description: 'Always on time' },
];

export const AboutSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with expertise in modern web technologies. 
            I love creating beautiful, functional applications that solve real-world problems 
            and deliver exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                  <achievement.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-white/70">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <p className="text-lg text-white/90 leading-relaxed">
              "I believe in the power of technology to transform lives and businesses. 
              Every line of code I write is an opportunity to create something meaningful 
              and impactful. Let's build the future together."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
