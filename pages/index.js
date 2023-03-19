import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export default function Index() {
  useEffect(() => {
    console.log("Hello dev!");
  }, []);

  return (
    <div className="home">
      <motion.div
        className="home-cover"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="home-cover-content">
          <div className="home-cover-pre-text pre-text">
            Building the next generation of products & services.
          </div>
          <div className="home-cover-title title">
            This is <span className="marked"> emptea</span>.
          </div>
        </div>
      </motion.div>
      <div className="social-widget">
        <div className="social-widget-content">
          <Link href={"https://twitter.com/empteaxyz"}>
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link href={"mailto:info@emptea.xyz"}>
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
        </div>
      </div>
    </div>
  );
}
