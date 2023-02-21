//natives
import Image from "next/image";
import web3_mockup from "../components/bricks/media/web3-mockup.svg";
import Navbar from "../components/bricks/navbar/Navbar";
import Footer from "../components/bricks/footer/Footer";

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
      <div className="home-about">
        <div className="home-about-content">
          <div className="home-about-title">
            Time to revolutionize the industry standard for software.
          </div>
          <div className="home-about-grid">
            <div className="home-about-grid-item"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
