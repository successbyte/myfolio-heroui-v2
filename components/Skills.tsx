"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  {
    category: "Frontend",
    description: "Building beautiful, responsive user interfaces",
    image: "/images/skills-frontend.jpeg",
    items: [
      { name: "React", level: 95, icon: "/tech/react.svg" },
      { name: "Next.js", level: 90, icon: "/tech/nextjs.svg" },
      { name: "TypeScript", level: 85, icon: "/tech/typescript.svg" },
      { name: "Tailwind CSS", level: 90, icon: "/tech/tailwind.svg" },
    ],
  },
  {
    category: "Backend",
    description: "Creating robust server-side applications",
    image: "/images/skills-backend.jpeg",
    items: [
      { name: "Node.js", level: 85, icon: "/tech/node.svg" },
      { name: "Python", level: 80, icon: "/tech/python.svg" },
      { name: "PostgreSQL", level: 75, icon: "/tech/postgresql.svg" },
      { name: "MongoDB", level: 80, icon: "/tech/mongodb.svg" },
    ],
  },
  {
    category: "Tools & DevOps",
    description: "Streamlining development and deployment",
    image: "/images/skills-devops.jpeg",
    items: [
      { name: "Git", level: 90, icon: "/tech/git.svg" },
      { name: "Docker", level: 75, icon: "/tech/docker.svg" },
      { name: "AWS", level: 70, icon: "/tech/aws.svg" },
      { name: "CI/CD", level: 80, icon: "/tech/cicd.svg" },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/5">
      <div className="container">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-mono text-primary/80 bg-primary/5 border border-primary/10 px-3 py-1 rounded-full"
            >
              Skills
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold font-grotesk bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80"
            >
              Technical Skills
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Proficient in modern web technologies and development practices,
              with a focus on creating scalable and maintainable solutions.
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background border border-border rounded-lg group  p-6 space-y-6"
              >
                <div className="space-y-4">
                  <div className="relative h-40 w-full rounded-lg overflow-hidden bg-muted/50 p-8">
                    <Image
                      src={category.image}
                      alt={category.category}
                      fill
                      className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between text-sm">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-background hidden md:block border border-border rounded-lg p-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-muted">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">GitHub Activity</h3>
                <p className="text-sm text-muted-foreground">
                  Last 12 months of contributions
                </p>
              </div>
            </div>
            {/* Mobile version with fewer squares */}
            <div className="md:hidden grid grid-cols-13 gap-1">
              {Array.from({ length: 91 }).map((_, i) => {
                const opacity = Math.random();
                return (
                  <div
                    key={i}
                    className="w-4 h-4 rounded-[2px] transition-colors duration-200 hover:scale-125"
                    style={{
                      backgroundColor: `rgb(var(--primary) / ${opacity})`,
                    }}
                  />
                );
              })}
            </div>
            <div className="hidden md:grid grid-cols-52 gap-1">
              {Array.from({ length: 364 }).map((_, i) => {
                const opacity = Math.random();
                return (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-[2px] transition-colors duration-200 hover:scale-125"
                    style={{
                      backgroundColor: `rgb(var(--primary) / ${opacity})`,
                    }}
                  />
                );
              })}
            </div>

            <div className="mt-6 flex justify-between items-center text-xs">
              <span className="text-muted-foreground">Less</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-[2px] bg-primary/10" />
                <div className="w-3 h-3 rounded-[2px] bg-primary/30" />
                <div className="w-3 h-3 rounded-[2px] bg-primary/50" />
                <div className="w-3 h-3 rounded-[2px] bg-primary/70" />
                <div className="w-3 h-3 rounded-[2px] bg-primary" />
              </div>
              <span className="text-muted-foreground">More</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
