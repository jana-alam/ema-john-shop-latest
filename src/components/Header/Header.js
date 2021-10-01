import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <img src={logo} alt="Ema john logo" />
      <div className="menu">
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/review">Review</NavLink>
        <NavLink to="/inventory">Inventory</NavLink>
      </div>
    </header>
  );
};

export default Header;
