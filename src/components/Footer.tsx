import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, MessageCircle, Download } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Prasathk78', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/mohanprasathk28', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/praxath_mk', label: 'Instagram' },
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
    <footer id="contact" className="relative py-12 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-xl bg-gradient-to-br from-purple-500/10 via-background/50 to-pink-500/10 border border-border/30 rounded-2xl p-6 md:p-8 shadow-xl"
        >
          {/* Contact + Social row */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 border border-primary/20">
                    <info.icon className="w-4 h-4 text-primary" />
                  </div>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-foreground/80 hover:text-primary transition-colors text-sm"
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span className="text-foreground/80 text-sm">{info.text}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Social Links + Resume */}
            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 bg-primary/10 rounded-full hover:bg-primary/20 transition-all border border-primary/20 hover:border-primary/40"
                    title={link.label}
                  >
                    <link.icon size={18} className="text-foreground/80" />
                  </motion.a>
                ))}
              </div>

              <motion.a
                href="#"
                download="Mohan-Prasath-K-Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-semibold flex items-center gap-2 hover:from-purple-600 hover:to-pink-600 transition-all shadow-md"
              >
                <Download size={16} />
                Download Resume
              </motion.a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-4 border-t border-border/20">
            <p className="text-foreground/50 text-xs">
              © Copyright Mohan Prasath K – All Rights Reserved
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
