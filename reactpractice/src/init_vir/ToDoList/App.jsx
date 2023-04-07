import React, { useState } from "react";
import "./App.css";
import ToDoList from "./ToDoList";

function App() {
  const [inputList, setInputList] = useState("");
  const [arrayElement, setArrayElement] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const clickAdd = () => {
    setArrayElement((values) => [...values, inputList]);
    setInputList("");
  };

  const deleteItems = (id) => {
    setArrayElement((oldItems) => {
      return oldItems.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <h1> ToDo List</h1>

        <div className="input_div">
          <input
            type="text"
            placeholder="Add a items"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={clickAdd}> + </button>
        </div>

        <ol>
          {arrayElement.map((itemvalue, index) => {
            return (
              <>
                <ToDoList
                  type10={itemvalue}
                  key={index}
                  id={index}
                  onSelect={deleteItems}
                />
              </>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
