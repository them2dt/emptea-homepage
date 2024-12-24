"use client";
import Navigation from "./components/Navigation";
import Button from "./components/Button";
import ProductCatalog from "./components/ProductCatalog";

export default function Home() {

  const buttons = [
    {
      text: "Follow us",
      link: "https://twitter.com/empteastudios"
    },
  ];

  return (
    <main>
      <Navigation />
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
            Designing the decentralized future.
          </div>
          <div className="description font-text">
            We build usable apps for Solana.
          </div>
          {/* Updated Buttons */}
          <div className="buttons flex-row-center-center">
            {buttons.map((button) => (
              <Button 
                key={button.text} 
                text={button.text} 
                link={button.link}
              />
            ))}
          </div>
          
          {/* Product Catalog */}
          <ProductCatalog />
        </div>
      </div>
    </main>
  );
}
