import { Link } from "react-router-dom";
import "../assets/css/NavBar.css";
import Icons from "../assets/img_icns/index.js";

const closeMenu = () => {
  document.classList.remove("dropdown__container");
  setTimeout(() => {
    document.classList.add("dropdown__container");
  }, 50);
};

export default function Navbar({ onQuickEnquiry }) {

  return (
    <header className="header">
      <nav className="nav container" id="nav-menu">
        <div className="nav__data">
          <Link to="/" className="nav__logo" onClick={closeMenu}>
            <img
              style={{ display: "block" }}
              src={Icons.OnlyNYX}
              alt="NYX Logo"
              className="Mlogo"
            />
            <img
              style={{ display: "none" }}
              src={Icons.NYXWName}
              alt="NYX Logo"
              className="Mlogo"
            />
          </Link>

          <div className="nav__toggle" id="nav-toggle">
            <i className="ri-menu-line nav__toggle-menu"></i>
            <i className="ri-close-line nav__toggle-close"></i>
          </div>
        </div>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li>
              <Link to="/" className="nav__link" onClick={closeMenu}>Home</Link>
            </li>
            <li className="dropdown__item">
              <Link to="/about" className="nav__link" onClick={closeMenu}>About</Link>
            </li>

            <li className="dropdown__item">
              <div className="nav__link dropdown__button" onClick={closeMenu}>
                Services <i className="ri-arrow-down-s-line dropdown__arrow"></i>
              </div>

              <div className="dropdown__container">
                <div className="dropdown__content">

                  <div className="dropdown__group">
                    <div className="dropdown__icon"><i className="ri-cloud-line"></i></div>
                    <span className="dropdown__title">Cloud Services</span>
                    <ul className="dropdown__list">
                      <li><Link to="/services/azure" className="dropdown__link" onClick={closeMenu}>Azure</Link></li>
                      <li><Link to="/services/aws" className="dropdown__link" onClick={closeMenu}>AWS</Link></li>
                      <li><Link to="/services/cloud-manage-services" className="dropdown__link" onClick={closeMenu}>Cloud Manage Services</Link></li>
                      <li><Link to="/services/cloud-migration" className="dropdown__link" onClick={closeMenu}>Cloud Migration</Link></li>
                    </ul>
                  </div>

                  <div className="dropdown__group">
                    <div className="dropdown__icon"><i className="ri-bar-chart-line"></i></div>
                    <span className="dropdown__title">Analytics Services</span>
                    <ul className="dropdown__list">
                      <li><Link to="/services/analytics" className="dropdown__link" onClick={closeMenu}>Analytics Solutions</Link></li>
                    </ul>
                  </div>

                  <div className="dropdown__group">
                    <div className="dropdown__icon"><i className="ri-database-line"></i></div>
                    <span className="dropdown__title" onClick={closeMenu}>SAP & ERP</span>
                    <ul className="dropdown__list">
                      <li><Link to="/services/sap-erp" className="dropdown__link" onClick={closeMenu}>SAP & ERP Solutions</Link></li>
                    </ul>
                  </div>

                  <div className="dropdown__group">
                    <div className="dropdown__icon"><i className="ri-code-line"></i></div>
                    <span className="dropdown__title">Software & Development</span>
                    <ul className="dropdown__list">
                      <li><Link to="/services/software-development" className="dropdown__link" onClick={closeMenu}>Software Development</Link></li>
                    </ul>
                  </div>

                  <div className="dropdown__group">
                    <div className="dropdown__icon"><i className="ri-team-line"></i></div>
                    <span className="dropdown__title">Staffing Solution</span>
                    <ul className="dropdown__list">
                      <li><Link to="/services/technical-staffing" className="dropdown__link" onClick={closeMenu}>Technical Staffing</Link></li>
                      <li><Link to="/services/people-development" className="dropdown__link" onClick={closeMenu}>People Development</Link></li>
                    </ul>
                  </div>

                </div>
              </div>
            </li>

            <li>
              <Link to="/Enquiry" className="nav__link" onClick={closeMenu}>Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="D_Flex Item_center">
          <Link
            id="Quickenqbtn"
            type="button"
            className="btn_enquiry"
            onClick={onQuickEnquiry}
            to="/Enquiry"
          >
            Quick Enquiry
          </Link>
        </div>
      </nav>
    </header>
  );
}
