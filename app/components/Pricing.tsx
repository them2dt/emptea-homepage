import styles from '../styles/Page.module.css';
import Link from 'next/link';

const CheckmarkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 13l4 4L19 7" stroke="#0070f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ProCheckmarkIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$1199',
      startingFrom: 'Starting from',
      features: ['up to 2 weeks', 'basic app with core features', 'ideal for start-ups, test launches'],
      type: 'basic',
    },
    {
      name: 'Essential',
      price: '$2999',
      startingFrom: 'Starting from',
      features: ['up to 4 weeks', 'featured app with essentials', 'ideal for smaller companies'],
      type: 'essential',
    },
    {
      name: 'Pro',
      price: '$5499',
      startingFrom: 'Starting from',
      features: ['up to 8 weeks', 'Landing page + Mobile app', 'Brand guideline', 'complete app with all-inclusive', 'Unlimited support'],
      type: 'pro',
    },
  ];

  return (
    <section id="pricing" className={styles.pricing}>
      <h2>Pricing</h2>
      <p className={styles.pricingSubtitle}>Simple & <span className={styles.highlight}>transparent.</span></p>
      <div className={styles.pricingGrid}>
        {plans.map((plan) => (
          <div key={plan.name} className={`${styles.priceCard} ${styles[plan.type + 'Card']}`}>
            <h3 className={styles.planName}>{plan.name}</h3>
            <p className={styles.startingFrom}>{plan.startingFrom}</p>
            <p className={styles.planPrice}>{plan.price}</p>
            <ul className={styles.featureList}>
              {plan.features.map((feature, i) => (
                <li key={i}>
                  {plan.type === 'pro' ? <ProCheckmarkIcon /> : <CheckmarkIcon />}
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link href="#contact" className={styles.priceButton}>Start today</Link>
          </div>
        ))}
      </div>
      <div className={styles.maintenanceCard}>
        <div className={styles.maintenanceDetails}>
            <h4 className={styles.maintenanceTitle}>Service & Maintenance</h4>
            <p>We'll take care of everything to keep your app up-to-date.</p>
        </div>
        <div className={styles.maintenanceAction}>
          <p className={styles.maintenancePrice}>$199</p>
          <Link href="#contact" className={styles.priceButton}>Start today</Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
