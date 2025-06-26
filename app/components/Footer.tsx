import styles from '../styles/Page.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerColumn}>
          <h4>Work</h4>
          <ul>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Clients</a></li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>Services</h4>
          <ul>
            <li><a href="#">Web Apps</a></li>
            <li><a href="#">Mobile Apps</a></li>
            <li><a href="#">UI/UX Design</a></li>
          </ul>
        </div>
        <div className={styles.footerLogo}>
          <h4>EMPTEA STUDIOS®</h4>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>Made with ❤️ in Next.js</p>
      </div>
    </footer>
  );
};

export default Footer;
