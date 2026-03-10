
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Youtube, ExternalLink } from 'lucide-react';

const profiles = [
  {
    name: 'GitHub',
    username: '@Prasathk78',
    description: 'Open source projects and contributions',
    icon: Github,
    color: 'from-gray-600 to-gray-500',
    link: 'https://github.com/Prasathk78',
    stats: '10+ repositories',
  },
  {
    name: 'LinkedIn',
    username: '@mohanprasathk28',
    description: 'Professional network and career updates',
    icon: Linkedin,
    color: 'from-blue-600 to-blue-500',
    link: 'https://www.linkedin.com/in/mohanprasathk28',
    stats: 'Connect with me',
  },
  {
    name: 'Instagram',
    username: '@praxath_mk',
    description: 'Behind the scenes and lifestyle',
    icon: Instagram,
    color: 'from-pink-600 to-purple-600',
    link: 'https://www.instagram.com/praxath_mk?igsh=MTM0bDFjaTc4bm93dg==',
    stats: 'Follow me',
  },
];

export const ProfilesSection = () => {
  return (
    <section id="profiles" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Find Me Online
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Connect with me across various platforms and stay updated with my latest work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {profiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.link}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent/50 backdrop-blur-sm rounded-xl p-6 border border-border shadow-lg hover:shadow-purple-500/20 transition-all group block"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 bg-gradient-to-r ${profile.color} rounded-lg shadow-lg`}>
                  <profile.icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {profile.name}
                  </h3>
                  <p className="text-muted-foreground">{profile.username}</p>
                </div>
              </div>
              
              <p className="text-foreground/70 mb-4">{profile.description}</p>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{profile.stats}</span>
                <div className="flex items-center gap-2 text-primary group-hover:text-primary/80 transition-colors">
                  <span className="text-sm">Visit</span>
                  <ExternalLink size={16} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
