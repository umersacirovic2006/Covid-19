import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav">
      <NavLink to="/">
        <img src="https://iili.io/QOYltf.md.png" alt="covid" />
      </NavLink>
      <div className="nav-links">
        <NavLink to="/country">COUNTRY</NavLink>
        <NavLink to="/covid-stats">COVID STATS</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
      </div>
    </div>
  );
};

export default Nav;
