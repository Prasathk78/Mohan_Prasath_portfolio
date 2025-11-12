import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  image?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    description: "Learn best practices for architecting large-scale React applications with performance in mind.",
    category: "React",
    date: "2024-01-15",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Understanding TypeScript Generics",
    description: "A deep dive into TypeScript generics and how they can make your code more reusable and type-safe.",
    category: "TypeScript",
    date: "2024-01-10",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Modern CSS Techniques with Tailwind",
    description: "Exploring advanced styling patterns and best practices with Tailwind CSS.",
    category: "CSS",
    date: "2024-01-05",
    readTime: "5 min read"
  },
  {
    id: 4,
    title: "API Design Best Practices",
    description: "Key principles for designing RESTful APIs that are intuitive and maintainable.",
    category: "Backend",
    date: "2023-12-28",
    readTime: "10 min read"
  },
  {
    id: 5,
    title: "State Management in React",
    description: "Comparing different state management solutions and when to use each approach.",
    category: "React",
    date: "2023-12-20",
    readTime: "7 min read"
  },
  {
    id: 6,
    title: "Web Performance Optimization",
    description: "Practical tips to improve your website's loading speed and user experience.",
    category: "Performance",
    date: "2023-12-15",
    readTime: "9 min read"
  },
  {
    id: 7,
    title: "Introduction to GraphQL",
    description: "Getting started with GraphQL and understanding its advantages over REST.",
    category: "Backend",
    date: "2023-12-10",
    readTime: "8 min read"
  },
  {
    id: 8,
    title: "Testing React Components",
    description: "A comprehensive guide to testing React components with Jest and React Testing Library.",
    category: "Testing",
    date: "2023-12-05",
    readTime: "11 min read"
  }
];

const categories = ["All", "React", "TypeScript", "CSS", "Backend", "Performance", "Testing"];
const POSTS_PER_PAGE = 6;

export const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <section id="blog" className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Blog
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Insights, tutorials, and articles about web development, programming, and technology
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => handleCategoryChange(category)}
              className={selectedCategory === category ? "bg-gradient-to-r from-purple-500 to-pink-500" : ""}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {paginatedPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 text-xs">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.description}</p>
                  <Button variant="link" className="mt-4 p-0 h-auto text-primary">
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft size={20} />
            </Button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => setCurrentPage(page)}
                className={currentPage === page ? "bg-gradient-to-r from-purple-500 to-pink-500" : ""}
              >
                {page}
              </Button>
            ))}
            
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight size={20} />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
