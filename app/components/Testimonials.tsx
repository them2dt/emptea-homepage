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
    <section id="testimonials" className="py-8 md:py-12 text-center relative bg-obsidian">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="font-bold text-lg md:text-xl mb-2 text-white uppercase tracking-wide">Testimonials</h2>
        <p className="font-bold text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-8 text-primary-500 leading-tight">What Our Clients Say</p>
        
        <motion.div ref={carouselRef} className="overflow-hidden" whileTap={{ cursor: "grabbing" }}>
          <motion.div
            className="flex gap-4 md:gap-6 py-2 cursor-grab w-max"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-lg p-5 md:p-6 w-72 md:w-80 text-left flex-shrink-0 relative transition-all duration-300 ease-in-out border border-gray-800/40 hover:border-primary-500/20 hover:bg-gradient-to-br hover:from-gray-900/70 hover:to-gray-900/40"
              >
                <p className="text-sm md:text-base leading-relaxed mb-3 md:mb-4 relative z-10 text-gray-300">&ldquo;{testimonial.comment}&rdquo;</p>
                <p className="font-medium relative z-10 text-white text-xs md:text-sm">
                  <strong className="text-primary-500">{testimonial.name}</strong><br />
                  <span className="text-gray-400">{testimonial.company}</span>
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
