import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const dateobj = new Date().getHours();
console.log(dateobj);
let great = ''
const cssstyle = { };

  if (dateobj < 12) {
    great = "GOOD MORNING";
    cssstyle.color = 'green';
  } else if (dateobj >= 12 && dateobj < 19) {
   great = "GOOD AFTERNOON";
   cssstyle.color = 'red';
  } else {
   great = "GOOD NIGHT";
   cssstyle.color = 'darkblue';
  }

const divstyle = {
   height:'95vh',
   border:'1px solid black',
   display:'flex',
   alignItems :'center',
   justifyContent:'center',
}

root.render(
  <>
    <div style={divstyle}>
      <h1 style={{ color: "darkviolet"}}>  hello user 
      <span style={cssstyle}>  {great} </span> </h1>
    </div>
  </>
);
