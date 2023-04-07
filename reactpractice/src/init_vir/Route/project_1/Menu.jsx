import React from "react";
import { NavLink } from "react-router-dom";
import './Menu.css'

function Menu() {
  return (
    <div className="navbar">
      <ol className="aa">

        <li>
          <NavLink to="/login">Login</NavLink>
        </li>

        <li>
          <NavLink to="/">About Us</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>

        <li>
          <NavLink to="/booking">Booking page</NavLink>
        </li>

        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
      </ol>
    </div>
  );
}

export default Menu;


// NavLink la style attribute deun sudhha property deu shakto ya way madhe but its complicated. so use by default feature of router class = active is inbuilt in it so useit .

// style={({ isActive }) => {
//   return { color: isActive ? "green" : "red" };
// }}
