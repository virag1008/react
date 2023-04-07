import React from "react";
import { FirstName, LastName } from "./App";

function CompC() {
  return (
    <div>
      <FirstName.Consumer>
        {(e) => {
          return (
            <LastName.Consumer>
              {(l) => {
                return (
                  <h1>
                    My name is {e} {l}{" "}
                  </h1>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </div>
  );
}

export default CompC;
