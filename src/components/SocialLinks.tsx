
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
];

export const SocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed bottom-8 left-8 z-50 hidden md:flex flex-col gap-4"
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, x: 5 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white/60 hover:text-white hover:bg-purple-500/20 transition-all border border-white/20"
          title={link.label}
        >
          <link.icon size={20} />
        </motion.a>
      ))}
    </motion.div>
  );
};
