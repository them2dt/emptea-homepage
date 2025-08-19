import styles from '../styles/Page.module.css';
import { GlobeHemisphereWest, DeviceMobileCamera } from '@phosphor-icons/react';

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <h2>Our services</h2>
      <p className={styles.subtitle}>Crafted with precision, built to perform.</p>
      <div className={styles.serviceGrid}>
        <div className={styles.serviceCard}>
          <div className={styles.serviceIconContainer}>
            <GlobeHemisphereWest size={80} color="#ff5000" weight="duotone" />
          </div>
          <h3>Web</h3>
          <p>With 5 years and +100 projects of expertise, we can craft a web experience, tailored for any device.</p>
        </div>
        <div className={styles.serviceCard}>
          <div className={styles.serviceIconContainer}>
            <DeviceMobileCamera size={80} color="#ff5000" weight="duotone" />
          </div>
          <h3>Mobile</h3>
          <p>Our deep understanding allows us to develop user-friendly apps for any smartphone and tablet.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
