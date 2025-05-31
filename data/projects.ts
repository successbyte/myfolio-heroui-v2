import { Project } from '../types/project';

export const projects: Project[] = [
  {
    slug: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with Next.js and Stripe integration.',
    longDescription: 'A comprehensive e-commerce solution built with Next.js, featuring seamless payment processing with Stripe, real-time inventory management, and a beautiful responsive design. The platform offers a modern shopping experience with advanced features.',
    image: 'https://images.unsplash.com/photo-1674027392842-29f8354e236c?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
    features: [
      'Server-side rendering for performance',
      'Real-time inventory tracking',
      'Secure Stripe payment integration',
      'Admin dashboard with analytics',
      'User authentication system',
      'Responsive product catalog',
      'Advanced search and filtering',
      'Order management system'
    ],
    techStack: {
      frontend: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'React Query'],
      backend: ['Node.js', 'Prisma', 'PostgreSQL', 'Redis'],
      deployment: ['Vercel', 'AWS S3', 'CloudFront']
    },
    githubUrl: 'https://github.com/yourusername/modern-ecommerce',
    demoUrl: 'https://modern-ecommerce.demo',
    screenshots: [
      {
        url: 'https://images.unsplash.com/photo-1674027392842-29f8354e236c?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Modern product catalog with filtering'
      },
      {
        url: 'https://images.unsplash.com/photo-1674027392842-29f8354e236c?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Seamless checkout experience'
      }
    ],
    featured: true,
    views: 2341
  },
  {
    slug: 'ai-chatbot',
    title: 'AI Chatbot Assistant',
    description: 'Intelligent chatbot powered by OpenAI GPT-3 for customer support.',
    longDescription: 'An advanced AI-powered chatbot that revolutionizes customer support with natural language understanding and real-time responses. Built with OpenAI\'s GPT-3, it provides instant, accurate assistance 24/7.',
    image: 'https://images.unsplash.com/photo-1662057168154-89300791ad6e?q=80&w=2320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['React', 'Node.js', 'OpenAI', 'Socket.io'],
    features: [
      'GPT-3 powered responses',
      'Real-time chat interface',
      'Context awareness',
      'Multi-language support',
      'Chat history analytics',
      'Custom training options',
      'CRM integration',
      'Performance monitoring'
    ],
    techStack: {
      frontend: ['React', 'TypeScript', 'TailwindCSS', 'Socket.io-client'],
      backend: ['Node.js', 'Express', 'MongoDB', 'Redis'],
      deployment: ['Docker', 'AWS Lambda']
    },
    githubUrl: 'https://github.com/yourusername/ai-chatbot',
    demoUrl: 'https://ai-chatbot.demo',
    screenshots: [
      {
        url: 'https://images.unsplash.com/photo-1662057168154-89300791ad6e?q=80&w=2320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'AI chat interface'
      },
      {
        url: 'https://images.unsplash.com/photo-1662057168154-89300791ad6e?q=80&w=2320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Analytics dashboard'
      }
    ],
    featured: true,
    views: 1876
  },
  {
    slug: 'social-platform',
    title: 'Social Media Platform',
    description: 'Full-stack social media platform with real-time features.',
    longDescription: 'A modern social media platform built with React and GraphQL, featuring real-time updates, rich media sharing, and interactive features. The platform includes comprehensive social networking capabilities.',
    image: 'https://images.unsplash.com/photo-1678329885843-eeb5a6fcfce5?q=80&w=2428&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['React', 'GraphQL', 'MongoDB', 'WebSocket'],
    features: [
      'Real-time feed updates',
      'Rich media sharing',
      'User connections',
      'Direct messaging',
      'Content moderation',
      'Activity notifications',
      'Profile customization',
      'Search functionality'
    ],
    techStack: {
      frontend: ['React', 'TypeScript', 'TailwindCSS', 'Apollo Client'],
      backend: ['Node.js', 'GraphQL', 'MongoDB', 'Redis'],
      deployment: ['AWS ECS', 'CloudFront', 'S3']
    },
    githubUrl: 'https://github.com/yourusername/social-platform',
    demoUrl: 'https://social-platform.demo',
    screenshots: [
      {
        url: 'https://images.unsplash.com/photo-1678329885843-eeb5a6fcfce5?q=80&w=2428&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'Social feed with updates'
      },
      {
        url: 'https://images.unsplash.com/photo-1678329885843-eeb5a6fcfce5?q=80&w=2428&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        caption: 'User profile interface'
      }
    ],
    featured: false,
    views: 1543
  },
  {
    slug: 'portfolio-template',
    title: 'Portfolio Template',
    description: 'Modern portfolio template with animations and dark mode.',
    longDescription: 'A sleek and modern portfolio template built with Next.js and Framer Motion, featuring smooth animations, dark mode support, and responsive design. Perfect for developers and designers to showcase their work.',
    image: '/images/portfolio-project.png',
    tags: ['Next.js', 'Framer Motion', 'Tailwind', 'TypeScript'],
    features: [
      'Responsive design',
      'Dark/Light modes',
      'Page transitions',
      'Project showcase',
      'Blog integration',
      'Contact system',
      'SEO optimization',
      'Performance metrics'
    ],
    techStack: {
      frontend: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
      backend: ['Node.js', 'Express', 'MongoDB'],
      deployment: ['Vercel', 'Cloudinary']
    },
    githubUrl: 'https://github.com/yourusername/portfolio-template',
    demoUrl: 'https://portfolio-template.demo',
    screenshots: [
      {
        url: '/images/portfolio-project.png',
        caption: 'Portfolio homepage'
      },
      {
        url: '/images/portfolio-project.png',
        caption: 'Projects showcase'
      }
    ],
    featured: false,
    views: 1234
  }
]; 