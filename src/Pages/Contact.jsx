import React from "react";
import "./Contact.css";
import PhoneIconComponent from "../Components/Icons/PhoneIcon";
import GmailIcon from "../Components/Icons/GmailIcon";

const Contact = () => {
  return (
    <div className="Contact">
      <h1>Contact Us</h1>
      <div className="contact-parent">
        <div className="contact_right">
          <img
            src="https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className="contact_left">
          <h2>Helpline mail:</h2>
          <p><GmailIcon/>xyz@gmail.com</p>
          <h2>Call us:</h2>
          <p> <PhoneIconComponent/>xxxxxxxxxxx</p>
          <p>xxxxxxxxxxx</p>
          <p>xxxxxxxxxxx</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
