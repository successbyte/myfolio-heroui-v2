'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@heroui/react';
import { Badge } from '@heroui/react';
import { Button } from '@heroui/button';
import { CustomCursor } from '@/components/CustomCursor';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  Eye,
  Heart,
  MessageSquare,
  ArrowRight,
  Search,
  Filter,
  Tag,
  Bookmark,
  TrendingUp
} from 'lucide-react';

interface ContentBlock {
  type: 'paragraph' | 'heading' | 'code' | 'image' | 'quote' | 'list' | 'video';
  content: string;
  language?: string;
  level?: number;
  caption?: string;
  items?: string[];
  url?: string;
}

interface Author {
  name: string;
  image: string;
  role: string;
  bio: string;
  social: {
    twitter: string;
    github: string;
    linkedin: string;
  };
}

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: ContentBlock[];
  image: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  author: Author;
  views: number;
  likes: number;
  comments: number;
  demoUrl?: string;
  featured?: boolean;
}

// Define the blog posts array
const blogPosts: BlogPost[] = [
  {
    slug: 'building-modern-web-applications-with-nextjs-13',
    title: 'Building Modern Web Applications with Next.js 13',
    description: 'Learn how to leverage the power of Next.js 13 to build fast, SEO-friendly web applications with great developer experience.',
    content: [
      {
        type: 'paragraph',
        content: 'Next.js 13 introduces groundbreaking features that revolutionize how we build web applications.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    date: 'March 15, 2024',
    readTime: '8 min read',
    category: 'Development',
    tags: ['Next.js', 'React', 'Web Development'],
    author: {
      name: 'Dale Anderson',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      role: 'Senior Developer',
      bio: 'Full-stack developer with 10+ years of experience.',
      social: {
        twitter: 'https://twitter.com/daleanderson',
        github: 'https://github.com/daleanderson',
        linkedin: 'https://linkedin.com/in/daleanderson'
      }
    },
    views: 987,
    likes: 76,
    comments: 15,
    demoUrl: 'https://nextjs-demo.vercel.app',
    featured: true
  },
  {
    slug: 'future-of-ui-design-trends-2024',
    title: 'The Future of UI Design: Trends to Watch in 2024',
    description: 'Explore the latest UI design trends that are shaping the future of digital experiences and how to implement them in your projects.',
    content: [
      {
        type: 'paragraph',
        content: 'The landscape of UI design is constantly evolving, with new trends emerging that reshape how we think about digital interfaces.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1618788372246-79faff0c3742',
    date: 'March 10, 2024',
    readTime: '6 min read',
    category: 'Design',
    tags: ['UI/UX', 'Design Trends', 'Web Design'],
    author: {
      name: 'Dale Anderson',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      role: 'Senior Developer',
      bio: 'Full-stack developer with 10+ years of experience.',
      social: {
        twitter: 'https://twitter.com/daleanderson',
        github: 'https://github.com/daleanderson',
        linkedin: 'https://linkedin.com/in/daleanderson'
      }
    },
    views: 856,
    likes: 67,
    comments: 12,
    featured: true
  }
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get unique categories and tags
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  const tags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  // Filter posts based on search, category, and tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);

    return matchesSearch && matchesCategory && matchesTag;
  });

  // Featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <main className="min-h-screen bg-black text-white">
      <CustomCursor />
      
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold font-grotesk bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-primary mb-6"
            >
              Latest Blog Posts
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/70 font-mono"
            >
              Insights and tutorials on modern web development
            </motion.p>
          </div>
        </div>
      </header>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold font-grotesk flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                Featured Posts
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`} className="block group">
                    <Card className="bg-black/50 backdrop-blur-xl border-white/10 hover:border-primary/20 transition-all h-full">
                      <div className="relative aspect-[16/9] rounded-t-xl overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <Badge size="sm" className="bg-primary/90 text-white mb-2">
                            {post.category}
                          </Badge>
                          <h3 className="text-xl font-bold font-grotesk text-white mb-2">
                            {post.title}
                          </h3>
                          <p className="text-white/70 font-mono text-sm line-clamp-2">
                            {post.description}
                          </p>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between">
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
                          <Button
                            size="sm"
                            color="primary"
                            className="text-white"
                            endContent={<ArrowRight className="w-4 h-4" />}
                          >
                            Read More
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <select
                  value={selectedCategory || ''}
                  onChange={(e) => setSelectedCategory(e.target.value || null)}
                  className="bg-white/5 border border-white/10 rounded-lg py-2 px-4 text-white appearance-none cursor-pointer hover:bg-white/10 transition-colors"
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <select
                  value={selectedTag || ''}
                  onChange={(e) => setSelectedTag(e.target.value || null)}
                  className="bg-white/5 border border-white/10 rounded-lg py-2 px-4 text-white appearance-none cursor-pointer hover:bg-white/10 transition-colors"
                >
                  <option value="">All Tags</option>
                  {tags.map(tag => (
                    <option key={tag} value={tag}>{tag}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`} className="block group">
                    <Card className="bg-black/50 backdrop-blur-xl border-white/10 hover:border-primary/20 transition-all h-full">
                      <div className="relative aspect-video rounded-t-xl overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <Badge size="sm" className="bg-primary/90 text-white mb-4">
                          {post.category}
                        </Badge>
                        <h3 className="text-xl font-bold font-grotesk mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-white/70 font-mono text-sm mb-4 line-clamp-2">
                          {post.description}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          <div className="flex items-center gap-4 text-white/60 font-mono text-sm">
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {post.views}
                            </div>
                            <div className="flex items-center gap-1">
                              <Heart className="w-4 h-4" />
                              {post.likes}
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="w-4 h-4" />
                              {post.comments}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-white/60 font-mono text-sm">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
