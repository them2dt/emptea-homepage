import styles from '../styles/Page.module.css';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroTitle}>Modern software <br/> <span className={styles.highlight}>built to scale.</span></div>
      <Link href="#contact" className={styles.ctaButton}>Start now</Link>
    </section>
  );
};

export default Hero;
