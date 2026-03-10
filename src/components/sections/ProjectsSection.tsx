
import { motion } from 'framer-motion';
import { Github, Smartphone, Globe, Code, MessageCircle, Bot, Heart, ShoppingBag } from 'lucide-react';

const projects = [
  {
    title: 'SeeForMe',
    description: 'AI-powered accessibility app with real-time object detection & audio feedback using YOLOv5 and BLIP',
    tags: ['Flutter', 'Flask', 'YOLOv5', 'BLIP', 'TTS'],
    codeLink: 'https://github.com/Prasathk78/seeforme',
    icon: Smartphone,
  },
  {
    title: 'FreeVerse',
    description: 'Interactive learning platform focused on accessibility, interactivity, and performance',
    tags: ['React.js', 'Bootstrap'],
    codeLink: 'https://github.com/Prasathk78/FreeVerse',
    icon: Globe,
  },
  {
    title: 'ASPA Power Professionals',
    description: 'Business website developed for a solar and motor systems dealer',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    codeLink: 'https://github.com/Prasathk78/aspa',
    icon: Globe,
  },
  {
    title: 'Weather Checker',
    description: 'Real-time weather app designed for agricultural analysis using MERN Stack',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    codeLink: 'https://github.com/Prasathk78/weatherchecker',
    icon: Code,
  },
  {
    title: 'Agri Connect',
    description: 'Farmer-to-consumer agricultural marketplace platform',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    codeLink: 'https://github.com/Prasathk78/AgriBazzar',
    icon: Globe,
  },
  {
    title: 'AltumAdvisor',
    description: 'AI-based advisory system designed for smart decision-making and analytics',
    tags: ['Python', 'Machine Learning', 'AI Models'],
    codeLink: 'https://github.com/Prasathk78/Altum-Advisor',
    icon: Bot,
  },
  {
    title: 'Pesuvom',
    description: 'Communication and interaction platform focused on digital conversation systems',
    tags: ['Web Technologies', 'JavaScript', 'Frontend'],
    codeLink: 'https://github.com/Prasathk78/pesuvom',
    icon: MessageCircle,
  },
  {
    title: 'Orphan Support System',
    description: 'Digital platform aimed at supporting orphanage management and assistance systems',
    tags: ['HTML', 'CSS', 'JavaScript', 'Web Dev'],
    codeLink: 'https://github.com/Prasathk78/orphan',
    icon: Heart,
  },
  {
    title: 'ChatGPT API Integration',
    description: 'Experimentation project integrating OpenAI APIs for conversational AI applications',
    tags: ['API Integration', 'JavaScript', 'AI Tools'],
    codeLink: 'https://github.com/Prasathk78/chatgpt-api',
    icon: Bot,
  },
  {
    title: 'Pet Shop Website',
    description: 'Web platform designed for showcasing and managing pet shop products and services',
    tags: ['HTML', 'CSS', 'JavaScript'],
    codeLink: 'https://github.com/Prasathk78/petshop',
    icon: ShoppingBag,
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
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
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
