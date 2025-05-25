'use client';

import { motion } from 'framer-motion';
import { Button } from '@heroui/button';
import { CustomCursor } from '@/components/CustomCursor';

const blogPosts = [
  {
    title: 'The Future of Web Development',
    excerpt: 'Exploring the latest trends and technologies shaping the future of web development.',
    category: 'Development',
    date: 'Mar 15, 2024',
    readTime: '5 min read',
    image: '/blog1.jpg',
  },
  {
    title: 'Mastering TypeScript',
    excerpt: 'A comprehensive guide to TypeScript features and best practices.',
    category: 'Tutorial',
    date: 'Mar 12, 2024',
    readTime: '8 min read',
    image: '/blog2.jpg',
  },
  {
    title: 'UI Design Principles',
    excerpt: 'Essential principles for creating beautiful and functional user interfaces.',
    category: 'Design',
    date: 'Mar 10, 2024',
    readTime: '6 min read',
    image: '/blog3.jpg',
  },
];

const BlogCard = ({ post, index }: { post: typeof blogPosts[0]; index: number }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all"
    >
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-3 text-sm font-mono text-gray-400">
          <span className="px-2 py-1 bg-white/10 rounded-full">{post.category}</span>
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>

        <h2 className="text-2xl font-grotesk font-bold group-hover:text-white transition-colors">
          {post.title}
        </h2>

        <p className="text-gray-400 font-mono text-sm line-clamp-2">
          {post.excerpt}
        </p>

        <Button
          className="magnetic-button bg-transparent border border-white/20 text-white hover:bg-white hover:text-black font-mono text-sm transition-all"
          variant="ghost"
        >
          Read More
        </Button>
      </div>

      <motion.div
        className="absolute -bottom-2 -right-2 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 1.2 }}
      />
    </motion.article>
  );
};

const BlogPage = () => {
  return (
    <main className="bg-black text-white min-h-screen relative">
      <CustomCursor />

      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-white/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-white/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold font-grotesk mb-6 relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Blog & Insights
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-white"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.h1>
            <motion.p
              className="text-xl text-gray-400 font-mono max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Thoughts, tutorials, and insights about web development and design.
            </motion.p>
          </motion.div>

          {/* Blog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.title} post={post} index={index} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
