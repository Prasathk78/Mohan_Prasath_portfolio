
import { useState, useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { ParticleBackground } from '../components/ParticleBackground';
import { SocialLinks } from '../components/SocialLinks';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { EducationSection } from '../components/sections/EducationSection';
import { BlogSection } from '../components/sections/BlogSection';
import { ProfilesSection } from '../components/sections/ProfilesSection';
import { Footer } from '../components/Footer';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('hero');

  // Scroll spy - detect which section is in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'education', 'projects', 'blog', 'profiles', 'contact'];
      const scrollPosition = window.scrollY + 100; // Account for navbar

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10 dark:from-purple-900/20 dark:to-pink-900/20 transition-all duration-500" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />

        {/* Social Links */}
        <SocialLinks />

        {/* Main Content - Vertical Layout */}
        <main>
          <HeroSection setCurrentSection={setCurrentSection} />
          <AboutSection />
          <EducationSection />
          <ProjectsSection />
          <BlogSection />
          <ProfilesSection />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Index;
