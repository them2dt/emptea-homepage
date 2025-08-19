'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import AnimatedNumber from './AnimatedNumber';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretDown } from '@phosphor-icons/react';



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



  const startingPrice = useMemo(() => {
    let price = 0;
    const baseWeeklyRate = 350;
    let weeklyCost = 0;

    if (weeks <= 8) {
      weeklyCost = weeks * baseWeeklyRate;
    } else if (weeks <= 26) {
      const standardWeeks = 8;
      const discountedWeeks = weeks - standardWeeks;
      weeklyCost = (standardWeeks * baseWeeklyRate) + (discountedWeeks * baseWeeklyRate * 0.85);
    } else {
      const standardWeeks = 8;
      const midTierWeeks = 18;
      const longTermWeeks = weeks - standardWeeks - midTierWeeks;
      weeklyCost = (standardWeeks * baseWeeklyRate) +
        (midTierWeeks * baseWeeklyRate * 0.85) +
        (longTermWeeks * baseWeeklyRate * 0.75);
    }

    const featurePricing = {
      frontendDevelopment: 1200,
      backendDevelopment: 1800,
      databaseDesign: 1500,
      apiDevelopment: 1600,
      cmsIntegration: 900,
      ecommerceSetup: 2200,
      seoOptimization: 800,
      analyticsSetup: 600,
      iosDevelopment: 2500,
      androidDevelopment: 2500,
      crossPlatform: 3200,
      pushNotifications: 1200,
      appStoreOptimization: 800,
      mobileAnalytics: 900,
      inAppPurchases: 1800,
      offlineFunctionality: 1500,
    };

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
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-5xl mx-auto mt-4 md:mt-6 p-4 md:p-5 border border-white/10 rounded-lg bg-black text-left gap-3 md:gap-0">
        <div className="text-left">
          <h4 className="font-bold text-orange-500 text-lg md:text-xl mb-1">Custom Plan</h4>
          <p className="text-white text-sm md:text-base m-0">Need something specific? Let&apos;s build a plan tailored to your exact needs.</p>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4">
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="inline-flex items-center justify-center w-full md:w-auto px-4 md:px-6 py-2.5 md:py-3 rounded-md border border-orange-500/30 bg-orange-500/10 text-white font-bold text-sm md:text-base cursor-pointer text-center transition-all duration-300 ease-in-out hover:bg-orange-500 hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:ring-offset-2 focus:ring-offset-black"
          >
            Build Plan
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 w-screen h-screen bg-black/85 flex justify-center items-center z-50 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl w-full max-w-3xl max-h-[90vh] md:max-h-[85vh] overflow-hidden border border-orange-500/20 flex flex-col mx-4 md:mx-0"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center py-4 md:py-6 px-5 md:px-8 border-b border-orange-500/10">
                <h3 className="font-bold text-lg md:text-2xl text-white">Build Your Custom Plan</h3>
                <button 
                  onClick={() => setIsModalOpen(false)} 
                  className="bg-transparent border-none text-white text-xl md:text-2xl cursor-pointer hover:text-orange-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm p-1"
                >
                  ×
                </button>
              </div>

              <div className="p-4 md:p-6 overflow-y-auto flex-grow">
                <div className="flex flex-col gap-4">
                  <div>
                    <button className="flex justify-between items-center w-full p-3 bg-white/5 rounded-lg border border-white/10 cursor-pointer" onClick={() => toggleSection('web')}>
                      <label className="text-lg font-bold text-white">Web Development Features</label>
                      <CaretDown size={20} weight="bold" className={`text-orange-500 transition-transform duration-300 ease-in-out ${openSections.web ? 'rotate-180' : ''}`} />
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
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 py-3">
                            {webFeatureOptions.map(({ key, label }) => (
                              <div key={key} className="relative flex items-center bg-gradient-to-br from-white/5 to-white/10 p-3 md:p-4 rounded-lg border border-orange-500/20 hover:border-orange-500/30 transition-colors duration-200">
                                <input
                                  type="checkbox"
                                  id={key}
                                  name={key}
                                  checked={features[key as keyof typeof features]}
                                  onChange={handleFeatureChange}
                                  className="opacity-0 absolute w-full h-full cursor-pointer"
                                />
                                <label htmlFor={key} className="text-sm md:text-base pl-7 relative cursor-pointer text-white font-medium leading-snug before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:border-2 before:border-orange-500/30 before:rounded-sm before:bg-black before:transition-all before:duration-200 after:content-['✓'] after:absolute after:left-1.5 after:top-1/2 after:-translate-y-1/2 after:scale-0 after:text-sm after:font-bold after:text-white after:transition-all after:duration-200">{label}</label>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <button className="flex justify-between items-center w-full p-3 bg-white/5 rounded-lg border border-white/10 cursor-pointer" onClick={() => toggleSection('mobile')}>
                      <label className="text-lg font-bold text-white">Mobile Development Features</label>
                      <CaretDown size={20} weight="bold" className={`text-orange-500 transition-transform duration-300 ease-in-out ${openSections.mobile ? 'rotate-180' : ''}`} />
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
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 py-3">
                            {mobileFeatureOptions.map(({ key, label }) => (
                              <div key={key} className="relative flex items-center bg-gradient-to-br from-white/5 to-white/10 p-3 md:p-4 rounded-lg border border-orange-500/20 hover:border-orange-500/30 transition-colors duration-200">
                                <input
                                  type="checkbox"
                                  id={key}
                                  name={key}
                                  checked={features[key as keyof typeof features]}
                                  onChange={handleFeatureChange}
                                  className="opacity-0 absolute w-full h-full cursor-pointer"
                                />
                                <label htmlFor={key} className="text-sm md:text-base pl-7 relative cursor-pointer text-white font-medium leading-snug before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:border-2 before:border-orange-500/30 before:rounded-sm before:bg-black before:transition-all before:duration-200 after:content-['✓'] after:absolute after:left-1.5 after:top-1/2 after:-translate-y-1/2 after:scale-0 after:text-sm after:font-bold after:text-white after:transition-all after:duration-200">{label}</label>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="pt-8 border-t border-orange-500/10 mt-4">
                  <label htmlFor="weeks" className="pb-4 mb-4 text-white font-bold block text-center">How many weeks will your project take?</label>
                  <div className="flex items-center gap-6 w-full">
                    <input
                      type="range"
                      id="weeks"
                      name="weeks"
                      min="1"
                      max="52"
                      value={weeks}
                      onChange={(e) => setWeeks(Number(e.target.value))}
                      className="w-full h-2 bg-orange-500/20 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="font-bold text-orange-500 text-lg min-w-[100px] text-center">{weeks} week{weeks > 1 ? 's' : ''}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 md:p-5 border-t border-orange-500/10 gap-3 md:gap-0">
                <div className="flex flex-col items-start justify-center">
                  <p className="mb-1 text-white/70 text-xs md:text-sm">Starting from</p>
                  <span className="font-bold text-xl md:text-2xl text-orange-500"><AnimatedNumber value={startingPrice} /> CHF</span>
                </div>
                <Link 
                  href="#contact" 
                  className="inline-flex items-center justify-center w-full md:w-auto px-4 md:px-6 py-2.5 md:py-3 rounded-md border border-orange-500/30 bg-orange-500/10 text-white font-bold text-sm md:text-base cursor-pointer text-center transition-all duration-300 ease-in-out hover:bg-orange-500 hover:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:ring-offset-2 focus:ring-offset-gray-900" 
                  onClick={() => setIsModalOpen(false)}
                >
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