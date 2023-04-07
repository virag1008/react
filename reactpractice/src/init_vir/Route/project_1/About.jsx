import React from "react";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>Hii , I am about page</h1>
      <p> (if you put any wrong url it will redirect you to same page) </p>

      <h3> click on name and redirect to his website</h3>

      <ul>
        <li>
          <NavLink to="/user/virag"> Virag </NavLink>
        </li>
        <li>
          <NavLink to="/user/shubham"> Shubham </NavLink>
        </li>
        <li>
          <NavLink to="/user/shankar"> Shankar </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default About;
