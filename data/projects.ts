import { Project } from "../types/project";

export const projects: Project[] = [
  {
    slug: "hmis-universal-system",
    title: "HMIS Universal System",
    description: "Unified Hospital & Restaurant Management Information System.",
    image: "/images/hmis.webp",
    category: "Frontend",
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
      "React",
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
      // "/images/hmis-1.webp"
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
    category: "Full Stack",
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
      "Laravel",
      "PHP",
      "PostgreSQL",
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
      "/images/metal-4.webp",
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
    category: "Full Stack",
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
      "TailwindCSS",
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
      "/images/adaptix-2.webp",
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
    category: "Frontend",
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
    image: "/images/dribbble-1.webp",
    category: "Frontend",
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
    githubUrl: "https://github.com/successbyte/dribble-clone",
    demoUrl: "https://dribble-clone-ehsan.vercel.app/",
    screenshots: [
      "/images/dribbble-1.webp",
      "/images/dribbble-2.webp",
      "/images/dribbble-3.webp",
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
  {
    slug: "apple-clone",
    title: "Apple Clone",
    description:
      "Pixel-perfect Apple landing page clone with clean documentation and accessible design.",
    image: "/images/apple-clone.webp",
    category: "Frontend",
    company: "Alkharazmi",
    period: "Jan 2022 - Feb 2022",
    features: [
      "Pixel-perfect Apple website clone",
      "Clean documentation with code comments",
      "Responsive design with Flexbox",
      "Accessibility-focused implementation",
    ],
    techStack: [
      "HTML5",
      "CSS3",
      "Flexbox",
      "BEM methodology",
      "Responsive Web Design",
      "Accessibility best practices",
      "SEO basics",
      "Git",
      "GitHub",
    ],
    githubUrl: "https://github.com/successbyte/apple-clone",
    demoUrl: "https://apple-clone-ehsan.vercel.app/",
    screenshots: ["/images/apple-clone-2.webp", "/images/apple-clone-3.webp"],
    content: {
      overview:
        "A static clone of the Apple landing page, built to refine layout skills, documentation practices, and accessibility standards.",
      challenges:
        "Ensuring pixel-perfect alignment and responsiveness across devices while keeping the codebase maintainable.",
      solutions:
        "Applied BEM for scalable CSS, Flexbox for layout, and documented code thoroughly with inline comments.",
      results:
        "Delivered a clean, responsive, and accessible Apple clone suitable for portfolio presentation.",
    },
  },
  {
    slug: "fatawa-android",
    title: "Fatawa (Android)",
    description:
      "Android Q&A app powered by SQLite with 11,000+ entries and advanced search/bookmark features.",
    image: "/images/fatawa-1.jpg",
    category: "Mobile",
    company: "Freelance",
    period: "Mar 2021 - May 2021",
    features: [
      "SQLite database with 11,000+ records",
      "Full-text search in questions and answers",
      "Bookmark questions & answers for later reading",
      "Open answers in separate activity view",
      "Adjust font size, copy to clipboard, and share Q&A",
      "Option to add new answers if not found",
    ],
    techStack: [
      "Java",
      "Android Development",
      "SQLite",
      "Android SDK",
      "XML (UI design)",
    ],
    githubUrl: "https://github.com/successbyte/Fatawa",
    demoUrl: "",
    screenshots: [
      "/images/fatawa-1.jpg",
      "/images/fatawa-2.jpg",
      "/images/fatawa-3.jpg",
    ],
    content: {
      overview:
        "Fatawa is a Question/Answer mobile application built for Android. It leverages a local SQLite database with more than 11,000 records to provide instant search and offline access.",
      challenges:
        "Managing and optimizing a large SQLite dataset for fast searching while keeping the app responsive on mid-range devices.",
      solutions:
        "Implemented efficient indexing for search queries, designed a clean activity-based navigation flow, and added bookmarking for user convenience.",
      results:
        "Delivered a feature-rich offline Android app that supports advanced search, bookmarking, font customization, and sharing of Q&A content.",
    },
  },
  {
    slug: "daruloloom-android",
    title: "Daruloloom (Android)",
    description:
      "Custom Android audio player app built for an Afghan organization with offline audio, background playback, and social media integration.",
    image: "/images/dar.jpg",
    category: "Mobile",
    company: "Freelance",
    period: "Jan 2021 - Feb 2021",
    features: [
      "Offline audio player with pre-inserted content",
      "Play, pause, seek audios in-app and in background (Services)",
      "Audio sharing functionality",
      "Favorite (Bookmark) feature for audios",
      "Next/Previous/Close controls in notification bar",
      "Links to organization and developer’s social media",
    ],
    techStack: [
      "Java",
      "Android Development",
      "Android SDK",
      "SQLite",
      "XML (UI design)",
    ],
    githubUrl: "https://github.com/successbyte/DaruloloomAliHerat",
    demoUrl: "",
    screenshots: ["/images/dar-1.jpg", "/images/dar-2.jpg"],
    content: {
      overview:
        "Daruloloom is a unique Android audio player app developed for an Afghan organization. The app plays pre-inserted audios, supports offline use, and provides advanced background playback features.",
      challenges:
        "Needed to implement background playback with full media controls and integrate bookmarking while keeping the app lightweight.",
      solutions:
        "Used Android Services to manage audio playback in the background, implemented notification-based media controls, and designed a simple bookmarking system.",
      results:
        "Delivered a stable offline audio player that provides background playback, bookmarking, and social media integration tailored to the client’s requirements.",
    },
  },
];
