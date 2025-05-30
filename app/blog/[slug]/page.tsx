"use client";

import { Badge, Chip } from "@heroui/react";
import { Card } from "@heroui/react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { CustomCursor } from "@/components/CustomCursor";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Heart,
  MessageSquare,
  Eye,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Twitter,
  Facebook,
  Linkedin,
  Bookmark,
  Link as LinkIcon,
  Code,
  Image as ImageIcon,
  Quote,
  ListOrdered,
  FileText,
  Video,
} from "lucide-react";
import { useState } from "react";

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

interface ContentBlock {
  type: "paragraph" | "heading" | "code" | "image" | "quote" | "list" | "video";
  content: string;
  language?: string;
  level?: number;
  caption?: string;
  items?: string[];
  url?: string;
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

const blogPosts: BlogPost[] = [
  {
    slug: "building-modern-web-applications-with-nextjs-13",
    title: "Building Modern Web Applications with Next.js 13",
    description:
      "Learn how to leverage the power of Next.js 13 to build fast, SEO-friendly web applications with great developer experience.",
    content: [
      {
        type: "paragraph",
        content:
          "Next.js 13 introduces groundbreaking features that revolutionize how we build web applications. From the new App Router to Server Components, these changes significantly improve both developer experience and application performance.",
      },
      {
        type: "heading",
        content: "Key Features",
        level: 2,
      },
      {
        type: "heading",
        content: "App Router",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "The new App Router provides a more intuitive way to handle routing in your application. It's built on top of React Server Components and supports layouts, nested routing, and more.",
      },
      {
        type: "code",
        language: "typescript",
        content: `// app/page.tsx
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
}`,
      },
      {
        type: "heading",
        content: "Server Components",
        level: 3,
      },
      {
        type: "paragraph",
        content:
          "React Server Components allow you to write UI that can be rendered on the server and streamed to the client. This results in faster page loads and reduced JavaScript bundle sizes.",
      },
      {
        type: "image",
        content: "/blog/server-components.png",
        caption: "Server Components Architecture",
      },
      {
        type: "quote",
        content:
          "Server Components represent a paradigm shift in how we think about building React applications. They enable us to move complex logic to the server while maintaining the interactivity we love about React.",
      },
      {
        type: "heading",
        content: "Performance Improvements",
        level: 3,
      },
      {
        type: "list",
        content: "Performance Improvements List",
        items: [
          "Reduced JavaScript bundle sizes",
          "Faster page loads with streaming",
          "Improved SEO with server-side rendering",
          "Better caching strategies",
          "Optimized image loading",
        ],
      },
      {
        type: "video",
        content: "https://www.youtube.com/embed/xyz123",
        caption: "Next.js 13 Performance Demo",
      },
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Development",
    tags: ["Next.js", "React", "Web Development"],
    author: {
      name: "Dale Anderson",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      role: "Senior Developer",
      bio: "Full-stack developer with 10+ years of experience. Passionate about building scalable web applications and sharing knowledge with the community.",
      social: {
        twitter: "https://twitter.com/daleanderson",
        github: "https://github.com/daleanderson",
        linkedin: "https://linkedin.com/in/daleanderson",
      },
    },
    views: 987,
    likes: 76,
    comments: 15,
    demoUrl: "https://nextjs-demo.vercel.app",
    featured: true,
  },
  {
    slug: "future-of-ui-design-trends-2024",
    title: "The Future of UI Design: Trends to Watch in 2024",
    description:
      "Explore the latest UI design trends that are shaping the future of digital experiences and how to implement them in your projects.",
    content: [
      {
        type: "paragraph",
        content:
          "The landscape of UI design is constantly evolving, with new trends emerging that reshape how we think about digital interfaces.",
      },
      {
        type: "heading",
        content: "Advanced Motion Design",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Motion design is becoming more sophisticated, with micro-interactions and fluid animations enhancing user experience.",
      },
      {
        type: "heading",
        content: "AI-Driven Personalization",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "AI is enabling more personalized interfaces that adapt to individual user preferences and behaviors.",
      },
      {
        type: "heading",
        content: "Immersive 3D Elements",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "With improved web technologies, 3D elements are becoming more prevalent in web interfaces.",
      },
      {
        type: "heading",
        content: "Dark Mode Evolution",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Dark mode is evolving beyond simple color inversion to more nuanced and branded experiences.",
      },
    ],
    image: "https://images.unsplash.com/photo-1618788372246-79faff0c3742",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Design",
    tags: ["UI/UX", "Design Trends", "Web Design"],
    author: {
      name: "Dale Anderson",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      role: "Senior Developer",
      bio: "Full-stack developer with 10+ years of experience. Passionate about building scalable web applications and sharing knowledge with the community.",
      social: {
        twitter: "https://twitter.com/daleanderson",
        github: "https://github.com/daleanderson",
        linkedin: "https://linkedin.com/in/daleanderson",
      },
    },
    views: 856,
    likes: 67,
    comments: 12,
  },
  {
    slug: "mastering-typescript-advanced-tips",
    title: "Mastering TypeScript: Advanced Tips and Tricks",
    description:
      "Deep dive into advanced TypeScript features and patterns that will help you write better, more maintainable code.",
    content: [
      {
        type: "paragraph",
        content:
          "TypeScript continues to evolve, offering powerful features for building robust applications.",
      },
      {
        type: "heading",
        content: "Generic Type Constraints",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Understanding and implementing generic type constraints for more flexible code.",
      },
      {
        type: "heading",
        content: "Conditional Types",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Leveraging conditional types to create more dynamic type relationships.",
      },
      {
        type: "heading",
        content: "Mapped Types",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Using mapped types to transform existing types into new ones.",
      },
      {
        type: "heading",
        content: "Best Practices",
        level: 2,
      },
      {
        type: "list",
        content: "TypeScript Best Practices List",
        items: [
          "Strict null checks",
          "Discriminated unions",
          "Type guards",
          "Utility types",
        ],
      },
      {
        type: "heading",
        content: "Conclusion",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Mastering these TypeScript features will help you write more maintainable and type-safe code.",
      },
    ],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    date: "March 5, 2024",
    readTime: "10 min read",
    category: "Programming",
    tags: ["TypeScript", "JavaScript", "Programming"],
    author: {
      name: "Dale Anderson",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      role: "Senior Developer",
      bio: "Full-stack developer with 10+ years of experience. Passionate about building scalable web applications and sharing knowledge with the community.",
      social: {
        twitter: "https://twitter.com/daleanderson",
        github: "https://github.com/daleanderson",
        linkedin: "https://linkedin.com/in/daleanderson",
      },
    },
    views: 743,
    likes: 54,
    comments: 9,
  },
  {
    slug: "modern-web-animation-techniques",
    title: "Modern Web Animation Techniques",
    description:
      "Discover the latest techniques for creating smooth and engaging web animations.",
    content: [
      {
        type: "paragraph",
        content:
          "Web animations are a powerful way to enhance user experience and create a more engaging web experience.",
      },
      {
        type: "heading",
        content: "1. CSS Animations",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "CSS animations are a simple and effective way to create animations without JavaScript.",
      },
      {
        type: "heading",
        content: "2. JavaScript Animations",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "JavaScript animations can be used to create more complex and interactive animations.",
      },
      {
        type: "heading",
        content: "3. Web Animations API",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "The Web Animations API provides a powerful way to control animations using JavaScript.",
      },
      {
        type: "heading",
        content: "4. SVG Animations",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "SVG animations can be used to create animations with vector graphics.",
      },
      {
        type: "heading",
        content: "Conclusion",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "These techniques can help you create smooth and engaging animations for your web projects.",
      },
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Development",
    tags: ["Web Development", "JavaScript", "CSS"],
    author: {
      name: "Dale Anderson",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      role: "Senior Developer",
      bio: "Full-stack developer with 10+ years of experience. Passionate about building scalable web applications and sharing knowledge with the community.",
      social: {
        twitter: "https://twitter.com/daleanderson",
        github: "https://github.com/daleanderson",
        linkedin: "https://linkedin.com/in/daleanderson",
      },
    },
    views: 1234,
    likes: 89,
    comments: 23,
  },
  {
    slug: "ai-driven-development-tools",
    title: "AI-Driven Development Tools",
    description:
      "Explore the latest AI-driven development tools that can help you build better applications faster.",
    content: [
      {
        type: "paragraph",
        content:
          "AI-driven development tools are revolutionizing how we build applications.",
      },
      {
        type: "heading",
        content: "1. AI Code Generators",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "AI code generators can help you write code faster and more efficiently.",
      },
      {
        type: "heading",
        content: "2. AI-Powered Testing",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "AI-powered testing tools can help you catch bugs and issues before they become problems.",
      },
      {
        type: "heading",
        content: "3. AI-Driven Documentation",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "AI-driven documentation tools can help you generate documentation for your projects.",
      },
      {
        type: "heading",
        content: "4. AI-Driven Project Management",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "AI-driven project management tools can help you manage your projects more efficiently.",
      },
      {
        type: "heading",
        content: "Conclusion",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "These tools can help you build better applications faster and more efficiently.",
      },
    ],
    image: "https://images.unsplash.com/photo-1618788372246-79faff0c3742",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Development",
    tags: ["AI", "Development Tools", "Web Development"],
    author: {
      name: "Dale Anderson",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      role: "Senior Developer",
      bio: "Full-stack developer with 10+ years of experience. Passionate about building scalable web applications and sharing knowledge with the community.",
      social: {
        twitter: "https://twitter.com/daleanderson",
        github: "https://github.com/daleanderson",
        linkedin: "https://linkedin.com/in/daleanderson",
      },
    },
    views: 654,
    likes: 45,
    comments: 8,
  },
  {
    slug: "microservices-best-practices",
    title: "Microservices Best Practices",
    description:
      "Learn the best practices for designing and implementing microservices architectures.",
    content: [
      {
        type: "paragraph",
        content:
          "Microservices architectures are becoming more popular due to their flexibility and scalability.",
      },
      {
        type: "heading",
        content: "1. Service Decomposition",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Decompose your application into smaller services that can be independently developed, deployed, and scaled.",
      },
      {
        type: "heading",
        content: "2. API Gateway",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Use an API gateway to manage and route requests to your microservices.",
      },
      {
        type: "heading",
        content: "3. Event-Driven Communication",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Use event-driven communication to enable loose coupling between microservices.",
      },
      {
        type: "heading",
        content: "4. Service Discovery",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Use service discovery to locate and communicate with microservices.",
      },
      {
        type: "heading",
        content: "Conclusion",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Following these best practices can help you design and implement a scalable and maintainable microservices architecture.",
      },
    ],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    date: "March 5, 2024",
    readTime: "10 min read",
    category: "Development",
    tags: ["Microservices", "Architecture", "Web Development"],
    author: {
      name: "Dale Anderson",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      role: "Senior Developer",
      bio: "Full-stack developer with 10+ years of experience. Passionate about building scalable web applications and sharing knowledge with the community.",
      social: {
        twitter: "https://twitter.com/daleanderson",
        github: "https://github.com/daleanderson",
        linkedin: "https://linkedin.com/in/daleanderson",
      },
    },
    views: 543,
    likes: 34,
    comments: 6,
  },
];

function renderContent(content: ContentBlock[]) {
  return content.map((block, index) => {
    switch (block.type) {
      case "paragraph":
        return (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-white/70 leading-relaxed mb-6 font-mono"
          >
            {block.content}
          </motion.p>
        );
      case "heading":
        const HeadingTag = block.level === 2 ? "h2" : "h3";
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`font-grotesk font-bold ${
              block.level === 2
                ? "text-3xl mt-12 mb-6 text-white"
                : "text-xl mt-8 mb-4 text-white/90"
            }`}
          >
            <HeadingTag>{block.content}</HeadingTag>
          </motion.div>
        );
      case "code":
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <CodeBlock
              code={block.content}
              language={block.language || "typescript"}
              showLineNumbers
            />
          </motion.div>
        );
      case "image":
        return (
          <motion.figure
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="my-8"
          >
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src={block.content}
                alt={block.caption || ""}
                fill
                className="object-cover"
              />
            </div>
            {block.caption && (
              <figcaption className="mt-3 text-center text-sm text-white/60 font-mono">
                {block.caption}
              </figcaption>
            )}
          </motion.figure>
        );
      case "quote":
        return (
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-l-4 border-primary pl-6 my-8 italic text-xl text-white/80"
          >
            {block.content}
          </motion.blockquote>
        );
      case "list":
        return (
          <motion.ul
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2 my-6 ml-6 list-disc text-white/70"
          >
            {block.items?.map((item, i) => (
              <li key={i} className="text-lg font-mono">
                {item}
              </li>
            ))}
          </motion.ul>
        );
      case "video":
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="my-8"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <iframe
                src={block.content}
                title={block.caption || "Video"}
                className="absolute inset-0 w-full h-full"
                allowFullScreen
              />
            </div>
            {block.caption && (
              <p className="mt-3 text-center text-sm text-white/60 font-mono">
                {block.caption}
              </p>
            )}
          </motion.div>
        );
      default:
        return null;
    }
  });
}

export default function Page() {
  const params = useParams();
  const post = blogPosts.find((post) => post.slug === params.slug);
  const currentIndex = blogPosts.findIndex((p) => p.slug === params.slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-white/60 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Button href="/blog" color="primary">
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <CustomCursor />

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Article Header */}
      <header className="relative py-5">
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

            {/* Article Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                <Badge size="sm" className="bg-primary/90 text-white">
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

              {/* Author and Actions */}
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
                    <div className="font-grotesk font-bold text-white">
                      {post.author.name}
                    </div>
                    <div className="text-sm text-white/60 font-mono">
                      {post.author.role}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {post.demoUrl && (
                    <Button
                      size="sm"
                      variant="ghost"
                      color="default"
                      className="text-white/60 hover:text-white"
                      startContent={<ExternalLink className="w-4 h-4" />}
                      href={post.demoUrl}
                      target="_blank"
                    >
                      Demo
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="ghost"
                    color="default"
                    className={`text-white/60 hover:text-white ${isLiked ? "text-red-500" : ""}`}
                    startContent={
                      <Heart
                        className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`}
                      />
                    }
                    onClick={() => setIsLiked(!isLiked)}
                  >
                    {post.likes + (isLiked ? 1 : 0)}
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    color="default"
                    className="text-white/60 hover:text-white"
                    startContent={<MessageSquare className="w-4 h-4" />}
                  >
                    {post.comments}
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    color="default"
                    className={`text-white/60 hover:text-white ${isBookmarked ? "text-primary" : ""}`}
                    startContent={
                      <Bookmark
                        className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`}
                      />
                    }
                    onClick={() => setIsBookmarked(!isBookmarked)}
                  >
                    Save
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    color="default"
                    className="text-white/60 hover:text-white"
                    startContent={<Share2 className="w-4 h-4" />}
                  >
                    Share
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

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
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <section className="container mx-auto px-4   py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-12">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="prose prose-invert max-w-none mt-10"
            >
              {renderContent(post.content)}
            </motion.article>

            {/* Sidebar */}
            <motion.aside
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
                    <h3 className="font-grotesk font-bold text-lg">
                      {post.author.name}
                    </h3>
                    <p className="text-sm text-white/60 font-mono">
                      {post.author.role}
                    </p>
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
                      className="text-white/60 hover:text-[#1877F2]"
                      href={post.author.social.github}
                      target="_blank"
                    >
                      <Facebook className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Content Overview */}
              <Card className="bg-black/50 backdrop-blur-xl border-white/10">
                <div className="p-6">
                  <h3 className="text-lg font-grotesk font-bold mb-4">
                    Content Overview
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-white/60">
                      <Code className="w-4 h-4" />
                      <span className="text-sm font-mono">Code Snippets</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/60">
                      <ImageIcon className="w-4 h-4" />
                      <span className="text-sm font-mono">
                        Images & Diagrams
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-white/60">
                      <Quote className="w-4 h-4" />
                      <span className="text-sm font-mono">Expert Quotes</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/60">
                      <ListOrdered className="w-4 h-4" />
                      <span className="text-sm font-mono">Key Takeaways</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/60">
                      <Video className="w-4 h-4" />
                      <span className="text-sm font-mono">Video Content</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Tags */}
              <div>
                <h3 className="text-lg font-grotesk font-bold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Chip
                      variant="flat"
                      key={tag}
                      size="sm"
                      className="bg-white/10 text-white/70 hover:bg-white/10 transition-colors"
                    >
                      {tag}
                    </Chip>
                  ))}
                </div>
              </div>

              {/* Table of Contents */}
              <Card className="bg-black/50 backdrop-blur-xl border-white/10">
                <div className="p-6">
                  <h3 className="text-lg font-grotesk font-bold mb-4">
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {post.content
                      .filter((block) => block.type === "heading")
                      .map((heading, index) => (
                        <a
                          key={index}
                          href={`#${heading.content.toLowerCase().replace(/\s+/g, "-")}`}
                          className={`block text-sm font-mono text-white/60 hover:text-primary transition-colors ${
                            heading.level === 3 ? "pl-4" : ""
                          }`}
                        >
                          {heading.content}
                        </a>
                      ))}
                  </nav>
                </div>
              </Card>
            </motion.aside>
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
