export interface Screenshot {
  url: string;
  caption: string;
}

export interface TechStack {
  frontend: string[];
  backend: string[];
  deployment?: string[];
  blockchain?: string[];
  infrastructure?: string[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  company: string;
  period: string;
  techStack: string[];
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  screenshots: string[];
  content: {
    overview: string;
    challenges: string;
    solutions: string;
    results: string;
  };
}
