"use client";
import Link from "next/link";
import Loader from "./components/Loader";

export default function Home() {
  return (
    <main>
      <div className="navigation flex-row-center">
        <div className="nav-bar flex-row-between-center">
          <div className="logo font-h4">Emptea Studios</div>
          <div className="nav-links flex-row-center-center">
            <Link href="#hero">
              <div className="nav-link font-text">Home</div>
            </Link>
            <Link href="#services">
              <div className="nav-link font-text">Services</div>
            </Link>
            <Link href="#contact">
              <div className="nav-link font-text">Contact</div>
            </Link>
          </div>
        </div>
      </div>
      <div id="hero" className="section flex-column-start-center">
        <div className="grid-container">
          {[...Array(140)].map((_, index) => (
            <div className="grid-box"></div>
          ))}
        </div>
        <div className="spacer flex-row-center-center"></div>
        <div className="primary-info flex-column-center-center">
          <div className="title font-h1">Elevate your web presence.</div>
          <div className="description font-text">
            Emptea Studios creates professional web experiences using innovative
            tools.
          </div>
          <div className="buttons flex-row-center-center">
            <div className="button-base">
              <div className="button">
                <div className="text">Get started</div>
              </div>
            </div>
            <div className="button-base">
              <div className="button">
                <div className="text">Learn more</div>
              </div>
            </div>
          </div>
        </div>
        <div className="demo-monitor flex-row-center-center">
          <div className="screen">
            <div className="screen content"></div>
          </div>
        </div>
      </div>
      <div id="services" className="section flex-column-center-center">
        <div className="service service-web-development flex-row-end-end">
          <div className="service-detail flex-row-end-end">
            <div className="text flex-column-start-start">
              <div className="title font-h2">Web Development</div>
              <div className="description font-text">
                We create responsive websites that are optimized for speed and
                performance.
              </div>
            </div>
          </div>
          <div className="service-demo flex-row-center-center"></div>
        </div>
        <div className="service service-ux-design flex-row-end-end">
          <div className="service-demo flex-row-center-center"></div>
          <div className="service-detail flex-row-end-end">
            <div className="text flex-column-end-end">
              <div className="title font-h2">UX Design</div>
              <div className="description font-text">
                We create responsive websites that are optimized for speed and
                performance.
              </div>
            </div>
          </div>
        </div>
        <div className="service service-web-development flex-row-end-end">
          <div className="service-detail flex-row-end-end">
            <div className="text flex-column-start-start">
              <div className="title font-h2"></div>
              <div className="description font-text">
                We create responsive websites that are optimized for speed and
                performance.
              </div>
            </div>
          </div>
          <div className="service-demo flex-row-center-center"></div>
        </div>
      </div>
    </main>
  );
}
