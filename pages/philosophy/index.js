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
              <Link href="/philosophy">philosophy</Link>
            </li>
            <li>
              <Link href="/products">products</Link>
            </li>
            <li>
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
              <h2>For an independent future.</h2>
            </motion.div>
          )}
          <div className="home-intro-text" ref={ref}>
            <p>
              We build products, which bring you more freedom and control of
              your digital identity.
              <br />
              <br />A small group of companies is in control of almost all of
              the personal data in the internet. They use your data to track you
              down and offer you the personalized advertisment which gets them
              the most money. Maybe you don`&apos;`t want this. Maybe all you want is a
              simple user experience, where you can be whoever you want. A
              internet where you don`&apos;`t have to worry about your data. A
              internet, where the user is the true owner of his identity & data.
              <br />
              <br />
              Our goal is it to build a ecosystem of products & services, which
              are fully aligned with the user`&apos;`s neeeds.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
