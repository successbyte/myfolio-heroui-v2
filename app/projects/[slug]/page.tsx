'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, Chip } from '@heroui/react';
import { projects } from '@/data/projects';
import { CustomCursor } from '@/components/CustomCursor';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Code,
  Server,
  Cloud,
  Blocks,
  Cog,
  ChevronLeft,
  ChevronRight,
  Eye
} from 'lucide-react';

export default function ProjectPage() {
  const params = useParams();
  const project = projects.find((p) => p.slug === params.slug);
  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-white/60 mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Link href="/projects" className="text-primary">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white pb-20">
      <CustomCursor />

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] mb-12">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech: string) => (
                    <Chip key={tech} className="bg-zinc-900/70 text-white/70">
                      {tech}
                    </Chip>
                  ))}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-grotesk text-white mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-white/70 mb-6">
                  {project.description}
                </p>
                <div className="flex items-center gap-4">
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      View Source
                    </Link>
                  )}
                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      className="flex items-center gap-2 bg-primary/90 hover:bg-primary text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </Link>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-black/50 backdrop-blur-xl border-white/10 p-8">
            {/* Project Overview */}
            <div className="prose prose-invert max-w-none mb-12">
              <h2 className="text-2xl font-bold font-grotesk mb-4">Project Overview</h2>
              <p className="text-white/70">{project.content.overview}</p>
            </div>

            {/* Features */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold font-grotesk mb-6">Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-primary/10 text-primary rounded">
                      <Cog className="w-4 h-4" />
                    </div>
                    <span className="text-white/70">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold font-grotesk mb-6">Technology Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  {project.techStack.map((tech) => (
                    <div key={tech} className="flex items-center gap-2 text-white/70 py-1">
                      <Code className="w-4 h-4 text-primary" />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Screenshots */}
            <div>
              <h2 className="text-2xl font-bold font-grotesk mb-6">Screenshots</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.screenshots.map((screenshot, index) => (
                  <div key={index} className="space-y-2">
                    <div className="relative aspect-video rounded-xl overflow-hidden">
                      <Image
                        src={screenshot}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Navigation */}
      <section className="container mx-auto px-4 py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prevProject && (
              <Link href={`/projects/${prevProject.slug}`} className="group">
                <Card className="bg-black/50 backdrop-blur-xl border-white/10 h-full hover:border-primary/20 transition-all">
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-white/60 font-mono text-sm mb-4">
                      <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                      Previous Project
                    </div>
                    <h3 className="font-grotesk font-bold group-hover:text-primary transition-colors">
                      {prevProject.title}
                    </h3>
                  </div>
                </Card>
              </Link>
            )}

            {nextProject && (
              <Link href={`/projects/${nextProject.slug}`} className="group">
                <Card className="bg-black/50 backdrop-blur-xl border-white/10 h-full hover:border-primary/20 transition-all">
                  <div className="p-6">
                    <div className="flex items-center justify-end gap-2 text-white/60 font-mono text-sm mb-4">
                      Next Project
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <h3 className="font-grotesk font-bold text-right group-hover:text-primary transition-colors">
                      {nextProject.title}
                    </h3>
                  </div>
                </Card>
              </Link>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}