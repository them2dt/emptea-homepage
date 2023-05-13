import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navbar from "/components/general/Navbar";

import voting from "../assets/voting.png";
import xnft_dream from "../assets/xnft_dream.png";
import backpack_painting from "../assets/backpack-painting.png";
import dragon_run_scenery from "../assets/dragon-run-scenery.png";

export default function Index() {
  return (
    <div className="app">
      <Navbar />

      <div className="intro">
        <div className="navbar-space"></div>
        <motion.div
          className="intro-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          viewport={{ once: false }}
        >
          Building dreams from the bedroom.
        </motion.div>
        <motion.div
          className="intro-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.6,
          }}
          viewport={{ once: false }}
        >
          Emptea creates magical experiences on Backpack.
        </motion.div>
        <motion.div
          className="intro-button"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.2,
            delay: 0.7,
          }}
          viewport={{ once: false }}
        >
          <Link href={"#products"}>
            <button>
              <FontAwesomeIcon icon={faStar} className="intro-button-icon" />
              learn more
            </button>
          </Link>
        </motion.div>
        <motion.div
          className="intro-image"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.2,
            delay: 0.8,
          }}
          viewport={{ once: false }}
        >
          <Image src={xnft_dream} width={500} />
        </motion.div>
      </div>
      <div className="products" id="products">
        <div className="products-content">
          <div className="products-title">Products</div>
          <div className="products-grid">
            <motion.div
              className="product"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.2,
              }}
              viewport={{ once: false }}
            >
              <Image src={dragon_run_scenery} alt="app-icon" width={400} />

              <div className="product-details">
                <div className="product-text">
                  <div className="product-title">Dragon Run</div>
                  <div className="product-description">
                    Explore the caves of Lamporia <br />
                    and face the creatures from the underworld.
                  </div>
                </div>
                <div className="product-status">
                  in development
                  <div className="blob yellow"></div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="product"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.2,
              }}
              viewport={{ once: false }}
            >
              <Image src={voting} alt="app-icon" width={400} />

              <div className="product-details">
                <div className="product-text">
                  <div className="product-title">**********</div>
                  <div className="product-description">
                    ****** **** ************
                  </div>
                </div>
                <div className="product-status">
                  in development
                  <div className="blob yellow"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="services" id="services">
        <div className="services-content">
          <div className="services-title">Services</div>
          <div className="services-grid">
            <div className="service">
              <Image src={backpack_painting} />
              <div className="service-details">
                <div className="service-text">
                  <div className="service-title">xNFT</div>
                  <div className="service-description">
                    Need a xNFT? We're here for you.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
