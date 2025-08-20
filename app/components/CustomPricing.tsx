'use client';

import { useState } from 'react';
import Link from 'next/link';
import AnimatedNumber from './AnimatedNumber';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretDown } from '@phosphor-icons/react';



const CustomPricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openSections, setOpenSections] = useState({
    web: false,
    mobile: false,
  });

  const [features, setFeatures] = useState({
    responsiveDesign: false,
    seoOptimization: false,
    contentManagement: false,
    ecommerce: false,
    userAuthentication: false,
    apiIntegration: false,
    analytics: false,
    crossPlatform: false,
  });

  const [weeks, setWeeks] = useState(4);

  const webFeatureOptions = [
    { key: 'responsiveDesign', label: 'Responsive Design' },
    { key: 'seoOptimization', label: 'SEO Optimization' },
    { key: 'contentManagement', label: 'Content Management System' },
    { key: 'ecommerce', label: 'E-commerce Functionality' },
    { key: 'userAuthentication', label: 'User Authentication' },
    { key: 'apiIntegration', label: 'API Integration' },
    { key: 'analytics', label: 'Analytics & Reporting' },
  ];

  const mobileFeatureOptions = [
    { key: 'responsiveDesign', label: 'Responsive Design' },
    { key: 'userAuthentication', label: 'User Authentication' },
    { key: 'apiIntegration', label: 'API Integration' },
    { key: 'analytics', label: 'Analytics & Reporting' },
    { key: 'crossPlatform', label: 'Cross-platform Development' },
  ];

  const toggleSection = (section: 'web' | 'mobile') => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleFeatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFeatures(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const calculatePrice = () => {
    const basePrice = 2000;
    let featureMultiplier = 1;
    
    Object.values(features).forEach(hasFeature => {
      if (hasFeature) featureMultiplier += 0.15;
    });
    
    return Math.round(basePrice * featureMultiplier * (weeks / 4));
  };

  const startingPrice = calculatePrice();

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-6xl mx-auto mt-6 md:mt-8 p-4 md:p-6 border border-white/10 rounded-lg bg-gradient-to-br from-gray-800/80 to-gray-900/60 text-left gap-4 md:gap-0">
        <div className="text-left">
          <h4 className="font-bold text-accent text-xl mb-1">
            Custom Plan
          </h4>
          <p className="text-gray-200 m-0">
            Need something specific? Let&apos;s build a plan tailored to your exact needs.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <p className="font-black text-xl md:text-2xl leading-none text-white hidden md:block">
            Custom pricing
          </p>
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="inline-flex items-center justify-center w-full md:w-auto px-4 md:px-6 py-2.5 md:py-3 rounded-md border border-accent/30 bg-accent/10 text-accent-foreground font-bold text-sm md:text-base cursor-pointer text-center transition-all duration-300 ease-in-out hover:bg-accent hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-obsidian"
          >
            Build Plan
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 w-screen h-screen bg-obsidian/95 flex justify-center items-center z-50 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-800/90 to-gray-900/80 rounded-xl w-full max-w-3xl max-h-[90vh] md:max-h-[85vh] overflow-hidden border border-accent/30 flex flex-col mx-4 md:mx-0 shadow-2xl shadow-accent/20"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center py-4 md:py-6 px-5 md:px-8 border-b border-accent/20 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
                <h3 className="font-bold text-lg md:text-2xl text-white">Build Your Custom Plan</h3>
                <button 
                  onClick={() => setIsModalOpen(false)} 
                  className="bg-transparent border-none text-white text-xl md:text-2xl cursor-pointer hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm p-1"
                >
                  ×
                </button>
              </div>

              <div className="p-4 md:p-6 overflow-y-auto flex-grow">
                <div className="flex flex-col gap-4">
                  <div>
                    <button className="flex justify-between items-center w-full p-3 bg-gradient-to-r from-white/10 to-white/5 rounded-lg border border-white/20 cursor-pointer hover:bg-gradient-to-r hover:from-white/15 hover:to-white/10 transition-all duration-200" onClick={() => toggleSection('web')}>
                      <label className="text-lg font-bold text-white">Web Development Features</label>
                      <CaretDown size={20} weight="bold" className={`text-accent transition-transform duration-300 ease-in-out ${openSections.web ? 'rotate-180' : ''}`} />
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
                              <div key={key} className="relative flex items-center bg-gradient-to-br from-white/10 to-white/5 p-3 md:p-4 rounded-lg border border-accent/30 hover:border-accent/50 hover:bg-gradient-to-br hover:from-white/15 hover:to-white/10 transition-all duration-200">
                                <input
                                  type="checkbox"
                                  id={key}
                                  name={key}
                                  checked={features[key as keyof typeof features]}
                                  onChange={handleFeatureChange}
                                  className="opacity-0 absolute w-full h-full cursor-pointer"
                                />
                                <label htmlFor={key} className="text-sm md:text-base pl-7 relative cursor-pointer text-white font-medium leading-snug before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:border-2 before:border-accent/40 before:rounded-sm before:bg-gray-800 before:transition-all before:duration-200 after:content-['✓'] after:absolute after:left-1.5 after:top-1/2 after:-translate-y-1/2 after:scale-0 after:text-sm after:font-bold after:text-accent after:transition-all after:duration-200">{label}</label>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <button className="flex justify-between items-center w-full p-3 bg-gradient-to-r from-white/10 to-white/5 rounded-lg border border-white/20 cursor-pointer hover:bg-gradient-to-r hover:from-white/15 hover:to-white/10 transition-all duration-200" onClick={() => toggleSection('mobile')}>
                      <label className="text-lg font-bold text-white">Mobile Development Features</label>
                      <CaretDown size={20} weight="bold" className={`text-accent transition-transform duration-300 ease-in-out ${openSections.mobile ? 'rotate-180' : ''}`} />
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
                              <div key={key} className="relative flex items-center bg-gradient-to-br from-white/10 to-white/5 p-3 md:p-4 rounded-lg border border-accent/30 hover:border-accent/50 hover:bg-gradient-to-br hover:from-white/15 hover:to-white/10 transition-all duration-200">
                                <input
                                  type="checkbox"
                                  id={key}
                                  name={key}
                                  checked={features[key as keyof typeof features]}
                                  onChange={handleFeatureChange}
                                  className="opacity-0 absolute w-full h-full cursor-pointer"
                                />
                                <label htmlFor={key} className="text-sm md:text-base pl-7 relative cursor-pointer text-white font-medium leading-snug before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:border-2 before:border-accent/40 before:rounded-sm before:bg-gray-800 before:transition-all before:duration-200 after:content-['✓'] after:absolute after:left-1.5 after:top-1/2 after:-translate-y-1/2 after:scale-0 after:text-sm after:font-bold after:text-accent after:transition-all after:duration-200">{label}</label>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="pt-8 border-t border-accent/20 mt-4">
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
                      className="w-full h-2 bg-accent/30 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="font-bold text-accent text-lg min-w-[100px] text-center">{weeks} week{weeks > 1 ? 's' : ''}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 md:p-5 border-t border-accent/20 gap-3 md:gap-0 bg-gradient-to-r from-gray-800/30 to-gray-900/30">
                <div className="flex flex-col items-start justify-center">
                  <p className="mb-1 text-gray-300 text-xs md:text-sm">Starting from</p>
                  <span className="font-bold text-xl md:text-2xl text-accent"><AnimatedNumber value={startingPrice} /> CHF</span>
                </div>
                <Link 
                  href="#contact" 
                  className="inline-flex items-center justify-center w-full md:w-auto px-4 md:px-6 py-2.5 md:py-3 rounded-md border border-accent/30 bg-accent/10 text-accent-foreground font-bold text-sm md:text-base cursor-pointer text-center transition-all duration-300 ease-in-out hover:bg-accent hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-900" 
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