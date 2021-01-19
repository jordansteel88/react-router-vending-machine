import React from "react";
import Home from "./Home";
import Ramen from "./Ramen";
import FriedChicken from "./FriedChicken";
import Spam from "./Spam";
import Gross from "./Gross";
import NavBar from "./NavBar";
import NavBack from "./NavBack";
import NavBackSolo from "./NavBackSolo";
import { BrowserRouter, Route } from "react-router-dom";
import './VendingMachine.css'

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <BrowserRouter>
        <Route exact path="/">
          <Home />
          <NavBar />
        </Route>        
        <Route exact path="/ramen">
          <Ramen />
          <NavBack />
        </Route>
        <Route exact path="/fried_chicken">
          <FriedChicken />
          <NavBack />
        </Route>
        <Route exact path="/spam">
          <Spam />
          <NavBack />
        </Route>        
        <Route exact path="/gross">
          <Gross />
          <NavBackSolo />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default VendingMachine;