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
      <div className="flex justify-between items-center max-w-6xl mx-auto mt-8 p-6 border border-orange-500/30 rounded-lg bg-black text-left">
        <div className="text-left">
          <h4 className="font-bold text-orange-500 text-xl mb-1">Custom Plan</h4>
          <p className="text-white m-0">Need something specific? Let&apos;s build a plan tailored to your exact needs.</p>
        </div>
        <div className="flex items-center gap-6">
          <p className="font-black text-2xl leading-none text-white">From 2,800 CHF</p>
          <button onClick={() => setIsModalOpen(true)} className="block p-4 rounded-md border border-orange-500/30 bg-orange-500/10 text-white font-bold text-base cursor-pointer text-center transition-all duration-300 ease-in-out hover:bg-orange-500 hover:border-orange-500">
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
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden border border-orange-500/20 flex flex-col"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center py-10 px-12 border-b border-orange-500/10">
                <h3 className="font-bold text-3xl text-white">Build Your Custom Plan</h3>
                <button onClick={() => setIsModalOpen(false)} className="bg-transparent border-none text-white text-2xl cursor-pointer">×</button>
              </div>

              <div className="p-8 overflow-y-auto flex-grow">
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
                          <div className="grid grid-cols-2 gap-5 py-4">
                            {webFeatureOptions.map(({ key, label }) => (
                              <div key={key} className="relative flex items-center bg-gradient-to-br from-white/5 to-white/10 p-5 rounded-lg border border-orange-500/20">
                                <input
                                  type="checkbox"
                                  id={key}
                                  name={key}
                                  checked={features[key as keyof typeof features]}
                                  onChange={handleFeatureChange}
                                  className="opacity-0 absolute w-full h-full cursor-pointer"
                                />
                                <label htmlFor={key} className="text-base pl-8 relative cursor-pointer text-white font-medium leading-snug before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-5 before:h-5 before:border-2 before:border-orange-500/30 before:rounded-sm before:bg-black before:transition-all before:duration-200 after:content-['✓'] after:absolute after:left-2.5 after:top-1/2 after:-translate-y-1/2 after:scale-0 after:text-lg after:font-bold after:text-white after:transition-all after:duration-200">{label}</label>
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
                          <div className="grid grid-cols-2 gap-5 py-4">
                            {mobileFeatureOptions.map(({ key, label }) => (
                              <div key={key} className="relative flex items-center bg-gradient-to-br from-white/5 to-white/10 p-5 rounded-lg border border-orange-500/20">
                                <input
                                  type="checkbox"
                                  id={key}
                                  name={key}
                                  checked={features[key as keyof typeof features]}
                                  onChange={handleFeatureChange}
                                  className="opacity-0 absolute w-full h-full cursor-pointer"
                                />
                                <label htmlFor={key} className="text-base pl-8 relative cursor-pointer text-white font-medium leading-snug before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-5 before:h-5 before:border-2 before:border-orange-500/30 before:rounded-sm before:bg-black before:transition-all before:duration-200 after:content-['✓'] after:absolute after:left-2.5 after:top-1/2 after:-translate-y-1/2 after:scale-0 after:text-lg after:font-bold after:text-white after:transition-all after:duration-200">{label}</label>
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

              <div className="flex justify-between items-center p-5 border-t border-orange-500/10">
                <div className="flex flex-col items-start justify-center">
                  <p className="mb-2 text-white/70">Starting from</p>
                  <span className="font-bold text-3xl text-orange-500"><AnimatedNumber value={startingPrice} /> CHF</span>
                </div>
                <Link href="#contact" className="block p-4 rounded-md border border-orange-500/30 bg-orange-500/10 text-white font-bold text-base cursor-pointer text-center transition-all duration-300 ease-in-out hover:bg-orange-500 hover:border-orange-500" onClick={() => setIsModalOpen(false)}>
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