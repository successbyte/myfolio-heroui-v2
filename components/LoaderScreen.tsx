'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

const inspiringTexts = [
  "Crafting Digital Experiences",
  "Building Tomorrow's Web",
  "Designing the Future",
  "Code. Create. Innovate.",
  "Turning Ideas into Reality"
];

const services = [
  "Web Development",
  "UI/UX Design",
  "Full Stack Solutions",
  "Creative Development",
  "Modern Architecture"
];

interface LoaderScreenProps {
  onLoadingComplete?: () => void;
}

export const LoaderScreen = ({ onLoadingComplete }: LoaderScreenProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showContent, setShowContent] = useState(true);
  const [isFullyRemoved, setIsFullyRemoved] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Rotate through texts more slowly
    const textInterval = setInterval(() => {
      setCurrentTextIndex(prev => (prev + 1) % inspiringTexts.length);
    }, 1200); // Slower text rotation

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    const contentFadeTimer = setTimeout(() => {
      setShowContent(false);
    }, 2800);

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 3200);

    const cleanupTimer = setTimeout(() => {
      setIsFullyRemoved(true);
      document.body.style.overflow = '';
    }, 3700);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
      clearTimeout(contentFadeTimer);
      clearTimeout(loadingTimer);
      clearTimeout(cleanupTimer);
      document.body.style.overflow = '';
    };
  }, [onLoadingComplete]);

  if (isFullyRemoved) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
        >
          {/* Black background with fade */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-black"
          />

          {/* Gradient overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 0.6 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-primary/10"
          />

          <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto px-4">
            {/* Large number with glowing effect */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ 
                scale: showContent ? 1 : 0.8,
                opacity: showContent ? 1 : 0
              }}
              transition={{ duration: 0.5 }}
              className="relative mb-12"
            >
              <span className="text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary via-primary/80 to-primary/20 font-mono leading-none filter blur-[2px] absolute inset-0 animate-pulse" />
              <span className="text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary via-primary/80 to-primary/20 font-mono leading-none relative">
                {Math.min(Math.round(loadingProgress), 100)}
              </span>
            </motion.div>

            {/* Dynamic text animation */}
            <AnimatePresence mode="wait">
              {showContent && (
                <motion.div
                  key={currentTextIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-center mb-16 relative"
                >
                  <motion.div
                    className="text-3xl font-grotesk font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary mb-3"
                  >
                    {inspiringTexts[currentTextIndex]}
                  </motion.div>
                  <motion.div
                    className="text-xl text-primary/60"
                  >
                    {services[currentTextIndex]}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Loading bar with glow effect */}
            <motion.div 
              className="relative w-80 h-1 bg-white/5 rounded-full overflow-hidden mb-8"
              animate={{
                opacity: showContent ? 1 : 0
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(loadingProgress, 100)}%` }}
                className="absolute inset-y-0 left-0 bg-primary rounded-full"
                style={{
                  boxShadow: '0 0 20px rgba(var(--primary-rgb), 0.5)'
                }}
              />
            </motion.div>

            {/* Loading spinner with glow */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ 
                scale: showContent ? 1 : 0,
                opacity: showContent ? 1 : 0
              }}
              transition={{ duration: 0.4 }}
              className="relative"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(var(--primary-rgb), 0.3))'
              }}
            >
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 