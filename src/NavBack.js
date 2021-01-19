import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBack() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Go Back
      </NavLink>      
      <NavLink exact to="/gross">
        Select this Oreo
      </NavLink>
    </nav>
  );
}

export default NavBack;