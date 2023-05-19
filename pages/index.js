import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { faEnvelope, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navbar from "/components/general/Navbar";

import voting from "../assets/voting.png";
import xnft_dream from "../assets/xnft_dream.png";
import backpack_painting from "../assets/backpack-painting.png";
import pc from "../assets/pc.png";
import dragon_run_scenery from "../assets/dragon-run-scenery.png";
import {
  faDiscord,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

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
                  <div className="product-title">****** ***</div>
                  <div className="product-description">
                    ***!
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
            <motion.div
              className="service"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.2,
              }}
              viewport={{ once: false }}
            >
              <Image src={backpack_painting} />
              <div className="service-details">
                <div className="service-text">
                  <div className="service-title">xNFT</div>
                  <div className="service-description">
                    Need an xNFT? We got your back.
                  </div>
                </div>
                <div className="service-button">
                  <Link href={"#contact"}>
                    <button>Get in contact!</button>
                  </Link>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="service"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.4,
              }}
              viewport={{ once: false }}
            >
              <Image src={pc} />
              <div className="service-details">
                <div className="service-text">
                  <div className="service-title">Website</div>
                  <div className="service-description">
                    Establish your digital presence with a professional website.
                  </div>
                </div>
                <div className="service-button">
                  <Link href={"#contact"}>
                    <button>Get in contact!</button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="contact" id="contact">
        <div className="contact-content">
          <div className="contact-title">Contact us!</div>
          <div className="contact-grid">
            <Link href={"https://twitter.com/EmpteaXYZ"} target="_blank">
              <div className="contact-button">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
            </Link>
            <Link href={"https://discord.gg/rXzY3PSaeJ"} target="_blank">
              <div className="contact-button">
                <FontAwesomeIcon icon={faDiscord} />
              </div>
            </Link>
            <Link href={"https://github.com/Emptea-XYZ"} target="_blank">
              <div className="contact-button">
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </Link>
            <Link href={"mailto:info@emptea.xyz"} target="_blank">
              <div className="contact-button">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
