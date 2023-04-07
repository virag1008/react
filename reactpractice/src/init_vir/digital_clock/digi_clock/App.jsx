import React from "react";
import { useState } from "react";

let time = new Date().toLocaleTimeString();

function App() {
  const [currentTime, updatedFunction] = useState(time);
  setInterval(updatedTime, 1000);

  function updatedTime() {
    time = new Date().toLocaleTimeString();
    updatedFunction(time);
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}> {currentTime} </h1>
    </>
  );
}

export default App;
