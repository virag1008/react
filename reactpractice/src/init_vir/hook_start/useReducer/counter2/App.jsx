import React, { useReducer } from "react";

const initialValue = {
  firstCount: 0,
  secondCount: 10,
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return { ...currentState, firstCount: currentState.firstCount + action.value };
    case "decrement":
      return { ...currentState, firstCount: currentState.firstCount - action.value };
    case "reset":
      return initialValue;

    case "increment2":
        return { ...currentState, secondCount: currentState.secondCount + action.value };
    case "decrement2":
        return { ...currentState, secondCount: currentState.secondCount - action.value };  

    default:
      return currentState;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <h3> count : {count.firstCount} </h3>

      <button
        onClick={() => {
          dispatch({ type: "increment", value: 1 });
        }}>
        Increment
      </button>

      <button
        onClick={() => {
          dispatch({ type: "decrement", value: 1 });
        }} >
        Decrement
      </button>

      <button
        onClick={() => {
          dispatch({ type: "increment", value: 5 });
        }}>
        Increment by 5
      </button>

      <button
        onClick={() => {
          dispatch({ type: "decrement", value: 5 });
        }}>
        Decrement by 5
      </button>

      <div>
        <h3> count : {count.secondCount} </h3>

        <button
          onClick={() => {
            dispatch({ type: "increment2", value: 1 });
          }}>
          new Increment
        </button>

        <button
          onClick={() => {
            dispatch({ type: "decrement2", value: 1 });
          }}>
          new Decrement
        </button>
      </div>

      <br />
      <br />
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}>
        reset
      </button>
    </div>
  );
}

export default App;
