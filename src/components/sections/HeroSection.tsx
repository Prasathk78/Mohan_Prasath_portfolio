import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import { ThreeScene } from '../ThreeScene';
import profileImage from '@/assets/profile.jpg';
import { ReactTyped } from 'react-typed';
import { useState, useEffect } from 'react';
interface HeroSectionProps {
  setCurrentSection: (section: string) => void;
}
export const HeroSection = ({
  setCurrentSection
}: HeroSectionProps) => {
  const quotes = [
    "Transforming ideas into interactive experiences.",
    "Building technology that connects people.",
    "Turning innovation into impact.",
    "Designing intelligent and accessible systems.",
    "Coding with curiosity, clarity, and creativity."
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-pink-900/20" />
      
      <div className="absolute inset-0 opacity-30">
        <ThreeScene />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Section - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left space-y-6"
          >
            {/* Greeting & Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                👋 Hi, I'm{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Mohan Prasath K
                </span>
              </h1>
            </motion.div>

            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl md:text-3xl text-foreground/90 font-medium"
            >
              <ReactTyped
                strings={[
                  "AI Enthusiast.",
                  "Full Stack Developer.",
                  "Problem Solver.",
                  "Innovator in Code.",
                  "Learning Beyond Limits."
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
                className="text-purple-400"
              />
            </motion.div>

            {/* Dynamic Rotating Quotes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="min-h-[60px] flex items-center justify-center lg:justify-start"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentQuote}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg md:text-xl text-foreground/70 italic"
                >
                  "{quotes[currentQuote]}"
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Location Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-base md:text-lg text-foreground/60"
            >
              🎓 Bishop Heber College, Trichy<br />
              📍 Trichy, Tamil Nadu, India
            </motion.div>

            {/* Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex justify-center lg:justify-start pt-4"
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
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 30px rgba(139, 92, 246, 0.3)',
                  '0 0 50px rgba(236, 72, 153, 0.4)',
                  '0 0 30px rgba(34, 211, 238, 0.3)',
                  '0 0 30px rgba(139, 92, 246, 0.3)',
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 p-1 shadow-2xl"
            >
              <div className="w-full h-full rounded-2xl overflow-hidden">
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