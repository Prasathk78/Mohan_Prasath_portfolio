
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

const sections = [
  { id: 'hero', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'projects', title: 'Projects' },
  { id: 'skills', title: 'Skills' },
  { id: 'contact', title: 'Contact' },
  { id: 'articles', title: 'Articles' },
  { id: 'profiles', title: 'Profiles' },
  { id: 'resume', title: 'Resume' },
];

export const Navigation = ({ currentSection, setCurrentSection }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Portfolio
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => setCurrentSection(section.id)}
                  className={`text-white/80 hover:text-white transition-colors ${
                    currentSection === section.id ? 'text-purple-400' : ''
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.title}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed top-0 right-0 h-full w-64 bg-black/90 backdrop-blur-md z-40 md:hidden"
      >
        <div className="pt-20 px-6">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => {
                setCurrentSection(section.id);
                setIsOpen(false);
              }}
              className={`block w-full text-left py-3 text-white/80 hover:text-white transition-colors ${
                currentSection === section.id ? 'text-purple-400' : ''
              }`}
              whileHover={{ x: 10 }}
            >
              {section.title}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  );
};
