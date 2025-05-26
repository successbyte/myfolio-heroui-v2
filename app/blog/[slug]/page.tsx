'use client';

import { motion } from 'framer-motion';
import { CustomCursor } from '@/components/CustomCursor';
import { useParams } from 'next/navigation';
import { Badge } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// This would typically come from a database or CMS
const blogPosts = {
  'building-modern-web-applications-with-nextjs-13': {
    title: 'Building Modern Web Applications with Next.js 13',
    description: 'Learn how to leverage the power of Next.js 13 to build fast, SEO-friendly web applications with great developer experience.',
    content: `
      Next.js 13 introduces groundbreaking features that revolutionize how we build web applications. From the new App Router to Server Components, these changes significantly improve both developer experience and application performance.

      ## Key Features

      ### 1. App Router
      The new App Router provides a more intuitive way to handle routing in your application. It's built on top of React Server Components and supports layouts, nested routing, and more.

      ### 2. Server Components
      React Server Components allow you to write UI that can be rendered on the server and streamed to the client. This results in faster page loads and reduced JavaScript bundle sizes.

      ### 3. Streaming
      Next.js 13 supports streaming server rendering, allowing you to progressively render pages from the server. This means users see content sooner and enjoy a more responsive experience.

      ## Getting Started

      To start using Next.js 13, you can create a new project using:

      \`\`\`bash
      npx create-next-app@latest my-app --typescript --tailwind --app
      \`\`\`

      This will set up a new project with TypeScript, Tailwind CSS, and the new App Router.

      ## Best Practices

      1. Use Server Components by default
      2. Implement proper loading and error states
      3. Leverage the new data fetching methods
      4. Optimize images using the Next.js Image component
      5. Implement proper caching strategies

      ## Conclusion

      Next.js 13 represents a significant step forward in web development, providing developers with powerful tools to build better web applications.
    `,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
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
  'future-of-ui-design-trends-2024': {
    title: 'The Future of UI Design: Trends to Watch in 2024',
    description: 'Explore the latest UI design trends that are shaping the future of digital experiences and how to implement them in your projects.',
    content: `
      The landscape of UI design is constantly evolving, with new trends emerging that reshape how we think about digital interfaces. Let's explore the key trends that will define 2024.

      ## 1. Advanced Motion Design
      Motion design is becoming more sophisticated, with micro-interactions and fluid animations enhancing user experience.

      ## 2. AI-Driven Personalization
      AI is enabling more personalized interfaces that adapt to individual user preferences and behaviors.

      ## 3. Immersive 3D Elements
      With improved web technologies, 3D elements are becoming more prevalent in web interfaces.

      ## 4. Dark Mode Evolution
      Dark mode is evolving beyond simple color inversion to more nuanced and branded experiences.

      ## Conclusion
      These trends represent just the beginning of what's possible in modern UI design.
    `,
    image: 'https://images.unsplash.com/photo-1618788372246-79faff0c3742',
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
  'mastering-typescript-advanced-tips': {
    title: 'Mastering TypeScript: Advanced Tips and Tricks',
    description: 'Deep dive into advanced TypeScript features and patterns that will help you write better, more maintainable code.',
    content: `
      TypeScript continues to evolve, offering powerful features for building robust applications. Here are some advanced techniques to level up your TypeScript skills.

      ## Generic Type Constraints
      Understanding and implementing generic type constraints for more flexible code.

      ## Conditional Types
      Leveraging conditional types to create more dynamic type relationships.

      ## Mapped Types
      Using mapped types to transform existing types into new ones.

      ## Best Practices
      - Strict null checks
      - Discriminated unions
      - Type guards
      - Utility types

      ## Conclusion
      Mastering these TypeScript features will help you write more maintainable and type-safe code.
    `,
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
  }
};

const BlogPost = () => {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <article className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="space-y-8 mb-12">
          <Link 
            href="/blog"
            className="inline-flex items-center text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="flat" className="bg-primary/90 text-primary-foreground">
                {post.category}
              </Badge>
              <span className="text-sm text-muted-foreground font-mono">{post.date}</span>
              <span className="text-sm text-muted-foreground font-mono">•</span>
              <span className="text-sm text-muted-foreground font-mono">{post.readTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-grotesk">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground">
              {post.description}
            </p>

            <div className="flex items-center gap-4 pt-4">
              <Image
                src={post.author.image}
                alt={post.author.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <div className="font-grotesk font-bold">{post.author.name}</div>
                <div className="text-sm text-muted-foreground font-mono">{post.author.role}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-video rounded-xl overflow-hidden mb-12">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          {post.content.split('\n').map((paragraph: string, index: number) => (
            <p key={index} className="text-lg text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <Badge 
                key={tag} 
                variant="flat" 
                className="bg-secondary/50 text-foreground border border-border"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
};

export default BlogPost; 