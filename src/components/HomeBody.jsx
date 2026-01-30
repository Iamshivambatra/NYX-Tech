import { Link } from "react-router-dom";
import "../assets/css/Main.css";

export default function HomeBody() {
  return (
    <main className="Main">
      <div id="Main_start" className="Main_start">
        <div style={{ background: '#b6eae51f', padding: '20px', borderRadius: '20px', height: '100%', display: 'flex' }}>
          <div className="W_50prc" style={{ height: '100%', justifyContent: 'space-around', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '21px', color: '#000000' }}>
              <h1>Transforming Ideas into Scalable Digital Realities with India's Leading IT Experts</h1>
            </div>
            <div className="D_Flex Gap_20">
              <Link to="/Enquiry" className="btn_enquiry">Request a Proposal</Link>
              <button to="/Enquiry" style={{ display: "none" }} className="Btn_explr">Explore Our Projects</button>
            </div>
          </div>
          <div style={{ width: '50%', height: '100%' }}>
            <div className="MainStart__img">
              <span className="circle wow fadeInDown animated" data-wow-duration="1s"
                style={{ visibility: 'visible', WebkitAnimationDuration: '1s', MozAnimationDuration: '1s', animationDuration: '1s' }}></span>
              <img className="lazy-load" data-src="/static/final.svg" data-wow-duration="1s" alt="" src="/static/final.svg" />
            </div>
          </div>
        </div>
      </div>

      <div id="Services" className="Services">
        <h4 className="Services_title">our services</h4>
        <div className="txt_center">
          <div className="Font_bold Font_35">
            Empowering Your <span className="Color_main">Business with Exceptional Digital Solutions</span>
          </div>
          <div className="Font_medium">
            Unlock a suite of expert services designed to elevate your online presence and drive meaningful growth
          </div>
        </div>
        <div className="D_Flex Item_center just_btwn Px_40">
          <div className="">
            <div className="Service_card W_300px">
              <a href="">
                <div className="Service_cardB">
                  <img src="./assets/img_icns/Website_developlent.svg" className="H_80px" alt="Web Dev" />
                  <h2>Website Development</h2>
                  <span className="Font_medium">
                    Professionally developed websites that combine functionality with striking design to meet your business requirements.
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="">
            <div className="Service_card W_300px">
              <a href="">
                <div className="Service_cardB">
                  <img src="./assets/img_icns/Website_developlent.svg" className="H_80px" alt="Web Dev" />
                  <h2>App Development</h2>
                  <span className="Font_medium">
                    Smart, intuitive mobile apps engineered to inspire users, drive engagement, and elevate your brand.
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="">
            <div className="Service_card W_300px">
              <a href="">
                <div className="Service_cardB">
                  <img src="./assets/img_icns/Website_developlent.svg" className="H_80px" alt="Web Dev" />
                  <h2>System/Software Development</h2>
                  <span className="Font_medium">
                    We develop systems and software precisely aligned with your business objectives.
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="">
            <div className="Service_card W_300px">
              <a href="">
                <div className="Service_cardB">
                  <img src="./assets/img_icns/Website_developlent.svg" className="H_80px" alt="Web Dev" />
                  <h2>UI/UX</h2>
                  <span className="Font_medium">
                    Design elegant and user-centric UI/UX interfaces that ensure smooth and intuitive interaction.
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="Experties" style={{ background: '#b6eae51f', padding: '20px 40px', display: 'flex' }}>
        <div style={{ width: '60%' }}>
          <div>
            <h4 className="Font_bold Font_medium Expertise_Area">Our Expertise</h4>
            <h2 style={{ fontSize: '40px' }}>
              Technology Stack That Fuels <div className="Color_main">Our Excellence</div>
            </h2>
          </div>
          <div className="D_Flex Item_center Gap_10" style={{ margin: '15px 0px' }}>
            <div className="border_right">Web Development</div>
            <div className="border_right">App Development</div>
            <div className="border_right">Database</div>
            <div className="border_right" style={{ border: 'none' }}>Cloud Platform</div>
          </div>
          <div style={{ padding: '10px 20px', rowGap: '10px', display: 'grid' }}>
            <div className="D_Flex Item_center Gap_10 Technology_Stack just_btwn">
              <div><img src="./assets/img_icns/NextJs.svg" alt="" /></div>
              <div><img src="./assets/img_icns/React.svg" alt="" /></div>
              <div><img src="./assets/img_icns/Angular.svg" alt="" /></div>
              <div><img src="./assets/img_icns/Laravel.svg" alt="" /></div>
              <div><img src="./assets/img_icns/Python.svg" alt="" /></div>
            </div>
            <div className="D_Flex Item_center Gap_10 Technology_Stack just_btwn">
              <div><img src="./assets/img_icns/Html5.svg" alt="" /></div>
              <div><img src="./assets/img_icns/Css3.svg" alt="" /></div>
              <div><img src="./assets/img_icns/Javascript.svg" alt="" /></div>
              <div><img src="./assets/img_icns/Figma.svg" alt="" /></div>
              <div><img src="./assets/img_icns/Bootstrap.svg" alt="" /></div>
            </div>
            <div className="D_Flex Item_center Gap_10 Technology_Stack just_btwn">
              <div><img src="./assets/img_icns/Django.svg" alt="" /></div>
              <div><img src="./assets/img_icns/Wordpress.svg" alt="" /></div>
              <div><img src="./assets/img_icns/Node.svg" alt="" /></div>
              <div><img src="./assets/img_icns/Tailwind.svg" alt="" /></div>
              <div><img src="./assets/img_icns/Php.svg" alt="" /></div>
            </div>
          </div>
        </div>
        <div>
          <div className="technology__img">
            <span className="circle wow fadeInDown animated" data-wow-duration="1s"
              style={{ visibility: 'visible', WebkitAnimationDuration: '1s', MozAnimationDuration: '1s', animationDuration: '1s' }}></span>
            <img className="lazy-load" data-src="/static/final.svg" data-wow-duration="1s" alt="" src="/static/final.svg" />
          </div>
        </div>
      </div>

      <div id="Steps_Area" className="Steps_Area">
        <div>
          <h4 className="Steps_title">How We Work</h4>
          <h1 className="Steps_Quote">Enjoy seamless service with <span className="Color_main">our easy steps!</span></h1>
        </div>
        <div className="Color_blc StepsHead">
          Efficient workflow from requirements gathering to support and maintenance
        </div>
        <div>
          <div className="D_Flex Item_center just_btwn Gap_20 Steps_Area__content Border_btm">
            <div className="W_20prc P_2 Color_gry">1</div>
            <div className="W_30prc P_2 Color_blc">Requirement Gathering</div>
            <div className="W_50prc P_2">
              We start our collaboration by collecting client requirements, listing and compiling them. This helps us build the process from scratch to deliver results aligned with your goals.
            </div>
          </div>
          <div className="D_Flex Item_center just_btwn Gap_20 Steps_Area__content Border_btm">
            <div className="W_20prc P_2 Color_gry">2</div>
            <div className="W_30prc P_2 Color_blc">Plan & Resources</div>
            <div className="W_50prc P_2">
              We start our collaboration by collecting client requirements, listing and compiling them. This helps us build the process from scratch to deliver results aligned with your goals.
            </div>
          </div>
          <div className="D_Flex Item_center just_btwn Gap_20 Steps_Area__content Border_btm">
            <div className="W_20prc P_2 Color_gry">3</div>
            <div className="W_30prc P_2 Color_blc">Design & Develop</div>
            <div className="W_50prc P_2">
              We start our collaboration by collecting client requirements, listing and compiling them. This helps us build the process from scratch to deliver results aligned with your goals.
            </div>
          </div>
          <div className="D_Flex Item_center just_btwn Gap_20 Steps_Area__content Border_btm">
            <div className="W_20prc P_2 Color_gry">4</div>
            <div className="W_30prc P_2 Color_blc">Quality Assurance</div>
            <div className="W_50prc P_2">
              We start our collaboration by collecting client requirements, listing and compiling them. This helps us build the process from scratch to deliver results aligned with your goals.
            </div>
          </div>
          <div className="D_Flex Item_center just_btwn Gap_20 Steps_Area__content Border_btm">
            <div className="W_20prc P_2 Color_gry">5</div>
            <div className="W_30prc P_2 Color_blc">Deployment</div>
            <div className="W_50prc P_2">
              We start our collaboration by collecting client requirements, listing and compiling them. This helps us build the process from scratch to deliver results aligned with your goals.
            </div>
          </div>
          <div className="D_Flex Item_center just_btwn Gap_20 Steps_Area__content Border_btm">
            <div className="W_20prc P_2 Color_gry">6</div>
            <div className="W_30prc P_2 Color_blc">Support & Maintenance</div>
            <div className="W_50prc P_2">
              We start our collaboration by collecting client requirements, listing and compiling them. This helps us build the process from scratch to deliver results aligned with your goals.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}