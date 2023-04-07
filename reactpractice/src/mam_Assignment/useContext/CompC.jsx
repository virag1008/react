import React, { useContext } from "react";
import { Firstname, Lastname } from "./App";

function CompC() {
  const fname = useContext(Firstname);
  const lname = useContext(Lastname);

  return (
    <h1>My name is {fname} {lname} </h1>
  )
}

export default CompC;
