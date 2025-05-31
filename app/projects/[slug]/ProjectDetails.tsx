'use client';

import { motion } from 'framer-motion';
import { Button } from '@heroui/button';
import { Card } from '@heroui/react';
import { Snippet } from '@heroui/snippet';
import { Badge } from '@heroui/react';
import { CustomCursor } from '@/components/CustomCursor';
import Image from 'next/image';
import { 
  Github, 
  ExternalLink, 
  CheckCircle2,
  Calendar,
  Clock,
  Users,
  Layers,
  Code2,
  GitBranch,
  Link as LinkIcon
} from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  duration: string;
  team: string;
  complexity: string;
  category: string;
  tech: Array<{ name: string; color: string; }>;
  features: string[];
  challenges: Array<{ title: string; description: string; }>;
  codeSnippet: {
    language: string;
    title: string;
    code: string;
  };
  mainImage: string;
  screenshots: string[];
  links: {
    github: string;
    live: string;
    docs: string;
  };
}

// This would typically come from a database or API
const projectDetails: Record<string, Project> = {
  'e-commerce-platform': {
    title: 'E-Commerce Platform',
    subtitle: 'A modern e-commerce solution built for scale',
    description: 'A comprehensive e-commerce platform built with Next.js and Stripe integration.',
    fullDescription: `
      A comprehensive e-commerce solution that provides a seamless shopping experience. 
      Built with performance and scalability in mind, this platform offers everything 
      needed for a modern online store.
    `,
    duration: '3 months',
    team: '4 developers',
    complexity: 'High',
    category: 'Web Application',
    tech: [
      { name: 'Next.js', color: 'bg-black' },
      { name: 'TypeScript', color: 'bg-blue-500' },
      { name: 'Stripe', color: 'bg-purple-500' },
      { name: 'Tailwind', color: 'bg-cyan-500' },
      { name: 'PostgreSQL', color: 'bg-blue-700' },
      { name: 'Redis', color: 'bg-red-500' }
    ],
    features: [
      'Responsive Design with Mobile-First Approach',
      'Advanced Product Management System',
      'Real-time Cart & Checkout Process',
      'Secure Payment Integration with Stripe',
      'Order Management Dashboard',
      'User Authentication & Authorization',
      'Real-time Inventory Tracking',
      'Analytics Dashboard'
    ],
    challenges: [
      {
        title: 'Performance Optimization',
        description: 'Implemented dynamic imports and image optimization to achieve a 95+ Performance Score.'
      },
      {
        title: 'Payment Integration',
        description: 'Developed a secure payment system with multiple provider support and error handling.'
      },
      {
        title: 'Real-time Updates',
        description: 'Built a WebSocket system for live inventory and order status updates.'
      }
    ],
    codeSnippet: {
      language: 'bash',
      title: 'How to Run This Project',
      code: `git clone https://github.com/yourusername/e-commerce-platform.git && cd e-commerce-platform && npm install && npm run dev`
    },
    mainImage: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
    screenshots: [
      'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
      'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
      'https://images.unsplash.com/photo-1557821552-17105176677c?w=800'
    ],
    links: {
      github: 'https://github.com',
      live: 'https://demo.com',
      docs: 'https://docs.demo.com'
    }
  }
};

interface ProjectDetailsProps {
  slug: string;
}

export function ProjectDetails({ slug }: ProjectDetailsProps) {
  const project = projectDetails[slug];

  if (!project) {
    return (
      <div className="min-h-screen my-16  bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-white/60 mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Button href="/projects" color="primary">
            View All Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen my-16 bg-black text-white">
      <CustomCursor />
      
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Badge 
              size="sm"
              className="bg-primary/90 text-white mb-4"
            >
              {project.category}
            </Badge>

            <h1 className="text-4xl font-bold font-grotesk mb-4">
              {project.title}
            </h1>

            <p className="text-xl text-white/70 font-mono mb-8">
              {project.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                color="primary"
                startContent={<Github className="w-5 h-5" />}
                href={project.links.github}
                target="_blank"
              >
                View on GitHub
              </Button>
              <Button
                size="lg"
                variant="ghost"
                color="default"
                className="border border-white/10"
                startContent={<ExternalLink className="w-5 h-5" />}
                href={project.links.live}
                target="_blank"
              >
                Live Demo
              </Button>
            </div>
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src={project.mainImage}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 mb-12"
          >
            {/* Left Column - Description */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold font-grotesk">Overview</h2>
              <p className="text-white/70 font-mono leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Right Column - Quick Info */}
            <Card className="bg-black/50 backdrop-blur-xl border-white/10">
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-white/60 font-mono">Duration</div>
                    <div className="font-grotesk">{project.duration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-white/60 font-mono">Team Size</div>
                    <div className="font-grotesk">{project.team}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Layers className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-white/60 font-mono">Complexity</div>
                    <div className="font-grotesk">{project.complexity}</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold font-grotesk mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map(tech => (
                <Badge
                  key={tech.name}
                  size="lg"
                  className={`${tech.color} text-white`}
                >
                  {tech.name}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold font-grotesk mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white/5 rounded-lg"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 font-mono">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Challenges & Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold font-grotesk mb-6">Challenges & Solutions</h2>
            <div className="space-y-6">
              {project.challenges.map((challenge, index) => (
                <Card
                  key={index}
                  className="bg-black/50 backdrop-blur-xl border-white/10"
                >
                  <div className="p-6">
                    <h3 className="text-lg font-bold font-grotesk mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-white/70 font-mono">
                      {challenge.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Code Snippet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold font-grotesk mb-6">Quick Start</h2>
            <Card className="bg-black/50 backdrop-blur-xl border-white/10">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Code2 className="w-5 h-5 text-primary" />
                    <span className="font-mono text-white/60">
                      {project.codeSnippet.title}
                    </span>
                  </div>
                </div>
                {project.codeSnippet.code.split('&&').map((command, index) => (
                  <Snippet
                    key={index}
                    hideSymbol
                    variant="flat"
                    color="default"
                    className="bg-black/50 w-full font-mono mb-4"
                  >
                    {command.trim()}
                  </Snippet>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Screenshots */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-2xl font-bold font-grotesk mb-6">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden"
                >
                  <Image
                    src={screenshot}
                    alt={`${project.title} Screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 