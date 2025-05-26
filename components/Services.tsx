'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

// Custom Components for Blank Spaces
const CodeSnippet = () => (
  <div className="relative font-mono text-xs bg-[#1a1a1a] rounded-lg p-4 overflow-hidden h-full">
    <div className="absolute top-2 left-2 flex space-x-1">
      <div className="w-2 h-2 rounded-full bg-red-500"></div>
      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
      <div className="w-2 h-2 rounded-full bg-green-500"></div>
    </div>
    <div className="mt-6">
      <div className="text-primary/60">
        <span className="text-blue-400">interface</span> <span className="text-green-400">Service</span> {"{"}
        <div className="pl-4">
          id: <span className="text-orange-400">string</span>;
          <br />
          name: <span className="text-orange-400">string</span>;
          <br />
          description: <span className="text-orange-400">string</span>;
          <br />
          technologies: <span className="text-orange-400">string</span>[];
          <br />
          pricing: {"{"} <br />
          <div className="pl-4">
            basic: <span className="text-orange-400">number</span>;
            <br />
            pro: <span className="text-orange-400">number</span>;
            <br />
            enterprise: <span className="text-orange-400">number</span>;
          </div>
          {"}"};
        </div>
        {"}"}
        <br /><br />
        <span className="text-blue-400">const</span> <span className="text-green-400">webDev</span>: Service = {"{"}<br />
        <div className="pl-4">
          id: <span className="text-orange-400">'web-development'</span>,<br />
          name: <span className="text-orange-400">'Web Development'</span>,<br />
          technologies: [<span className="text-orange-400">'React'</span>, <span className="text-orange-400">'Next.js'</span>, <span className="text-orange-400">'Node'</span>],<br />
          pricing: {"{"} basic: 2999, pro: 5999, enterprise: 9999 {"}"}
        </div>
        {"}"};
      </div>
    </div>
  </div>
);

const ProgressCircle = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-32 h-32">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        <circle
          className="text-gray-800 stroke-current"
          strokeWidth="8"
          fill="transparent"
          r="44"
          cx="50"
          cy="50"
        />
        <circle
          className="text-primary stroke-current"
          strokeWidth="8"
          strokeLinecap="round"
          fill="transparent"
          r="44"
          cx="50"
          cy="50"
          strokeDasharray="276.46"
          strokeDashoffset="41.47"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="276.46"
            to="41.47"
            dur="2s"
            fill="freeze"
          />
        </circle>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <span className="text-2xl font-bold">85%</span>
          <p className="text-xs text-primary/60 mt-1">Performance</p>
        </div>
      </div>
    </div>
  </div>
);

const CommandPalette = () => (
  <div className="bg-[#1a1a1a] rounded-lg p-4 h-full">
    <div className="flex items-center space-x-2 border border-white/10 rounded-md px-3 py-2 mb-3">
      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input type="text" placeholder="Search commands..." className="bg-transparent border-none focus:outline-none text-sm w-full text-white/70" />
      <kbd className="hidden sm:inline-block px-2 py-1 text-xs font-mono text-gray-500 bg-gray-800 rounded">⌘K</kbd>
    </div>
    <div className="space-y-2">
      {[
        { cmd: 'Deploy Project', shortcut: '⌘D' },
        { cmd: 'Create Branch', shortcut: '⌘B' },
        { cmd: 'Run Tests', shortcut: '⌘T' },
        { cmd: 'Open Terminal', shortcut: '⌘`' }
      ].map((item) => (
        <div key={item.cmd} className="flex items-center justify-between px-3 py-2 hover:bg-white/5 rounded-md cursor-pointer group">
          <div className="flex items-center space-x-3">
            <span className="text-sm text-white/70 group-hover:text-white">{item.cmd}</span>
          </div>
          <kbd className="hidden sm:inline-block px-2 py-1 text-xs font-mono text-gray-500 bg-gray-800 rounded">{item.shortcut}</kbd>
        </div>
      ))}
    </div>
  </div>
);


const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Building modern, responsive web applications with cutting-edge technologies and best practices. Specializing in React, Next.js, and TypeScript.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    size: 'large',
  },
  {
    id: 'ui-design',
    title: 'UI/UX Design',
    description: 'Crafting beautiful and intuitive user interfaces that delight users. Focus on accessibility, performance, and modern design principles.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    size: 'medium',
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    description: 'Creating native and cross-platform mobile applications using React Native and Flutter. Expertise in iOS and Android development.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    size: 'medium',
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    description: 'Deploying and managing scalable cloud infrastructure using AWS, Azure, and GCP. Expertise in serverless architecture and DevOps.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    size: 'medium',
  },
  {
    id: 'api-development',
    title: 'API Development',
    description: 'Building robust and scalable APIs using GraphQL, REST, and tRPC. Focus on performance, security, and developer experience.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    size: 'small',
  },
  {
    id: 'consulting',
    title: 'Tech Consulting',
    description: 'Strategic technology consulting and architecture design. Helping businesses make informed decisions about their tech stack.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    size: 'small',
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-mono text-primary/80 bg-primary/5 border border-primary/10 px-3 py-1 rounded-full mb-4"
          >
            Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-grotesk mb-4"
          >
            What I Do Best
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground font-mono max-w-2xl mx-auto"
          >
            Specialized services tailored to bring your digital vision to life
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(200px,auto)]">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative ${
                service.size === 'large' ? 'sm:col-span-2 sm:row-span-2 min-h-[400px]' :
                service.size === 'medium' ? 'sm:row-span-2 min-h-[400px]' :
                'min-h-[200px]'
              }`}
            >
              {/* Hover Effect Strip */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 group-hover:duration-200" />

              <Card className="relative h-full bg-[#111111] border border-white/5 hover:border-primary/20 transition-all duration-300 overflow-hidden group-hover:shadow-2xl group-hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative h-full p-6 flex flex-col">
                  <div className="p-3 rounded-xl bg-white/5 w-fit mb-4">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold font-grotesk mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <div className="flex-grow">
                    <p className="text-muted-foreground text-sm font-mono line-clamp-3 sm:line-clamp-none">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    <span>Learn More</span>
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
              </Card>
            </motion.div>
          ))}

          {/* Custom Components */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sm:col-span-1 min-h-[200px]"
          >
            <Card className="h-full bg-[#111111] border border-white/5 overflow-hidden">
              <CodeSnippet />
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sm:col-span-1 min-h-[200px]"
          >
            <Card className="h-full bg-[#111111] border border-white/5">
              <ProgressCircle />
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sm:col-span-2 min-h-[200px]"
          >
            <Card className="h-full bg-[#111111] border border-white/5">
              <CommandPalette />
            </Card>
          </motion.div>

         
        </div>
      </div>
    </section>
  );
}; 