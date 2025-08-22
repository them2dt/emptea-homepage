'use client';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Star } from '@phosphor-icons/react';

const testimonials = [
  {
    name: "Lukas Müller",
    company: "ByteGeist GmbH",
    rating: 5,
    comment: "Emptea Studios hat ein außergewöhnliches Produkt geliefert, das unsere Erwartungen übertroffen hat. Ihre Liebe zum Detail und ihr Engagement für Qualität ist unübertroffen."
  },
  {
    name: "Isabelle Dubois",
    company: "Avenir Digital",
    rating: 5,
    comment: "Das Team bei Emptea ist professionell, reaktionsschnell und unglaublich talentiert. Sie haben unsere Vision in die Realität umgesetzt."
  },
  {
    name: "Matteo Rossi",
    company: "Innovazione S.R.L.",
    rating: 5,
    comment: "Die Zusammenarbeit mit Emptea war eine nahtlose Erfahrung. Ihr transparenter Prozess und die direkte Kommunikation haben den Unterschied gemacht."
  },
  {
    name: "Sofía García",
    company: "NexoTech Soluciones",
    rating: 5,
    comment: "Ich war begeistert von der Geschwindigkeit und Effizienz des Teams. Sie haben eine hochwertige App vor dem Zeitplan geliefert."
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1 mb-3 md:mb-4">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={16}
          weight={index < rating ? "fill" : "regular"}
          className={`${index < rating ? 'text-yellow-400' : 'text-gray-400'}`}
        />
      ))}
    </div>
  );
};

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
        <h2 className="font-bold text-lg md:text-xl mb-2 text-white uppercase tracking-wide">Referenzen</h2>
        <p className="font-bold text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-8 text-accent leading-tight">Was unsere Kunden sagen</p>
        
        <motion.div ref={carouselRef} className="overflow-hidden" whileTap={{ cursor: "grabbing" }}>
          <motion.div
            className="flex gap-4 md:gap-6 py-2 cursor-grab w-max"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-lg p-5 md:p-6 w-72 md:w-80 text-left flex-shrink-0 relative transition-all duration-300 ease-in-out border border-gray-800/40 hover:border-accent/20 hover:bg-gradient-to-br hover:from-gray-900/70 hover:to-gray-900/40"
              >
                <StarRating rating={testimonial.rating} />
                <p className="text-sm md:text-base leading-relaxed mb-3 md:mb-4 relative z-10 text-gray-300">&ldquo;{testimonial.comment}&rdquo;</p>
                <p className="font-medium relative z-10 text-white text-xs md:text-sm">
                  <strong className="text-accent">{testimonial.name}</strong><br />
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
