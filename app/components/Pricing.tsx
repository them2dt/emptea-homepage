'use client';
import { useState } from 'react';
import Link from 'next/link';
import AnimatedNumber from './AnimatedNumber';

const CheckmarkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 13l4 4L19 7" stroke="#ddff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ProCheckmarkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 13l4 4L19 7" stroke="#859900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
    <section
      id="pricing"
      className="text-center pt-16 px-4 md:px-8 bg-obsidian"
    >
      <h2 className="font-bold text-xl md:text-2xl mb-2 text-white uppercase">
        Pricing
      </h2>
      <p className="font-bold text-3xl md:text-5xl mb-8 md:mb-12 text-primary-500 px-4">
        Simple & <span className="text-primary-500">transparent.</span>
      </p>

      <div className="flex justify-center mb-8 sm:mb-10 lg:mb-12">
        <div className="relative inline-flex bg-gray-900/80 backdrop-blur-sm rounded-full p-1 border border-gray-700/50 shadow-lg shadow-black/20">
          {/* Sliding background indicator */}
          <div
            className={`absolute top-1 bottom-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full transition-all duration-300 ease-in-out shadow-md shadow-primary-500/30 ${
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
            aria-pressed={activeService === "web"}
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
                ? "bg-primary-500 text-white border-none"
                : plan.type === "essential"
                ? "border-primary-500/50"
                : "border-primary-500/30"
            }`}
          >
            <h3
              className={`font-medium text-xl md:text-2xl mb-1 ${
                plan.type === "pro" ? "text-black" : "text-primary-500"
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
            <Link
              href="#contact"
              className={`block w-full p-3 md:p-4 rounded-md border text-white font-bold text-sm md:text-base cursor-pointer text-center mt-auto transition-all duration-300 ease-in-out ${
                plan.type === "pro"
                  ? "bg-white text-primary-500"
                  : "border-primary-500/30 bg-primary-500/10 hover:bg-primary-500 hover:border-primary-500"
              }`}
            >
              Start today
            </Link>
          </div>
        ))}{" "}
        <div
          key={currentPlans[2].name}
          className={`border p-6 md:p-10 rounded-lg bg-obsidian text-left flex flex-col transition-all duration-400 ease-in-out ${
            currentPlans[2].type === "pro"
              ? "bg-primary-500 text-white border-none"
              : currentPlans[2].type === "essential"
              ? "border-primary-500/50"
              : "border-primary-500/30"
          }`}
        >
          <h3
            className={`font-medium text-xl md:text-2xl mb-1 ${
              currentPlans[2].type === "pro" ? "text-black" : "text-primary-500"
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
          <Link
            href="#contact"
            className={`block w-full p-3 md:p-4 rounded-md border text-black font-bold text-sm md:text-base cursor-pointer text-center mt-auto transition-all duration-300 ease-in-out ${
              currentPlans[2].type === "pro"
                ? "bg-white text-primary-500"
                : "border-primary-500/30 bg-primary-500/10 hover:bg-primary-500 hover:border-primary-500"
            }`}
          >
            Start today
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-6xl mx-auto mt-6 md:mt-8 p-4 md:p-6 border border-white/10 rounded-lg bg-obsidian text-left gap-4 md:gap-0">
        <div className="text-left">
          <h4 className="font-bold text-primary-500 text-xl mb-1">
            Service & Maintenance
          </h4>
          <p className="text-white m-0">
            We&apos;ll take care of everything to keep your app up-to-date.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <p className="font-black text-xl md:text-2xl leading-none text-white hidden md:block">
            199 CHF/month
          </p>
          <Link
            href="#contact"
            className="block w-full md:w-auto p-3 md:p-4 rounded-md border border-primary-500/30 bg-primary-500/10 text-white font-bold text-sm md:text-base cursor-pointer text-center transition-all duration-300 ease-in-out hover:bg-primary-500 hover:border-primary-500"
          >
            Start today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
