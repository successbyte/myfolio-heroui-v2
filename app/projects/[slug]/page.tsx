"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, Chip } from "@heroui/react";
import { projects } from "@/data/projects";
import { CustomCursor } from "@/components/CustomCursor";
import { GridBackground } from "@/components/ui/grid-background";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Code2,
  Server,
  Blocks,
  Cog,
  ChevronLeft,
  ChevronRight,
  Star,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

export default function ProjectPage() {
  const params = useParams();
  const project = projects.find((p) => p.slug === params.slug);
  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-white/60 mb-8">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/projects" className="text-primary">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <CustomCursor />

      {/* Hero Section */}
      <GridBackground height="min-h-fit">
        <section className="relative min-h-[70vh] flex items-center">
          {/* Enhanced Background Effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black pointer-events-none" />
          </div>

          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Navigation */}
              <div className="flex items-center justify-between mb-12">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Projects
                </Link>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-4"
                >
                  <span className="text-sm text-white/40 font-mono">
                    Project Category
                  </span>
                  <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                    {project.category}
                  </span>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative"
                >
                  <div className="space-y-6">
                    {/* Project Status */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                      </span>
                      <span className="text-sm font-mono text-white/60">
                        Project Showcase
                      </span>
                    </motion.div>

                    {/* Title */}
                    <div className="space-y-4">
                      <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold font-grotesk"
                      >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white">
                          {project.title}
                        </span>
                      </motion.h1>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-white/70 max-w-xl"
                      >
                        {project.description}
                      </motion.p>
                    </div>

                    {/* Tech Pills */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex flex-wrap gap-2"
                    >
                      {project.techStack.slice(0, 4).map((tech, index) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                        >
                          <Chip
                            className="
                              bg-white/5 backdrop-blur-lg
                              text-white/70 border border-white/10 
                              hover:border-primary/20 hover:bg-white/10
                              transition-all duration-300
                            "
                          >
                            {tech}
                          </Chip>
                        </motion.div>
                      ))}
                      {project.techStack.length > 4 && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 }}
                        >
                          <Chip className="bg-white/5 text-white/40">
                            +{project.techStack.length - 4} more
                          </Chip>
                        </motion.div>
                      )}
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex items-center gap-4 pt-4"
                    >
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          className="
                            group flex items-center gap-2 
                            bg-white/10 hover:bg-white/20 
                            text-white px-6 py-3 rounded-lg 
                            transition-all duration-300
                            hover:scale-105
                          "
                        >
                          <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                          View Source
                        </Link>
                      )}
                      {project.demoUrl && (
                        <Link
                          href={project.demoUrl}
                          target="_blank"
                          className="
                            group flex items-center gap-2 
                            bg-primary/90 hover:bg-primary 
                            text-black px-6 py-3 rounded-lg 
                            transition-all duration-300
                            hover:scale-105
                          "
                        >
                          <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                          Live Demo
                        </Link>
                      )}
                    </motion.div>
                  </div>
                </motion.div>

                {/* Project Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="relative"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-60 
                        group-hover:opacity-40 transition-opacity duration-500"
                    />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="
                        object-cover scale-105
                        group-hover:scale-110 
                        transition-transform duration-500
                        brightness-90 group-hover:brightness-100
                      "
                      priority
                    />
                    <div
                      className="
                      absolute inset-0 
                      bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                      opacity-60 group-hover:opacity-40 
                      transition-opacity duration-500
                    "
                    />
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </GridBackground>

      {/* Content Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-16">
                {/* Overview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="prose prose-invert max-w-none"
                >
                  <h2 className="text-3xl font-bold font-grotesk mb-6 flex items-center gap-3">
                    <span className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-primary" />
                    </span>
                    Project Overview
                  </h2>
                  <p className="text-lg text-white/70 leading-relaxed">
                    {project.content.overview}
                  </p>
                </motion.div>

                {/* Process */}
                <div className="space-y-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <span className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Server className="w-6 h-6 text-primary" />
                      </span>
                      <h2 className="text-3xl font-bold font-grotesk">
                        Development Process
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <Card className="bg-black/50 backdrop-blur-xl border-white/10 p-8 hover:border-primary/20 transition-colors">
                        <h3 className="text-xl font-bold mb-4">Challenges</h3>
                        <p className="text-white/70">
                          {project.content.challenges}
                        </p>
                      </Card>
                      <Card className="bg-black/50 backdrop-blur-xl border-white/10 p-8 hover:border-primary/20 transition-colors">
                        <h3 className="text-xl font-bold mb-4">Solutions</h3>
                        <p className="text-white/70">
                          {project.content.solutions}
                        </p>
                      </Card>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent backdrop-blur-xl border-primary/20 p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Star className="w-6 h-6 text-primary" />
                        </span>
                        <h3 className="text-xl font-bold">Results & Impact</h3>
                      </div>
                      <p className="text-white/70">{project.content.results}</p>
                    </Card>
                  </motion.div>
                </div>

                {/* Screenshots */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Blocks className="w-6 h-6 text-primary" />
                    </span>
                    <h2 className="text-3xl font-bold font-grotesk">
                      Project Gallery
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.screenshots.map((screenshot, index) => (
                      <div
                        key={index}
                        className="group relative aspect-video rounded-xl overflow-hidden"
                      >
                        <Image
                          src={screenshot}
                          alt={`${project.title} screenshot ${index + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-black/50 backdrop-blur-xl border-white/10 p-8">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Cog className="w-5 h-5 text-primary" />
                      </span>
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Chip
                          key={tech}
                          className="bg-white/5 text-white/70 border border-white/10 hover:border-primary/20 transition-colors"
                        >
                          {tech}
                        </Chip>
                      ))}
                    </div>
                  </Card>
                </motion.div>

                {/* Key Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-black/50 backdrop-blur-xl border-white/10 p-8">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </span>
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="mt-1 p-1 bg-primary/10 text-primary rounded">
                            <CheckCircle2 className="w-4 h-4" />
                          </span>
                          <span className="text-white/70">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {prevProject && (
                <Link href={`/projects/${prevProject.slug}`} className="group">
                  <Card className="bg-black/50 backdrop-blur-xl border-white/10 hover:border-primary/20 transition-all p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                        <Image
                          src={prevProject.image}
                          alt={prevProject.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-white/60 font-mono text-sm mb-2">
                          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                          Previous Project
                        </div>
                        <h3 className="font-grotesk font-bold group-hover:text-primary transition-colors">
                          {prevProject.title}
                        </h3>
                      </div>
                    </div>
                  </Card>
                </Link>
              )}

              {nextProject && (
                <Link href={`/projects/${nextProject.slug}`} className="group">
                  <Card className="bg-black/50 backdrop-blur-xl border-white/10 hover:border-primary/20 transition-all p-6">
                    <div className="flex items-center justify-end gap-4">
                      <div className="text-right">
                        <div className="flex items-center justify-end gap-2 text-white/60 font-mono text-sm mb-2">
                          Next Project
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                        <h3 className="font-grotesk font-bold group-hover:text-primary transition-colors">
                          {nextProject.title}
                        </h3>
                      </div>
                      <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                        <Image
                          src={nextProject.image}
                          alt={nextProject.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </Card>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
