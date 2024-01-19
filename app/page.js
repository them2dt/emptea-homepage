import Image from "next/image";
import teabox from "./media/teacup.png";
import yin from "./media/yin-yang.svg";
import maru from "./media/maru.png";
import batu from "./media/batu.png";
import erzhan from "./media/erzhan.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Emptea Studios</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@EmpteaStudios" />
        <meta name="twitter:title" content="Emptea Studios" />
        <meta name="twitter:description" content="Conquer horizons." />
        <meta
          name="twitter:image:alt"
          content="A cover image for the website."
        />
        <meta
          name="twitter:image"
          content="https://bafkreifzxtg23dbae6xw5vsazrwhgbf2h25kymlct4lsgqauxakvs46kfa.ipfs.nftstorage.link/"
        />

        <meta property="og:title" content="Emptea Studios" />
        <meta property="og:description" content="Conquer horizons." />
        <meta
          property="og:image"
          content="https://bafkreifzxtg23dbae6xw5vsazrwhgbf2h25kymlct4lsgqauxakvs46kfa.ipfs.nftstorage.link/"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="500" />
      </Head>
      <div className="body" id="body">
        <div className="intro" id="intro">
          <div className="glow"></div>
          <div className="grid">
            <div className="item-1"></div>
            <div className="item-2"></div>
            <div className="item-3"></div>
            <div className="item-4"></div>
            <div className="item-5"></div>
            <div className="item-6"></div>
            <div className="item-7"></div>
            <div className="item-8"></div>
            <div className="item-9"></div>
            <div className="item-10"></div>
            <div className="item-11"></div>
            <div className="item-12"></div>
            <div className="item-13"></div>
            <div className="item-14"></div>
            <div className="item-15"></div>
          </div>
          <div className="content">
            <div className="title">Conquer horizons.</div>
            <div className="text">We build a better ecosystem, together.</div>
          </div>
        </div>
        <div className="about" id="about">
          <div className="topics">
            <div className="topic topic-services">
              <div className="media">
                <div className="chip-box" id="chip-box">
                  <div className="glow top"></div>
                  <div className="glow left"></div>
                  <div className="glow right"></div>
                  <div className="glow bottom"></div>
                  <div className="fibres">
                    <div className="top">
                      <div className="chunk"></div>
                      <div className="stripe"></div>
                      <div className="stripe"></div>
                      <div className="chunk"></div>
                    </div>
                    <div className="mid">
                      <div className="stripe"></div>
                      <div className="stripe"></div>
                    </div>
                    <div className="top">
                      <div className="chunk"></div>
                      <div className="stripe"></div>
                      <div className="stripe"></div>
                      <div className="chunk"></div>
                    </div>
                  </div>
                  <div className="chip">
                    <div className="surface"></div>
                    <div className="shade"></div>
                    <div className="image">
                      <Image
                        src={yin}
                        alt={"An image of the yin-yang symbol."}
                        height={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="heading-1">Developing new standards.</div>
                <div className="text">
                  Together with the other builders we develop universal values
                  to ensure a seamless experience.
                </div>
                <div className="button text">dive in</div>
              </div>
            </div>
            <div className="topic topic-products">
              <div className="content">
                <div className="heading-1">Homemade innovation.</div>
                <div className="text">
                  We have too much ambition to just offer services.
                </div>
                <div className="button text">explore teacup</div>
              </div>
              <div className="media">
                <Image
                  src={teabox}
                  alt={
                    "image of an rounded rectangular with an icon of a teacup inside."
                  }
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="team" id="team">
          <div className="member maru">
            <div className="box">
              <div className="name heading-2">maru</div>
              <div className="role text">Frontend-developer</div>
            </div>
            <div className="image">
              <Image src={maru} alt={"the avatar of maru."} width={200} />
            </div>
          </div>
          <div className="member batu">
            <div className="box">
              <div className="name heading-2">batu</div>
              <div className="role text">Backend-developer</div>
            </div>
            <div className="image">
              <Image src={batu} alt={"the avatar of batu."} width={200} />
            </div>
          </div>
          <div className="member erzhan">
            <div className="box">
              <div className="name heading-2">erzhan</div>
              <div className="role text">marketing specialist</div>
            </div>
            <div className="image">
              <Image src={erzhan} alt={"the avatar of erzhan."} width={200} />
            </div>
          </div>
        </div>
        <div className="collabs" id="collabs">
          <div className="info">
            <div className="heading-1">Want to level up?</div>
            <div className="text">
              At this moment, we're fully booked out. Get notified first, when
              we're open for collaborations again.
            </div>
          </div>
          <div className="mailchimp">
            <div className="form">
              <input
                type="text"
                className="textfield text"
                placeholder="text goes here"
              />
              <div className="button">Go</div>
            </div>
          </div>
        </div>
        <div className="footer" id="footer">
          <div className="fill">
            <div className="socials">
              <div className="text">Discord</div>
              <div className="text">Medium</div>
              <div className="text">X</div>
            </div>
            <div className="name heading-2">emptea labs</div>
          </div>
        </div>
      </div>
    </>
  );
}
