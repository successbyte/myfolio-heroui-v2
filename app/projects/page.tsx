'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { GridBackground } from '@/components/ui/grid-background';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ProjectCard } from '@/components/ProjectCard';
import { CustomCursor } from '@/components/CustomCursor';
import { Chip } from '@heroui/react';
import { 
  Search, 
  Tag as TagIcon, 
  Code2, 
  Blocks,
  Laptop,
  Smartphone,
  Server,
  Palette,
  Filter
} from 'lucide-react';
import { projects } from '@/data/projects';

// Project categories with icons
const categories = [
  {
    name: 'Full Stack',
    icon: Blocks,
    description: 'End-to-end web applications'
  },
  {
    name: 'Frontend',
    icon: Laptop,
    description: 'UI/UX focused projects'
  },
  {
    name: 'Backend',
    icon: Server,
    description: 'API and server applications'
  },
  {
    name: 'Mobile',
    icon: Smartphone,
    description: 'iOS and Android apps'
  }
];

// Technology tags
const techTags = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Python',
  'TailwindCSS',
  'MongoDB',
  'PostgreSQL',
  'AWS',
  'Docker',
  'GraphQL',
  'Flutter'
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Filter projects based on search, category, and tags
  const filteredProjects = projects.filter(project => {
    const matchesSearch = searchQuery === '' || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = !selectedCategory || project.category === selectedCategory;
    
    const matchesTags = selectedTags.length === 0 || 
      project.techStack.some(tech => selectedTags.includes(tech));

    return matchesSearch && matchesCategory && matchesTags;
  });

  return (
    <main className="min-h-screen bg-black text-white">
      <CustomCursor />
      <GridBackground height="min-h-[60vh]">
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
              className="text-center max-w-4xl mx-auto mb-16"
            >
              <span className="inline-block text-sm font-mono text-primary/80 bg-primary/5 border border-primary/10 px-3 py-1 rounded-full mb-4">
                Portfolio Projects
              </span>
              <h1 className="text-5xl md:text-6xl font-bold font-grotesk mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white">
                Crafting Digital Experiences
              </h1>
              <p className="text-lg text-muted-foreground font-mono">
                Explore my collection of projects showcasing expertise in web development,
                design, and problem-solving across various domains.
              </p>
            </motion.div>

            {/* Search and Filter Section */}
            <Card className="bg-black/50 backdrop-blur-xl border-white/10 mb-12">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Search Input */}
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      placeholder="Search projects..."
                      className="pl-10 bg-black/30 border-white/10 text-white placeholder:text-muted-foreground"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  {/* Category Filter */}
                  <Button 
                    variant="secondary" 
                    className="border-white/10 hover:border-primary/50"
                    onClick={() => setSelectedCategory(null)}
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    {selectedCategory || 'All Categories'}
                  </Button>
                </div>

                {/* Categories */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`
                        p-4 rounded-xl border transition-all duration-300
                        ${selectedCategory === category.name
                          ? 'bg-primary/20 border-primary text-white'
                          : 'bg-black/30 border-white/10 hover:border-primary/50 text-white/70 hover:text-white'
                        }
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <category.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-left">
                          <div className="font-medium">{category.name}</div>
                          <div className="text-xs text-white/50">{category.description}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Tech Stack Tags */}
                <div className="mt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <TagIcon className="w-4 h-4 text-primary/80" />
                    <span className="text-sm font-medium text-white/80">Technologies</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {techTags.map((tag) => (
                      <Button
                        key={tag}
                        variant="secondary"
                        size="sm"
                        className={`
                          rounded-full border-white/10 hover:border-primary/50
                          transition-all duration-300
                          ${selectedTags.includes(tag) 
                            ? 'bg-primary/20 border-primary text-white' 
                            : 'text-white/70 hover:text-white'
                          }
                        `}
                        onClick={() => toggleTag(tag)}
                      >
                        {tag}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </GridBackground>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard project={project} variant="default" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 