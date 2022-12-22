import Image from "next/image";
import Link from "next/link";
import logo from "../../components/images/logo.png";
import { motion } from "framer-motion";

import { useRef } from "react";
import { useInView } from "framer-motion";

export default function index() {
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
            <Link href="https://campaigns.emptea.xyz" target={"_blank"}>
              <motion.button
                className="product campaigns"
                initial={{ scale: 1 }}
                transition={{ duration: 0.05 }}
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="product-content">
                  <h3>Emptea Campaigns</h3>
                  <p>A crowdfunding platform built on solana.</p>
                </div>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-left">
          <Link href="https://emptea.xyz" target={"_blank"}>
            <p>emptea.</p>
          </Link>
        </div>
        <div className="footer-center"></div>
        <div className="footer-right">
          <ul>
            <li>
              <Link href="https://twitter.com/empteaxyz" target={"_blank"}>
                Twitter
              </Link>
            </li>
            <li>
              <Link href="https://discord.gg/D5YCfRjSDY" target={"_blank"}>
                Discord
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
