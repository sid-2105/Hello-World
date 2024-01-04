import React from "react";
import "./Footer.css";
import {  FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer_Left">
        <h2>About Website:</h2>
        <p>This website is design to know more about the society</p>
        <p>Created by team <b>HE110 W0R1D</b></p>
        <h3>Copyright &#169; All rights reserved</h3>
      </div>
      <div className="Footer_Right">
        <h2> Contact Us:</h2>
        <div className="Footer_Icons">
          <a href="http://instagram.com/perfectly_imperfect_sid?igshid=YmMyMTA2M2Y=" target="_blank">
          <FaInstagram
                size={35}
                style={{ color: "#fff", marginTop: "1rem" }}
              />
          </a>
          <a href="http://www.linkedin.com/in/siddharth-mishra-363194225" target="_blank">
          <FaLinkedin
                size={35}
                style={{ color: "#fff", marginTop: "1rem" }}
              />
          </a>
          <a href="http://twitter.com/Siddhu0509?t=QTCaR_p09WzsFXq1_LwDIQ&s=08" target="_blank">
          <FaTwitter
                size={35}
                style={{ color: "#fff", marginTop: "1rem" }}
              />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
