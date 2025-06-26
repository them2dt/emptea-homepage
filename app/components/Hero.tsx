import styles from '../styles/Page.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>Modern software <br/> <span className={styles.highlight}>built to scale.</span></h1>
      <button className={styles.ctaButton}>Start now</button>
    </section>
  );
};

export default Hero;
