'use client';
import { useState } from 'react';
import styles from '../styles/Page.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: 'What makes your agency different from other agencies?',
      answer: 'Unlike other companies, we choose our clients carefully, so our teams can work in best interest for the clients.',
    },
    {
      question: "What's your WiFi-Password?",
      answer: "That's a secret we can't share! But we can offer you some great coffee while you're here.",
    },
    {
      question: 'Do you offer post-launch support and maintenance?',
      answer: 'Yes! We offer a comprehensive service and maintenance plan to ensure your application stays up-to-date, secure, and running smoothly.',
    },
    {
      question: 'Can you work with our existing designs or codebase?',
      answer: 'Absolutely. We\'re happy to work with your existing assets to improve and build upon them.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
      transition: { duration: 0.4, ease: "easeOut" }
    },
  };

  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.chatContainer}>
        <div className={styles.chatBody}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.chatMessageWrapper}>
              <div 
                className={`${styles.questionBubble} ${activeIndex === index ? styles.darkQuestionBubble : styles.lightQuestionBubble}`}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </div>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="answer"
                    className={styles.answerBubble}
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
