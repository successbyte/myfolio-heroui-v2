'use client';

import { motion } from 'framer-motion';
import { Button } from '@heroui/button';
import { CustomCursor } from '@/components/CustomCursor';
import { useParams } from 'next/navigation';

// This would typically come from a database or API
const projectDetails = {
  'e-commerce-platform': {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with Next.js and Stripe integration.',
    fullDescription: `
      A comprehensive e-commerce solution that provides a seamless shopping experience. 
      Built with performance and scalability in mind, this platform offers everything 
      needed for a modern online store.
    `,
    tech: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
    features: [
      'Responsive Design',
      'Product Management',
      'Cart & Checkout',
      'Payment Integration',
      'Order Management',
      'User Authentication',
    ],
    image: '/project1.jpg',
    link: 'https://github.com',
    screenshots: [
      '/screenshot1.jpg',
      '/screenshot2.jpg',
      '/screenshot3.jpg',
    ],
  },
  // Add more projects here
};

const ProjectDetails = () => {
  const params = useParams();
  const slug = params.slug as keyof typeof projectDetails;
  const project = projectDetails[slug];

  if (!project) {
    return <div>Project not found</div>;
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
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-white/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-r from-white/10 to-transparent rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <div className="text-center mb-16">
              <motion.h1
                className="text-5xl md:text-7xl font-bold font-grotesk mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {project.title}
              </motion.h1>
              <motion.p
                className="text-xl text-gray-400 font-mono max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {project.description}
              </motion.p>
            </div>

            {/* Project details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left column */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="prose prose-invert font-mono">
                  <h2 className="text-3xl font-grotesk font-bold mb-4">Overview</h2>
                  <p className="text-gray-400">{project.fullDescription}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-grotesk font-bold mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-grotesk font-bold mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-400 font-mono">
                        <svg
                          className="w-5 h-5 mr-2 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <Button
                    as="a"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="magnetic-button bg-white text-black hover:bg-gray-200 font-mono text-sm"
                    variant="solid"
                  >
                    View Project
                  </Button>
                </div>
              </motion.div>

              {/* Right column */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-8"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {project.screenshots.map((screenshot, index) => (
                    <motion.div
                      key={screenshot}
                      className="relative aspect-video rounded-xl overflow-hidden border border-white/10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      <img
                        src={screenshot}
                        alt={`Screenshot ${index + 1}`}
                        className="object-cover w-full h-full"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails; 