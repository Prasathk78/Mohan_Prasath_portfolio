import { motion } from 'framer-motion';
import { Github, ExternalLink, Smartphone, Globe, Code, MessageCircle, Bot, Heart, LayoutGrid } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
  badge?: 'Published Project' | 'Current Project';
  icon: LucideIcon;
};

const projects: Project[] = [
  {
    title: 'SeeForMe',
    description: 'AI-powered accessibility app with real-time object detection and audio feedback using YOLOv5 and BLIP.',
    tags: ['Flutter', 'Flask', 'YOLOv5', 'BLIP', 'TTS'],
    codeLink: 'https://github.com/Prasathk78/seeforme',
    badge: 'Published Project',
    icon: Smartphone,
  },
  {
    title: 'FreeVerse',
    description: 'Interactive learning platform focused on accessibility, interactivity, and performance.',
    tags: ['React.js', 'Bootstrap'],
    demoLink: 'https://freeversee.netlify.app/',
    codeLink: 'https://github.com/Prasathk78/FreeVerse',
    icon: Globe,
  },
  {
    title: 'ASPA Power Professionals',
    description: 'Business website developed for a solar power and motor systems dealer.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    demoLink: 'https://aspa.onrender.com/',
    codeLink: 'https://github.com/Prasathk78/aspa',
    icon: Globe,
  },
  {
    title: 'Weather Checker',
    description: 'Real-time weather application designed for agricultural analysis using the MERN stack.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    demoLink: 'https://webfarmtracker.netlify.app/',
    codeLink: 'https://github.com/Prasathk78/weatherchecker',
    icon: Code,
  },
  {
    title: 'Agri Connect',
    description: 'Farmer-to-consumer agricultural marketplace platform.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    demoLink: 'https://agriiconnect.netlify.app/',
    codeLink: 'https://github.com/Prasathk78/AgriBazzar',
    icon: Globe,
  },
  {
    title: 'AltumAdvisor',
    description: 'AI-based advisory system designed for smart decision-making and analytics.',
    tags: ['Python', 'Machine Learning', 'AI Models'],
    demoLink: 'https://altum-advisor.netlify.app/',
    codeLink: 'https://github.com/Prasathk78/Altum-Advisor',
    icon: Bot,
  },
  {
    title: 'Pesuvom',
    description: 'Communication and interaction platform focused on digital conversation systems.',
    tags: ['Web Technologies', 'JavaScript', 'Frontend'],
    demoLink: 'https://pesuvom-1.onrender.com/',
    codeLink: 'https://github.com/Prasathk78/pesuvom',
    icon: MessageCircle,
  },
  {
    title: 'Projora',
    description: 'Project showcase website.',
    tags: [],
    demoLink: 'https://projora.netlify.app/',
    icon: LayoutGrid,
  },
  {
    title: 'Orphan Support System',
    description: 'Digital platform aimed at supporting orphanage management and assistance systems.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    badge: 'Current Project',
    icon: Heart,
  },
  {
    title: 'ChatGPT API Integration',
    description: 'Project integrating OpenAI APIs for conversational AI applications.',
    tags: ['API Integration', 'JavaScript', 'AI Tools'],
    badge: 'Current Project',
    icon: Bot,
  },
];

const btnBase =
  'flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary';

const ActionButton = ({ href, label, soonLabel, icon: Icon, project }: { href?: string; label: string; soonLabel: string; icon: LucideIcon; project: string }) =>
  href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} for ${project} (opens in new tab)`}
      className={`${btnBase} border-primary/30 bg-primary/10 text-primary hover:bg-primary/20`}
    >
      <Icon size={16} />
      {label}
    </a>
  ) : (
    <button
      type="button"
      disabled
      title={`${soonLabel} for ${project}`}
      aria-label={`${soonLabel} for ${project}`}
      className={`${btnBase} border-border text-muted-foreground opacity-60 cursor-not-allowed`}
    >
      <Icon size={16} />
      {soonLabel}
    </button>
  );

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              whileHover={{ y: -8 }}
              className="flex flex-col bg-accent/50 backdrop-blur-sm rounded-xl overflow-hidden border border-border shadow-lg hover:shadow-purple-500/20 transition-all group"
            >
              <div className="relative h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <project.icon size={56} className="text-foreground/60 group-hover:text-primary transition-colors" />
                {project.badge && (
                  <span
                    className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold border ${
                      project.badge === 'Published Project'
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-background/80 text-foreground border-border'
                    }`}
                  >
                    {project.badge}
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                {project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex gap-3 mt-auto">
                  <ActionButton href={project.demoLink} label="Live Demo" soonLabel="Demo Coming Soon" icon={ExternalLink} project={project.title} />
                  <ActionButton href={project.codeLink} label="GitHub" soonLabel="GitHub Coming Soon" icon={Github} project={project.title} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
