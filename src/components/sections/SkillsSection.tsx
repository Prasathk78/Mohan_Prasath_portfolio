import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

const skills = [
  {
    category: 'AI & Python Development',
    percentage: 90,
    technologies: 'Python, NLP, Computer Vision, YOLOv5, BLIP',
  },
  {
    category: 'Frontend Development',
    percentage: 80,
    technologies: 'HTML, CSS, JavaScript, React.js, Bootstrap',
  },
  {
    category: 'Backend Development',
    percentage: 90,
    technologies: 'Node.js, Express.js, Flask, API Development',
  },
  {
    category: 'DBMS',
    percentage: 90,
    technologies: 'MongoDB, SQL, Data Modeling',
  },
  {
    category: 'Networking',
    percentage: 55,
    technologies: 'Basic Networking Concepts, Protocols',
  },
  {
    category: 'AI & No-Code Development',
    percentage: 90,
    technologies: 'Cursor.ai, Lovable.ai, ChatGPT, Wix, WordPress, Canva Automation Tools',
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-background to-pink-900/10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-foreground/60">Technologies and tools I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="backdrop-blur-xl bg-gradient-to-br from-purple-500/10 via-background/50 to-pink-500/10 border border-white/10 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/20 transition-all"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-foreground">
                  {skill.category}
                </h3>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {skill.percentage}%
                </span>
              </div>
              
              <div className="relative mb-3 group">
                <Progress 
                  value={skill.percentage} 
                  className="h-3 bg-background/50 border border-white/5"
                />
                <div 
                  className="absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-purple-500/50"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>

              <p className="text-sm text-foreground/60">
                {skill.technologies}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
