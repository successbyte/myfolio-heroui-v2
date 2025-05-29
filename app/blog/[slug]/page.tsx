'use client';

import { Badge } from '@heroui/react';
import { Card } from '@heroui/react';
import { Button } from '@heroui/button';
import { Link } from '@heroui/link';
import { CodeBlock } from '@/components/ui/CodeBlock';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Share2,
  Bookmark,
  ThumbsUp,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Twitter,
  Facebook,
  Linkedin,
  Eye,
  Heart,
  MessageSquare
} from 'lucide-react';

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
  content: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  author: Author;
  views: number;
  likes: number;
  comments: number;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'building-modern-web-applications-with-nextjs-13',
    title: 'Building Modern Web Applications with Next.js 13',
    description: 'Learn how to leverage the power of Next.js 13 to build fast, SEO-friendly web applications with great developer experience.',
    content: `
      Next.js 13 introduces groundbreaking features that revolutionize how we build web applications. From the new App Router to Server Components, these changes significantly improve both developer experience and application performance.

      ## Key Features

      ### 1. App Router
      The new App Router provides a more intuitive way to handle routing in your application. It's built on top of React Server Components and supports layouts, nested routing, and more.

      Here's a basic example of how to set up routing:

      \`\`\`typescript
      // app/page.tsx
      export default function HomePage() {
        return (
          <main>
            <h1>Welcome to Next.js 13</h1>
          </main>
        );
      }

      // app/blog/[slug]/page.tsx
      export default function BlogPost({ params }) {
        return (
          <article>
            <h1>{params.slug}</h1>
          </article>
        );
      }
      \`\`\`

      ### 2. Server Components
      React Server Components allow you to write UI that can be rendered on the server and streamed to the client. This results in faster page loads and reduced JavaScript bundle sizes.

      Here's how to use Server Components:

      \`\`\`typescript
      // app/components/ServerComponent.tsx
      async function ServerComponent() {
        const data = await fetchData(); // This runs on the server
        
        return (
          <div>
            {data.map(item => (
              <div key={item.id}>{item.name}</div>
            ))}
          </div>
        );
      }
      \`\`\`

      ### 3. Streaming
      Next.js 13 supports streaming server rendering, allowing you to progressively render pages from the server. This means users see content sooner and enjoy a more responsive experience.

      Example implementation:

      \`\`\`typescript
      // app/loading.tsx
      export default function Loading() {
        return <div>Loading...</div>;
      }

      // app/page.tsx
      import { Suspense } from 'react';
      import SlowComponent from './SlowComponent';

      export default function Page() {
        return (
          <div>
            <h1>Instant Load</h1>
            <Suspense fallback={<Loading />}>
              <SlowComponent />
            </Suspense>
          </div>
        );
      }
      \`\`\`

      ## Best Practices

      1. Use Server Components by default
      2. Implement proper loading and error states
      3. Leverage the new data fetching methods
      4. Optimize images using the Next.js Image component
      5. Implement proper caching strategies

      Here's an example of implementing these best practices:

      \`\`\`typescript
      // Simple example of using Next.js Image component
      function ExampleComponent() {
        return (
          <div className="card">
            <Image
              src="/example.jpg"
              alt="Example"
              width={300}
              height={200}
              priority
            />
            <h2>Example Title</h2>
            <p>Example content</p>
          </div>
        );
      }
      \`\`\`

      ## Conclusion

      Next.js 13 represents a significant step forward in web development, providing developers with powerful tools to build better web applications. By following these patterns and best practices, you can create fast, scalable, and maintainable applications that provide an excellent user experience.

      Remember to:
      - Start with Server Components
      - Use the App Router for better organization
      - Implement streaming for better UX
      - Follow TypeScript best practices
      - Optimize for performance
    `,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    date: 'March 15, 2024',
    readTime: '8 min read',
    category: 'Development',
    tags: ['Next.js', 'React', 'Web Development'],
    author: {
      name: 'Dale Anderson',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      role: 'Senior Developer',
      bio: 'Full-stack developer with 10+ years of experience. Passionate about building scalable web applications and sharing knowledge with the community.',
      social: {
        twitter: 'https://twitter.com/daleanderson',
        github: 'https://github.com/daleanderson',
        linkedin: 'https://linkedin.com/in/daleanderson'
      }
    },
    views: 987,
    likes: 76,
    comments: 15
  },
  {
    slug: 'future-of-ui-design-trends-2024',
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
      role: 'Senior Developer',
      bio: 'Full-stack developer with 10+ years of experience. Passionate about building scalable web applications and sharing knowledge with the community.',
      social: {
        twitter: 'https://twitter.com/daleanderson',
        github: 'https://github.com/daleanderson',
        linkedin: 'https://linkedin.com/in/daleanderson'
      }
    },
    views: 856,
    likes: 67,
    comments: 12
  },
  {
    slug: 'mastering-typescript-advanced-tips',
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
      role: 'Senior Developer',
      bio: 'Full-stack developer with 10+ years of experience. Passionate about building scalable web applications and sharing knowledge with the community.',
      social: {
        twitter: 'https://twitter.com/daleanderson',
        github: 'https://github.com/daleanderson',
        linkedin: 'https://linkedin.com/in/daleanderson'
      }
    },
    views: 743,
    likes: 54,
    comments: 9
  },
  {
    slug: 'modern-web-animation-techniques',
    title: 'Modern Web Animation Techniques',
    description: 'Discover the latest techniques for creating smooth and engaging web animations.',
    content: `
      Web animations are a powerful way to enhance user experience and create a more engaging web experience. Here are some modern techniques to create smooth and engaging animations.

      ## 1. CSS Animations
      CSS animations are a simple and effective way to create animations without JavaScript.

      ## 2. JavaScript Animations
      JavaScript animations can be used to create more complex and interactive animations.

      ## 3. Web Animations API
      The Web Animations API provides a powerful way to control animations using JavaScript.

      ## 4. SVG Animations
      SVG animations can be used to create animations with vector graphics.

      ## Conclusion
      These techniques can help you create smooth and engaging animations for your web projects.
    `,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    date: 'March 15, 2024',
    readTime: '8 min read',
    category: 'Development',
    tags: ['Web Development', 'JavaScript', 'CSS'],
    author: {
      name: 'Dale Anderson',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      role: 'Senior Developer',
      bio: 'Full-stack developer with 10+ years of experience. Passionate about building scalable web applications and sharing knowledge with the community.',
      social: {
        twitter: 'https://twitter.com/daleanderson',
        github: 'https://github.com/daleanderson',
        linkedin: 'https://linkedin.com/in/daleanderson'
      }
    },
    views: 1234,
    likes: 89,
    comments: 23
  },
  {
    slug: 'ai-driven-development-tools',
    title: 'AI-Driven Development Tools',
    description: 'Explore the latest AI-driven development tools that can help you build better applications faster.',
    content: `
      AI-driven development tools are revolutionizing how we build applications. Here are some of the latest tools that can help you build better applications faster.

      ## 1. AI Code Generators
      AI code generators can help you write code faster and more efficiently.

      ## 2. AI-Powered Testing
      AI-powered testing tools can help you catch bugs and issues before they become problems.

      ## 3. AI-Driven Documentation
      AI-driven documentation tools can help you generate documentation for your projects.

      ## 4. AI-Driven Project Management
      AI-driven project management tools can help you manage your projects more efficiently.

      ## Conclusion
      These tools can help you build better applications faster and more efficiently.
    `,
    image: 'https://images.unsplash.com/photo-1618788372246-79faff0c3742',
    date: 'March 10, 2024',
    readTime: '6 min read',
    category: 'Development',
    tags: ['AI', 'Development Tools', 'Web Development'],
    author: {
      name: 'Dale Anderson',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      role: 'Senior Developer',
      bio: 'Full-stack developer with 10+ years of experience. Passionate about building scalable web applications and sharing knowledge with the community.',
      social: {
        twitter: 'https://twitter.com/daleanderson',
        github: 'https://github.com/daleanderson',
        linkedin: 'https://linkedin.com/in/daleanderson'
      }
    },
    views: 654,
    likes: 45,
    comments: 8
  },
  {
    slug: 'microservices-best-practices',
    title: 'Microservices Best Practices',
    description: 'Learn the best practices for designing and implementing microservices architectures.',
    content: `
      Microservices architectures are becoming more popular due to their flexibility and scalability. Here are some best practices for designing and implementing microservices architectures.

      ## 1. Service Decomposition
      Decompose your application into smaller services that can be independently developed, deployed, and scaled.

      ## 2. API Gateway
      Use an API gateway to manage and route requests to your microservices.

      ## 3. Event-Driven Communication
      Use event-driven communication to enable loose coupling between microservices.

      ## 4. Service Discovery
      Use service discovery to locate and communicate with microservices.

      ## Conclusion
      Following these best practices can help you design and implement a scalable and maintainable microservices architecture.
    `,
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
    date: 'March 5, 2024',
    readTime: '10 min read',
    category: 'Development',
    tags: ['Microservices', 'Architecture', 'Web Development'],
    author: {
      name: 'Dale Anderson',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      role: 'Senior Developer',
      bio: 'Full-stack developer with 10+ years of experience. Passionate about building scalable web applications and sharing knowledge with the community.',
      social: {
        twitter: 'https://twitter.com/daleanderson',
        github: 'https://github.com/daleanderson',
        linkedin: 'https://linkedin.com/in/daleanderson'
      }
    },
    views: 543,
    likes: 34,
    comments: 6
  }
];

export default function Page() {
  const params = useParams();
  const post = blogPosts.find(post => post.slug === params.slug);
  const currentIndex = blogPosts.findIndex(p => p.slug === params.slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  if (!post) {
    return <div>Post not found</div>;
  }

  // Function to render markdown content with code blocks
  const renderContent = (content: string) => {
    const parts = content.split('```');
    return parts.map((part, index) => {
      if (index % 2 === 0) {
        // Regular text content
        return part.split('\n').map((paragraph, pIndex) => {
          if (paragraph.startsWith('###')) {
            return (
              <motion.h3
                key={pIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-xl font-bold font-grotesk mt-8 mb-4 text-white/90"
              >
                {paragraph.replace('###', '').trim()}
              </motion.h3>
            );
          } else if (paragraph.startsWith('##')) {
            return (
              <motion.h2
                key={pIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold font-grotesk mt-12 mb-6 text-white"
              >
                {paragraph.replace('##', '').trim()}
              </motion.h2>
            );
          } else if (paragraph.trim().startsWith('-')) {
            return (
              <motion.li
                key={pIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-lg text-white/70 leading-relaxed ml-4 mb-2 font-mono"
              >
                {paragraph.replace('-', '').trim()}
              </motion.li>
            );
          }
          return (
            paragraph.trim() && (
              <motion.p
                key={pIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg text-white/70 leading-relaxed mb-6 font-mono"
              >
                {paragraph.trim()}
              </motion.p>
            )
          );
        });
      } else {
        // Code block
        const [language, ...codeLines] = part.split('\n');
        const code = codeLines.join('\n').trim();
        return (
          <CodeBlock
            key={index}
            code={code}
            language={language.trim()}
            showLineNumbers={true}
          />
        );
      }
    });
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <Link 
                href="/blog"
                color="foreground"
                className="inline-flex items-center gap-2 text-sm font-mono hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </motion.div>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <Badge 
                  size="sm"
                  className="bg-primary/90 text-white"
                >
                  {post.category}
                </Badge>
                <div className="flex items-center gap-4 text-white/60 font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    {post.views} views
                  </div>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold font-grotesk bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-primary">
                {post.title}
              </h1>

              <p className="text-xl text-white/70 font-mono">
                {post.description}
              </p>

              <div className="flex items-center justify-between pt-6">
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

                <div className="flex items-center gap-3">
                  <Button
                    size="sm"
                    variant="ghost"
                    color="default"
                    className="text-white/60 hover:text-white"
                    startContent={<Share2 className="w-4 h-4" />}
                  >
                    Share
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    color="default"
                    className="text-white/60 hover:text-white"
                    startContent={<Bookmark className="w-4 h-4" />}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="container mx-auto px-4 mb-20"
      >
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-[2/1] rounded-xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-12">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="prose prose-invert max-w-none"
            >
              {renderContent(post.content)}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              {/* Author Card */}
              <Card className="bg-black/50 backdrop-blur-xl border-white/10">
                <div className="p-6 space-y-6">
                  <div className="text-center">
                    <Image
                      src={post.author.image}
                      alt={post.author.name}
                      width={80}
                      height={80}
                      className="rounded-full mx-auto mb-4"
                    />
                    <h3 className="font-grotesk font-bold text-lg">{post.author.name}</h3>
                    <p className="text-sm text-white/60 font-mono">{post.author.role}</p>
                  </div>

                  <p className="text-sm text-white/70 font-mono">
                    {post.author.bio}
                  </p>

                  <div className="flex items-center justify-center gap-4">
                    <Button
                      size="sm"
                      variant="ghost"
                      color="default"
                      className="text-white/60 hover:text-[#1DA1F2]"
                      href={post.author.social.twitter}
                      target="_blank"
                    >
                      <Twitter className="w-5 h-5" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      color="default"
                      className="text-white/60 hover:text-[#0A66C2]"
                      href={post.author.social.linkedin}
                      target="_blank"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      color="default"
                      className="text-white/60 hover:text-white"
                      href={post.author.social.github}
                      target="_blank"
                    >
                      <Facebook className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Engagement */}
              <Card className="bg-black/50 backdrop-blur-xl border-white/10">
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4">
                    <Button
                      size="sm"
                      color="default"
                      variant="ghost"
                      className="w-full flex-col gap-2 h-auto py-4 group"
                    >
                      <Heart className="w-5 h-5 group-hover:text-red-500 transition-colors" />
                      <div className="text-sm font-mono">
                        <div className="font-bold">{post.likes}</div>
                        <div className="text-white/60">Likes</div>
                      </div>
                    </Button>
                    <Button
                      size="sm"
                      color="default"
                      variant="ghost"
                      className="w-full flex-col gap-2 h-auto py-4 group"
                    >
                      <MessageSquare className="w-5 h-5 group-hover:text-primary transition-colors" />
                      <div className="text-sm font-mono">
                        <div className="font-bold">{post.comments}</div>
                        <div className="text-white/60">Comments</div>
                      </div>
                    </Button>
                    <Button
                      size="sm"
                      color="default"
                      variant="ghost"
                      className="w-full flex-col gap-2 h-auto py-4 group"
                    >
                      <Share2 className="w-5 h-5 group-hover:text-blue-500 transition-colors" />
                      <div className="text-sm font-mono">
                        <div className="font-bold">Share</div>
                        <div className="text-white/60">Post</div>
                      </div>
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Tags */}
              <div>
                <h3 className="text-lg font-grotesk font-bold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <Badge 
                      key={tag}
                      size="sm"
                      className="bg-white/5 text-white/70 hover:bg-white/10 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Table of Contents */}
              <Card className="bg-black/50 backdrop-blur-xl border-white/10">
                <div className="p-6">
                  <h3 className="text-lg font-grotesk font-bold mb-4">Contents</h3>
                  <nav className="space-y-2">
                    {post.content.split('\n').filter(line => line.startsWith('#')).map((heading, index) => (
                      <a 
                        key={index}
                        href={`#${heading.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`}
                        className={`block text-sm font-mono text-white/60 hover:text-primary transition-colors ${
                          heading.startsWith('###') ? 'pl-4' : ''
                        }`}
                      >
                        {heading.replace(/#/g, '').trim()}
                      </a>
                    ))}
                  </nav>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="container mx-auto px-4 py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prevPost && (
              <Link href={`/blog/${prevPost.slug}`} className="group">
                <Card className="bg-black/50 backdrop-blur-xl border-white/10 h-full hover:border-primary/20 transition-all">
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-white/60 font-mono text-sm mb-4">
                      <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                      Previous Post
                    </div>
                    <h3 className="font-grotesk font-bold group-hover:text-primary transition-colors">
                      {prevPost.title}
                    </h3>
                  </div>
                </Card>
              </Link>
            )}

            {nextPost && (
              <Link href={`/blog/${nextPost.slug}`} className="group">
                <Card className="bg-black/50 backdrop-blur-xl border-white/10 h-full hover:border-primary/20 transition-all">
                  <div className="p-6">
                    <div className="flex items-center justify-end gap-2 text-white/60 font-mono text-sm mb-4">
                      Next Post
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <h3 className="font-grotesk font-bold text-right group-hover:text-primary transition-colors">
                      {nextPost.title}
                    </h3>
                  </div>
                </Card>
              </Link>
            )}
          </div>
        </div>
      </section>
    </main>
  );
} 