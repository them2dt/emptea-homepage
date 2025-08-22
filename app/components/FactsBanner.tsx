'use client';

import { motion } from 'framer-motion';
import AnimatedNumber from './AnimatedNumber';

const FactsBanner = () => {
  const facts = [
    {
      number: 100,
      suffix: '+',
      label: 'Projekte'
    },
    {
      number: 10,
      suffix: '+ Jahre',
      label: 'Erfahrung in der Entwicklung'
    },
    {
      number: 24,
      suffix: 'h',
      label: 'Durchschnittliche Reaktionszeit'
    },
    {
      number: 96,
      suffix: '%',
      label: 'Kundenzufriedenheit'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <section className="py-8 md:py-12 px-4 md:px-6 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border-y border-accent/20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              className="text-center group"
              variants={itemVariants}
            >
              <div className="mb-6">
                <div className="font-black text-3xl md:text-4xl lg:text-5xl text-accent leading-none">
                  <AnimatedNumber value={fact.number} />
                  <span className="text-accent/80">{fact.suffix}</span>
                </div>
              </div>
              <h3 className="font-bold text-lg md:text-xl text-white leading-tight">
                {fact.label}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FactsBanner;