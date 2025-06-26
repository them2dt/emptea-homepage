'use client';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import styles from '../styles/Page.module.css';

const testimonials = [
  {
    name: "Lukas Müller",
    company: "ByteGeist GmbH",
    comment: "Emptea Studios delivered an exceptional product that exceeded our expectations. Their attention to detail and commitment to quality is unmatched."
  },
  {
    name: "Isabelle Dubois",
    company: "Avenir Digital",
    comment: "The team at Emptea is professional, responsive, and incredibly talented. They transformed our vision into a reality."
  },
  {
    name: "Matteo Rossi",
    company: "Innovazione S.R.L.",
    comment: "Working with Emptea was a seamless experience. Their transparent process and direct communication made all the difference."
  },
  {
    name: "Sofía García",
    company: "NexoTech Soluciones",
    comment: "I was blown away by the speed and efficiency of the team. They delivered a high-quality app ahead of schedule."
  }
];

const Testimonials = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateWidth = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };
    
    calculateWidth();
    window.addEventListener('resize', calculateWidth);

    return () => {
      window.removeEventListener('resize', calculateWidth);
    };
  }, []);

  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <h2 className={styles.testimonialsTitle}>What Our Clients Say</h2>
      <motion.div ref={carouselRef} className={styles.testimonialsOuterContainer} whileTap={{ cursor: "grabbing" }}>
        <motion.div 
          className={styles.testimonialsContainer} 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} className={styles.testimonialCard}>
              <p className={styles.testimonialComment}>"{testimonial.comment}"</p>
              <p className={styles.testimonialAuthor}>
                <strong>{testimonial.name}</strong>, {testimonial.company}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
