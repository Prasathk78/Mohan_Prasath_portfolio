import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { ThreeScene } from '../ThreeScene';
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
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-pink-900/20" />
      
      <div className="absolute inset-0 opacity-30">
        <ThreeScene />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="space-y-8">
          {/* Profile Image */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.1,
          duration: 0.8
        }} className="flex justify-center mb-8">
            <div className="relative w-64 h-80 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center overflow-hidden mx-0">
                <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              </div>
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3,
          duration: 0.8
        }} className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Mohan Prasath K
          </motion.h1>

          {/* Role */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.5,
          duration: 0.8
        }} className="text-xl md:text-2xl text-foreground/80 font-light">
            <motion.span initial={{
            x: -100,
            opacity: 0
          }} animate={{
            x: 0,
            opacity: 1
          }} transition={{
            delay: 0.7,
            duration: 1.2,
            ease: "easeOut"
          }} className="inline-block">AI & Full Stack Developer (Student)
🎓Bishop Heber College, Trichy
📍 Tamil Nadu, India
          </motion.span>
          </motion.div>

          {/* Download Button */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.9,
          duration: 0.8
        }} className="flex justify-center">
            <motion.a href="#" download="Mohan-Prasath-K-Resume.pdf" whileHover={{
            scale: 1.05,
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)'
          }} whileTap={{
            scale: 0.95
          }} className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold flex items-center gap-2 hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg">
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1.2,
        duration: 0.8
      }} className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.button onClick={() => scrollToSection('about')} animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} className="text-foreground/60 hover:text-foreground transition-colors">
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>;
};