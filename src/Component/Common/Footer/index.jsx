import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaYoutube } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";

// Images
import Logo from "../../Assets/img/Logo/RAJLAXMI JAVIK PNG.png";
import Map from "../../Assets/img/ourProducts/map.svg";
import Phone from "../../Assets/img/ourProducts/phone.svg";
import Email from "../../Assets/img/ourProducts/EnvelopeSimple.svg";
import Vector from "../../Assets/img/whyChooseUs/Vector.svg";
import Vector2 from "../../Assets/img/whyChooseUs/footer-vector.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const navLinks = [
    { text: "Lab Report" },
    { text: "FAQ's",
      to: "/faq",
     },
    { text: "Shop Now" },
    {
      text: "Track Order",
      to: "/track",
    }
  ];

  const categories = [
    "Ghee & Oil",
    "Dry Fruits",
    "Pulses & Grains",
    "Spices And Flours",
  ];

  const generalLinks = [
    { text: "Refund Policy", to: "/refund" },
    { text: "Privacy Policy", to: "/privacy-policy" },
    { text: "Shipping & Delivery Policy", to: "/shipping-policy" },
    { text: "Terms And Conditions", to: "/terms-and-conditions" },
  ];

  const socialIcons = [
    { icon: <IoLogoFacebook fontSize={30} />, link: "#" },
    { icon: <AiFillInstagram fontSize={30} />, link: "#" },
    { icon: <FaYoutube fontSize={30} />, link: "#" },
    { icon: <IoLogoLinkedin fontSize={30} />, link: "#" },
  ];

  return (
    <footer
      className="bg-light position-relative bg-custom-gradient-footer padding-top-100 padding-bottom-60 "
      style={{ display: "flex", alignItems: "center" }}
    >
      <div className="vector">
        <img src={Vector} alt="Loading" />
      </div>
      <div className="footer-vector-2 vector2">
        <img src={Vector2} alt="Loading" />
      </div>
      <Container style={{ zIndex: "999" }}>
        <Row className="pt-5 mt-5 pt-lg-0 mt-lg-0 mx-2 mx-lg-0">
          {/* Logo and Company Name */}
          <Col xs={12} lg={2} md={4} className="ps-2">
            <div className="mb-4 text-center">
              <img
                src={Logo}
                alt="Rajlaxmi javiks International"
                style={{ width: "92px" }}
                className="ms-3"
              />
              <div className="mt-3 josefin-sans-font-family-500 heading-title text-color-dark-ashy-blue text-center font-size-22">
                Rajlaxmi javiks International
              </div>
            </div>
          </Col>

          {/* Navigate Our Site */}
          <Col xs={6} lg={3} md={4}>
            <div className="josefin-sans-font-family-500 font-size-22 text-color-dark-ashy-blue heading-title pt-4 pb-2">
              Navigate Our Site
            </div>
            <ul className="list-unstyled">
              {navLinks.map((link, index) => (
                <li key={index} className="pb-2">
                  <NavLink
                    to={link.to}
                    className="inter-font-family-400 text-color-dark-ashy-blue text-description font-size-16"
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </Col>

          {/* Categories */}
          <Col xs={6} lg={2} md={4}>
            <div className="josefin-sans-font-family-500 font-size-22 text-color-dark-ashy-blue heading-title pt-4 pb-2">
              Categories
            </div>
            <ul className="list-unstyled">
              {categories.map((category, index) => (
                <li key={index} className="pb-2">
                  <a
                    href="/#"
                    className="inter-font-family-400 text-color-dark-ashy-blue text-description font-size-16"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* General Links */}
          <Col xs={4} lg={2} md={4}>
            {/* <h6 className="fw-bold">General</h6> */}
            <div className="josefin-sans-font-family-500 font-size-22 text-color-dark-ashy-blue heading-title pt-4 pb-2">
              General
            </div>
            <ul className="list-unstyled">
              {generalLinks.map((item, index) => (
                <li key={index} className="pb-2">
                  <NavLink
                    to={item?.to}
                    className="inter-font-family-400 text-color-dark-ashy-blue text-description font-size-16"
                  >
                    {item?.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </Col>

          {/* Contact Us */}
          <Col xs={8} lg={3} md={8}>
            {/* <h6 className="fw-bold">Contact Us</h6> */}
            <div className="josefin-sans-font-family-500 font-size-22 text-color-dark-ashy-blue heading-title pt-4 pb-2">
              Contact Us
            </div>
            <ul className="list-unstyled">
              <li>
                {/* <FaMapMarkerAlt className="me-2 inter-font-family-400 font-size-16"/> Address: 11, Manish Bagh Colony,
                <br /> Sapna Sangeeta Road, Indore,
                <br /> Madhya Pradesh, 452001 */}
                <div className="py-2 d-flex ">
                  <div className="text-description">
                    <img
                      src={Map}
                      alt="Loading"
                      className="footer-icon-background p-2 rounded-circle shadows"
                    />
                  </div>
                  <div className="ms-3">
                    <span className="inter-font-family-400 text-color-dark-ashy-blue text-description font-size-16">
                      11, Manish Bagh Colony, Sapna Sangeeta Road, Indore,
                      Madhya Pradesh, 452001
                    </span>
                  </div>
                </div>
              </li>
              <li>
                {/* <FaPhoneAlt className="me-2 inter-font-family-400 font-size-16" />{" "}
                +91-8769115905 */}
                <div className="py-2">
                  <img
                    src={Phone}
                    alt="Loading"
                    className="footer-icon-background p-2 rounded-circle shadows"
                    s
                  />
                  <span className="inter-font-family-400 text-color-dark-ashy-blue text-description font-size-16  ms-3">
                    +91-8769115905
                  </span>
                </div>
              </li>
              <li>
                {/* <FaEnvelope className="me-2 inter-font-family-400 font-size-16" />{" "}
                rajlaxmiorganicfoods@gmail.com */}
                <div className="py-2">
                  <img
                    src={Email}
                    alt="Loading"
                    className="footer-icon-background p-2 rounded-circle shadows"
                  />
                  <span className="inter-font-family-400 text-color-dark-ashy-blue font-size-16 text-description ms-3">
                    rajlaxmiorganicfoods@gmail.com
                  </span>
                </div>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="mt-4 align-items-center footer-icon-background p-3 rounded text-center">
          <Col xs={12} lg={3} md={3}>
            <p className="mb-0 ">
              <span className="inter-font-family-400 text-description font-size-12">
                &copy; 2024 Rajlaxmi javiks International{" "}
              </span>
              <br />
              <span className="inter-font-family-500 text-description font-size-14">
                All Rights Reserved
              </span>
            </p>
          </Col>

          {/* Social Media Icons */}
          <Col xs={12} lg={6} md={6}>
            {socialIcons.map((item, index) => (
              <a
                href={item.link}
                key={index}
                className="mx-3 text-color-terracotta"
              >
                {item.icon}
              </a>
            ))}
          </Col>

          {/* Powered By */}
          <Col xs={12} md={3}>
            <p className="mb-0">
              <span className="inter-font-family-400 font-size-12 text-description">
                Powered By
              </span>
              <div className="inter-font-family-500 font-size-14 text-description">
                Intelligence Fusion Technologies
              </div>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
