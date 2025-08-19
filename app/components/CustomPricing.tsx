'use client';

import { useState, useMemo } from 'react';
import styles from '../styles/Page.module.css';
import Link from 'next/link';
import AnimatedNumber from './AnimatedNumber';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretDown } from '@phosphor-icons/react';

const CheckmarkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 13l4 4L19 7" stroke="#ff5000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CustomPricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [weeks, setWeeks] = useState(4);
  const [openSections, setOpenSections] = useState({
    web: false,
    mobile: false,
  });

  const [features, setFeatures] = useState({
    // Web Features
    frontendDevelopment: false,
    backendDevelopment: false,
    databaseDesign: false,
    apiDevelopment: false,
    cmsIntegration: false,
    ecommerceSetup: false,
    seoOptimization: false,
    analyticsSetup: false,
    // Mobile Features
    iosDevelopment: false,
    androidDevelopment: false,
    crossPlatform: false,
    pushNotifications: false,
    appStoreOptimization: false,
    mobileAnalytics: false,
    inAppPurchases: false,
    offlineFunctionality: false,
  });

  const toggleSection = (section: 'web' | 'mobile') => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const includedFeatureLabels = useMemo(() => {
    return Object.entries(features)
      .filter(([, value]) => value)
      .map(([key]) => {
        switch (key) {
          // Web Features
          case 'frontendDevelopment': return 'Frontend Development';
          case 'backendDevelopment': return 'Backend Development';
          case 'databaseDesign': return 'Database Design';
          case 'apiDevelopment': return 'API Development';
          case 'cmsIntegration': return 'CMS Integration';
          case 'ecommerceSetup': return 'E-commerce Setup';
          case 'seoOptimization': return 'SEO Optimization';
          case 'analyticsSetup': return 'Analytics Setup';
          // Mobile Features
          case 'iosDevelopment': return 'iOS Development';
          case 'androidDevelopment': return 'Android Development';
          case 'crossPlatform': return 'Cross-platform Development';
          case 'pushNotifications': return 'Push Notifications';
          case 'appStoreOptimization': return 'App Store Optimization';
          case 'mobileAnalytics': return 'Mobile Analytics';
          case 'inAppPurchases': return 'In-app Purchases';
          case 'offlineFunctionality': return 'Offline Functionality';
          default: return '';
        }
      });
  }, [features]);

  const startingPrice = useMemo(() => {
    let price = 0;
    const baseWeeklyRate = 350; 
    let weeklyCost = 0;

    // Calculate weekly cost with long-term discounts
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

    // Calculate feature costs with realistic pricing
    const featurePricing = {
      // Web Features (Professional rates)
      frontendDevelopment: 1200,
      backendDevelopment: 1800,
      databaseDesign: 1500,
      apiDevelopment: 1600,
      cmsIntegration: 900,
      ecommerceSetup: 2200,
      seoOptimization: 800,
      analyticsSetup: 600,
      // Mobile Features (Higher complexity)
      iosDevelopment: 2500,
      androidDevelopment: 2500,
      crossPlatform: 3200,
      pushNotifications: 1200,
      appStoreOptimization: 800,
      mobileAnalytics: 900,
      inAppPurchases: 1800,
      offlineFunctionality: 1500,
    };

    // Add feature costs
    Object.entries(features).forEach(([key, selected]) => {
      if (selected && featurePricing[key as keyof typeof featurePricing]) {
        price += featurePricing[key as keyof typeof featurePricing];
      }
    });

    price += weeklyCost;
    return Math.round(price);
  }, [weeks, features]);

  const handleFeatureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFeatures(prevFeatures => ({
      ...prevFeatures,
      [name]: checked,
    }));
  };

  const webFeatureOptions = [
    { key: 'frontendDevelopment', label: 'Frontend Development' },
    { key: 'backendDevelopment', label: 'Backend Development' },
    { key: 'databaseDesign', label: 'Database Design' },
    { key: 'apiDevelopment', label: 'API Development' },
    { key: 'cmsIntegration', label: 'CMS Integration' },
    { key: 'ecommerceSetup', label: 'E-commerce Setup' },
    { key: 'seoOptimization', label: 'SEO Optimization' },
    { key: 'analyticsSetup', label: 'Analytics Setup' },
  ];

  const mobileFeatureOptions = [
    { key: 'iosDevelopment', label: 'iOS Development' },
    { key: 'androidDevelopment', label: 'Android Development' },
    { key: 'crossPlatform', label: 'Cross-platform Development' },
    { key: 'pushNotifications', label: 'Push Notifications' },
    { key: 'appStoreOptimization', label: 'App Store Optimization' },
    { key: 'mobileAnalytics', label: 'Mobile Analytics' },
    { key: 'inAppPurchases', label: 'In-app Purchases' },
    { key: 'offlineFunctionality', label: 'Offline Functionality' },
  ];

  return (
    <>
      <div className={styles.maintenanceCard}>
        <div className={styles.maintenanceDetails}>
          <h4 className={styles.maintenanceTitle}>Custom Plan</h4>
          <p>Need something specific? Let's build a plan tailored to your exact needs.</p>
        </div>
        <div className={styles.maintenanceAction}>
          <p className={styles.maintenancePrice}>From 2,800 CHF</p>
          <button onClick={() => setIsModalOpen(true)} className={styles.priceButton}>
            Build Plan
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <h3>Build Your Custom Plan</h3>
                <button onClick={() => setIsModalOpen(false)} className={styles.closeButton}>×</button>
              </div>
              
              <div className={styles.modalBody}>
                <div className={styles.customizerContent}>
                  <div className={styles.featureSelector}>
                    <button className={styles.collapsibleHeader} onClick={() => toggleSection('web')}>
                      <label>Web Development Features</label>
                      <CaretDown size={20} weight="bold" className={`${styles.chevronIcon} ${openSections.web ? styles.open : ''}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {openSections.web && (
                        <motion.div
                          key="web-features"
                          initial="collapsed"
                          animate="open"
                          exit="collapsed"
                          variants={{
                            open: { opacity: 1, height: 'auto' },
                            collapsed: { opacity: 0, height: 0 },
                          }}
                          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className={styles.collapsibleContent}
                        >
                          <div className={styles.featureCheckboxes}>
                            {webFeatureOptions.map(({ key, label }) => (
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
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
  
                  <div className={styles.featureSelector}>
                    <button className={styles.collapsibleHeader} onClick={() => toggleSection('mobile')}>
                      <label>Mobile Development Features</label>
                      <CaretDown size={20} weight="bold" className={`${styles.chevronIcon} ${openSections.mobile ? styles.open : ''}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {openSections.mobile && (
                        <motion.div
                          key="mobile-features"
                          initial="collapsed"
                          animate="open"
                          exit="collapsed"
                          variants={{
                            open: { opacity: 1, height: 'auto' },
                            collapsed: { opacity: 0, height: 0 },
                          }}
                          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className={styles.collapsibleContent}
                        >
                          <div className={styles.featureCheckboxes}>
                            {mobileFeatureOptions.map(({ key, label }) => (
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
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

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
              </div>

              <div className={styles.modalFooter}>
                <div className={styles.priceDisplay}>
                  <p className={styles.startingFrom}>Starting from</p>
                  <span className={styles.totalPrice}><AnimatedNumber value={startingPrice} /> CHF</span>
                </div>
                <Link href="#contact" className={styles.priceButton} onClick={() => setIsModalOpen(false)}>
                  Get Quote
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CustomPricing; 