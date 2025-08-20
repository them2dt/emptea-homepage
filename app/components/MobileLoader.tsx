'use client';
import { motion } from 'framer-motion';

const MobileLoader = () => {
  return (
    <motion.div
      className="fixed inset-0 w-screen h-screen flex flex-col justify-center items-center bg-obsidian z-[9999]"
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeOut' } }}
    >
      <motion.div
        className="font-black text-5xl text-white"
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