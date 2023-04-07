import React, { useState } from "react";
import "./App.css";
import  Question  from "./Fake_Api";
import Accordion from "./Accordion";

function App() {
    const [data, setdata] = useState(Question)
  return (
    <div className="outerDiv">
      <div className="innerDiv">
       <h1> Test Your Mind </h1>
        {
            data.map( (element, index) => {
               return <Accordion key={index} { ...element } />
            })
        }
      </div>
    </div>
  );
}

export default App;