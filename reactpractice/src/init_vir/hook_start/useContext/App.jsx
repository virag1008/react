import React, { createContext } from "react";
import CompA from "./CompA";

const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <>
      <FirstName.Provider value={"Virag"}>
        <LastName.Provider value={"Jain"}>
          <CompA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}

export default App;
export { FirstName, LastName };
