import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  let time = new Date().toLocaleTimeString();

  // FIRST WAY...WRONG WAY
//   const [count, setcount] = useState();

//   function getTime() {
//     //return time;  //state change hot aahe so hook is important
//     return setcount(time);
//   }

  // SECOND WAY...CORRECT WAY
  const [ctime, setctime] = useState(time);

  function getTime() {
    time = new Date().toLocaleTimeString();
    return setctime(time);
  }

  return (
    <>
      <div>
        <p> {time} </p>
        <button onClick={getTime}> GET TIME </button>
      </div>
    </>
  );
}
export default App;
