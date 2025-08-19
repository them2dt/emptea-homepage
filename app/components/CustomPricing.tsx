'use client';

import { useState, useMemo } from 'react';
import styles from '../styles/Page.module.css';
import Link from 'next/link';
import AnimatedNumber from './AnimatedNumber';

const CheckmarkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 13l4 4L19 7" stroke="#ff5000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CustomPricing = () => {
  const [weeks, setWeeks] = useState(4);
  const [features, setFeatures] = useState({
    brandDesign: false,
    uxDevelopment: false,
    mobileApp: false,
    website: false,
    serviceAndMaintenance: false,
    apiIntegration: false,
    databaseManagement: false,
    cms: false,
  });

  const includedFeatureLabels = useMemo(() => {
    return Object.entries(features)
      .filter(([, value]) => value)
      .map(([key]) => {
        switch (key) {
          case 'brandDesign': return 'Brand Design';
          case 'uxDevelopment': return 'UX Development';
          case 'mobileApp': return 'Mobile App';
          case 'website': return 'Website';
          case 'serviceAndMaintenance': return 'Service & Maintenance';
          case 'apiIntegration': return 'API Integration';
          case 'databaseManagement': return 'Database Management';
          case 'cms': return 'Content Management System';
          default: return '';
        }
      });
  }, [features]);

  const startingPrice = useMemo(() => {
    let price = 0;
    const baseWeeklyRate = 250; 
    const featureCost = 800;
    let weeklyCost = 0;

    if (weeks <= 8) {
      weeklyCost = weeks * baseWeeklyRate;
    } else if (weeks <= 26) {
      const standardWeeks = 8;
      const discountedWeeks = weeks - standardWeeks;
      weeklyCost = (standardWeeks * baseWeeklyRate) + (discountedWeeks * baseWeeklyRate * 0.85); // 15% discount
    } else {
      const standardWeeks = 8;
      const midTierWeeks = 18;
      const longTermWeeks = weeks - standardWeeks - midTierWeeks;
      weeklyCost = (standardWeeks * baseWeeklyRate) + 
                   (midTierWeeks * baseWeeklyRate * 0.85) + // 15% discount
                   (longTermWeeks * baseWeeklyRate * 0.75); // 25% discount
    }

    price += weeklyCost;
    price += includedFeatureLabels.length * featureCost;

    return Math.round(price);
  }, [weeks, includedFeatureLabels]);

  const handleFeatureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFeatures(prevFeatures => ({
      ...prevFeatures,
      [name]: checked,
    }));
  };

  const featureOptions = [
    { key: 'brandDesign', label: 'Brand Design' },
    { key: 'uxDevelopment', label: 'UX Development' },
    { key: 'mobileApp', label: 'Mobile App' },
    { key: 'website', label: 'Website' },
    { key: 'serviceAndMaintenance', label: 'Service & Maintenance' },
    { key: 'apiIntegration', label: 'API Integration' },
    { key: 'databaseManagement', label: 'Database Management' },
    { key: 'cms', label: 'Content Management System' },
  ];

  return (
    <section className={styles.customPricingSection}>
      <div className={styles.customizer}>
        <h3 className={styles.customizerTitle}>Build Your Custom Plan</h3>
        <p className={styles.customizerSubtitle}>Tailor your package to your exact needs.</p>
        <div className={styles.customizerScrollable}>
          <div className={styles.timespanSelector}>
            <label htmlFor="weeks">How many weeks will your project take?</label>
            <div className={styles.sliderContainer}>
              <input
                type="range"
                id="weeks"
                name="weeks"
                min="1"
                max="52"
                value={weeks}
                onChange={(e) => setWeeks(Number(e.target.value))}
                className={styles.timespanSlider}
              />
              <span className={styles.sliderValue}>{weeks} week{weeks > 1 ? 's' : ''}</span>
            </div>
          </div>

          <div className={styles.featureSelector}>
            <label>What should be included?</label>
            <div className={styles.featureCheckboxes}>
              {featureOptions.map(({ key, label }) => (
                <div key={key} className={styles.checkboxWrapper}>
                  <input
                    type="checkbox"
                    id={key}
                    name={key}
                    checked={features[key as keyof typeof features]}
                    onChange={handleFeatureChange}
                  />
                  <label htmlFor={key}>{label}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.planCard}>
        <div className={`${styles.priceCard} ${styles.customCard}`}>
            <h3 className={styles.planName}>Your Custom Plan</h3>
            <p className={styles.startingFrom}>Starting from</p>
            <p className={styles.planPrice}>$<AnimatedNumber value={startingPrice} /></p>
            <ul className={styles.featureList}>
                <li>
                  <CheckmarkIcon />
                  <span>{weeks} week{weeks > 1 ? 's' : ''} development timeline</span>
                </li>
              {includedFeatureLabels.map(feature => (
                <li key={feature}>
                    <CheckmarkIcon />
                    <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link href="#contact" className={styles.priceButton}>Get Started</Link>
          </div>
      </div>
    </section>
  );
};

export default CustomPricing; 