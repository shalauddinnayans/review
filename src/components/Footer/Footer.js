import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer bg-primary">
      <div>
        <h3>Follow Us</h3>
        <a className="social-link" href="https://www.facebook.com">
          Facebook
        </a>
        <a className="social-link" href="https://www.facebook.com">
          Youtube
        </a>
        <a className="social-link" href="https://www.facebook.com">
          Instagram
        </a>
        <a className="social-link" href="https://www.facebook.com">
          Linkdin
        </a>
      </div>

      <NavLink className="nav-link" to="/home">
        Privacy Policy
      </NavLink>
      <NavLink className="nav-link" to="/courses">
        Refund Policy
      </NavLink>
      <NavLink className="nav-link" to="/about">
        Terms & Conditions
      </NavLink>
      <p>
        Copyright 2021 - Eedlife
        <br />
        All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
