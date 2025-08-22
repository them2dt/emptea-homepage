'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const text = "EMPTEA STUDIOS";
  const letters = Array.from(text);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(progressInterval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut' as const,
        delay: 0.2
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 20,
        stiffness: 100
      },
    },
  };

  const progressVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.5,
        ease: 'easeOut' as const
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 w-screen h-screen flex flex-col justify-center items-center bg-obsidian z-[9999]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{
        opacity: 0,
        scale: 1.05,
        transition: {
          duration: 0.6,
          ease: 'easeOut' as const
        }
      }}
    >
      <motion.div
        className="font-black text-4xl text-white flex overflow-hidden mb-8"
        variants={textVariants}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 + (index * 0.03) }}
              whileHover={{ scale: 1.05 }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="w-52 h-0.5 bg-white/10 rounded-sm overflow-hidden relative"
        variants={progressVariants}
      >
        <motion.div
          className="h-full bg-white rounded-sm absolute top-0 left-0"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: 'easeOut' as const }}
        />
      </motion.div>


    </motion.div>
  );
};

export default Loader;
