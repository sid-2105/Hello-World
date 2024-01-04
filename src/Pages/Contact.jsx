import React from "react";
import "./Contact.css";
import { FaPhone,FaMailBulk } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="Page">
      <h1>Contact Us</h1>
      <div className="contact-parent">
        <div className="contact_right">
          <img
            src="./contact-bg.png"
            alt=""
          />
        </div>
        <div className="contact_left">
          <h2><FaMailBulk/>Helpline mail:</h2>
          <h5>xyz@gmail.com</h5>
          <h2><FaPhone/>Call us:</h2>
          <p>xxxxxxxxxxx</p>
          <p>xxxxxxxxxxx</p>
          <p>xxxxxxxxxxx</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
