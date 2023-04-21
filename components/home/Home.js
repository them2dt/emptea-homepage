import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

import web_mockup from "../../assets/Screen.gif";
import web_1 from "../../assets/Web-1.png";
import web_2 from "../../assets/Web-2.png";
import web_3 from "../../assets/Web-3.png";
export default function HomeComponent() {
  return (
    <motion.div className="home">
      <motion.div className="section home-intro">
        <motion.div className="section-content home-intro-content">
          <motion.div className="home-intro-left">
            <motion.div className="home-intro-left-content">
              <motion.div
                className="home-intro-pre-text pre-text"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                Building the new generation of software.
              </motion.div>
              <motion.div
                className="home-intro-title title"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                This is <span className="marked">emptea</span>.
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            className="home-intro-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image src={web_mockup} alt="web mockup" />
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="section home-webs">
        <motion.div className="section-content home-webs-content">
          <motion.div
            className="home-webs-headline headline-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Don't trust, <span className="marked">verify</span>.
          </motion.div>
          <motion.div className="home-webs-grid">
            <motion.div
              className="home-web"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0 }}
            >
              <motion.div className="home-web-content">
                <motion.div className="home-web-image">
                  <Image src={web_1} alt="web 1 login" />
                </motion.div>
                <motion.div className="home-web-headline headline-2">
                  Web 1.0
                </motion.div>
                <motion.div className="home-web-text text">
                  The original. One username, one password. easily hackable.
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              className="home-web"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div className="home-web-content">
                <motion.div className="home-web-image">
                  <Image src={web_2} alt="web 2 login" />
                </motion.div>
                <motion.div className="home-web-headline headline-2">
                  Web 2.0
                </motion.div>
                <motion.div className="home-web-text text">
                  Platforms integrate social logins. You have now thousands of
                  options to log in to a platform. Choose wisely.
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              className="home-web"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div className="home-web-content">
                <motion.div className="home-web-image">
                  <Image src={web_3} alt="web 3 login" />
                </motion.div>
                <motion.div className="home-web-headline headline-2 marked">
                  Web 3.0
                </motion.div>
                <motion.div className="home-web-text text">
                  One log-in for everything. Instead of 100 vulnerable accounts,
                  you now have one encrypted wallet. You don't log in, you
                  approve transactions.
                  <br />
                  <br />
                  No database to attack, no passwords to steal.
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="section home-products">
        <motion.div className="section-content">
          <motion.div
            className="home-products-headline headline-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0 }}
          >
            Explore our products
          </motion.div>
          <motion.div className="home-products-grid-container">
            <motion.div className="home-products-grid">
              <Link href={"https://campaigns.emptea.xyz"} target="_blank">
                <motion.div
                  className="home-product campaigns"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div className="home-product-info">
                    <motion.div className="home-product-headline headline-3">
                      Emptea Campaigns
                    </motion.div>
                    <motion.div className="home-product-description text">
                      Crowdfunding-platform on solana.
                    </motion.div>
                  </motion.div>
                </motion.div>
              </Link>
              <Link href={"https://oxygen.emptea.xyz"} target="_blank">
                <motion.div
                  className="home-product oxygen"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div className="home-product-info">
                    <motion.div className="home-product-headline headline-3">
                      Emptea Oxygen
                    </motion.div>
                    <motion.div className="home-product-description text">
                      Mint NFTs on solana.
                    </motion.div>
                  </motion.div>
                </motion.div>
              </Link>
              <Link href={"https://library.emptea.xyz"} target="_blank">
                <motion.div
                  className="home-product library"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <motion.div className="home-product-info">
                    <motion.div className="home-product-headline headline-3">
                      Emptea Library
                    </motion.div>
                    <motion.div className="home-product-description text">
                      Read, write and collect written content on solana.
                    </motion.div>
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="social-widget">
        <motion.div className="social-widget-content">
          <Link href={"https://twitter.com/empteaxyz"}>
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link href={"mailto:info@emptea.xyz"}>
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
