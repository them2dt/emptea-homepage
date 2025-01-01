"use client";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import NavWithButton from "../components/NavWithButton";

export default function DeTier() {
  return (
    <main>
      <NavWithButton appUrl="https://detier.xyz" />
      
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
            Rank Solana Projects
          </div>
          <div className="description font-text">
            Community-driven project ranking platform.
          </div>
          
          {/* Features Section */}
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-title font-h4">Community Voting</div>
              <div className="feature-description font-text">
                Let the community decide which projects are worth attention.
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-title font-h4">Project Discovery</div>
              <div className="feature-description font-text">
                Find the best upcoming projects on Solana.
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-title font-h4">Project Insights</div>
              <div className="feature-description font-text">
                Get detailed analytics and community feedback.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 