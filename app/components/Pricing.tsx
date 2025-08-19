'use client';
import { useState } from 'react';
import Link from 'next/link';
import AnimatedNumber from './AnimatedNumber';

const CheckmarkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 13l4 4L19 7" stroke="#ff5000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ProCheckmarkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
    <section id="pricing" className="text-center py-24 px-8 bg-black">
      <h2 className="font-bold text-2xl mb-2 text-white uppercase">Pricing</h2>
      <p className="font-bold text-5xl mb-12 text-orange-500">Simple & <span className="text-orange-500">transparent.</span></p>

      <div className="flex justify-center mb-12">
        <div className="flex bg-black rounded-lg p-1 relative border border-orange-500/30">
          <button
            className={`px-6 py-3 border-none rounded-md bg-transparent font-medium text-base cursor-pointer transition-all duration-300 ease-in-out text-white relative z-10 ${activeService === 'web' ? 'bg-orange-500 text-white' : ''}`}
            onClick={() => setActiveService('web')}
          >
            Web
          </button>
          <button
            className={`px-6 py-3 border-none rounded-md bg-transparent font-medium text-base cursor-pointer transition-all duration-300 ease-in-out text-white relative z-10 ${activeService === 'mobile' ? 'bg-orange-500 text-white' : ''}`}
            onClick={() => setActiveService('mobile')}
          >
            Mobile
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12 items-stretch">
        {currentPlans.map((plan) => (
          <div key={plan.name} className={`border p-10 rounded-lg bg-black text-left flex flex-col transition-all duration-400 ease-in-out ${plan.type === 'pro' ? 'bg-orange-500 text-white border-none' : plan.type === 'essential' ? 'border-orange-500/50' : 'border-orange-500/30'}`}>
            <h3 className={`font-medium text-2xl mb-1 ${plan.type === 'pro' ? 'text-white' : 'text-orange-500'}`}>{plan.name}</h3>
            <p className="text-white/70 text-xs mb-2 text-center">{plan.startingFrom}</p>
            <div className="font-black text-5xl mb-8 text-white flex-grow flex items-center">
              <AnimatedNumber value={plan.price} /> CHF
            </div>
            <ul className="list-none p-0 m-0">
              {plan.features.map((feature, i) => (
                <li key={i} className="mb-4 flex items-center gap-2 text-white">
                  {plan.type === 'pro' ? <ProCheckmarkIcon /> : <CheckmarkIcon />}
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link href="#contact" className={`block w-full p-4 rounded-md border text-white font-bold text-base cursor-pointer text-center mt-auto transition-all duration-300 ease-in-out ${plan.type === 'pro' ? 'bg-white text-orange-500' : 'border-orange-500/30 bg-orange-500/10 hover:bg-orange-500 hover:border-orange-500'}`}>Start today</Link>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center max-w-6xl mx-auto mt-8 p-6 border border-orange-500/30 rounded-lg bg-black text-left">
        <div className="text-left">
          <h4 className="font-bold text-orange-500 text-xl mb-1">Service & Maintenance</h4>
          <p className="text-white m-0">We&apos;ll take care of everything to keep your app up-to-date.</p>
        </div>
        <div className="flex items-center gap-6">
          <p className="font-black text-2xl leading-none text-white">199 CHF/month</p>
          <Link href="#contact" className="block w-full p-4 rounded-md border border-orange-500/30 bg-orange-500/10 text-white font-bold text-base cursor-pointer text-center mt-auto transition-all duration-300 ease-in-out hover:bg-orange-500 hover:border-orange-500">Start today</Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
