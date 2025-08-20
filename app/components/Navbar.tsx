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
        className="fixed top-0 left-0 w-full z-50 py-3 sm:py-4 bg-obsidian/85 backdrop-blur-md border-b border-white/10 supports-[backdrop-filter]:bg-obsidian/60"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 1.5 }}
      >
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="font-bold text-white text-sm sm:text-base lg:text-lg">
            <Link href="/" className="hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-obsidian rounded-sm">
              EMPTEA STUDIOS®
            </Link>
          </div>
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            <div className="flex gap-6 xl:gap-8 font-medium">
              <Link href="#services" className="text-white transition-all duration-300 ease-in-out text-sm xl:text-base relative hover:text-accent hover:-translate-y-px after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 after:ease-in-out hover:after:w-full focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-obsidian rounded-sm">Services</Link>
              <Link href="#pricing" className="text-white transition-all duration-300 ease-in-out text-sm xl:text-base relative hover:text-accent hover:-translate-y-px after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 after:ease-in-out hover:after:w-full focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-obsidian rounded-sm">Pricing</Link>
              <Link href="#testimonials" className="text-white transition-all duration-300 ease-in-out text-sm xl:text-base relative hover:text-accent hover:-translate-y-px after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 after:ease-in-out hover:after:w-full focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-obsidian rounded-sm">Testimonials</Link>
              <Link href="#faq" className="text-white transition-all duration-300 ease-in-out text-sm xl:text-base relative hover:text-accent hover:-translate-y-px after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 after:ease-in-out hover:after:w-full focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-obsidian rounded-sm">FAQ</Link>
            </div>
            <Link href="#contact" className="inline-flex items-center justify-center font-bold bg-accent text-accent-foreground border border-accent px-4 xl:px-6 py-2 xl:py-3 rounded-full text-sm xl:text-base cursor-pointer transition-all duration-300 ease-in-out hover:opacity-90 hover:-translate-y-px hover:shadow-lg hover:shadow-accent/25 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-obsidian">
              Get started
            </Link>
          </div>
        </nav>
      </motion.header>

      <button 
        className="lg:hidden bg-transparent border-none cursor-pointer z-[1001] fixed top-4 sm:top-5 right-4 sm:right-6 p-2 rounded-md hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-obsidian" 
        onClick={toggleMobileNav} 
        aria-label="Toggle navigation menu"
        aria-expanded={mobileNavOpen}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6">
          <motion.path stroke="#ffffff" strokeWidth="2" animate={mobileNavOpen ? 'open' : 'closed'} variants={{ closed: { d: 'M 2 4 L 22 4' }, open: { d: 'M 4 18 L 20 2' } }} />
          <motion.path stroke="#ffffff" strokeWidth="2" d="M 2 12 L 22 12" animate={mobileNavOpen ? 'open' : 'closed'} variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }} />
          <motion.path stroke="#ffffff" strokeWidth="2" animate={mobileNavOpen ? 'open' : 'closed'} variants={{ closed: { d: 'M 2 20 L 22 20' }, open: { d: 'M 4 2 L 20 18' } }} />
        </svg>
      </button>

      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            className="fixed inset-0 w-full h-screen bg-obsidian/95 backdrop-blur-lg z-[1000] flex flex-col justify-center items-center gap-6 sm:gap-8 px-4"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <motion.div variants={menuItemVariants}>
              <Link 
                href="#services" 
                onClick={toggleMobileNav} 
                className="font-bold text-2xl sm:text-3xl text-white transition-all duration-300 ease-in-out hover:text-accent hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-obsidian rounded-sm"
              >
                Services
              </Link>
            </motion.div>
            <motion.div variants={menuItemVariants}>
              <Link 
                href="#pricing" 
                onClick={toggleMobileNav} 
                className="font-bold text-2xl sm:text-3xl text-white transition-all duration-300 ease-in-out hover:text-accent hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-obsidian rounded-sm"
              >
                Pricing
              </Link>
            </motion.div>
            <motion.div variants={menuItemVariants}>
              <Link 
                href="#testimonials" 
                onClick={toggleMobileNav} 
                className="font-bold text-2xl sm:text-3xl text-white transition-all duration-300 ease-in-out hover:text-accent hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-obsidian rounded-sm"
              >
                Testimonials
              </Link>
            </motion.div>
            <motion.div variants={menuItemVariants}>
              <Link 
                href="#faq" 
                onClick={toggleMobileNav} 
                className="font-bold text-2xl sm:text-3xl text-white transition-all duration-300 ease-in-out hover:text-accent hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-obsidian rounded-sm"
              >
                FAQ
              </Link>
            </motion.div>
            <motion.div variants={menuItemVariants}>
              <Link 
                href="#contact" 
                className="inline-flex items-center justify-center text-xl sm:text-2xl text-accent mt-4 px-6 sm:px-8 py-3 sm:py-4 border-2 border-accent rounded-lg bg-transparent transition-all duration-300 ease-in-out hover:bg-accent hover:text-accent-foreground hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-obsidian" 
                onClick={toggleMobileNav}
              >
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
