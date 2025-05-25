'use client';

import { motion } from 'framer-motion';
import { CustomCursor } from '@/components/CustomCursor';
import { useParams } from 'next/navigation';

// This would typically come from a CMS or database
const blogPosts = {
  'future-of-web-development': {
    title: 'The Future of Web Development',
    excerpt: 'Exploring the latest trends and technologies shaping the future of web development.',
    content: `
      The landscape of web development is constantly evolving, with new technologies and methodologies 
      emerging at a rapid pace. In this article, we'll explore the most significant trends that are 
      shaping the future of web development.

      ## AI-Powered Development

      Artificial Intelligence is revolutionizing how we build web applications. From code completion 
      to automated testing, AI tools are becoming an integral part of the development workflow.

      ## Web Assembly and Edge Computing

      WebAssembly is enabling high-performance computing in the browser, while edge computing is 
      bringing computation closer to the end user, resulting in faster and more reliable applications.

      ## The Rise of No-Code and Low-Code

      No-code and low-code platforms are democratizing web development, making it accessible to a 
      broader audience while enabling developers to focus on more complex challenges.

      ## Conclusion

      The future of web development is exciting, with new technologies and approaches making it 
      easier to build faster, more reliable, and more accessible web applications.
    `,
    author: {
      name: 'John Doe',
      avatar: '/avatar.jpg',
      role: 'Senior Developer',
    },
    category: 'Development',
    date: 'Mar 15, 2024',
    readTime: '5 min read',
    image: '/blog1.jpg',
    tags: ['Web Development', 'AI', 'Future Tech', 'Trends'],
  },
  // Add more blog posts here
};

const BlogPost = () => {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main className="bg-black text-white min-h-screen relative">
      <CustomCursor />

      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-white/5 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto">
          <motion.header
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 text-sm font-mono text-gray-400 mb-6">
              <span className="px-2 py-1 bg-white/10 rounded-full">{post.category}</span>
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold font-grotesk mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {post.title}
            </motion.h1>

            <motion.p
              className="text-xl text-gray-400 font-mono max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {post.excerpt}
            </motion.p>

            <motion.div
              className="flex items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="text-left">
                <div className="font-grotesk font-bold">{post.author.name}</div>
                <div className="text-sm text-gray-400 font-mono">{post.author.role}</div>
              </div>
            </motion.div>
          </motion.header>

          <motion.div
            className="relative aspect-video rounded-xl overflow-hidden mb-16 border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.img
              src={post.image}
              alt={post.title}
              className="object-cover w-full h-full"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2 }}
            />
          </motion.div>

          <motion.div
            className="prose prose-invert prose-lg max-w-none font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
          />

          <motion.div
            className="mt-12 pt-8 border-t border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/10 rounded-full text-sm font-mono hover:bg-white/20 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </article>
      </div>
    </main>
  );
};

export default BlogPost; 