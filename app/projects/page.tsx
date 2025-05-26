'use client';

import { motion } from 'framer-motion';
import { Projects } from '@/components/Projects';
import { CustomCursor } from '@/components/CustomCursor';

const ProjectsPage = () => {
  return (
    <main className="bg-black text-white min-h-screen relative">
      <CustomCursor />
      
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-white/10 via-white/5 to-transparent rounded-full blur-3xl animate-pulse" 
          style={{ 
            top: '20%', 
            left: '60%',
            animation: 'moveAround 20s ease infinite',
          }} 
        />
        <div className="absolute w-[300px] h-[300px] bg-gradient-to-l from-white/10 via-white/5 to-transparent rounded-full blur-2xl"
          style={{ 
            top: '60%', 
            left: '30%',
            animation: 'moveAround 15s ease infinite reverse',
          }} 
        />
      </div>

      {/* Page content */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-32 pb-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold font-grotesk mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              My Projects
            </motion.h1>
            <motion.p
              className="text-xl text-gray-400 font-mono max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A curated collection of my work, showcasing innovative solutions and creative designs.
            </motion.p>
          </div>
        </motion.div>

        <Projects />
      </div>

      <style >{`
        @keyframes moveAround {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(100px, 50px) rotate(120deg); }
          66% { transform: translate(-50px, 100px) rotate(240deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
      `}</style>
    </main>
  );
};

export default ProjectsPage; 