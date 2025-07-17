
import { motion } from 'framer-motion';
import { Download, Eye, FileText } from 'lucide-react';

export const ResumeSection = () => {
  const handleDownload = () => {
    // Create a dummy PDF download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'john-doe-resume.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Resume
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
            Download my resume to learn more about my experience, skills, and achievements
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10 mb-12"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="p-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
              <FileText size={64} className="text-white" />
            </div>
          </div>

          <h3 className="text-3xl font-bold text-white mb-4">John Doe - Full Stack Developer</h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            A comprehensive overview of my professional journey, technical skills, 
            educational background, and project accomplishments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold flex items-center gap-3 hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              <Download size={24} />
              Download Resume
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white/30 rounded-full text-white font-semibold flex items-center gap-3 hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              <Eye size={24} />
              Preview Online
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {['Experience', 'Education', 'Certifications'].map((item, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="text-xl font-bold text-white mb-2">{item}</h4>
              <p className="text-white/70">
                {item === 'Experience' && '5+ years in web development'}
                {item === 'Education' && 'Computer Science Degree'}
                {item === 'Certifications' && 'AWS, Google Cloud, MongoDB'}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
