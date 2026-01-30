import { Link } from "react-router-dom";
import "../assets/css/Main.css";

export default function Footer() {
  return (
    <>
      <div className="Lets_Connect">
        <div className="Lets_ConnectText">
          <div className="D_Flex Just_Cent Item_center">
            <span className="DotConnect"></span><span>Get in touch</span>
          </div>
          <div>
            <div style={{ color: 'rgba(9, 27, 27, .6)', fontSize: '28px' }}>
              Kickstart your project
            </div>
            <div className="Font_medium color_blc" style={{ fontSize: '40px', color: 'black', textTransform: 'capitalize' }}>
              with a free discovery session
            </div>
          </div>
          <div style={{ color: 'rgba(9, 27, 27, .6)' }}>
            Describe your idea, we explore, advise, and provide a detailed plan.
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Link className="btn_BlcConnect" to="/Enquiry">Let's Connect</Link>
          </div>
        </div>
      </div>
      <footer className="Footer">
        <div className="Footer__container D_Flex Item_center just_btwn">
          <div className="W_40prc" style={{ alignSelf: 'self-start', display: 'flex', flexDirection: 'column', height: '100%', gap: '45px' }}>
            <div>Help us serve more clients like you. <a href="/">Join US</a> to grow and lead</div>
            <div>
              Our Socials
              facebook
              twitter
              linkedin
              instagram
            </div>
          </div>
          <div className="W_60prc D_Flex Item_center" style={{ alignItems: 'self-start', justifyContent: 'space-between' }}>
            <div>
              <h3>Our Services</h3>
              <ul>
                <li>Web Development</li>
                <li>App Development</li>
                <li>AI Development</li>
                <li>Product Development</li>
                <li>Enterprise Solution Integration</li>
              </ul>
            </div>
            <div>
              <h3>Industries</h3>
              <ul>
                <li>Healthcare</li>
                <li>BFSI</li>
                <li>EdTech / eLearning</li>
                <li>Hospitality</li>
                <li>Enterprise Products and SaaS</li>
                <li>Retail</li>
              </ul>
            </div>
            <div>
              <h3>Explore</h3>
              <ul>
                <li>
                  <div className=""><span className="DotConnect"></span><i className="Color_main">Refer</i></div>
                </li>
                <li>Blogs</li>
                <li>Whitepapers</li>
                <li>Case Studies</li>
                <li>Insights</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
