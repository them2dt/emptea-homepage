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
            <li>
              <Link href="/products">products</Link>
            </li>
            <li className="marked">
              <Link href="/collective ">collective</Link>
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
              <h2>The Collective</h2>
            </motion.div>
          )}
          <div className="home-intro-text" ref={ref}>
            <p>
              The emptea collective is a series of handcrafted artworks.
              <br />
              The collective represents an private club. A place where
              like-minded people can come together and build something great.
              <br />
              <br />
              Further details will be announced soon.
            </p>
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
