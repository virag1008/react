import React, { useState } from "react";
import "./ToDoList.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ListCom from "./ListCom";

const App = () => {
  const [item, setItem] = useState("");
  const [showItem, addItem] = useState([]);

  const clickFun = () => {
    addItem((prevValue) => {
      return [...prevValue, item];
    });
    setItem("");
  };

  return (
    <>
      <div className="outerDiv">
        <div className="innerDiv">
          <h1> To Do List </h1>
          <div className="text">
            <input
              type="text"
              className="inputClass"
              value={item}
              onChange={(val) => setItem(val.target.value)}
            />
            <Button
              variant="contained"
              color="success"
              size="small"
              onClick={clickFun}
            >
              <AddIcon />
            </Button>
          </div>

          <ol className="hg">
            {showItem.map((e, index) => <ListCom arrElement = {e} key = {index}/>)}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
