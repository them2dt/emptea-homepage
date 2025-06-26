'use client';
import styles from '../styles/Page.module.css';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);

  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileNavOpen]);

  const menuVariants = {
    hidden: { opacity: 0, transition: { staggerChildren: 0.1, staggerDirection: -1 } },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.header 
        className={styles.header}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 1.5 }}
      >
        <nav className={styles.navbar}>
          <div className={styles.logo}>
              <Link href="/">EMPTEA STUDIOS®</Link>
          </div>
          <div className={styles.desktopNav}>
            <div className={styles.navLinks}>
                <Link href="#services">Services</Link>
                <Link href="#pricing">Pricing</Link>
                <Link href="#testimonials">Testimonials</Link>
                <Link href="#faq">FAQ</Link>
            </div>
            <Link href="#contact" className={styles.contactButton}>
                Get started
            </Link>
          </div>
          <button className={styles.hamburgerButton} onClick={toggleMobileNav} aria-label="Menu">
             <svg width="24" height="24" viewBox="0 0 24 24">
                <motion.path stroke="#000" strokeWidth="2" animate={mobileNavOpen ? "open" : "closed"} variants={{ closed: { d: "M 2 4 L 22 4" }, open: { d: "M 4 18 L 20 2" } }}/>
                <motion.path stroke="#000" strokeWidth="2" d="M 2 12 L 22 12" animate={mobileNavOpen ? "open" : "closed"} variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}/>
                <motion.path stroke="#000" strokeWidth="2" animate={mobileNavOpen ? "open" : "closed"} variants={{ closed: { d: "M 2 20 L 22 20" }, open: { d: "M 4 2 L 20 18" } }}/>
            </svg>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div 
            className={styles.mobileNavMenu}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <motion.div variants={menuItemVariants}><Link href="#services" onClick={toggleMobileNav}>Services</Link></motion.div>
            <motion.div variants={menuItemVariants}><Link href="#pricing" onClick={toggleMobileNav}>Pricing</Link></motion.div>
            <motion.div variants={menuItemVariants}><Link href="#testimonials" onClick={toggleMobileNav}>Testimonials</Link></motion.div>
            <motion.div variants={menuItemVariants}><Link href="#faq" onClick={toggleMobileNav}>FAQ</Link></motion.div>
            <motion.div variants={menuItemVariants}>
                <Link href="#contact" className={styles.mobileContactButton} onClick={toggleMobileNav}>
                    Get started
                </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
