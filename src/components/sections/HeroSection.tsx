import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';
import { ReactTyped } from 'react-typed';
interface HeroSectionProps {
  setCurrentSection: (section: string) => void;
}
export const HeroSection = ({
  setCurrentSection
}: HeroSectionProps) => {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setCurrentSection(sectionId);
    }
  };
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-pink-900/20" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:gap-2">
          
          {/* Left Section - Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 w-full lg:w-auto text-center lg:text-left space-y-4"
          >
            {/* Greeting & Name */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-2"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent block mt-1">
                  Mohan Prasath K
                </span>
              </h1>
            </motion.div>

            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-sm md:text-base text-purple-400 font-medium min-h-[24px]"
            >
              <ReactTyped
                strings={[
                  "Building Intelligent Systems",
                  "Creating Interactive Experiences",
                  "Full Stack Developer",
                  "AI Developer",
                  "Turning Ideas Into Reality"
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </motion.div>

            {/* Location Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-sm md:text-base text-foreground/60 leading-relaxed pt-2 space-y-1"
            >
              <div>🎓 Bishop Heber College, Trichy</div>
              <div>📍 Trichy, Tamil Nadu, India</div>
            </motion.div>

            {/* Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex justify-center lg:justify-start pt-6"
            >
              <motion.a
                href="#"
                download="Mohan-Prasath-K-Resume.pdf"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold flex items-center gap-2 hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg"
              >
                <Download size={20} />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Section - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex-shrink-0"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="relative w-64 h-80 md:w-72 md:h-96 rounded-xl bg-gradient-to-br from-purple-500/80 via-pink-500/80 to-cyan-500/80 p-[2px] shadow-xl"
            >
              <div className="w-full h-full rounded-xl overflow-hidden bg-background">
                <img 
                  src={profileImage} 
                  alt="Mohan Prasath K" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};