import Image from "next/image";
import teabox from "./media/teacup.png"
import yin from "./media/yin-yang.svg"

export default function Home() {
  return (
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
                    <Image src={yin} height={100} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="heading-1">Developing new standards.</div>
              <div className="text">
                Together with the other builders we develop universal values to
                ensure a seamless experience.
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
              <Image src={teabox} height={400} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
