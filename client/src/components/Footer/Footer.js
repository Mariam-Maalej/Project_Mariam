import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="container-footer">
        <div className="About">
          <h2 className="title-footer">About Us</h2>
          <p className="footer-desc">
            If you are curious, nature fan and searching for good hikings or
            fire camping in Tunisia, TUNICAMP is a website that collects a large
            number of members which have a common love for discovery. You can
            find a variety of new challenges and good experiences. The concept
            is built in order to discover our dear country and build a large
            community of Tunisian campers.
          </p>
        </div>
        <div className="contact">
          <h2 className="title-footer">Contact Us</h2>
          <p className="footer-desc">Contact us on our facebook page</p>
          <i className="fab fa-facebook"></i>
          <hr></hr>
          <a href="#!" style={{ color: "darkcyan", fontWeight: "bold" }}>
            TUNICAMP
          </a>
        </div>
      </div>

      <div className="copyright">
        <i className="fas fa-copyright"></i>copyright TuniCamp 2020
      </div>
    </>
  );
};

export default Footer;
