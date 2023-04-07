import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const name = "virag jain";
let imglink1 = "https://picsum.photos/200/300";
let imglink2 = "https://picsum.photos/250/300";
let imglink3 = "https://picsum.photos/300/300";
let reflink = "https://picsum.photos/";

root.render(
  <>
   <h1 className="heading"> my name is {name} </h1>

      <div className="imgdiv">
         <img src={imglink1} alt="random images" />
         <img src={imglink2} alt="random images" />
         <a href={reflink}>
         <img src={imglink3} alt="random images" />
         </a>
      </div>
  </>
);
