
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const skills = [
  { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
  { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-400' },
  { name: 'Node.js', level: 88, color: 'from-green-500 to-green-400' },
  { name: 'Python', level: 85, color: 'from-yellow-500 to-yellow-400' },
  { name: 'React Native', level: 80, color: 'from-purple-500 to-pink-500' },
  { name: 'MongoDB', level: 82, color: 'from-green-600 to-green-500' },
  { name: 'AWS', level: 75, color: 'from-orange-500 to-orange-400' },
  { name: 'GraphQL', level: 78, color: 'from-pink-500 to-rose-500' },
];

const SkillBar = ({ skill, index }: { skill: typeof skills[0], index: number }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevel(skill.level);
    }, index * 200);

    return () => clearTimeout(timer);
  }, [skill.level, index]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-semibold">{skill.name}</span>
        <span className="text-white/70">{skill.level}%</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${animatedLevel}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
      </div>
    </motion.div>
  );
};

export const SkillsSection = () => {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            My Skills
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
