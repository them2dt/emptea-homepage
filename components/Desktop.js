import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCubesStacked,
  faPeopleGroup,
  faArrowRight,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";

export default function Desktop() {
  return (
    <div className="app-desktop">
      <div className="row-1">
        <div className="tab tab-r1-1">
          <Link href={"#about"} scroll={false}>
            <div className="tab-text">About</div>
          </Link>
        </div>
        <div className="row-1-box  ">
          <div className="row-1-box-top">
            <div className="tab tab-r1-2">
              <Link href={"#products"} scroll={false}>
                <div className="tab-text">Products</div>
              </Link>
            </div>
            <div className="tab tab-r1-3">
              <Link href={"#team"} scroll={false}>
                <div className="tab-text">Team</div>
              </Link>
            </div>
          </div>
          <div className="row-1-box-bottom">
            <div className="title">Welcome to emptea.</div>
          </div>
        </div>

        <div className="tab tab-25-25 tab-r1-4">
          <Link href={"#contact"} scroll={false}>
            <div className="tab-text">Contact</div>
          </Link>
        </div>
      </div>
      <div className="row-2">
        <div className="row-2-box">
          <div className="row-2-box-top">
            <div className="tab tab-r2-1"></div>
            <div className="tab tab-r2-2"></div>
          </div>
          <div className="row-2-box-bottom" id="about">
            <div className="row-2-box-bottom-text">
              <div className="about-title headline-1">About us</div>
              <div className="about-text text">
                We build products we love. Financial services, productivity
                tools, social media platforms, or games. We do what we love, and
                we do it great.
                <br />
                <br />
                We love blockchain and the possibilities it brings. With our
                apps, you never have to see a complicated login-window with
                thousands of options. All you need is one wallet to access the
                beautiful world of web3.
                <br />
                <br />
              </div>
            </div>
            <div className="tab tab-about">
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>
          <div className="row-3">
            <div className="row-3-box">
              <div className="row-3-box-top">
                <div className="tab tab-r3-1"></div>
                <div className="tab tab-r3-2"></div>
              </div>
              <div className="row-3-box-mid" id="team">
                <div className="tab tab-team-title">
                  <div className="team-title headline-1">Meet the team</div>
                </div>
                <div className="tab tab-team-icon">
                  <FontAwesomeIcon icon={faPeopleGroup} />
                </div>
              </div>
              <div className="row-3-box-mid">
                <div className="tab tab-team-member">
                  <div className="team-member-details">
                    <div className="team-member-name headline-1">M2DT</div>
                    <div className="team-member-function text">Founder</div>
                  </div>
                  <Link href={"https://twitter.com/THEM2DT"} target="_blank">
                    <div className="team-member-link headline-1">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                  </Link>
                </div>
                <div className="tab tab-team-member">
                  <div className="team-member-details">
                    <div className="team-member-name headline-1">Zombi</div>
                    <div className="team-member-function text">
                      Game Developer
                    </div>
                  </div>
                  <Link href={"https://twitter.com/zombiNFT"} target="_blank">
                    <div className="team-member-link headline-1">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-2-box-2">
          <div className="row-2-box-2-top">
            <div className="tab tab-r2-3"></div>
            <div className="tab tab-r2-4"></div>
          </div>
          <div className="row-2-box-2-bottom">
            <div className="row-2-box-3">
              <div className="row-2-box-3-top" id="products">
                <div className="tab tab-products">
                  <FontAwesomeIcon icon={faCubesStacked} />
                </div>
                <div className="products-text">
                  <div className="products-title headline-1">Products</div>
                  <div className="about-text text">
                    Have some patience. You won't regret it.
                  </div>
                </div>
              </div>
              <div className="row-2-box-3-bottom">
                <div className="tab tab-r2-5"></div>
                <div className="tab tab-r2-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row-4" id="contact">
        <Link href={"https://twitter.com/EmpteaXYZ"} target="_blank">
          <div className="tab tab-twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </Link>
        <Link href={"https://discord.gg/rXzY3PSaeJ"} target="_blank">
          <div className="tab tab-discord">
            <FontAwesomeIcon icon={faDiscord} />
          </div>
        </Link>
        <Link href={"mailto:info@emptea.xyz"} target="_blank">
          <div className="tab tab-mail">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </Link>
        <Link href={"https://github.com/emptea-xyz"} target="_blank">
          <div className="tab tab-github">
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </Link>
      </div>
    </div>
  );
}
