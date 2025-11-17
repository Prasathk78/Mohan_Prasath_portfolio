import { motion } from 'framer-motion';
import { GraduationCap, Award, Briefcase, Calendar, Clock, ExternalLink } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Bishop Heber College, Trichy',
    period: 'March 2023 - April 2026 (Expected)',
    description: 'Specializing in AI, web development, and full-stack technologies',
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'Saraswathi Vidhayala Matric Hr. Sec School, Manapparai, Trichy',
    period: 'Completed March 2023',
    description: 'Foundation in science and mathematics',
  },
];

const experience = [
  {
    title: 'Research Author',
    company: 'Telematique Journal',
    period: 'Accepted October 11, 2025',
    description: 'Co-authored paper "SeeForMe: Real-Time Object Detection and Captioning for Visually Impaired Users Using YOLOv5 and BLIP" (ISSN: 1856-4194)',
  },
  {
    title: 'Full Stack Intern',
    company: 'Sphere Heads, Trichy',
    period: 'June 2025',
    description: 'Worked on React.js, Node.js, MongoDB. Focused on API integration and component optimization',
  },
  {
    title: 'Web Development Intern',
    company: 'ASPA, Tuticorin',
    period: 'May 1-15, 2025',
    description: 'Created and deployed a business website for a solar and motor system dealer using HTML, CSS, JS, Bootstrap',
  },
];

const certifications = [
  { name: 'Introduction to Artificial Intelligence – Great Learning', year: '2024' },
  { name: 'Complete Python Pro Bootcamp – Udemy', year: '2024' },
  { name: 'Mastering Advanced ChatGPT Prompt Engineering – Udemy', year: '2024' },
  { name: 'Automated ML with Google Cloud – Udemy', year: '2024' },
  { name: 'Google Ads Search Engine Campaign – Coursera', year: '2024' },
  { name: 'Creating Promotional Videos using Canva – Coursera', year: '2024' },
  { name: 'Web Development Internship – ASPA, Tuticorin', year: '2025' },
  { name: 'Full Stack Internship – Sphere Heads, Trichy', year: '2025' },
];

const articles = [
  {
    title: 'SeeForMe: Real-Time Object Detection and Captioning for Visually Impaired Users',
    excerpt: 'Co-authored research paper on AI-powered accessibility using YOLOv5 and BLIP. Published in Telematique Journal (ISSN: 1856-4194).',
    date: '2025-10-11',
    readTime: '8 min read',
    link: 'https://telematique.org',
    tags: ['AI', 'Research', 'Accessibility'],
  }
];



export const EducationSection = () => {
  return (
    <section id="education" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Education Section - First */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Education
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-accent/50 backdrop-blur-sm rounded-xl p-6 border border-border shadow-lg hover:shadow-purple-500/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
                    <p className="text-primary font-semibold mb-2">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm mb-3">{edu.period}</p>
                    <p className="text-foreground/80">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Section - Second */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Experience
            </h2>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-accent/50 backdrop-blur-sm rounded-xl p-6 border border-border shadow-lg hover:shadow-purple-500/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg">
                    <Briefcase size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{exp.title}</h3>
                    <p className="text-primary font-semibold mb-2">{exp.company}</p>
                    <p className="text-muted-foreground text-sm mb-3">{exp.period}</p>
                    <p className="text-foreground/80">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


        {/* Certifications Section - Fourth */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Certifications
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-accent/50 backdrop-blur-sm rounded-xl p-6 border border-border shadow-lg hover:shadow-purple-500/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg">
                    <Award size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">{cert.name}</h3>
                    <p className="text-muted-foreground text-sm">{cert.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Articles Section - Fifth */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Featured Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights and tutorials from my development journey
            </p>
          </motion.div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-accent/50 backdrop-blur-sm rounded-xl p-6 border border-border shadow-lg hover:shadow-purple-500/20 transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <motion.a
                    href={article.link}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mt-2 md:mt-0"
                  >
                    <ExternalLink size={16} />
                    Read More
                  </motion.a>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock size={16} />
                    {article.readTime}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
