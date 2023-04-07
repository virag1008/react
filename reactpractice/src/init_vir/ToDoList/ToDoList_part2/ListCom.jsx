import React from "react";
import {useState} from 'react';
import DeleteIcon from "@mui/icons-material/Delete";

function ListCom(props) {

    
  const [line, setLine] = useState(false)

    const deleteFun = () => {
        setLine(true)
      };


  return (
    <div>
      <span onClick={deleteFun}>
        <DeleteIcon fontSize="small" className="deleteBtn" />
      </span>
      <li
        className="listclass"
        style={{ textDecoration:( line ? "line-through" : "none" )}}>
        {props.arrElement}
      </li>
    </div>
  );
}

export default ListCom;
