import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/footer/Footer";
import { motion } from "framer-motion";

import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Index() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div>
      <div className="navbar">
        <div className="navbar-left">
          <Link href="/">
            <h1>emptea</h1>
          </Link>
        </div>
        <div className="navbar-center">
          <ul>
            <li>
              <Link href="/philosophy">philosophy</Link>
            </li>
            <li className="marked">
              <Link href="/products">products</Link>
            </li>
            <li>
              <Link href="/collective ">collective</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-right"></div>
      </div>
      <div className="products section">
        <div className="products-content section-content">
          {isInView && (
            <motion.div
              className="products-title"
              initial={{ opacity: 0, y: "10px" }}
              animate={{
                opacity: 1,
                y: "0",
                transition: {
                  delay: 0,
                  duration: 1,
                  damping: 25,
                  stiffness: 500,
                },
              }}
            >
              <h1>Products & Services</h1>
            </motion.div>
          )}
          <div className="products-grid" ref={ref}>
            <motion.button className="product campaigns">
              <div className="product-content">
                <h3>emptea campaigns</h3>
                <p>A crowdfunding platform built on solana. Coming soon.</p>
              </div>
            </motion.button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
