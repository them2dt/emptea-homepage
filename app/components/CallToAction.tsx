'use client';
import { motion } from 'framer-motion';

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
      transition: { type: 'spring' as const, damping: 14, stiffness: 100 },
    },
  };

  return (
    <section id="contact" className="py-32 px-8 text-center bg-black relative">
      <motion.h2
        className="font-bold text-6xl leading-tight text-white relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Send us an email at{' '}
        <motion.a
          href="mailto:contact@emptea.xyz"
          className="inline-block text-orange-500 no-underline cursor-pointer transition-all duration-300 ease-in-out relative"
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
