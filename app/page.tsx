"use client";
import "./styles/page.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Home() {
  return (
    <main className="main">
      <div className="navigation-container flex-row v-center h-center">
        <div className="navigation flex-row h-between v-center">
          <div className="logo fs-24 fw-bold fc-white">
            Emptea Studios
          </div>
          <div className="random-app-opener-button">
            <div className="icon fw-black fs-36<">
              ?
            </div>
          </div>
        </div>
      </div>

      {/* Section 1 */}
      <section className="section hero flex-column h-center v-center">
        <div className="background-image">
          <Image 
            src="/skyscraper.png" 
            alt="Full width image"
            fill
            priority
            quality={100}
          />
        </div>
        <h1 className="hero-title fw-bold fs-42">On a mission for a free world.</h1>
        <p className="hero-subtitle fw-regular fs-24">We're dedicated to build decentralized applications for everyone.</p>
        <button className="explore-button">
          <div className="explore-button-text fw-medium fs-18">Explore Apps</div>
        </button>
      </section>

      <div className="section-gradient gradient-to-app1"></div>

      {/* Section 2 */}
      <section className="section app-1">
        <div className="app-container">
          <div className="app-details">
            <h2 className="fw-bold fs-36">App One</h2>
            <p className="fw-regular fs-24">A revolutionary app that transforms your daily experience</p>
            <button className="app-button fw-medium fs-16">Learn More</button>
          </div>
          <div className="app-image">
            <Image 
              src="/votebox.png"
              alt="Votebox App"
              width={400}
              height={400}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </section>

      <div className="section-gradient gradient-to-app2"></div>

      {/* Section 3 */}
      <section className="section app-2">
        <div className="app-container">
          <div className="app-details">
            <h2 className="fw-bold fs-36">App Two</h2>
            <p className="fw-regular fs-24">Streamline your workflow with our powerful solution</p>
            <button className="app-button fw-medium fs-16">Learn More</button>
          </div>
          <div className="app-image">
            <Image 
              src="/wally.png"
              alt="Wally App"
              width={400}
              height={400}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </section>

      <div className="section-gradient gradient-to-footer"></div>

      {/* Section 4 */}
      <section className="section footer">
        <div className="copyright">
          <p>© 2025 Emptea. All rights reserved.</p>
        </div>
        <div className="socials">
          <Link href="https://twitter.com/empteastudios">Twitter</Link>
        </div>
      </section>
    </main>
  );
}
