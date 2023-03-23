import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

import web_mockup from "../assets/Screen.gif";
import web_1 from "../assets/Web-1.png";
import web_2 from "../assets/Web-2.png";
import web_3 from "../assets/Web-3.png";
export default function Index() {
  useEffect(() => {
    console.log("Hello dev!");
  }, []);

  return (
    <div className="home">
      <div className="section home-intro">
        <div className="section-content home-intro-content">
          <div className="home-intro-left">
            <div className="home-intro-left-content">
              <div className="home-intro-pre-text pre-text">
                Building the new generation of software.
              </div>
              <div className="home-intro-title title">
                This is <span className="marked">emptea</span>.
              </div>
            </div>
          </div>
          <div className="home-intro-right">
            <Image src={web_mockup} />
          </div>
        </div>
      </div>
      <div className="section home-webs">
        <div className="section-content home-webs-content">
          <div className="home-webs-headline headline-1">
            Don't trust, <span className="marked">verify</span>.
          </div>
          <div className="home-webs-grid">
            <div className="home-web">
              <div className="home-web-content">
                <div className="home-web-image">
                  <Image src={web_1} />
                </div>
                <div className="home-web-headline headline-2">Web 1.0</div>
                <div className="home-web-text text">
                  The original. One username, one password. easily hackable.
                </div>
              </div>
            </div>
            <div className="home-web">
              <div className="home-web-content">
                <div className="home-web-image">
                  <Image src={web_2} />
                </div>
                <div className="home-web-headline headline-2">Web 2.0</div>
                <div className="home-web-text text">
                  Platforms integrate social logins. You have now thousands of
                  options to log in to a platform. Choose wisely.
                </div>
              </div>
            </div>
            <div className="home-web">
              <div className="home-web-content">
                <div className="home-web-image">
                  <Image src={web_3} />
                </div>
                <div className="home-web-headline headline-2 marked">
                  Web 3.0
                </div>
                <div className="home-web-text text">
                  One log-in for everything. Instead of 100 vulnerable accounts,
                  you now have one encrypted wallet. You don't log in, you
                  approve transactions.
                  <br />
                  <br />
                  No database to attack, no passwords to steal.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
