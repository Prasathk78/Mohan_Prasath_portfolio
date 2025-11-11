import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { GraduationCap, Award, Briefcase, Calendar, Clock, ExternalLink } from 'lucide-react';

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

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Technology',
    period: '2015 - 2019',
    description: 'Specialized in software engineering and web development',
  },
  {
    degree: 'Master of Science in Software Engineering',
    institution: 'Tech Institute',
    period: '2019 - 2021',
    description: 'Advanced studies in distributed systems and cloud architecture',
  },
];

const experience = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Corp',
    period: '2021 - Present',
    description: 'Leading development of scalable web applications',
  },
  {
    title: 'Full Stack Developer',
    company: 'StartUp Inc',
    period: '2019 - 2021',
    description: 'Built and maintained multiple client projects',
  },
  {
    title: 'Junior Developer',
    company: 'Digital Agency',
    period: '2018 - 2019',
    description: 'Developed frontend components and APIs',
  },
];

const certifications = [
  { name: 'AWS Certified Solutions Architect', year: '2023' },
  { name: 'Google Cloud Professional', year: '2022' },
  { name: 'MongoDB Certified Developer', year: '2021' },
  { name: 'React Advanced Patterns', year: '2021' },
];

const articles = [
  {
    title: 'Building Scalable React Applications',
    excerpt: 'Learn best practices for creating maintainable and scalable React applications...',
    date: '2024-01-15',
    readTime: '8 min read',
    link: '#',
    tags: ['React', 'Architecture', 'Best Practices'],
  },
  {
    title: 'Modern CSS Techniques for 2024',
    excerpt: 'Explore the latest CSS features and techniques that will improve your styling workflow...',
    date: '2024-01-10',
    readTime: '6 min read',
    link: '#',
    tags: ['CSS', 'Web Design', 'Frontend'],
  },
  {
    title: 'TypeScript Tips and Tricks',
    excerpt: 'Advanced TypeScript techniques that will make your code more robust and maintainable...',
    date: '2024-01-05',
    readTime: '12 min read',
    link: '#',
    tags: ['TypeScript', 'Development', 'Tips'],
  },
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
        <span className="text-foreground font-semibold">{skill.name}</span>
        <span className="text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
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

export const EducationSection = () => {
  return (
    <section id="education" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Education Section - First */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Education
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-accent/50 backdrop-blur-sm rounded-xl p-6 border border-border shadow-lg hover:shadow-purple-500/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
                    <p className="text-primary font-semibold mb-2">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm mb-3">{edu.period}</p>
                    <p className="text-foreground/80">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Section - Second */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Experience
            </h2>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-accent/50 backdrop-blur-sm rounded-xl p-6 border border-border shadow-lg hover:shadow-purple-500/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg">
                    <Briefcase size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{exp.title}</h3>
                    <p className="text-primary font-semibold mb-2">{exp.company}</p>
                    <p className="text-muted-foreground text-sm mb-3">{exp.period}</p>
                    <p className="text-foreground/80">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Section - Third */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Skills
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Certifications Section - Fourth */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Certifications
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-accent/50 backdrop-blur-sm rounded-xl p-6 border border-border shadow-lg hover:shadow-purple-500/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg">
                    <Award size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">{cert.name}</h3>
                    <p className="text-muted-foreground text-sm">{cert.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Articles Section - Fifth */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Featured Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights and tutorials from my development journey
            </p>
          </motion.div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-accent/50 backdrop-blur-sm rounded-xl p-6 border border-border shadow-lg hover:shadow-purple-500/20 transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <motion.a
                    href={article.link}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mt-2 md:mt-0"
                  >
                    <ExternalLink size={16} />
                    Read More
                  </motion.a>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock size={16} />
                    {article.readTime}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
