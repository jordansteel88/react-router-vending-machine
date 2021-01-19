import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBackSolo() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Go Back
      </NavLink>      
    </nav>
  );
}

export default NavBackSolo;