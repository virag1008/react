import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Projects() {
  return (
    <div>
      <h2> Our Projects </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        velit ab deserunt harum sequi omnis maiores magnam voluuod, deserunt
        saepe, distinctio itaque dolorem incidunt minus beatae minima hic
        reiciendis possimus repudiandae! Consequuntur.
      </p>

      <div>
          <ul>
            <li>
              <NavLink to="/projects/project1"> project 1 </NavLink>
            </li>
            <li>
              <NavLink to="/projects/project2"> project 2</NavLink>
            </li>
            <li>
              <NavLink to="/projects/project3"> project 3 </NavLink>
            </li>
          </ul>

          <Outlet/>

      </div>
    </div>
  );
}

export default Projects;
