import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-content">
          <div className="navbar-left">
            <motion.div
              className="navbar-title"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.2,
                delay: 0,
              }}
              viewport={{ once: false }}
            >
              emptea
            </motion.div>
          </div>
          <div className="navbar-right">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.1,
              }}
              viewport={{ once: false }}
            >
              <Link href={"#products"}>products</Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.2,
              }}
              viewport={{ once: false }}
            >
              <Link href={"#services"}>services</Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.3,
              }}
              viewport={{ once: false }}
            >
              <Link href={"#contact"}>contact</Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
