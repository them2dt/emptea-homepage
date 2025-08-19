import styles from '../styles/Page.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerColumn}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/imprint">Imprint</Link></li>
          </ul>
        </div>
        <div className={styles.footerLogo}>
          <h4>EMPTEA STUDIOS®</h4>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Emptea Studios. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
