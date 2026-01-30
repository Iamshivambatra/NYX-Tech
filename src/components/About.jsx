import React from "react";
import Icons from "../assets/img_icns/index.js";
import OnlyNYX from "../assets/img_icns/OnlyNYX.png";
import NYXWName from "../assets/img_icns/NYXWName.jpg";
import WebsiteDev from "../assets/img_icns/Website_developlent.svg";
import CrossIcon from "../assets/img_icns/cross.svg";
import Favicon from "../assets/img_icns/OnlyNYX.jpg";
const About = () => {
  return (
    <main className="Main">
      <div id="Main_start" className="Main_start">
        <div
          style={{
            background: "#b6eae51f",
            padding: "20px",
            borderRadius: "20px",
            height: "100%",
            display: "flex",
          }}
        >
          <div
            className="W_50prc Aboutsec_left"
            style={{
              height: "100%",
              justifyContent: "space-around",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ fontSize: "21px", color: "#000000" }}>
              <h1 className="About_title">
                <span className="Color_main">Nyx Tech Solutions</span> – Powering
                Your Digital Tomorrow
              </h1>
            </div>

            <div>
              At Nyx Tech Solutions, we don’t just build technology — we craft
              experiences that transform businesses. From intuitive web
              platforms to scalable mobile apps, from data-driven SEO to
              impactful digital marketing, we make sure your brand stands out in
              the digital era.
            </div>
          </div>

          <div style={{ width: "50%", height: "100%" }}>
            <div className="MainStart__img">
              <span
                className="circle wow fadeInDown animated"
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  WebkitAnimationDuration: "1s",
                  MozAnimationDuration: "1s",
                  animationDuration: "1s",
                }}
              ></span>

              <img
                className="lazy-load"
                data-wow-duration="1s"
                alt=""
                src="/static/final.svg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* WHY TRUST US */}
      <div id="Chooseus" className="Chooseus">
        <h4 className="Chooseus_title">Why Trust Us</h4>

        <div className="txt_center">
          <div className="Font_bold Font_35">
            Driving Growth Through Smart{" "}
            <span className="Color_main">Digital Solutions</span>
          </div>
        </div>

        <div className="Px_40">
          <div className="D_Flex">
            {[
              "Tailored Solutions",
              "Proven Results",
              "Expert Team",
            ].map((title, i) => (
              <div key={i}>
                <div className="Service_card W_400px">
                  <a href="">
                    <div className="Chooseus_cardB">
                      <img
                        src="/assets/img_icns/Website_developlent.svg"
                        className="H_80px"
                        alt="Web Dev"
                      />
                      <h2>{title}</h2>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="D_Flex">
            {[
              "Client-First Approach",
              "On-Time Delivery",
              "24/7 Support",
            ].map((title, i) => (
              <div key={i}>
                <div className="Service_card W_400px">
                  <a href="">
                    <div className="Chooseus_cardB">
                      <img
                        src="/assets/img_icns/Website_developlent.svg"
                        className="H_80px"
                        alt="Web Dev"
                      />
                      <h2>{title}</h2>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        id="Journey"
        className="just_btwn D_Flex"
        style={{ background: "#b6eae51f", padding: "20px 40px" }}
      >
        <div className="JourneyTab">
          <div className="D_Flex dir_clum Gap_20">
            <div>
              <h4 className="Font_bold Font_medium Journey_Area">Our Journey</h4>
              <h2 style={{ fontSize: "30px" }}>
                Technology Stack That Fuels{" "}
                <span className="Color_main">Our Excellence</span>
              </h2>
            </div>

            <div className="D_Flex dir_clum Gap_20">
              <div className="Text_justify Journey_AreaDiv">
                Nyx Tech Solutions is a forward-thinking IT solutions company based in
                Noida, India, dedicated to empowering businesses in the digital era. We
                specialize in website design, software development, mobile app
                development, digital marketing, and creative design services. Our
                mission is to be the trusted technology partner for businesses that
                want to scale and succeed online.
              </div>

              <div className="Text_justify Journey_AreaDiv">
                With a strong B2B focus, we deliver innovative, cost-effective, and
                high-quality solutions tailored to each client’s unique needs. What
                makes us stand apart is our passionate team, innovative approach, and
                commitment to every project we deliver.
              </div>

              <div className="Text_justify Journey_AreaDiv">
                Since our establishment, Nyx Tech Solutions has successfully provided
                projects that exceed expectations in terms of time, design, quality,
                and performance — making us a reliable partner in transforming digital
                journeys.
              </div>
            </div>
          </div>
        </div>

        <div
          className="JourneyTab"
          style={{
            padding: "0px 15px 0px 0px",
            borderLeft: "1px solid #c4c4c4",
          }}
        >
          <div>
            <h2 style={{ padding: "20px 30px 0px 30px" }}>Our Mission</h2>
            <div
              className="Text_justify"
              style={{
                color: "#201c1c",
                borderBottom: "1px solid #c4c4c4",
              }}
            >
              <div style={{ padding: "30px" }}>
                At Nyx Tech Solutions, our mission is to empower businesses with smart,
                reliable, and innovative IT solutions. We believe in maximizing the
                potential of our clients’ resources and transforming them into
                measurable growth. Though we are constantly evolving, we never see it
                as a limitation—instead, it drives us to deliver better every day. Our
                goal is to build long-term relationships with clients, employees, and
                stakeholders through trust, collaboration, and consistent excellence.
              </div>
            </div>
          </div>

          <div>
            <h2 style={{ padding: "20px 30px 0px 30px" }}>Our Vision</h2>
            <div className="Text_justify" style={{ color: "#201c1c" }}>
              <div style={{ padding: "30px" }}>
                At Nyx Tech Solutions, our vision is to become a systematic, innovative,
                and quality-driven leader in the IT sector. We believe that in today’s
                digital era, every business deserves a strong and authentic online
                identity. Digital presence is no longer a luxury—it is a necessity for
                brand growth and recognition. From websites to digital marketing, we
                aim to provide businesses with the most reliable, scalable, and
                impactful tools to thrive in the competitive digital landscape.
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
};

export default About;
