'use client';
import styles from '../styles/Page.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.header 
      className={styles.header}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 1.5 }} // Delay to start after loader
    >
      <nav className={styles.navbar}>
        <div className={styles.logo}>
            <Link href="/">EMPTEA STUDIOS®</Link>
        </div>
        <div className={styles.navLinks}>
            <Link href="#services">Services</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#faq">FAQ</Link>
        </div>
        <Link href="#contact" className={styles.contactButton}>
            Get started
        </Link>
      </nav>
    </motion.header>
  );
};

export default Navbar;
