import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/ramen">
        Ramen
      </NavLink>
      <NavLink exact to="/fried_chicken">
        Fried Chicken
      </NavLink>
      <NavLink exact to="/spam">
        Spam
      </NavLink>
    </nav>
  );
}

export default NavBar;