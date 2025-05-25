'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handlePointerElements = () => {
      const elements = document.querySelectorAll('button, a, input, textarea, [role="button"], [role="link"]');
      
      const handleMouseEnter = () => setIsPointer(true);
      const handleMouseLeave = () => setIsPointer(false);

      elements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });

      return () => {
        elements.forEach(el => {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    const cleanup = handlePointerElements();

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cleanup();
    };
  }, [cursorX, cursorY]);

  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference will-change-transform"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="relative">
          {/* Main cursor */}
          <motion.div 
            className="w-8 h-8 bg-white rounded-full"
            animate={{
              scale: isPointer ? 1.5 : 1,
              opacity: isPointer ? 0.5 : 1,
            }}
            transition={{ type: "spring", damping: 15, stiffness: 150 }}
          />
          
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 border-2 border-white rounded-full"
            animate={{
              scale: isPointer ? 1.2 : [1, 1.2, 1],
              opacity: isPointer ? 0.2 : 1,
            }}
            transition={isPointer ? 
              { type: "spring", damping: 15, stiffness: 150 } : 
              { duration: 1.5, repeat: Infinity }
            }
          />
        </div>
      </motion.div>

      <style jsx global>{`
        * {
          cursor: none !important;
        }
        
        body {
          overflow-x: hidden;
        }

        @media (max-width: 768px) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
}; 