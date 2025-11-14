import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Skill {
  category: string;
  percentage: number;
  description: string;
}

const skills: Skill[] = [
  {
    category: "AI & Python Development",
    percentage: 90,
    description: "Python, NLP, Computer Vision, YOLOv5, BLIP"
  },
  {
    category: "Frontend Development",
    percentage: 80,
    description: "HTML, CSS, JavaScript, React.js, Bootstrap"
  },
  {
    category: "Backend Development",
    percentage: 90,
    description: "Node.js, Express.js, Flask, API Development"
  },
  {
    category: "DBMS",
    percentage: 90,
    description: "MongoDB, SQL, Data Modeling"
  },
  {
    category: "Networking",
    percentage: 55,
    description: "Basic Networking Concepts, Protocols"
  },
  {
    category: "AI & No-Code Development",
    percentage: 90,
    description: "Cursor.ai, Lovable.ai, ChatGPT, Wix, WordPress, Canva Automation Tools"
  }
];

const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="backdrop-blur-sm bg-card/30 border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            {skill.category}
          </h3>
          <span className="text-2xl font-bold text-primary">{skill.percentage}%</span>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
        
        <div className="relative h-3 bg-secondary/30 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isVisible ? `${skill.percentage}%` : 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"
            style={{
              boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground">
            My technical proficiency across different domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <SkillBar key={skill.category} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
