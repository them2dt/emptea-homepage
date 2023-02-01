import React from "react";
import Link from "next/link";
import Navbar from "../../components/bricks/navbar/Navbar";
import Footer from "../../components/bricks/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function index() {
  return (
    <div className="suite">
      <Navbar/>
      <div className="suite-content">
        <div className="suite-title">emptea suite</div>
        <div className="suite-description">
          Assertion of home-made products and services.
        </div>
        <div className="suite-grid">
          <div className="suite-grid-cell">
            <div className="suite-area">
              <div className="suite-area-title">Released</div>
              <div className="suite-area-content">
                <div className="product">
                  <div className="product-content">
                    <div className="product-info">
                      <div className="product-title">emptea studios</div>
                      <div className="product-description">
                        A web3-design agency.
                      </div>
                    </div>
                    <div className="product-link">
                      <Link href={"https://studios.emptea.xyz"} target="_blank">
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="suite-grid-cell">
            <div className="suite-area">
              <div className="suite-area-title">In development</div>
              <div className="suite-area-content">
                <div className="product">
                  <div className="product-content">
                    <div className="product-info">
                      <div className="product-title">emptea campaigns</div>
                      <div className="product-description">
                        Crowdfunding. Easy, fast, affordable.
                      </div>
                    </div>

                    <div className="product-link">
                      <Link
                        href={"https://campaigns.emptea.xyz"}
                        target="_blank"
                      >
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <div className="product-content">
                    <div className="product-info">
                      <div className="product-title">emptea news</div>
                      <div className="product-description">
                        An transparent news-platform.
                      </div>
                    </div>
                    <div className="product-link">
                      <Link href={"https://news.emptea.xyz"} target="_blank">
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </div>
                  </div>
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
