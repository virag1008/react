import React, { createContext } from "react";
import CompA from "./CompA";

const Firstname = createContext();
const Lastname = createContext();

function App() {
  return (
    <Firstname.Provider value={"Virag"}>
      <Lastname.Provider value={'Jain'}>
        <CompA />
      </Lastname.Provider>
    </Firstname.Provider>
  );
}

export default App;
export { Firstname, Lastname };
