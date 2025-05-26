'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Card } from '@/components/ui/card';

const educationData = [
  {
    degree: 'Master of Computer Science',
    school: 'Stanford University',
    period: '2019 - 2021',
    description: 'Specialized in Artificial Intelligence and Machine Learning with focus on Neural Networks and Computer Vision.',
    color: 'bg-[#151515]',
    skills: ['Machine Learning', 'Neural Networks', 'Computer Vision', 'Research'],
    progress: 100
  },
  {
    degree: 'Bachelor of Engineering',
    school: 'MIT',
    period: '2015 - 2019',
    description: 'Major in Computer Science with minor in Mathematics. Focus on algorithms and data structures.',
    color: 'bg-[#111111]',
    skills: ['Algorithms', 'Data Structures', 'Software Engineering', 'Mathematics'],
    progress: 100
  },
  {
    degree: 'Full Stack Development',
    school: 'Coding Bootcamp',
    period: '2014 - 2015',
    description: 'Intensive program covering modern web development technologies and best practices.',
    color: 'bg-[#151515]',
    skills: ['React', 'Node.js', 'MongoDB', 'DevOps'],
    progress: 100
  }
];

export const Education = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.03])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.03])_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
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
            Education
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-grotesk mb-4"
          >
            Academic Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground font-mono max-w-2xl mx-auto"
          >
            A timeline of my educational background and achievements
          </motion.p>
        </div>

        {/* Timeline Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50"
          style={{ 
            scaleX: progress,
            transformOrigin: "0%"
          }}
        />

        {/* Education Timeline */}
        <div ref={containerRef} className="relative max-w-7xl mx-auto">
          {/* Timeline Line with Progress */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full">
            <div className="w-px h-full bg-white/10" />
            <motion.div 
              className="absolute top-0 left-0 w-px bg-gradient-to-b from-primary via-primary to-primary/20"
              style={{ 
                height: progress,
                transformOrigin: "top"
              }}
            />
          </div>

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-32"
            >
              {/* Timeline Node */}
              <div className="absolute left-1/2 top-12 transform -translate-x-1/2 z-10">
                <motion.div 
                  className="w-6 h-6 rounded-full bg-primary relative"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 w-full h-full rounded-full bg-primary animate-ping opacity-20" />
                  <div className="absolute inset-0 w-full h-full rounded-full bg-primary/50 animate-pulse" />
                </motion.div>
              </div>

              {/* Content */}
              <div className={`relative ${index % 2 === 0 ? 'md:text-right md:order-1' : 'md:order-2'}`}>
                <Card className={`${edu.color} border border-white/5 hover:border-primary/20 transition-all duration-300 backdrop-blur-sm`}>
                  <div className="p-8 space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold font-grotesk bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-primary/90">{edu.school}</p>
                      <p className="text-sm font-mono text-white/50">{edu.period}</p>
                    </div>

                    <div className="h-px bg-white/10" />

                    <p className="text-white/70 leading-relaxed">{edu.description}</p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {edu.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-white/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${edu.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                </Card>

                {/* Connecting Line */}
                <div 
                  className={`absolute top-16 hidden md:block w-8 h-px bg-primary ${
                    index % 2 === 0 ? 'left-0' : 'right-0'
                  }`}
                />
              </div>

              <div className={`hidden md:block ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};