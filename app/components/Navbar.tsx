'use client';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);

  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileNavOpen]);

  const menuVariants = {
    hidden: { opacity: 0, transition: { staggerChildren: 0.1, staggerDirection: -1 } },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 w-full z-50 py-4 bg-black/75 backdrop-blur-sm border-b border-white/10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 1.5 }}
      >
        <nav className="flex justify-between items-center max-w-6xl mx-auto px-8">
          <div className="font-bold text-white text-lg">
            <Link href="/">EMPTEA STUDIOS®</Link>
          </div>
          <div className="hidden md:flex items-center gap-12">
            <div className="flex gap-12 font-medium">
              <Link href="#services" className="text-white transition-all duration-300 ease-in-out text-lg relative hover:text-orange-500 hover:-translate-y-px after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Services</Link>
              <Link href="#pricing" className="text-white transition-all duration-300 ease-in-out text-lg relative hover:text-orange-500 hover:-translate-y-px after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Pricing</Link>
              <Link href="#testimonials" className="text-white transition-all duration-300 ease-in-out text-lg relative hover:text-orange-500 hover:-translate-y-px after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Testimonials</Link>
              <Link href="#faq" className="text-white transition-all duration-300 ease-in-out text-lg relative hover:text-orange-500 hover:-translate-y-px after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">FAQ</Link>
            </div>
            <Link href="#contact" className="font-bold bg-gradient-to-b from-orange-400 to-orange-600 text-white border border-orange-700 px-6 py-3 rounded-full text-base cursor-pointer transition-all duration-200 ease-in-out hover:from-orange-500 hover:to-orange-700 hover:-translate-y-px">
              Get started
            </Link>
          </div>
        </nav>
      </motion.header>

      <button className="md:hidden bg-none border-none cursor-pointer z-[1001] fixed top-8 right-8" onClick={toggleMobileNav} aria-label="Menu">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <motion.path stroke="#ffffff" strokeWidth="2" animate={mobileNavOpen ? 'open' : 'closed'} variants={{ closed: { d: 'M 2 4 L 22 4' }, open: { d: 'M 4 18 L 20 2' } }} />
          <motion.path stroke="#ffffff" strokeWidth="2" d="M 2 12 L 22 12" animate={mobileNavOpen ? 'open' : 'closed'} variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }} />
          <motion.path stroke="#ffffff" strokeWidth="2" animate={mobileNavOpen ? 'open' : 'closed'} variants={{ closed: { d: 'M 2 20 L 22 20' }, open: { d: 'M 4 2 L 20 18' } }} />
        </svg>
      </button>

      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            className="fixed inset-0 w-full h-screen bg-black/95 backdrop-blur-lg z-[1000] flex flex-col justify-center items-center gap-8"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <motion.div variants={menuItemVariants}><Link href="#services" onClick={toggleMobileNav} className="font-bold text-3xl text-white transition-all duration-300 ease-in-out hover:text-orange-500 hover:-translate-y-0.5">Services</Link></motion.div>
            <motion.div variants={menuItemVariants}><Link href="#pricing" onClick={toggleMobileNav} className="font-bold text-3xl text-white transition-all duration-300 ease-in-out hover:text-orange-500 hover:-translate-y-0.5">Pricing</Link></motion.div>
            <motion.div variants={menuItemVariants}><Link href="#testimonials" onClick={toggleMobileNav} className="font-bold text-3xl text-white transition-all duration-300 ease-in-out hover:text-orange-500 hover:-translate-y-0.5">Testimonials</Link></motion.div>
            <motion.div variants={menuItemVariants}><Link href="#faq" onClick={toggleMobileNav} className="font-bold text-3xl text-white transition-all duration-300 ease-in-out hover:text-orange-500 hover:-translate-y-0.5">FAQ</Link></motion.div>
            <motion.div variants={menuItemVariants}>
              <Link href="#contact" className="text-2xl text-orange-500 mt-4 px-8 py-4 border-2 border-orange-500 rounded-lg bg-transparent transition-all duration-300 ease-in-out hover:bg-orange-500 hover:text-white hover:-translate-y-0.5" onClick={toggleMobileNav}>
                Get started
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
