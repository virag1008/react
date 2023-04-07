import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const name = "virag jain";
let imglink1 = "https://picsum.photos/200/300";
let imglink2 = "https://picsum.photos/250/300";
let imglink3 = "https://picsum.photos/300/300";


const heading = {
   textAlign: 'center',
   textTransform: 'capitalize',
   fontSize:'35px',
   margin: '40px',
   textShadow: '2px 3px 4px red',
   fontFamily: "'Dancing Script', cursive",
}
   // sarv css property object form madhe pahije aani camel case madhe ...like fontSize (not font-size)..and all values in single or double quotes.

root.render(
  <>
   <h1 style={heading}> my name is {name} </h1>
   {/* curly bracket madhe saral varcha object lihla so double curley bracket chi garaj nahi */}

      <div style={{border: '1px solid black',display: 'flex',justifyContent: 'center'}}>

      {/* {{double curly bracket madhe property dya}} */}

         <img src={imglink1} alt="random images" />
         <img src={imglink2} alt="random images" />
         <img src={imglink3} alt="random images" />
      </div>
  </>
);

