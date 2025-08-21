import { Project } from "../types/project";

export const projects: Project[] = [
  {
    slug: "hmis-universal-system",
    title: "HMIS Universal System",
    description: "Unified Hospital & Restaurant Management Information System.",
    image: "/images/hmis.png",
    category: "Enterprise / HMIS",
    company: "Lajward Technologies",
    period: "May 2025 - Present",
    features: [
      "Hospital's different sections from a single platform",
      "Doctor availabilities & appointments",
      "Patient medical records",
      "Transactions & billing management",
      "Prescription generation",
      "AI-assisted suggestion flows",
      "Diagnostic orders for lab, X-ray & ultrasound",
      "Queueing system visit workflows",
      "Multi-language / i18n support",
      "Client-side AES-256 encryption (Securing)",
      "Modular, reusable reporting components",
      "Role-based permissions and secure data access",
    ],
    techStack: [
      "React.js",
      "TypeScript",
      "TailwindCSS",
      "Shadcn-UI",
      "CryptoJS (AES-256)",
      "Jira",
      "GitHub",
      "Git",
    ],
    githubUrl: "",
    demoUrl: "",
    screenshots: [
      "/images/hmis-2.png",
      "/images/hmis-3.png",
      // "/images/hmis-1.png"
    ],
    content: {
      overview:
        "HMIS Universal System is a unified Hospital & Restaurant Management Information System built to manage clinical workflows and restaurant operations in one platform. The frontend focuses on performance, accessibility, and reusable component systems to support complex enterprise requirements.",
      challenges:
        "Supporting sensitive clinical data, building flexible workflows for multiple domains (hospital + restaurant), implementing multilingual support, and integrating AI-assisted flows while keeping the UI performant and accessible.",
      solutions:
        "Implemented a component-driven architecture using React, TypeScript and shadcn-ui to enable reuse across reporting and UI surfaces. Added client-side AES-256 encryption (CryptoJS) to protect sensitive payloads. Built AI-powered suggestion flows for diagnostic orders and prescriptions, implemented role-based permissions, and added i18n for multi-language support. Validations and schemas were enforced with Zod.",
      results:
        "Delivered a production-ready HMIS that consolidates hospital and restaurant operations, with modular reporting components reused across financial and clinical reports. The app improved developer productivity through reusable components and increased accuracy in diagnostic ordering via AI suggestions.",
    },
  },
  {
    slug: "metal-accounting-app",
    title: "Metal Accounting App",
    description:
      "Industry-ready accounting system for sales, purchases, production and transactions.",
    image: "/images/metal-dark.png",
    category: "Accounting / ERP",
    company: "Alkharazmi",
    period: "Jun 2024 - Apr 2025",
    features: [
      "Manage transactions, sales and purchases",
      "Customizable sales & purchase invoices",
      "Production & inventory tracking",
      "Role-based permissions and user roles",
      "Multi-language support and exportable financial reports",
      "Modular, reusable reporting components",
      "Exporting PDF/Excell from all sections",
    ],
    techStack: [
      "Vue.js",
      "Quasar (Vue framework)",
      "JavaScript",
      "SCSS",
      "CSS",
      "Git",
      "GitHub",
      "Jira",
    ],
    githubUrl: "",
    demoUrl: "https://metal.alkharazmi.com/",
    screenshots: [
      "/images/metal.png",
      "/images/metal-dark.png",
      "/images/metal-4.png",
      "/images/metal-1.png",
      "/images/metal-2.png",
      "/images/metal-3.png",
    ],
    content: {
      overview:
        "A comprehensive accounting platform for multiple industries covering sales, purchases, production and transactions with a focus on usability and reporting.",
      challenges:
        "Balancing complex financial workflows, flexible invoicing, and multi-language requirements while keeping the UI intuitive.",
      solutions:
        "Built with Vue 3 + Quasar, designed modular invoice templates, implemented production/inventory flows and role-based access control to simplify operations.",
      results:
        "Delivered a robust accounting system used across multiple clients, streamlining financial workflows and enabling customizable reporting.",
    },
  },
  {
    slug: "adaptix-rehash",
    title: "Adaptix Rehash",
    description:
      "QR code generation & analytics platform (dynamic & static QR codes).",
    image: "/images/adaptix.png",
    category: "Utilities / QR",
    company: "Alkharazmi",
    period: "Apr 2024 - May 2024",
    features: [
      "Create dynamic and static QR codes",
      "Dynamic QR analytics: scan count, timestamp, device, and location",
      "Subscription plans: free trial, monthly and annual packages",
      "Payments integration for subscriptions",
      "Real-time dashboard for scan analytics",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Firebase (Auth, Firestore)",
      "Tailwind CSS",
      "HubSpot (payments/integration)",
      "Git",
      "GitHub",
      "Jira",
    ],
    githubUrl: "",
    demoUrl: "https://app.rehash.tech/",
    screenshots: [
      "/images/adaptix.png",
      "/images/adaptix-1.png",
      "/images/adaptix-2.png",
      "/images/adaptix-3.png",
      "/images/adaptix-4.png",
    ],
    content: {
      overview:
        "Adaptix Rehash is a QR code creation system that supports both static and dynamic codes with built-in analytics and subscription plans.",
      challenges:
        "Providing accurate scan analytics (time, device, location) in real time while offering flexible subscription options and a smooth onboarding experience.",
      solutions:
        "Used Firebase for real-time analytics and auth, implemented subscription management with HubSpot payment integration, and built a responsive dashboard with React and Tailwind for quick insights.",
      results:
        "Delivered a production-ready QR platform with analytics and subscription tiers, enabling clients to track scans and monetize usage through monthly and annual packages.",
    },
  },
  {
    slug: "transport-erp-cheetah",
    title: "Transport ERP (Cheetah)",
    description:
      "ERP for car sellers — contracts, logistics, reporting and role-based permissions.",
    image: "/images/transport.webp",
    category: "Transport / ERP",
    company: "Alkharazmi",
    period: "Oct 2023 - Mar 2024",
    features: [
      "Manage purchase contracts and vehicle logistics",
      "Track shipments from origin to sales locations",
      "Comprehensive reporting (sales, inventory, logistics)",
      "Role-based permissions and user access control",
      "Custom workflows for vehicle receiving and delivery",
    ],
    techStack: [
      "Vue.js",
      "Quasar Framework",
      "JavaScript (ES6+)",
      "SCSS",
      "Git",
      "GitHub",
      "Jira",
    ],
    githubUrl: "",
    demoUrl: "",
    screenshots: ["/images/transport.webp"],
    content: {
      overview:
        "Cheetah is an ERP tailored for car sellers that handles purchase contracts, logistics tracking, and sales reporting while providing fine-grained user permissions.",
      challenges:
        "Coordinating multi-step logistics across regions and producing a wide variety of accurate reports without overcomplicating the UI.",
      solutions:
        "Built a modular Quasar-based frontend with reusable report components, integrated Laravel/PostgreSQL for reliable backend workflows, and implemented role-based permissions to segregate responsibilities.",
      results:
        "Delivered an ERP that simplified contract & logistics management, reduced manual reporting effort, and allowed operators to manage workflows with appropriate access controls.",
    },
  },
  {
    slug: "dribbble-clone",
    title: "Dribbble Clone",
    description:
      "Pixel-perfect Dribbble landing-page clone focused on responsive layout and accessibility.",
    image: "/images/dribbble-1.png",
    category: "UI / Frontend",
    company: "Alkharazmi",
    period: "Mar 2022 - Apr 2022",
    features: [
      "Responsive gallery & card grid layout",
      "Accessible markup with semantic HTML",
      "SASS (SCSS) with BEM naming for maintainable styles",
      "Optimized images and mobile-first design",
    ],
    techStack: [
      "HTML5",
      "SCSS (SASS)",
      "BEM methodology",
      "CSS3",
      "Responsive Web Design",
      "Accessibility best practices",
      "Web Accessibility",
      "SEO basics",
      "Git",
      "GitHub",
    ],
    githubUrl: "",
    demoUrl: "https://dribble-clone-ehsan.vercel.app/",
    screenshots: [
      "/images/dribbble-1.png",
      "/images/dribbble-2.png",
      "/images/dribbble-3.png",
    ],
    content: {
      overview:
        "A faithful static clone of Dribbble's landing UI, built to practice layout, responsive design and accessibility.",
      challenges:
        "Recreating a complex card/grid layout while keeping markup semantic and styles maintainable.",
      solutions:
        "Used SCSS with BEM for modular styles, prioritized semantic HTML and tested keyboard/screen-reader accessibility.",
      results:
        "Delivered a responsive, accessible prototype useful as a visual/UX exercise and portfolio piece.",
    },
  },

  // {
  //   slug: "ai-chatbot",
  //   title: "AI Chatbot Assistant",
  //   description:
  //     "Intelligent chatbot powered by OpenAI GPT-3 for customer support.",
  //   image:
  //     "https://images.unsplash.com/photo-1662057168154-89300791ad6e?q=80&w=2320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   category: "Backend",
  //   company: "Lajward Technologies",
  //   period: "May 2025 - Present",
  //   features: [
  //     "GPT-3 powered responses",
  //     "Real-time chat interface",
  //     "Context awareness",
  //     "Multi-language support",
  //     "Chat history analytics",
  //     "Custom training options",
  //     "CRM integration",
  //     "Performance monitoring",
  //   ],
  //   techStack: [
  //     "React",
  //     "TypeScript",
  //     "Node.js",
  //     "OpenAI API",
  //     "Socket.io",
  //     "MongoDB",
  //     "Redis",
  //     "Docker",
  //   ],
  //   githubUrl: "https://github.com/yourusername/ai-chatbot",
  //   demoUrl: "https://ai-chatbot.demo",
  //   screenshots: [
  //     "https://images.unsplash.com/photo-1662057168154-89300791ad6e?q=80&w=2320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     "https://images.unsplash.com/photo-1662057168154-89300791ad6e?q=80&w=2320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   ],
  //   content: {
  //     overview:
  //       "An advanced AI-powered chatbot that revolutionizes customer support with natural language understanding and real-time responses. Built with OpenAI's GPT-3, it provides instant, accurate assistance 24/7.",
  //     challenges:
  //       "Ensuring accurate responses and maintaining context across conversations.",
  //     solutions:
  //       "Implemented sophisticated prompt engineering and context management system.",
  //     results:
  //       "Reduced customer support response time by 80% and handled 10,000+ queries.",
  //   },
  // },
  // {
  //   slug: "social-platform",
  //   title: "Social Media Platform",
  //   description: "Full-stack social media platform with real-time features.",
  //   image:
  //     "https://images.unsplash.com/photo-1678329885843-eeb5a6fcfce5?q=80&w=2428&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   category: "Full Stack",
  //   features: [
  //     "Real-time feed updates",
  //     "Rich media sharing",
  //     "User connections",
  //     "Direct messaging",
  //     "Content moderation",
  //     "Activity notifications",
  //     "Profile customization",
  //     "Search functionality",
  //   ],
  //   techStack: [
  //     "React",
  //     "GraphQL",
  //     "TypeScript",
  //     "Node.js",
  //     "MongoDB",
  //     "Redis",
  //     "AWS",
  //     "WebSocket",
  //   ],
  //   githubUrl: "https://github.com/yourusername/social-platform",
  //   demoUrl: "https://social-platform.demo",
  //   screenshots: [
  //     "https://images.unsplash.com/photo-1678329885843-eeb5a6fcfce5?q=80&w=2428&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     "https://images.unsplash.com/photo-1678329885843-eeb5a6fcfce5?q=80&w=2428&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   ],
  //   content: {
  //     overview:
  //       "A modern social media platform built with React and GraphQL, featuring real-time updates, rich media sharing, and interactive features. The platform includes comprehensive social networking capabilities.",
  //     challenges:
  //       "Scaling real-time features and managing high concurrent users.",
  //     solutions:
  //       "Implemented efficient caching and optimized database queries.",
  //     results:
  //       "Successfully handles 100,000+ daily active users with sub-second response times.",
  //   },
  // },
  // {
  //   slug: "portfolio-template",
  //   title: "Portfolio Template",
  //   description: "Modern portfolio template with animations and dark mode.",
  //   image: "/images/portfolio-project.jpeg",
  //   category: "Frontend",
  //   features: [
  //     "Responsive design",
  //     "Dark/Light modes",
  //     "Page transitions",
  //     "Project showcase",
  //     "Blog integration",
  //     "Contact system",
  //     "SEO optimization",
  //     "Performance metrics",
  //   ],
  //   techStack: [
  //     "Next.js",
  //     "TypeScript",
  //     "TailwindCSS",
  //     "Framer Motion",
  //     "Node.js",
  //     "Express",
  //     "MongoDB",
  //   ],
  //   githubUrl: "https://github.com/yourusername/portfolio-template",
  //   demoUrl: "https://portfolio-template.demo",
  //   screenshots: [
  //     "/images/portfolio-project.jpeg",
  //     "/images/portfolio-project.jpeg",
  //   ],
  //   content: {
  //     overview:
  //       "A sleek and modern portfolio template built with Next.js and Framer Motion, featuring smooth animations, dark mode support, and responsive design. Perfect for developers and designers to showcase their work.",
  //     challenges: "Creating smooth animations while maintaining performance.",
  //     solutions:
  //       "Optimized animation performance using Framer Motion best practices.",
  //     results:
  //       "Achieved 100/100 Lighthouse performance score and positive user feedback.",
  //   },
  // },
];
