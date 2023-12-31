import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import {FaBars, FaTimes} from "react-icons/fa";
import  { useState,useEffect } from "react";

const Header = () => {
  
const [click, setClick]=useState(false);
const handleClick = () => {
  setClick (!click);
  // console.log("Click",click)
}
const[color, setColor]= useState(false);
const changeColor = () =>{
     if(window.scrollY>=100){
          setColor(true);
     }else{
          setColor(false);
     }
};
useEffect(()=>{

},[click])
window.addEventListener("scroll",changeColor);
  return (
    <div className={color? "Header Header-bg": "Header"}>
      <div className="Header_Logo">
        <Link to={'/'}>
        <ScrollToTop/>
        </Link>
      </div>
      <div className={click? "Header_Navigation active": "Header_Navigation"}>
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
      <div className="sidebar" onClick={handleClick}>
          {click?( <FaTimes size={20} style={{color:"white"}}/>):(<FaBars size={20} style={{color:"white"}}/>)}
     </div>
    </div>
  );
};

export default Header;
