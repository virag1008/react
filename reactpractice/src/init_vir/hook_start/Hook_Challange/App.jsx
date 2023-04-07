import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [current, setstate] = useState(null);

  useEffect( () => {
    document.title = `React App ${current}`
  },[current])

    function ClickEvent() {
      setstate(current + 1);
    }

  return (
    <>
      <button onClick={ClickEvent}> click me {current}</button>
    </>
  );
};

export default App;
