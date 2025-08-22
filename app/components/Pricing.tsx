'use client';
import { useState } from 'react';

import AnimatedNumber from './AnimatedNumber';

const CheckmarkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent" />
  </svg>
);

const ProCheckmarkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black/70" />
  </svg>
);

const Pricing = () => {
  const [activeService, setActiveService] = useState('web');

  /**
   * Generates a pre-filled email for package inquiries
   * @param planName - Name of the selected plan
   * @param planType - Type of plan (basic, essential, pro)
   * @param price - Price of the plan
   * @param service - Service type (web or mobile)
   * @returns Formatted email content
   */
  const generatePackageEmail = (planName: string, planType: string, price: number, service: string) => {
    const subject = `Inquiry for ${planName} ${service} package`;
    const body = `Hi EMPTEA Studios,

I'm interested in your ${planName} ${service} development package.

Package Details:
- Plan: ${planName} (${planType})
- Service: ${service} development
- Price: Starting from ${price} CHF

Please provide more information about this package and next steps.

Best regards,
[Your Name]`;

    return `mailto:contact@emptea.xyz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const pricingData = {
    web: [
      {
        name: 'Basic',
        price: 499,
        startingFrom: 'Ab',
        features: ['bis zu 2 Wochen', 'grundlegende Website mit Kernfunktionen', 'responsives Design', 'ideal für Start-ups, Test-Launches'],
        type: 'basic',
      },
      {
        name: 'Essential',
        price: 1299,
        startingFrom: 'Ab',
        features: ['bis zu 4 Wochen', 'erweiterte Website mit Essentials', 'fortgeschrittene Funktionalität', 'ideal für kleinere Unternehmen'],
        type: 'essential',
      },
      {
        name: 'Pro',
        price: 2499,
        startingFrom: 'Ab',
        features: ['bis zu 8 Wochen', 'Full-Stack Web-Anwendung', 'Brand-Richtlinien', 'komplette All-inclusive-Lösung', 'Unbegrenzter Support'],
        type: 'pro',
      },
    ],
    mobile: [
      {
        name: 'Basic',
        price: 799,
        startingFrom: 'Ab',
        features: ['bis zu 3 Wochen', 'grundlegende Mobile App mit Kernfunktionen', 'iOS & Android kompatibel', 'ideal für Start-ups, MVP-Launches'],
        type: 'basic',
      },
      {
        name: 'Essential',
        price: 1599,
        startingFrom: 'Ab',
        features: ['bis zu 6 Wochen', 'erweiterte Mobile App mit Essentials', 'Backend-Integration', 'ideal für wachsende Unternehmen'],
        type: 'essential',
      },
      {
        name: 'Pro',
        price: 2999,
        startingFrom: 'Ab',
        features: ['bis zu 10 Wochen', 'Vollständige native Mobile Apps', 'Backend & API-Entwicklung', 'komplette All-inclusive-Lösung', 'Unbegrenzter Support'],
        type: 'pro',
      },
    ]
  };

  const currentPlans = pricingData[activeService as keyof typeof pricingData];

  return (
    <section
      id="pricing"
      className="text-center pt-16 px-4 md:px-8 bg-obsidian"
    >
      <h2 className="font-bold text-xl md:text-2xl mb-2 text-white uppercase">
        Preise
      </h2>
      <p className="font-bold text-3xl md:text-5xl mb-8 md:mb-12 text-accent px-4">
        Einfach & <span className="text-accent">transparent.</span>
      </p>

      <div className="flex justify-center mb-8 sm:mb-10 lg:mb-12">
        <div className="relative inline-flex bg-gray-900/80 backdrop-blur-sm rounded-full p-1 border border-gray-700/50 shadow-lg shadow-black/20">
          {/* Sliding background indicator */}
          <div
            className={`absolute top-1 bottom-1 bg-accent rounded-full transition-all duration-300 ease-in-out shadow-md shadow-accent/30 ${
              activeService === "web"
                ? "left-1 right-[50%]"
                : "left-[50%] right-1"
            }`}
          />

          <button
            className={`relative z-10 px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 border-none rounded-full bg-transparent font-semibold text-sm sm:text-base lg:text-lg cursor-pointer transition-all duration-300 ease-in-out min-w-[5rem] sm:min-w-[6rem] lg:min-w-[7rem] ${
              activeService === "web"
                ? "text-black font-bold"
                : "text-gray-300 hover:text-white"
            }`}
            onClick={() => setActiveService("web")}
            role="tab"
          >
            Web
          </button>

          <button
            className={`relative z-10 px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 lg:py-4 border-none rounded-full bg-transparent font-semibold text-sm sm:text-base lg:text-lg cursor-pointer transition-all duration-300 ease-in-out min-w-[5rem] sm:min-w-[6rem] lg:min-w-[7rem] ${
              activeService === "mobile"
                ? "text-black font-bold"
                : "text-gray-300 hover:text-white"
            }`}
            onClick={() => setActiveService("mobile")}
            role="tab"
          >
            Mobile
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mt-8 md:mt-12 items-stretch">
        {currentPlans.slice(0, 2).map((plan) => (
          <div
            key={plan.name}
            className={`border p-6 md:p-10 rounded-lg bg-obsidian text-left flex flex-col transition-all duration-400 ease-in-out ${
              plan.type === "pro"
                ? "bg-accent text-accent-foreground border-none"
                : plan.type === "essential"
                ? "border-accent/50"
                : "border-accent/30"
            }`}
          >
            <h3
              className={`font-medium text-xl md:text-2xl mb-1 ${
                plan.type === "pro" ? "text-black" : "text-accent"
              }`}
            >
              {plan.name}
            </h3>
            <p className={`text-xs mb-2 text-start ${
              plan.type === "pro" ? "text-black/70" : "text-white/70"
            }`}>
              {plan.startingFrom}
            </p>
            <div className={`font-black text-3xl md:text-5xl mb-6 md:mb-8 flex-grow flex items-center ${
              plan.type === "pro" ? "text-black" : "text-white"
            }`}>
              <AnimatedNumber value={plan.price} /> CHF
            </div>
            <ul className="list-none p-0 m-0">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className={`mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base ${
                    plan.type === "pro" ? "text-black" : "text-white"
                  }`}
                >
                  {plan.type === "pro" ? (
                    <ProCheckmarkIcon />
                  ) : (
                    <CheckmarkIcon />
                  )}
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={generatePackageEmail(plan.name, plan.type, plan.price, activeService)}
                                className={`block w-full p-3 md:p-4 rounded-md border font-bold text-sm md:text-base cursor-pointer text-center mt-auto transition-all duration-300 ease-in-out ${
                plan.type === "pro"
                  ? "bg-white text-accent-foreground"
                  : "border-none bg-accent text-black hover:bg-accent/90"
              }`}
            >
              Jetzt starten
            </a>
          </div>
        ))}{" "}
        <div
          key={currentPlans[2].name}
          className={`border p-6 md:p-10 rounded-lg bg-obsidian text-left flex flex-col transition-all duration-400 ease-in-out ${
            currentPlans[2].type === "pro"
              ? "bg-accent text-accent-foreground border-none"
              : currentPlans[2].type === "essential"
              ? "border-accent/50"
              : "border-accent/30"
          }`}
        >
          <h3
            className={`font-medium text-xl md:text-2xl mb-1 ${
              currentPlans[2].type === "pro" ? "text-black" : "text-accent"
            }`}
          >
            {currentPlans[2].name}
          </h3>
          <p className={`text-xs mb-2 text-start ${
            currentPlans[2].type === "pro" ? "text-black/70" : "text-white/70"
          }`}>
            {currentPlans[2].startingFrom}
          </p>
          <div className={`font-black text-3xl md:text-5xl mb-6 md:mb-8 flex-grow flex items-center ${
            currentPlans[2].type === "pro" ? "text-black" : "text-white"
          }`}>
            <AnimatedNumber value={currentPlans[2].price} /> CHF
          </div>
          <ul className="list-none p-0 m-0">
            {currentPlans[2].features.map((feature, i) => (
              <li
                key={i}
                className={`mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base ${
                  currentPlans[2].type === "pro" ? "text-black" : "text-white"
                }`}
              >
                {currentPlans[2].type === "pro" ? (
                  <ProCheckmarkIcon />
                ) : (
                  <CheckmarkIcon />
                )}
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={generatePackageEmail(currentPlans[2].name, currentPlans[2].type, currentPlans[2].price, activeService)}
            className={`block w-full p-3 md:p-4 rounded-md border text-black font-bold text-sm md:text-base cursor-pointer text-center mt-auto transition-all duration-300 ease-in-out ${
              currentPlans[2].type === "pro"
                ? "bg-white text-accent-foreground"
                : "border-none bg-accent text-black hover:bg-accent/90"
            }`}
          >
            Jetzt starten
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-6xl mx-auto mt-6 md:mt-8 p-4 md:p-6 border border-white/10 rounded-lg bg-obsidian text-left gap-4 md:gap-0">
        <div className="text-left">
          <h4 className="font-bold text-accent text-xl mb-1">
            Service & Wartung
          </h4>
          <p className="text-white m-0">
            Wir kümmern uns um alles, um Ihre App auf dem neuesten Stand zu halten.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <p className="font-black text-xl md:text-2xl leading-none text-white hidden md:block">
            199 CHF/Monat
          </p>
          <a
            href={`mailto:contact@emptea.xyz?subject=${encodeURIComponent('Anfrage für Service & Wartung')}&body=${encodeURIComponent(`Hallo EMPTEA Studios,

ich interessiere mich für Ihr Service & Wartung Paket.

Paket-Details:
- Service: Monatliche Wartung und Support
- Preis: 199 CHF/Monat

Bitte stellen Sie mir mehr Informationen über das Inklusive und die nächsten Schritte zur Verfügung.

Mit freundlichen Grüßen,
[Ihr Name]`)}`}
            className="block w-full md:w-auto p-3 md:p-4 rounded-md border-none bg-accent text-accent-foreground font-bold text-sm md:text-base cursor-pointer text-center transition-all duration-300 ease-in-out hover:bg-accent/90"
          >
            Jetzt starten
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
