'use client';

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";
import Hero from "./Hero";
import FactsBanner from "./FactsBanner";
import Services from "./Services";
import Features from "./Features";
import Pricing from "./Pricing";
import Process from "./Process";
import CustomPricing from "./CustomPricing";
import FAQ from "./FAQ";
import Testimonials from "./Testimonials";
import CallToAction from "./CallToAction";
import Footer from "./Footer";
import Loader from "./Loader";
import Divider from "./Divider";
import AccentPicker from "./AccentPicker";


export default function HomePageClient() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      // Add additional delay for content animations to start after loader exit
      setTimeout(() => {
        setShowContent(true);
      }, 800); // Wait for loader exit animation to complete
    }, 1500); // Reveal animation (1.2s) + brief pause (0.3s)

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>
      {!loading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Navbar />
          <Hero />
          <FactsBanner />
          <Divider />
          <Services />
          <Divider />
          <Features />
          <Divider />
          <Process />
          <Divider />
          <Pricing />
          <CustomPricing />
          <Divider />
          <FAQ />
          <Divider />
          <Testimonials />
          <Divider />
          <CallToAction />
          <Divider />
          <Footer />
          <AccentPicker />
        </motion.div>
      )}
    </main>
  );
} 