import React, { useState } from "react";
import './Style.css'

const UseState = () => {
    const [state,setstate]=useState(0);
  return (
    <div className="container">
      <p> {state} </p>
      <div className="button2">
        <button className="btn" onClick={()=>setstate(state + 1)}> Increment </button>
        <button className="btn" onClick={()=> (state > 0 ? setstate(state - 1) : setstate(0)) }> Decrement </button>
      </div>
    </div>
  );
};

export default UseState;
