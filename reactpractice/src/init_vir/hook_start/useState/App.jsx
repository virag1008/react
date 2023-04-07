import React from "react";
import { useState } from "react";

const App = () => {
  const state = useState();
  // console.log(state);
const [count, setcount] = useState(0);

// [state_Object , Updated_Function];
//  current data, updated data = usestate (initial data )
// function kadhihi ekach value return karte but usestate ...current value with updated function return karte...

  const IncNum = () => {
    // count++;   //on this place count++ doesnt work & thats y we need hooks.
    setcount(count + 1)
    // console.log("clicked  " + count++);
  };
  return (
    <>
      <h1> {count} </h1>
      <button onClick={IncNum}> CLICK ME </button>
    </>
  );
};

export default App;
