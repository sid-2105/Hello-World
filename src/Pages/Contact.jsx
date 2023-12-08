import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="Page">
      <h1>Contact Us</h1>
      <div className="contact">
        <div className="contact_right">
          <img
            src="https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className="contact_left">
          <h2>Helpline mail:</h2>
          <p>xyz@gmail.com</p>
          <h2>Call us:</h2>
          <p>xxxxxxxxxxx</p>
          <p>xxxxxxxxxxx</p>
          <p>xxxxxxxxxxx</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
