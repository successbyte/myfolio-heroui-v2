'use client';

import { motion } from 'framer-motion';
import { About } from '@/components/About';
import { Workspace } from '@/components/Workspace';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Github, 
  Brain, 
  Blocks, 
  Palette, 
  Cloud, 
  Smartphone, 
  Shield, 
  GitBranch,
  LucideIcon 
} from 'lucide-react';

const achievements = [
  {
    number: '5+',
    label: 'Years Experience',
    description: 'In software development'
  },
  {
    number: '50+',
    label: 'Projects Completed',
    description: 'Across various domains'
  },
  {
    number: '30+',
    label: 'Happy Clients',
    description: 'Worldwide collaboration'
  },
  {
    number: '99%',
    label: 'Success Rate',
    description: 'In project delivery'
  }
];

interface Interest {
  name: string;
  icon: LucideIcon;
  description: string;
}

const interests: Interest[] = [
  { 
    name: 'Open Source', 
    icon: Github,
    description: 'Contributing to the community'
  },
  { 
    name: 'AI/ML', 
    icon: Brain,
    description: 'Machine Learning & Neural Networks'
  },
  { 
    name: 'Web3', 
    icon: Blocks,
    description: 'Blockchain & Smart Contracts'
  },
  { 
    name: 'UI/UX', 
    icon: Palette,
    description: 'Design & User Experience'
  },
  { 
    name: 'Cloud Computing', 
    icon: Cloud,
    description: 'Scalable Infrastructure'
  },
  { 
    name: 'IoT', 
    icon: Smartphone,
    description: 'Connected Devices'
  },
  { 
    name: 'Cybersecurity', 
    icon: Shield,
    description: 'Security & Privacy'
  },
  { 
    name: 'DevOps', 
    icon: GitBranch,
    description: 'CI/CD & Automation'
  }
];

const testimonials = [
  {
    quote: "One of the most talented developers I've worked with. Their attention to detail is remarkable.",
    author: "Sarah Johnson",
    role: "Product Manager",
    company: "Tech Corp"
  },
  {
    quote: "Exceptional problem-solving skills and a great team player. Always delivers beyond expectations.",
    author: "Michael Chen",
    role: "CTO",
    company: "StartupX"
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block text-sm font-mono text-primary/80 bg-primary/5 border border-primary/10 px-3 py-1 rounded-full mb-4">
              About Me
            </span>
            <h1 className="text-5xl md:text-6xl font-bold font-grotesk mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white">
              Crafting Digital Experiences
            </h1>
            <p className="text-lg text-muted-foreground font-mono">
              Passionate about creating beautiful, functional, and user-friendly applications
              that solve real-world problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-black/50 backdrop-blur-xl border-white/10 hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-4xl font-bold font-grotesk text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                      {achievement.number}
                    </h3>
                    <p className="font-grotesk font-bold mb-1">{achievement.label}</p>
                    <p className="text-sm text-muted-foreground font-mono">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Interests Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-mono text-primary/80 bg-primary/5 border border-primary/10 px-3 py-1 rounded-full mb-4">
              Interests & Focus
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-grotesk mb-4">
              Areas of Interest
            </h2>
            <p className="text-muted-foreground font-mono max-w-2xl mx-auto">
              Technologies and domains that excite me and drive my continuous learning
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="bg-black/50 backdrop-blur-xl border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                  <CardContent className="p-6 text-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <interest.icon className="w-8 h-8 text-primary/80" />
                      </div>
                      <h3 className="text-xl font-bold font-grotesk mb-2">{interest.name}</h3>
                      <p className="text-sm font-mono text-white/50 mb-4">{interest.description}</p>
                      <div className="h-1 w-12 bg-primary/50 mx-auto rounded-full transform origin-center group-hover:scale-x-150 transition-transform duration-300" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workspace Section */}
      <Workspace />

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <Card className="bg-primary/5 backdrop-blur-xl border-primary/20 overflow-hidden">
            <CardContent className="p-12 text-center relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6 relative z-10"
              >
                <h2 className="text-4xl md:text-5xl font-bold font-grotesk">
                  Let's Work Together
                </h2>
                <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
                  Have a project in mind? Let's create something amazing together.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button size="lg" className="bg-primary/90 hover:bg-primary">
                    Get in Touch
                  </Button>
                  <Button size="lg" variant="secondary" className="border-primary/20 hover:bg-primary/10">
                    View Portfolio
                  </Button>
                </div>
              </motion.div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
