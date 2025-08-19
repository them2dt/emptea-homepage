'use client';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

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
    <section id="testimonials" className="py-16 md:py-24 text-center relative bg-black">
      <h2 className="font-bold text-3xl md:text-5xl mb-12 md:mb-16 text-orange-500 leading-tight px-4">What Our Clients Say</h2>
      <motion.div ref={carouselRef} className="max-w-6xl mx-auto overflow-hidden" whileTap={{ cursor: "grabbing" }}>
        <motion.div
          className="flex gap-4 md:gap-8 px-4 md:px-8 py-4 cursor-grab w-max"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} className="bg-gray-900 rounded-lg p-6 md:p-10 w-80 md:w-96 text-left flex-shrink-0 relative transition-all duration-400 ease-in-out">
              <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 relative z-10 text-white">&ldquo;{testimonial.comment}&rdquo;</p>
              <p className="font-medium relative z-10 text-white text-sm md:text-base">
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
