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

export default function Mobile() {
  return (
    <div className="app-mobile">
      <div className="row row-1">
        <div className="title">Welcome to emptea.</div>
      </div>
      <div className="row row-2">
        <div className="tab tab-2-1">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
      <div className="row row-3">
        <div className="tab tab-3-1">
          <div className="about-title headline-1">About us</div>
          <div className="about-text text">
            We build products we love. Financial services, productivity tools,
            social media platforms, or games. We do what we love, and we do it
            great.
            <br />
            <br />
            We love blockchain and the possibilities it brings. With our apps,
            you never have to see a complicated login-window with thousands of
            options. All you need is one wallet to access the beautiful world of
            web3.
          </div>
        </div>
      </div>
      <div className="row row-4">
        <div className="tab tab-4-1">
          <FontAwesomeIcon icon={faCubesStacked} />
        </div>
      </div>
      <div className="row row-5">
        <div className="tab tab-5-1">
          <div className="products-title headline-1">Products</div>
          <div className="products-text text">
            Have some patience. You won't regret it.
          </div>
        </div>
      </div>
      <div className="row row-6">
        <div className="tab tab-6-1">
          <FontAwesomeIcon icon={faPeopleGroup} />
        </div>
      </div>
      <div className="row row-7">
        <div className="tab tab-7-1">
          <div className="team-title headline-1">Meet the team</div>
        </div>
      </div>
      <div className="row row-8">
        <div className="tab tab-8-1">
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
      </div>
      <div className="row row-9">
        <div className="tab tab-9-1">
          <div className="team-member-details">
            <div className="team-member-name headline-1">Zombi</div>
            <div className="team-member-function text">Game Developer</div>
          </div>
          <Link href={"https://twitter.com/zombiNFT"} target="_blank">
            <div className="team-member-link headline-1">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </Link>
        </div>
      </div>
      <div className="row row-9" id="contact">
        <Link href={"https://twitter.com/EmpteaXYZ"} target="_blank">
          <div className="tab tab-twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </Link>
      </div>
      <div className="row row-10">
        <Link href={"https://discord.gg/rXzY3PSaeJ"} target="_blank">
          <div className="tab tab-discord">
            <FontAwesomeIcon icon={faDiscord} />
          </div>
        </Link>
      </div>
      <div className="row row-11">
        <Link href={"mailto:info@emptea.xyz"} target="_blank">
          <div className="tab tab-mail">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </Link>
      </div>
      <div className="row row-12">
        <Link href={"https://github.com/emptea-xyz"} target="_blank">
          <div className="tab tab-github">
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </Link>
      </div>
    </div>
  );
}
