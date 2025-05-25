'use client';

import { motion } from 'framer-motion';
import { Button } from '@heroui/button';
import { CustomCursor } from '@/components/CustomCursor';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    slug: 'building-modern-web-applications-with-nextjs-13',
    title: 'Building Modern Web Applications with Next.js 13',
    description: 'Learn how to leverage the power of Next.js 13 to build fast, SEO-friendly web applications with great developer experience.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    date: 'March 15, 2024',
    readTime: '8 min read',
    category: 'Development',
    tags: ['Next.js', 'React', 'Web Development']
  },
  {
    slug: 'future-of-ui-design-trends-2024',
    title: 'The Future of UI Design: Trends to Watch in 2024',
    description: 'Explore the latest UI design trends that are shaping the future of digital experiences and how to implement them in your projects.',
    image: 'https://images.unsplash.com/photo-1618788372246-79faff0c3742',
    date: 'March 10, 2024',
    readTime: '6 min read',
    category: 'Design',
    tags: ['UI/UX', 'Design Trends', 'Web Design']
  },
  {
    slug: 'mastering-typescript-advanced-tips',
    title: 'Mastering TypeScript: Advanced Tips and Tricks',
    description: 'Deep dive into advanced TypeScript features and patterns that will help you write better, more maintainable code.',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
    date: 'March 5, 2024',
    readTime: '10 min read',
    category: 'Programming',
    tags: ['TypeScript', 'JavaScript', 'Programming']
  }
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
          {post.description}
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
    <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-background">
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
              Thoughts, learnings, and insights about web development, design, and technology.
            </motion.p>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <Badge 
                      variant="flat" 
                      className="absolute top-4 left-4 bg-primary/90 text-primary-foreground"
                    >
                      {post.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono mb-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="flat" 
                          className="bg-secondary/50 text-foreground border border-border"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
