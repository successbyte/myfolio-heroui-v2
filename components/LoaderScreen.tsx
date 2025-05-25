'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export const LoaderScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-neutral-950 flex items-center justify-center"
        >
          <div className="relative">
            {/* Logo or text */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-grotesk font-bold"
            >
              Portfolio
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute -bottom-4 left-0 w-full h-0.5 bg-white origin-left"
            />

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-12 left-0 w-full text-center font-mono text-sm text-gray-400"
            >
              Loading...
            </motion.div>
          </div>

          {/* Background grid pattern */}
          <div className="absolute inset-0 grid-pattern opacity-10" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 