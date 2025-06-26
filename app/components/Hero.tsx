import styles from '../styles/Page.module.css';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>Modern software <br/> <span className={styles.highlight}>built to scale.</span></h1>
      <Link href="#contact" className={styles.ctaButton}>Start now</Link>
    </section>
  );
};

export default Hero;
