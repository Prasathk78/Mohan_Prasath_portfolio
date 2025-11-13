
import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe, Code } from 'lucide-react';

const projects = [
  {
    title: 'SeeForMe',
    description: 'AI-powered accessibility app with real-time object detection & audio feedback using YOLOv5 and BLIP',
    image: '/placeholder.svg',
    tags: ['Flutter', 'Flask', 'YOLOv5', 'BLIP', 'TTS'],
    demoLink: '#',
    codeLink: '#',
    icon: Smartphone,
  },
  {
    title: 'FreeVerse',
    description: 'Interactive learning platform focused on accessibility, interactivity, and performance',
    image: '/placeholder.svg',
    tags: ['React.js', 'Bootstrap'],
    demoLink: 'https://lnkd.in/dfyX_nSu',
    codeLink: 'https://github.com/Prasathk78',
    icon: Globe,
  },
  {
    title: 'ASPA Power Professionals',
    description: 'Business website for solar and motor systems dealer',
    image: '/placeholder.svg',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    demoLink: 'https://aspa.onrender.com/',
    codeLink: 'https://github.com/Prasathk78',
    icon: Globe,
  },
  {
    title: 'Weather Checker',
    description: 'Real-time weather app for agricultural analysis using MERN Stack',
    image: '/placeholder.svg',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    demoLink: '#',
    codeLink: '#',
    icon: Code,
  },
  {
    title: 'Agri Connect',
    description: 'Farmer-to-consumer connection platform using MERN Stack',
    image: '/placeholder.svg',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    demoLink: '#',
    codeLink: '#',
    icon: Globe,
  },
  {
    title: 'Crop Disease Detector',
    description: 'AutoML-based crop disease detection system for farmers',
    image: '/placeholder.svg',
    tags: ['AutoML', 'Python', 'Machine Learning'],
    demoLink: '#',
    codeLink: '#',
    icon: Code,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-accent/50 backdrop-blur-sm rounded-xl overflow-hidden border border-border shadow-lg hover:shadow-purple-500/20 transition-all group"
            >
              <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <project.icon size={64} className="text-foreground/60 group-hover:text-primary transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/30"
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
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </motion.a>
                  <motion.a
                    href={project.codeLink}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
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
