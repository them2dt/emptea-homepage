'use client';
import { motion } from 'framer-motion';
import styles from '../styles/Page.module.css';

const CallToAction = () => {
  const text = "contact@emptea.xyz";
  const letters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.5 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 14, stiffness: 100 },
    },
  };

  return (
    <section id="contact" className={styles.ctaSection}>
        <motion.h2 
            className={styles.ctaText}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            Send us an email at {` `}
            <motion.a 
                href="mailto:contact@emptea.xyz" 
                className={styles.ctaEmail}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {letters.map((letter, index) => (
                    <motion.span key={index} variants={letterVariants}>
                        {letter}
                    </motion.span>
                ))}
            </motion.a>
            
        </motion.h2>
    </section>
  );
};

export default CallToAction;
