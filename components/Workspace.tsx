import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Code, 
  Terminal, 
  Box, 
  Palette, 
  GitBranch, 
  Chrome, 
  Send, 
  FileCode,
  Blocks,
  Cpu,
  Coffee,
  Figma
} from 'lucide-react';

const workspaceItems = [
  {
    title: 'Apple MacBook Pro 14"',
    description: 'The best laptop Apple have designed.',
    specs: '16GB RAM, M1 Pro, 512GB SSD',
    image: '/images/workspace-macbook.png'
  },
  {
    title: 'Apple Studio Display',
    description: 'An incredible screen for Designers',
    specs: '5K Retina display, 27-inch',
    image: '/images/workspace-studio-display.png'
  },
  {
    title: 'Logitech MX Keys Mini',
    description: 'Slick, compact keyboard with customisable keys',
    specs: 'Wireless, Backlit',
    image: '/images/workspace-mx-keys-mini.png'
  },
  {
    title: 'Logitech MX Master 3',
    description: 'A powerful, customisable mouse for creatives',
    specs: 'Wireless, 7 buttons',
    image: '/images/workspace-mx-master-mouse.png'
  }
];

const developmentTools = [
  { 
    name: 'VS Code', 
    icon: Code, 
    description: 'Primary code editor',
    category: 'IDE'
  },
  { 
    name: 'iTerm2', 
    icon: Terminal, 
    description: 'Terminal emulator',
    category: 'Terminal'
  },
  { 
    name: 'Docker', 
    icon: Box, 
    description: 'Containerization',
    category: 'DevOps'
  },
  { 
    name: 'Figma', 
    icon: Figma, 
    description: 'Design & prototyping',
    category: 'Design'
  },
  { 
    name: 'GitHub', 
    icon: GitBranch, 
    description: 'Version control',
    category: 'Development'
  },
  { 
    name: 'Chrome DevTools', 
    icon: Chrome, 
    description: 'Web debugging',
    category: 'Development'
  },
  { 
    name: 'Postman', 
    icon: Send, 
    description: 'API testing',
    category: 'Development'
  },
  { 
    name: 'Notion', 
    icon: FileCode, 
    description: 'Documentation & notes',
    category: 'Productivity'
  },
  { 
    name: 'MongoDB Compass', 
    icon: Blocks, 
    description: 'Database management',
    category: 'Database'
  },
  { 
    name: 'TablePlus', 
    icon: Cpu, 
    description: 'SQL client',
    category: 'Database'
  },
  { 
    name: 'Insomnia', 
    icon: Send, 
    description: 'REST client',
    category: 'Development'
  },
  { 
    name: 'Homebrew', 
    icon: Coffee, 
    description: 'Package manager',
    category: 'Development'
  }
];

export const Workspace = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Workspace Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-grotesk text-white/90 mb-4">
            Workspace
          </h2>
          <p className="text-white/60 font-mono max-w-2xl mx-auto">
            The tools and equipment I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <Card className="bg-[#111111] border-0 rounded-xl overflow-hidden">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {workspaceItems.map((item, index) => (
                  <div key={item.title} className="group space-y-4">
                    <div className="aspect-square relative bg-gradient-to-br from-black to-zinc-900 rounded-lg p-8 flex items-center justify-center group-hover:from-zinc-900 group-hover:to-black transition-all duration-300">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={300}
                        height={300}
                        className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-grotesk text-white/90 mb-1">{item.title}</h3>
                      <p className="text-sm text-white/50 mb-2">{item.description}</p>
                      <p className="text-xs font-mono text-white/30">{item.specs}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Development Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-grotesk text-white/90 mb-4">
              Apps & Software
            </h2>
            <p className="text-white/60 font-mono">
              Essential tools that power my development workflow
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {developmentTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="bg-black/50 backdrop-blur-xl border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                  <CardContent className="p-6 flex flex-col items-center text-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex flex-col items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <tool.icon className="w-6 h-6 text-primary/80" />
                      </div>
                      <h3 className="text-lg font-bold font-grotesk mb-2">{tool.name}</h3>
                      <p className="text-sm font-mono text-white/50">{tool.description}</p>
                      <span className="inline-block text-xs font-mono text-primary/60 mt-2 bg-primary/5 px-2 py-1 rounded-full">
                        {tool.category}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 