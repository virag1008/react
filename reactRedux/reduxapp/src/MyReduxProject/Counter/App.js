import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber, multNumber, divNumber } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const myNewState = useSelector((state) => state.MultDivNumber);

  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <h1> Increment / Decrement counter</h1>
        <h4>Using React and Redux</h4>

        <div className="quantity">
          <a
            className="minus"
            title="decrement"
            onClick={() => dispatch(decNumber())}
          >
            -
          </a>
          <input
            type="text"
            name="quantity"
            className="input"
            value={myState}
          />

          <a
            className="plus"
            title="increment"
            onClick={() => dispatch(incNumber(5))}
          >
            <span> + </span>
          </a>
        </div>
      </div>

      {/* ********************************************* */}

      <div className="container">
        <h1> Multiplication / Divide counter</h1>
        <h4>Using React and Redux</h4>

        <div className="quantity">
          <a
            className="minus"
            title="decrement"
            onClick={() => dispatch(divNumber())}
          >
            /
          </a>
          <input
            type="text"
            name="quantity"
            className="input"
            value={myNewState}
          />

          <a
            className="plus"
            title="increment"
            onClick={() => dispatch(multNumber(2))}
          >
            <span> x </span>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;

// anchor tag madhe href attribute deu naka.
