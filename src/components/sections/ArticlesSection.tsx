
import { motion } from 'framer-motion';
import { Calendar, Clock, ExternalLink } from 'lucide-react';

const articles = [
  {
    title: 'Building Scalable React Applications',
    excerpt: 'Learn best practices for creating maintainable and scalable React applications...',
    date: '2024-01-15',
    readTime: '8 min read',
    link: '#',
    tags: ['React', 'Architecture', 'Best Practices'],
  },
  {
    title: 'Modern CSS Techniques for 2024',
    excerpt: 'Explore the latest CSS features and techniques that will improve your styling workflow...',
    date: '2024-01-10',
    readTime: '6 min read',
    link: '#',
    tags: ['CSS', 'Web Design', 'Frontend'],
  },
  {
    title: 'TypeScript Tips and Tricks',
    excerpt: 'Advanced TypeScript techniques that will make your code more robust and maintainable...',
    date: '2024-01-05',
    readTime: '12 min read',
    link: '#',
    tags: ['TypeScript', 'Development', 'Tips'],
  },
];

export const ArticlesSection = () => {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Featured Articles
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Insights and tutorials from my development journey
          </p>
        </motion.div>

        <div className="space-y-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  {article.title}
                </h3>
                <motion.a
                  href={article.link}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mt-2 md:mt-0"
                >
                  <ExternalLink size={16} />
                  Read More
                </motion.a>
              </div>

              <p className="text-white/70 mb-4 leading-relaxed">
                {article.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center gap-2 text-white/60">
                  <Calendar size={16} />
                  {new Date(article.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <Clock size={16} />
                  {article.readTime}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
