'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: 'Was macht Ihre Agentur anders als andere Agenturen?',
      answer: 'Im Gegensatz zu anderen Unternehmen wählen wir unsere Kunden sorgfältig aus, damit unsere Teams im besten Interesse der Kunden arbeiten können.',
    },
    {
      question: "Wie lautet Ihr WiFi-Passwort?",
      answer: "Das ist ein Geheimnis, das wir nicht teilen können! Aber wir können Ihnen einen tollen Kaffee anbieten, während Sie hier sind.",
    },
    {
      question: 'Bieten Sie Post-Launch-Support und Wartung an?',
      answer: 'Ja! Wir bieten einen umfassenden Service- und Wartungsplan, um sicherzustellen, dass Ihre Anwendung auf dem neuesten Stand, sicher und reibungslos läuft.',
    },
    {
      question: 'Können Sie mit unseren bestehenden Designs oder Codebase arbeiten?',
      answer: 'Absolut. Wir arbeiten gerne mit Ihren bestehenden Assets, um sie zu verbessern und darauf aufzubauen.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const answerVariants = {
    hidden: { opacity: 0, filter: 'blur(5px)', height: 0, marginTop: 0, paddingTop: 0, paddingBottom: 0 },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      height: 'auto',
      marginTop: '0.5rem',
      paddingTop: '0.75rem',
      paddingBottom: '0.75rem',
      transition: { duration: 0.4, ease: "easeOut" as const }
    },
  };

  return (
    <section id="faq" className="py-8 md:py-12 px-4 md:px-6 flex justify-center bg-obsidian">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="font-bold text-lg md:text-xl mb-2 text-white uppercase tracking-wide">FAQ</h2>
          <p className="font-bold text-2xl md:text-3xl lg:text-4xl text-accent leading-tight">Häufig gestellte Fragen</p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="flex flex-col mb-3 md:mb-4">
              <div
                className={`px-4 md:px-5 py-2.5 md:py-3 rounded-t-2xl rounded-br-2xl cursor-pointer font-medium leading-snug relative max-w-[90%] md:max-w-[85%] self-start mb-1.5 text-sm md:text-base transition-colors duration-200 ${activeIndex === index ? 'bg-gray-700 text-white' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </div>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="answer"
                    className="bg-accent text-accent-foreground px-4 md:px-5 py-2.5 md:py-3 rounded-t-2xl rounded-bl-2xl max-w-[90%] md:max-w-[85%] self-end relative leading-snug overflow-hidden text-sm md:text-base"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={answerVariants}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
