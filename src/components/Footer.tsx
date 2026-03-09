import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Prasathk78', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/mohanprasathk28', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/praxath_mk?igsh=MTM0bDFjaTc4bm93dg==', label: 'Instagram' },
  { icon: MessageCircle, href: 'https://wa.me/917904950447', label: 'WhatsApp' },
  { icon: Mail, href: 'mailto:mohanprasathk78@gmail.com', label: 'Email' },
];

const contactInfo = [
  { icon: Mail, text: 'mohanprasathk78@gmail.com', href: 'mailto:mohanprasathk78@gmail.com' },
  { icon: Phone, text: '+91 7904950447', href: 'tel:+917904950447' },
  { icon: MapPin, text: 'Trichy, Tamil Nadu, India', href: null },
];

export const Footer = () => {
  return (
    <footer id="contact" className="relative py-20 px-6 overflow-hidden">
      {/* Thin gradient separator line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
      
      {/* Animated particle background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-[10%] w-32 h-32 bg-purple-500/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-[15%] w-40 h-40 bg-pink-500/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Glassmorphism container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-gradient-to-br from-purple-500/10 via-background/50 to-pink-500/10 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          {/* Contact Information */}
          <div className="space-y-6 mb-10">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center justify-center gap-4"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                  <info.icon className="w-5 h-5 text-purple-400" />
                </div>
                {info.href ? (
                  <a 
                    href={info.href}
                    className="text-foreground/80 hover:text-purple-400 transition-colors text-base md:text-lg"
                  >
                    {info.text}
                  </a>
                ) : (
                  <span className="text-foreground/80 text-base md:text-lg">{info.text}</span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center gap-4 mb-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-3 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full hover:from-purple-500/50 hover:to-pink-500/50 transition-all shadow-lg hover:shadow-purple-500/50 group"
                title={link.label}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-full blur-sm" />
                <link.icon size={20} className="text-white relative z-10" />
              </motion.a>
            ))}
          </motion.div>

          {/* Resume Download */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <motion.a
              href="#"
              download="Mohan-Prasath-K-Resume.pdf"
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(139, 92, 246, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold flex items-center gap-2 hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              Download Resume
            </motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center pt-6 border-t border-white/10"
          >
            <p className="text-foreground/60 text-sm">
              © Copyright Mohan Prasath K – All Rights Reserved
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};
