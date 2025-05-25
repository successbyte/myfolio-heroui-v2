import { Badge } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// This would typically come from a database or CMS
const blogPosts = [
  {
    id: 1,
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
  // Add more blog posts...
];

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find(p => p.id === parseInt(params.id));

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
          {post.content.split('\n').map((paragraph, index) => (
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
} 