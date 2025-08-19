'use client';
import { useState } from 'react';
import styles from '../styles/Page.module.css';
import Link from 'next/link';
import AnimatedNumber from './AnimatedNumber';

const CheckmarkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 13l4 4L19 7" stroke="#ff5000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ProCheckmarkIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

const Pricing = () => {
  const [activeService, setActiveService] = useState('web');

  const pricingData = {
    web: [
      {
        name: 'Basic',
        price: 1199,
        startingFrom: 'Starting from',
        features: ['up to 2 weeks', 'basic website with core features', 'responsive design', 'ideal for start-ups, test launches'],
        type: 'basic',
      },
      {
        name: 'Essential',
        price: 2999,
        startingFrom: 'Starting from',
        features: ['up to 4 weeks', 'featured website with essentials', 'advanced functionality', 'ideal for smaller companies'],
        type: 'essential',
      },
      {
        name: 'Pro',
        price: 5499,
        startingFrom: 'Starting from',
        features: ['up to 8 weeks', 'Full-stack web application', 'Brand guidelines', 'complete solution with all-inclusive', 'Unlimited support'],
        type: 'pro',
      },
    ],
    mobile: [
      {
        name: 'Basic',
        price: 1899,
        startingFrom: 'Starting from',
        features: ['up to 3 weeks', 'basic mobile app with core features', 'iOS & Android compatible', 'ideal for start-ups, MVP launches'],
        type: 'basic',
      },
      {
        name: 'Essential',
        price: 4299,
        startingFrom: 'Starting from',
        features: ['up to 6 weeks', 'featured mobile app with essentials', 'backend integration', 'ideal for growing companies'],
        type: 'essential',
      },
      {
        name: 'Pro',
        price: 7999,
        startingFrom: 'Starting from',
        features: ['up to 10 weeks', 'Full native mobile apps', 'Backend & API development', 'complete solution with all-inclusive', 'Unlimited support'],
        type: 'pro',
      },
    ]
  };

  const currentPlans = pricingData[activeService as keyof typeof pricingData];

  return (
    <section id="pricing" className={styles.pricing}>
      <h2>Pricing</h2>
      <p className={styles.pricingSubtitle}>Simple & <span className={styles.highlight}>transparent.</span></p>
      
      <div className={styles.pricingToggle}>
        <div className={styles.toggleContainer}>
          <button 
            className={`${styles.toggleButton} ${activeService === 'web' ? styles.toggleActive : ''}`}
            onClick={() => setActiveService('web')}
          >
            Web
          </button>
          <button 
            className={`${styles.toggleButton} ${activeService === 'mobile' ? styles.toggleActive : ''}`}
            onClick={() => setActiveService('mobile')}
          >
            Mobile
          </button>
        </div>
      </div>

      <div className={styles.pricingGrid}>
        {currentPlans.map((plan) => (
          <div key={plan.name} className={`${styles.priceCard} ${styles[plan.type + 'Card']}`}>
            <h3 className={styles.planName}>{plan.name}</h3>
            <p className={styles.startingFrom}>{plan.startingFrom}</p>
            <div className={styles.planPrice}>
              <AnimatedNumber value={plan.price} /> CHF
            </div>
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
          <p className={styles.maintenancePrice}>199 CHF/month</p>
          <Link href="#contact" className={styles.priceButton}>Start today</Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
