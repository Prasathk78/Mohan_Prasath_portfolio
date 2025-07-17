
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '../components/Navigation';
import { ParticleBackground } from '../components/ParticleBackground';
import { SocialLinks } from '../components/SocialLinks';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ContactSection } from '../components/sections/ContactSection';
import { ArticlesSection } from '../components/sections/ArticlesSection';
import { ProfilesSection } from '../components/sections/ProfilesSection';
import { ResumeSection } from '../components/sections/ResumeSection';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('hero');

  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -50 }
  };

  const pageTransition = {
    type: 'tween' as const,
    ease: 'anticipate',
    duration: 0.8
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'hero':
        return <HeroSection setCurrentSection={setCurrentSection} />;
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'skills':
        return <SkillsSection />;
      case 'contact':
        return <ContactSection />;
      case 'articles':
        return <ArticlesSection />;
      case 'profiles':
        return <ProfilesSection />;
      case 'resume':
        return <ResumeSection />;
      default:
        return <HeroSection setCurrentSection={setCurrentSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10" />
      </div>

      {/* Navigation */}
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />

      {/* Social Links */}
      <SocialLinks />

      {/* Main Content */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Index;
