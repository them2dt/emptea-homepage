'use client';

import { useState } from 'react';

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
    { key: 'responsiveDesign', label: 'Responsives Design' },
    { key: 'seoOptimization', label: 'SEO-Optimierung' },
    { key: 'contentManagement', label: 'Content Management System' },
    { key: 'ecommerce', label: 'E-Commerce-Funktionalität' },
    { key: 'userAuthentication', label: 'Benutzerauthentifizierung' },
    { key: 'apiIntegration', label: 'API-Integration' },
    { key: 'analytics', label: 'Analytics & Berichterstattung' },
  ];

  const mobileFeatureOptions = [
    { key: 'responsiveDesign', label: 'Responsives Design' },
    { key: 'userAuthentication', label: 'Benutzerauthentifizierung' },
    { key: 'apiIntegration', label: 'API-Integration' },
    { key: 'analytics', label: 'Analytics & Berichterstattung' },
    { key: 'crossPlatform', label: 'Cross-Platform-Entwicklung' },
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
    const basePrice = 799;
    let featureMultiplier = 1;
    
    Object.values(features).forEach(hasFeature => {
      if (hasFeature) featureMultiplier += 0.15;
    });
    
    return Math.round(basePrice * featureMultiplier * (weeks / 4));
  };

  const startingPrice = calculatePrice();

  return (
    <section className="px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-6xl mx-auto mt-6 md:mt-8 p-4 md:p-6 border border-white/10 rounded-lg bg-obsidian text-left gap-4 md:gap-0">
        <div className="text-left">
          <h4 className="font-bold text-accent text-xl mb-1">
            Individueller Plan
          </h4>
          <p className="text-white m-0">
            Brauchen Sie etwas Spezifisches? Lassen Sie uns einen Plan erstellen, der auf Ihre genauen Bedürfnisse zugeschnitten ist.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="block w-full md:w-auto p-3 md:p-4 rounded-md border-none bg-accent text-accent-foreground font-bold text-sm md:text-base cursor-pointer text-center transition-all duration-300 ease-in-out hover:bg-accent/90"
          >
            Plan starten
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
              className="bg-accent rounded-xl w-full max-w-3xl max-h-[90vh] md:max-h-[85vh] overflow-hidden border-none flex flex-col mx-4 md:mx-0 shadow-2xl shadow-accent/20"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center py-4 md:py-6 px-5 md:px-8 border-b border-black/20 bg-gradient-to-r from-black/10 to-black/5">
                <h3 className="font-bold text-lg md:text-2xl text-black">Erstellen Sie Ihren individuellen Plan</h3>
                <button 
                  onClick={() => setIsModalOpen(false)} 
                  className="bg-transparent border-none text-black text-xl md:text-2xl cursor-pointer hover:text-black/70 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-accent rounded-sm p-1"
                >
                  ×
                </button>
              </div>

              <div className="p-4 md:p-6 overflow-y-auto flex-grow">
                <div className="flex flex-col gap-4">
                  <div>
                    <button className="flex justify-between items-center w-full p-3 bg-gradient-to-r from-black/10 to-black/5 rounded-lg border border-black/20 cursor-pointer hover:bg-gradient-to-r hover:from-black/15 hover:to-black/10 transition-all duration-200" onClick={() => toggleSection('web')}>
                      <label className="text-lg font-bold text-black">Web-Entwicklungsfunktionen</label>
                      <CaretDown size={20} weight="bold" className={`text-black transition-transform duration-300 ease-in-out ${openSections.web ? 'rotate-180' : ''}`} />
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
                              <div key={key} className="relative flex items-center bg-gradient-to-br from-black/10 to-black/5 p-3 md:p-4 rounded-lg border border-black/30 hover:border-black/50 hover:bg-gradient-to-br hover:from-black/15 hover:to-black/10 transition-all duration-200">
                                <input
                                  type="checkbox"
                                  id={key}
                                  name={key}
                                  checked={features[key as keyof typeof features]}
                                  onChange={handleFeatureChange}
                                  className="peer opacity-0 absolute w-full h-full cursor-pointer"
                                />
                                <label htmlFor={key} className="text-sm md:text-base pl-7 relative cursor-pointer text-black font-medium leading-snug before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:border-2 before:border-black/40 before:rounded-sm before:bg-white before:transition-all before:duration-200 after:content-['✓'] after:absolute after:left-1 after:top-1/2 after:-translate-y-3/5 after:scale-0 after:text-sm after:font-bold after:text-black after:transition-all after:duration-200 peer-checked:after:scale-100">{label}</label>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <button className="flex justify-between items-center w-full p-3 bg-gradient-to-r from-black/10 to-black/5 rounded-lg border border-black/20 cursor-pointer hover:bg-gradient-to-r hover:from-black/15 hover:to-black/10 transition-all duration-200" onClick={() => toggleSection('mobile')}>
                      <label className="text-lg font-bold text-black">Mobile-Entwicklungsfunktionen</label>
                      <CaretDown size={20} weight="bold" className={`text-black transition-transform duration-300 ease-in-out ${openSections.mobile ? 'rotate-180' : ''}`} />
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
                              <div key={key} className="relative flex items-center bg-gradient-to-br from-black/10 to-black/5 p-3 md:p-4 rounded-lg border border-black/30 hover:border-black/50 hover:bg-gradient-to-br hover:from-black/15 hover:to-black/10 transition-all duration-200">
                                <input
                                  type="checkbox"
                                  id={key}
                                  name={key}
                                  checked={features[key as keyof typeof features]}
                                  onChange={handleFeatureChange}
                                  className="peer opacity-0 absolute w-full h-full cursor-pointer"
                                />
                                <label htmlFor={key} className="text-sm md:text-base pl-7 relative cursor-pointer text-black font-medium leading-snug before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:border-2 before:border-black/40 before:rounded-sm before:bg-white before:transition-all before:duration-200 after:content-['✓'] after:absolute after:left-1 after:top-1/2 after:-translate-y-3/5 after:scale-0 after:text-sm after:font-bold after:text-black after:transition-all after:duration-200 peer-checked:after:scale-100">{label}</label>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="pt-8 border-t border-black/20 mt-4">
                  <label htmlFor="weeks" className="pb-4 mb-4 text-black font-bold block text-center">Wie viele Wochen wird Ihr Projekt dauern?</label>
                  <div className="flex items-center gap-6 w-full">
                    <input
                      type="range"
                      id="weeks"
                      name="weeks"
                      min="1"
                      max="52"
                      value={weeks}
                      onChange={(e) => setWeeks(Number(e.target.value))}
                      className="w-full h-2 bg-black/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-black [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-none"
                    />
                    <span className="font-bold text-black text-lg min-w-[100px] text-center">{weeks} Woche{weeks > 1 ? 'n' : ''}</span>
                  </div>
                </div>
              </div>

                              <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 md:p-5 border-t border-black/20 gap-3 md:gap-0 bg-gradient-to-r from-black/10 to-black/5">
                  <div className="flex flex-col items-start justify-center">
                    <p className="mb-1 text-black/70 text-xs md:text-sm">Ab</p>
                    <span className="font-bold text-xl md:text-2xl text-black"><AnimatedNumber value={startingPrice} /> CHF</span>
                  </div>
                  <a 
                    href={`mailto:contact@emptea.xyz?subject=${encodeURIComponent('Anfrage für individuellen Plan')}&body=${encodeURIComponent(`Hallo EMPTEA Studios,

ich interessiere mich für einen individuellen Entwicklungsplan.

Details des individuellen Plans:
- Geschätzte Dauer: ${weeks} Woche${weeks > 1 ? 'n' : ''}
- Geschätzter Preis: Ab ${startingPrice} CHF

Ausgewählte Funktionen:
${Object.entries(features)
  .filter(([_, hasFeature]) => hasFeature)
  .map(([key, _]) => {
    const featureMap: { [key: string]: string } = {
      responsiveDesign: 'Responsives Design',
      seoOptimization: 'SEO-Optimierung', 
      contentManagement: 'Content Management System',
      ecommerce: 'E-Commerce-Funktionalität',
      userAuthentication: 'Benutzerauthentifizierung',
      apiIntegration: 'API-Integration',
      analytics: 'Analytics & Berichterstattung',
      crossPlatform: 'Cross-Platform-Entwicklung'
    };
    return `- ${featureMap[key] || key}`;
  })
  .join('\n')}

Bitte stellen Sie mir ein detailliertes Angebot und die nächsten Schritte zur Verfügung.

Mit freundlichen Grüßen,
[Ihr Name]`)}`}
                    className="inline-flex items-center justify-center w-full md:w-auto px-4 md:px-6 py-2.5 md:py-3 rounded-md border-none bg-white text-black font-bold text-sm md:text-base cursor-pointer text-center transition-all duration-300 ease-in-out hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-accent" 
                    onClick={() => setIsModalOpen(false)}
                  >
                    Angebot anfordern
                  </a>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CustomPricing; 