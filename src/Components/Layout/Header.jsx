import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
const Header = () => {
  return (
    <div className="Header">
      <div className="Header_Logo">
        <Link to={'/'}>
        <ScrollToTop/>
        {/* <img src="./logo69.png" alt="" /> */}
        </Link>
      </div>
      <div className="Header_Navigation">
        <Link to={'/'}>
        <span>Home</span>
        </Link>
        <Link to={'/about'}>
        <span>About</span>
        </Link>
        <Link to={'/contact'}>
        <span>Contact Us</span>
        </Link>
        <Link to={'/community'}>
        <span>Community</span>
        </Link>
        <Link to={'/gallery'}>
        <span>Gallery</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
