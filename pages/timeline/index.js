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
            <h1>
              emptea <span className="marked">news</span>
            </h1>
          </Link>
        </div>
        <div className="navbar-center">
          <ul>
            <li>
              <Link href="/philosophy">mission</Link>
            </li>
            <li className="marked">
              <Link href="/products">timeline</Link>
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
              <h1>Timeline</h1>
            </motion.div>
          )}
          <div className="products-grid">
            <motion.button className="product">
              <div className="product-content">
                <h3>DeGods is moving to Ethereum</h3>
                <p>
                  Dust Labs decided to leave solana.
                  <br />
                  DeGods is bridging to Ethereum & Yoots is moving to Polygon.
                </p>
              </div>
            </motion.button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
