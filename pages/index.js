//natives
import Image from "next/image";
import web3_mockup from "../components/bricks/media/web3-mockup.svg";
import Footer from "../components/bricks/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

//3rd-parties
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="home">
      <div className="home-header">
        <div className="home-header-background">
          <div className="home-header-background-left"></div>
          <div className="home-header-background-right"></div>
        </div>
        <div className="home-header-foreground">
          <div className="home-header-foreground-left">
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
              className="home-header-text"
            >
              <span>Emptea </span>builds
              <br />
              the next generation of
              <span> products</span> &<span> services</span>, <br />
              offering more
              <br />
              <span> freedom</span> and<span> independence</span>.
              <span>
                <br />
                <br />
                <a href="#home-library">
                  Learn more <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </span>
            </motion.div>
          </div>
          <div className="home-header-foreground-right">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.5,
                  duration: 1,
                  damping: 25,
                  stiffness: 500,
                },
              }}
              className="home-header-graphic"
            >
              <Image src={web3_mockup} />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="home-overlay"></div>
      <div className="home-overlay ho-1"></div>
      <div className="home-product home-library" id="home-library">
        <div className="home-product-intro">
          <div className="home-product-pretitle">Write independently.</div>
          <div className="home-product-title">Emptea Library</div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
