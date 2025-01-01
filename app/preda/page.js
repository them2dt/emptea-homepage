"use client";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import NavWithButton from "../components/NavWithButton";

export default function Preda() {
  return (
    <main>
      <NavWithButton appUrl="https://preda.xyz" />
      
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
            Create tokens on Solana.
          </div>
          <div className="description font-text">
            The easiest way to create and manage tokens on Solana.
          </div>
          
          {/* Features Section */}
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-title font-h4">Easy Creation</div>
              <div className="feature-description font-text">
                Create tokens in seconds with our intuitive interface.
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-title font-h4">Token Management</div>
              <div className="feature-description font-text">
                Manage supply, burn, and mint with ease.
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-title font-h4">Advanced Features</div>
              <div className="feature-description font-text">
                Set up vesting, locks, and custom tokenomics.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 