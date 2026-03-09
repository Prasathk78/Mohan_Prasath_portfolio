
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Prasathk78', label: 'GitHub', gradient: 'from-gray-600 to-gray-800' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/mohanprasathk28?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn', gradient: 'from-blue-500 to-blue-700' },
  { icon: Instagram, href: 'https://www.instagram.com/praxath_mk?igsh=MTM0bDFjaTc4bm93dg==', label: 'Instagram', gradient: 'from-pink-500 via-purple-500 to-orange-500' },
];

export const SocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed bottom-8 left-8 z-40 hidden lg:flex flex-col gap-4"
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, x: 10, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className={`relative p-3 bg-gradient-to-br ${link.gradient} rounded-full shadow-lg hover:shadow-2xl transition-all group overflow-hidden`}
          title={link.label}
        >
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
          <link.icon size={22} className="text-white relative z-10" />
        </motion.a>
      ))}
      <div className="w-0.5 h-16 bg-gradient-to-b from-purple-500/50 to-transparent mx-auto mt-2" />
    </motion.div>
  );
};
