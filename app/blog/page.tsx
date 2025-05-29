'use client';

import { motion } from 'framer-motion';
import { Button } from '@heroui/button';
import { CustomCursor } from '@/components/CustomCursor';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@heroui/react';
import { Link } from '@heroui/link';
import Image from 'next/image';
import { Search, Calendar, Clock, ArrowRight, Filter } from 'lucide-react';

const blogPosts = [
  {
    slug: 'building-modern-web-applications-with-nextjs-13',
    title: 'Building Modern Web Applications with Next.js 13',
    description: 'Learn how to leverage the power of Next.js 13 to build fast, SEO-friendly web applications with great developer experience.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    date: 'March 15, 2024',
    readTime: '8 min read',
    category: 'Development',
    tags: ['Next.js', 'React', 'Web Development'],
    author: {
      name: 'Dale Anderson',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      role: 'Senior Developer'
    }
  },
  {
    slug: 'future-of-ui-design-trends-2024',
    title: 'The Future of UI Design: Trends to Watch in 2024',
    description: 'Explore the latest UI design trends that are shaping the future of digital experiences and how to implement them in your projects.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    date: 'March 10, 2024',
    readTime: '6 min read',
    category: 'Design',
    tags: ['UI/UX', 'Design Trends', 'Web Design'],
    author: {
      name: 'Dale Anderson',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      role: 'Senior Developer'
    }
  },
  {
    slug: 'mastering-typescript-advanced-tips',
    title: 'Mastering TypeScript: Advanced Tips and Tricks',
    description: 'Deep dive into advanced TypeScript features and patterns that will help you write better, more maintainable code.',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
    date: 'March 5, 2024',
    readTime: '10 min read',
    category: 'Programming',
    tags: ['TypeScript', 'JavaScript', 'Programming'],
    author: {
      name: 'Dale Anderson',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      role: 'Senior Developer'
    }
  },
  {
    slug: 'modern-web-animation-techniques',
    title: 'Modern Web Animation Techniques for Better UX',
    description: 'Discover how to create smooth, engaging animations that enhance user experience without sacrificing performance.',
    image: 'https://images.unsplash.com/photo-1550439062-609e1531270e',
    date: 'March 1, 2024',
    readTime: '7 min read',
    category: 'Frontend',
    tags: ['Animation', 'CSS', 'JavaScript', 'UX'],
    author: {
      name: 'Dale Anderson',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      role: 'Senior Developer'
    }
  },
  {
    slug: 'ai-driven-development-tools',
    title: 'AI-Driven Development Tools for Modern Developers',
    description: 'Explore how artificial intelligence is transforming software development with smart code completion, bug detection, and more.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb',
    date: 'February 28, 2024',
    readTime: '9 min read',
    category: 'AI',
    tags: ['AI', 'Development Tools', 'Productivity'],
    author: {
      name: 'Dale Anderson',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      role: 'Senior Developer'
    }
  },
  {
    slug: 'microservices-best-practices',
    title: 'Microservices Architecture: Best Practices and Patterns',
    description: 'Learn essential patterns and practices for building scalable, maintainable microservices architectures.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    date: 'February 25, 2024',
    readTime: '12 min read',
    category: 'Architecture',
    tags: ['Microservices', 'System Design', 'Backend'],
    author: {
      name: 'Dale Anderson',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      role: 'Senior Developer'
    }
  }
];

const categories = [
  'All',
  'Development',
  'Design',
  'Programming',
  'Frontend',
  'AI',
  'Architecture'
];

const FeaturedPost = ({ post }: { post: typeof blogPosts[0] }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative h-[600px] rounded-2xl overflow-hidden group"
    >
      <Image
        src={post.image}
        alt={post.title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      
      <div className="absolute inset-0 p-12 flex flex-col justify-end">
        <div className="space-y-6">
          <Badge 
            size="lg"
            className="bg-primary/90 text-white"
          >
            Featured Post
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold font-grotesk text-white group-hover:text-primary transition-colors">
            {post.title}
          </h2>

          <p className="text-lg text-white/70 font-mono max-w-2xl">
            {post.description}
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <Image
                src={post.author.image}
                alt={post.author.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <div className="font-grotesk font-bold text-white">{post.author.name}</div>
                <div className="text-sm text-white/60 font-mono">{post.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-white/60 font-mono text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const BlogCard = ({ post, index }: { post: typeof blogPosts[0]; index: number }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group"
      >
        <Card className="bg-black/50 backdrop-blur-xl border-white/10 hover:border-primary/20 transition-all overflow-hidden h-full">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <Badge 
              className="absolute top-4 left-4 bg-primary/90 text-white"
            >
              {post.category}
            </Badge>
          </div>

          <CardHeader>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2 text-white/60 font-mono text-sm">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2 text-white/60 font-mono text-sm">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>

            <CardTitle className="text-2xl font-bold font-grotesk group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </CardTitle>

            <CardDescription className="font-mono text-white/60 line-clamp-2">
              {post.description}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div className="text-sm font-mono text-white/60">
                  {post.author.name}
                </div>
              </div>

              <Button
                size="sm"
                variant="ghost"
                color="default"
                className="group-hover:text-primary"
                endContent={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              >
                Read More
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.article>
    </Link>
  );
};

const BlogPage = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <CustomCursor />

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <Badge 
                size="lg"
                className="bg-primary/10 text-primary border-primary/20"
              >
                Blog & Insights
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold font-grotesk bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-primary">
                Latest Articles
              </h1>

              <p className="text-xl text-white/70 font-mono max-w-2xl mx-auto">
                Discover insights, tutorials, and thoughts about web development,
                design, and technology.
              </p>

              <div className="flex items-center justify-center gap-4 pt-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-96 h-12 bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 font-mono text-white/70 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>

                <Button
                  variant="ghost"
                  color="default"
                  startContent={<Filter className="w-5 h-5" />}
                >
                  Filters
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Featured Post */}
          <div className="mb-20">
            <FeaturedPost post={blogPosts[0]} />
          </div>

          {/* Categories */}
          <div className="flex items-center gap-3 mb-12 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`px-6 py-2 rounded-full font-mono text-sm transition-colors ${
                  index === 0
                    ? 'bg-primary text-white'
                    : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>

          {/* Load More */}
          <div className="flex justify-center mt-16">
            <Button
              size="lg"
              variant="ghost"
              color="default"
              className="border border-white/10 hover:bg-white/5"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
