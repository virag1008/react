import React from "react";
import Countdown from "react-countdown";

function App() {
  const Completionist = () => <span>You are good to go!</span>;
  return (
    <Countdown date={Date.now() + 5000}>
      <Completionist />
    </Countdown>
  );
}

export default App;

