import React, { useState } from "react";
import "./Style.css";

const App = () => {
  const [input, setinput] = useState("");

  const action = (e) => {
    setinput(input.concat(e.target.name));
  };

  const backspace = () => {
    setinput(input.slice(0, -1));
  };

  const result = () => {
    setinput(eval(input).toString());
  };

  return (
    <>
      <h2>CALCULATOR</h2>

      <div className="calc">
        <input type="text" placeholder="0" value={input} readOnly />
        <br />
        <button onClick={() => setinput("")}> AC </button>
        <button onClick={backspace}> C </button>
        <br />
        <button onClick={action} name="/">
          &divide;
        </button>
        <button onClick={action} name="7">
          7
        </button>
        <button onClick={action} name="8">
          8
        </button>
        <button onClick={action} name="9">
          9
        </button>
        <br />
        <button onClick={action} name="*">
          &times;
        </button>
        <button onClick={action} name="4">
          4
        </button>
        <button onClick={action} name="5">
          5
        </button>
        <button onClick={action} name="6">
          6
        </button>
        <br />
        <button onClick={action} name="-">
          &ndash;
        </button>
        <button onClick={action} name="1">
          1
        </button>
        <button onClick={action} name="2">
          2
        </button>
        <button onClick={action} name="3">
          3
        </button>
        <br />
        <button onClick={action} name="+">
          +
        </button>
        <button onClick={action} name="0">
          0
        </button>
        <button className="dot" onClick={action} name=".">
          {"  "} .{" "}
        </button>
        <button onClick={result} value="=">
          =
        </button>
      </div>
    </>
  );
};

export default App;
