import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Link } from "@mui/material";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="icons">
        <Link
          className="links"
          href="https://www.facebook.com/OfficialNHSCOVID19app"
          target="_blank"
        >
          <Facebook />
        </Link>
        <Link
          className="links"
          href="https://www.instagram.com/nhs/"
          target="_blank"
        >
          <Instagram />
        </Link>
        <Link
          className="links"
          href="https://twitter.com/i/flow/login?redirect_after_login=%2Fnhscovid19app"
          target="_blank"
        >
          <Twitter />
        </Link>
      </div>
      <div className="footer-links">
        <NavLink to="/countries">Countries</NavLink>
        <NavLink to="/country">Country</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
      <p>© Covid 19 Coorporation</p>
    </div>
  );
};

export default Footer;
