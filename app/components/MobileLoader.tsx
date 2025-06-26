'use client';
import { motion } from 'framer-motion';
import styles from '../styles/Page.module.css';

const MobileLoader = () => {
  return (
    <motion.div
      className={styles.loaderContainer}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeOut' } }}
    >
      <motion.div
        className={styles.loaderText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        EMPTEA
      </motion.div>
    </motion.div>
  );
};

export default MobileLoader; 