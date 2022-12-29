import Image from "next/image";
import Link from "next/link";
import logo from "../components/images/logo.png";
import Footer from "../components/footer/Footer";
import { motion } from "framer-motion";

import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="home">
      <div className="navbar">
        <div className="navbar-left">
          <Link href="/">
            <h1>emptea <span className="marked">news</span></h1>
          </Link>
        </div>
        <div className="navbar-center">
          <ul>
            <li>
              <Link href="/mission">mission</Link>
            </li>
            <li>
              <Link href="/timeline">timeline</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-right"></div>
      </div>
      <div className="home-header section">
        <div className="home-header-content section-content">
          <div className="home-header-logo">
            <div className="home-header-icon">
              <Image src={logo} height={60} alt="The emptea logo"/>
            </div>
            <div className="vertical-splitter"></div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0,
                  duration: 1,
                  damping: 25,
                  stiffness: 500,
                },
              }}
              className="homee-header-title"
            >
              <h1>Building a better tomorrow.</h1>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
