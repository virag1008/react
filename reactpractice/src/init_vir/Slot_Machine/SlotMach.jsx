import React from "react";

function SlotMach(prop) {
  if (prop.x === prop.y && prop.y === prop.z) {
    return (
      <>
        <div className="trial1">
          <div className="slot_inner">
            <h1>
              {prop.x} {prop.y} {prop.z}
            </h1>
            <h1> This is matching. </h1>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="trial1">
          <div className="slot_inner">
            <h1>
              {prop.x} {prop.y} {prop.z}
            </h1>
            <h1> This is not matching. </h1>
          </div>
        </div>
      </>
    );
  }
}

export default SlotMach;
