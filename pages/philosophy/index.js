import React from "react";
import Navbar from "../../components/bricks/navbar/Navbar";
import Footer from "../../components/bricks/footer/Footer";
export default function index() {
  return (
    <div className="section">
      <Navbar id={1} />
      <div className="section-content">
        <div className="section-title">Philosophy</div>
        <div className="section-text">
          Emptea is a community of developers coming together to build together
          and achieve more.
          <br />
          Talk less. Do more.
        </div>
      </div>
      <Footer />
    </div>
  );
}
