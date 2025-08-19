'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from '../styles/Page.module.css';

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
        ease: 'easeOut'
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
        ease: 'easeOut',
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
        type: 'spring', 
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
        ease: 'easeOut'
      },
    },
  };

  return (
    <motion.div
      className={styles.loaderContainer}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ 
        opacity: 0, 
        scale: 1.05,
        transition: { 
          duration: 0.6, 
          ease: 'easeOut' 
        } 
      }}
    >
      {/* Company Name */}
      <motion.div
        className={styles.loaderText}
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

      {/* Progress Bar */}
      <motion.div
        className={styles.loaderProgress}
        variants={progressVariants}
      >
        <motion.div
          className={styles.loaderProgressBar}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: 'easeOut' }}
        />
      </motion.div>

      {/* Loading Dots */}
      <motion.div
        className={styles.loaderDots}
        variants={progressVariants}
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className={`${styles.loaderDot} ${progress > (index + 1) * 30 ? styles.loaderDotActive : ''}`}
            animate={{
              scale: progress > (index + 1) * 30 ? [1, 1.2, 1] : 1,
              opacity: progress > (index + 1) * 30 ? [0.7, 1, 0.7] : 0.3,
            }}
            transition={{
              duration: 1,
              repeat: progress > (index + 1) * 30 ? Infinity : 0,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Loader;
