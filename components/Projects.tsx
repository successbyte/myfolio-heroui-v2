'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    id: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with Next.js and Stripe integration.',
    image: '/projects/ecommerce.jpg',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
    link: '/projects/e-commerce-platform',
  },
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot Assistant',
    description: 'Intelligent chatbot powered by OpenAI GPT-3 for customer support.',
    image: '/projects/chatbot.jpg',
    tech: ['React', 'Node.js', 'OpenAI', 'Socket.io'],
    link: '/projects/ai-chatbot',
  },
  {
    id: 'social-platform',
    title: 'Social Media Platform',
    description: 'Full-stack social media platform with real-time features.',
    image: '/projects/social.jpg',
    tech: ['React', 'GraphQL', 'MongoDB', 'WebSocket'],
    link: '/projects/social-platform',
  },
  {
    id: 'portfolio-template',
    title: 'Portfolio Template',
    description: 'Modern portfolio template with animations and dark mode.',
    image: '/projects/portfolio.jpg',
    tech: ['Next.js', 'Framer Motion', 'Tailwind', 'TypeScript'],
    link: '/projects/portfolio-template',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

export const Projects = () => {
  return (
    <section id="projects" className="section-spacing">
      <div className="container">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A collection of projects that showcase my skills and experience in building digital products
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group card card-hover overflow-hidden"
            >
              <Link href={project.link} className="block">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    <span>View Details</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 