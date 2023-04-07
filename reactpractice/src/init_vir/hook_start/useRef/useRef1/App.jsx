import React, { useEffect, useRef } from "react";

// useRef for =>  focus on input box as soon as page load.
function App() {
  const inputref = useRef(null);

  useEffect(() => {
    inputref.current.focus();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <input type="text" ref={inputref} />
    </div>
  );
}

export default App;
