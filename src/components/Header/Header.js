import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/review">Review</NavLink>
      <NavLink to="/inventory">Inventory</NavLink>
    </div>
  );
};

export default Header;
