
import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe, Code } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
    image: '/placeholder.svg',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoLink: '#',
    codeLink: '#',
    icon: Globe,
  },
  {
    title: 'Mobile Banking App',
    description: 'React Native banking app with biometric authentication',
    image: '/placeholder.svg',
    tags: ['React Native', 'Firebase', 'Biometrics'],
    demoLink: '#',
    codeLink: '#',
    icon: Smartphone,
  },
  {
    title: 'AI Code Assistant',
    description: 'VS Code extension powered by OpenAI for code completion',
    image: '/placeholder.svg',
    tags: ['TypeScript', 'OpenAI', 'VS Code API'],
    demoLink: '#',
    codeLink: '#',
    icon: Code,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all group"
            >
              <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <project.icon size={64} className="text-white/60 group-hover:text-white transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.demoLink}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </motion.a>
                  <motion.a
                    href={project.codeLink}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
