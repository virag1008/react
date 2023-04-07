import React from "react";
import "./App.css";
import SlotMach from "./SlotMach";

function App() {
  return (
    <>
      <div className="outerdiv">
        <h1 className="heading">
          🎰 Welcome to
          <span style={{ fontStyle: "italic" }}> Slotmachine game </span> 🎰
        </h1>

        <div className="slotmachine">
          <div className="innerdiv">
            <SlotMach x="🥰" y="🥰" z="🥰" />
            <SlotMach x="🍎" y="🍌" z="🍎" />
            <SlotMach x="🐬" y="🐕" z="🐄" />
            <SlotMach x="❄️" y="❄️" z="❄️" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
