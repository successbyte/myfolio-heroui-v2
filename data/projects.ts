import { Project } from '../types/project';

export const projects: Project[] = [
  {
    slug: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with Next.js and Stripe integration.',
    image: 'https://images.unsplash.com/photo-1674027392842-29f8354e236c?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Full Stack',
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
    techStack: [
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'Framer Motion',
      'Node.js',
      'Prisma',
      'PostgreSQL',
      'Redis'
    ],
    githubUrl: 'https://github.com/yourusername/modern-ecommerce',
    demoUrl: 'https://modern-ecommerce.demo',
    screenshots: [
      'https://images.unsplash.com/photo-1674027392842-29f8354e236c?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1674027392842-29f8354e236c?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    content: {
      overview: 'A comprehensive e-commerce solution built with Next.js, featuring seamless payment processing with Stripe, real-time inventory management, and a beautiful responsive design. The platform offers a modern shopping experience with advanced features.',
      challenges: 'Implementing real-time inventory tracking and ensuring seamless payment processing were the main challenges.',
      solutions: 'Utilized WebSocket for real-time updates and implemented robust error handling for payments.',
      results: 'Successfully launched with 99.9% uptime and processed over 1000 transactions.'
    }
  },
  {
    slug: 'ai-chatbot',
    title: 'AI Chatbot Assistant',
    description: 'Intelligent chatbot powered by OpenAI GPT-3 for customer support.',
    image: 'https://images.unsplash.com/photo-1662057168154-89300791ad6e?q=80&w=2320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Backend',
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
    techStack: [
      'React',
      'TypeScript',
      'Node.js',
      'OpenAI API',
      'Socket.io',
      'MongoDB',
      'Redis',
      'Docker'
    ],
    githubUrl: 'https://github.com/yourusername/ai-chatbot',
    demoUrl: 'https://ai-chatbot.demo',
    screenshots: [
      'https://images.unsplash.com/photo-1662057168154-89300791ad6e?q=80&w=2320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1662057168154-89300791ad6e?q=80&w=2320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    content: {
      overview: 'An advanced AI-powered chatbot that revolutionizes customer support with natural language understanding and real-time responses. Built with OpenAI\'s GPT-3, it provides instant, accurate assistance 24/7.',
      challenges: 'Ensuring accurate responses and maintaining context across conversations.',
      solutions: 'Implemented sophisticated prompt engineering and context management system.',
      results: 'Reduced customer support response time by 80% and handled 10,000+ queries.'
    }
  },
  {
    slug: 'social-platform',
    title: 'Social Media Platform',
    description: 'Full-stack social media platform with real-time features.',
    image: 'https://images.unsplash.com/photo-1678329885843-eeb5a6fcfce5?q=80&w=2428&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Full Stack',
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
    techStack: [
      'React',
      'GraphQL',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Redis',
      'AWS',
      'WebSocket'
    ],
    githubUrl: 'https://github.com/yourusername/social-platform',
    demoUrl: 'https://social-platform.demo',
    screenshots: [
      'https://images.unsplash.com/photo-1678329885843-eeb5a6fcfce5?q=80&w=2428&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1678329885843-eeb5a6fcfce5?q=80&w=2428&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    content: {
      overview: 'A modern social media platform built with React and GraphQL, featuring real-time updates, rich media sharing, and interactive features. The platform includes comprehensive social networking capabilities.',
      challenges: 'Scaling real-time features and managing high concurrent users.',
      solutions: 'Implemented efficient caching and optimized database queries.',
      results: 'Successfully handles 100,000+ daily active users with sub-second response times.'
    }
  },
  {
    slug: 'portfolio-template',
    title: 'Portfolio Template',
    description: 'Modern portfolio template with animations and dark mode.',
    image: '/images/portfolio-project.png',
    category: 'Frontend',
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
    techStack: [
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'Framer Motion',
      'Node.js',
      'Express',
      'MongoDB'
    ],
    githubUrl: 'https://github.com/yourusername/portfolio-template',
    demoUrl: 'https://portfolio-template.demo',
    screenshots: [
      '/images/portfolio-project.png',
      '/images/portfolio-project.png'
    ],
    content: {
      overview: 'A sleek and modern portfolio template built with Next.js and Framer Motion, featuring smooth animations, dark mode support, and responsive design. Perfect for developers and designers to showcase their work.',
      challenges: 'Creating smooth animations while maintaining performance.',
      solutions: 'Optimized animation performance using Framer Motion best practices.',
      results: 'Achieved 100/100 Lighthouse performance score and positive user feedback.'
    }
  }
]; 