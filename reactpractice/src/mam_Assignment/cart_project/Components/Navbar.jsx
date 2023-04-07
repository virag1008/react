import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  // state { cart : [ {id: 4, price: 15.99 ...} ] }
  return (
    <>
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/cart"> Cart </NavLink>
      <span> cart items : {items.length} </span>
    </>
  );
};

export default Navbar;
