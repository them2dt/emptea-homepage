//natives
import Image from "next/image";
import Link from "next/link";

//locals
import logo from "../components/bricks/media/logo.png";
import Navbar from "../components/bricks/navbar/Navbar";
import Footer from "../components/bricks/footer/Footer";

//3rd-parties
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="home-header" id="home-header">
        <div className="home-header-content">
          <div className="home-header-logo">
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
              className="home-header-icon"
            >
              <Image src={logo} height={100} />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="about-us"></div>
      <div className="suite">
        <div className="suite-content">
          <div className="suite-title">The Suite</div>
          <div className="suite-grid">
            <div className="suite-grid-cell">
              <div className="suite-area-locked">
                <div>
                  <FontAwesomeIcon icon={faLock} />
                  <div>Coming soon.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
