'use client';

import { motion } from 'framer-motion';
import { Button } from '@heroui/button';
import { Card } from '@heroui/react';
import { Snippet } from '@heroui/snippet';
import { Badge } from '@heroui/react';
import { CustomCursor } from '@/components/CustomCursor';
import { useParams } from 'next/navigation';
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

// This would typically come from a database or API
const projectDetails = {
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
  },
  // Add more projects here
};

// Rest of the component remains the same...