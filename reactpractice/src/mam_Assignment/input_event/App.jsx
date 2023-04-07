import React from "react";
import { useState } from "react";

function App() {

  const [current, updated] = useState('');
  const [show, getvalue] = useState();

  const inputFun = (value) => {
    updated(value.target.value);
  };
  console.log(current)

  const submitForm = (value) => {
   value.preventDefault();
   getvalue(current)
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <input type="text" onChange={inputFun} />
        <input type="submit" />
      </form>
      <h3>{show}</h3>
    </>
  );
}

export default App;
