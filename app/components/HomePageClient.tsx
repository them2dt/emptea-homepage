'use client';

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Features from "./Features";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import CallToAction from "./CallToAction";
import Footer from "./Footer";
import Loader from "./Loader";
import Divider from "./Divider";

export default function HomePageClient() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Reveal animation (1.2s) + brief pause (0.3s)

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>
      {!loading && (
        <>
          <Navbar />
          <Hero />
          <Services />
          <Divider />
          <Features />
          <Divider />
          <Pricing />
          <Divider />
          <FAQ />
          <Divider />
          <CallToAction />
          <Divider />
          <Footer />
        </>
      )}
    </main>
  );
} 