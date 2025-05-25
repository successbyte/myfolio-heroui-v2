'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.white/[0.05])_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.white/[0.05])_1px,transparent_1px)] bg-[size:4rem_4rem]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              transition={{ duration: 1 }}
              className="absolute top-1/4 -left-20 w-96 h-96 bg-white rounded-full blur-3xl"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              transition={{ duration: 1 }}
              className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white rounded-full blur-3xl"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-white/5 dark:bg-white/10 border border-white/10 rounded-full px-4 py-2"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-mono">Available for Work</span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-grotesk">
              Crafting Digital
              <br />
              <span className="text-white">Experiences</span>
              <br />
              with Code
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-mono">
              Full Stack Developer specializing in building exceptional digital experiences
            </p>
          </motion.div>

          {/* Project Status Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            <div className="bg-white/5 dark:bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-white/5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-mono text-sm text-neutral-400">Project Status</h3>
                  <p className="font-grotesk">Available</p>
                </div>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-white w-0 rounded-full"></div>
              </div>
            </div>

            <div className="bg-white/5 dark:bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-white/5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-mono text-sm text-neutral-400">Response Time</h3>
                  <p className="font-grotesk">&lt; 24 hours</p>
                </div>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-white w-3/4 rounded-full"></div>
              </div>
            </div>

            <div className="bg-white/5 dark:bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-white/5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-mono text-sm text-neutral-400">Success Rate</h3>
                  <p className="font-grotesk">98%</p>
                </div>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-white w-[98%] rounded-full"></div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <a
              href="#projects"
              className="relative inline-flex items-center justify-center group rounded-full"
            >
              <span className="absolute inset-0 bg-white/10 rounded-full blur group-hover:blur-md transition-all duration-300"></span>
              <span className="relative px-8 py-3 bg-white/10 rounded-full text-white font-mono hover:bg-white/20 transition-colors">
                View Projects
              </span>
            </a>
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center rounded-full px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors font-mono"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 