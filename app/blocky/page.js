"use client";
import NavWithButton from "../components/NavWithButton";
import Footer from "../components/Footer";

export default function Blocky() {
  return (
    <main>
      <NavWithButton appUrl="https://blocky.xyz" />
      
      {/* Hero Section */}
      <div id="hero" className="section flex-column-start-center">
        {/* Background Grid */}
        <div className="grid-container">
          {[...Array(140)].map((_, index) => (
            <div key={index} className="grid-box" />
          ))}
        </div>
        <div className="spacer flex-row-center-center" />

        {/* Hero Content */}
        <div className="primary-info flex-column-center-center">
          <div className="title font-h1">
            Learn Blockchain Development
          </div>
          <div className="description font-text">
            Interactive tutorials to master Web3 development.
          </div>
          
          {/* Features Section */}
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-title font-h4">Interactive Learning</div>
              <div className="feature-description font-text">
                Learn by doing with hands-on coding exercises.
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-title font-h4">Real Projects</div>
              <div className="feature-description font-text">
                Build actual dApps as you learn.
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-title font-h4">Community Support</div>
              <div className="feature-description font-text">
                Get help from experienced developers.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 