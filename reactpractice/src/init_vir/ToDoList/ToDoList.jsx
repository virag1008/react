import React from "react";

function ToDoList(prop) {
  return (
    <>
      <div className="todo">
        <button
          className="remove"
          onClick={() => {
            prop.onSelect(prop.id);
          }}
        >
          {" "}
          x{" "}
        </button>
        <li> {prop.type10} </li>
      </div>
    </>
  );
}

export default ToDoList;
