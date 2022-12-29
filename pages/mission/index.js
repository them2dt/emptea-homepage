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
            <li className="marked">
              <Link href="/mission">mission</Link>
            </li>
            <li>
              <Link href="/timeline">timeline</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-right"></div>
      </div>
      <div className="home-intro section">
        <div className="home-intro-content section-content">
          {isInView && (
            <motion.div
              className="home-intro-title"
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
              <h2>Our mission</h2>
            </motion.div>
          )}
          <div className="home-intro-text" ref={ref}>
            <p>
              The blockchain-space is vibrant. Something happens every second.
              Trends come as fast they go. Projects are born on daily basis.
              <br />
              <br />
              Emptea news delivers news in the purest form without redundancy, so
              you can get the core essence instantly. 
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
