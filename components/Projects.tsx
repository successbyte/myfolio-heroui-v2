'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    id: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with Next.js and Stripe integration.',
    image: 'https://images.unsplash.com/photo-1674027392842-29f8354e236c?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
    link: '/projects/e-commerce-platform',
  },
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot Assistant',
    description: 'Intelligent chatbot powered by OpenAI GPT-3 for customer support.',
    image: 'https://images.unsplash.com/photo-1662057168154-89300791ad6e?q=80&w=2320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['React', 'Node.js', 'OpenAI', 'Socket.io'],
    link: '/projects/ai-chatbot',
  },
  {
    id: 'social-platform',
    title: 'Social Media Platform',
    description: 'Full-stack social media platform with real-time features.',
    image: 'https://images.unsplash.com/photo-1678329885843-eeb5a6fcfce5?q=80&w=2428&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['React', 'GraphQL', 'MongoDB', 'WebSocket'],
    link: '/projects/social-platform',
  },
  {
    id: 'portfolio-template',
    title: 'Portfolio Template',
    description: 'Modern portfolio template with animations and dark mode.',
    image: '/images/portfolio-project.png',
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
        <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-sm font-mono text-primary/80 bg-primary/5 border border-primary/10 px-3 py-1 rounded-full"
              >
                Projects
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold font-grotesk bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80"
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
              className="group relative"
            >
              <Link href={project.link} className="block">
                {/* Transparent strip effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 rounded-xl opacity-0 group-hover:opacity-100  transition-all duration-500 group-hover:duration-200" />
                
                <div className="relative bg-[#111111] border border-white/5 hover:border-primary/20 rounded-xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-6">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="space-y-4">
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
                          className="px-3 py-1 bg-secondary/50 backdrop-blur-sm text-secondary-foreground rounded-full text-xs font-medium"
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
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};