import React, { createContext, useReducer } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export const countContext = createContext();

const initialValue = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialValue;
    default:
      return state;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <countContext.Provider value={{CountState:count , CountDispatch:dispatch}}>
      <div style={{textAlign:'center'}}>
      Count: {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </countContext.Provider>
  );
}

export default App;
