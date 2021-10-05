import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <div>
        <div className="contact-type">
          <h2>BY PHONE</h2>
          <p>
            <small>(Monday to Friday, 9am to 6pm)</small>
            <h3>Toll-Free:</h3>
            <h3>1-000-0000-0000</h3>
          </p>
        </div>
        <div className="contact-type">
          <h2>LIVE CHAT</h2>
          <h3>Chat with a member of our in-house team. </h3>
          <button type="button" className=" btn btn-primary">
            Start Chat
          </button>
        </div>
        <div className="contact-type">
          <h2>BY MAIL</h2>
          <h3>support@edulife.com</h3>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
