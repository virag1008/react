import React, { useState } from "react";
import "./Todo.css";
import { addToDo, deleteToDo, clearToDo } from "../action/Index";
import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
  const [inputdata, setInputdata] = useState("");
  const dispatch = useDispatch();

  const list = useSelector((state) => state.ToDoReducer.list);

  const add = () => {
    setInputdata("");
    inputdata === "" ? alert("Enter Item") : dispatch(addToDo(inputdata));
  };

  return (
    <>
      <div className="container">
        <h1> Add Your List Here 🖊️ </h1>
        <div className="header">
          <input
            type="text"
            placeholder="✍️ Add Items..."
            value={inputdata}
            onChange={(e) => setInputdata(e.target.value)}
          />
          <button onClick={() => add()}> + </button>
        </div>

        <div className="maindiv">
          <ol>
            {list.map((element) => {
              return (
                <div className="lia" key={element.id}>
                  <li> {element.inputdata} </li>
                  <button onClick={() => dispatch(deleteToDo(element.id))}>
                    -
                  </button>
                </div>
              );
            })}
          </ol>
        </div>

        <div>
          <button className="clear_btn" onClick={() => dispatch(clearToDo())}>
            Clear List
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;

// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addList, DELList, removeTodo } from "../action/Index";

// const Todo = () => {
//   const [inputData, setInputData] = useState("");
//   const dispatch = useDispatch();
//   const list = useSelector((state) => state.TodoReducer.list);

//   return (
//     <div>
//       <h3>Hi</h3>
//       <input
//         type="text"
//         placeholder="Enter the list item"
//         onChange={(e) => {
//           setInputData(e.target.value);
//         }}
//         value={inputData}
//       />
//       <button
//         onClick={() => {
//           dispatch(addList(inputData));
//         }}
//       >
//         Add
//       </button>{" "}
//       {list.map((ele) => {
//         return (
//           <div className="p" key={ele.id}>
//             {console.log(ele.id)}
//             <li>{ele.data}</li>
//             <button
//               onClick={() => {
//                 dispatch(DELList(ele.id));
//               }}
//             >
//               Del
//             </button>
//           </div>
//         );
//       })}
//       <button
//         onClick={() => {
//           dispatch(removeTodo());
//         }}
//       >
//         Remove
//       </button>
//     </div>
//   );
// };
// export default Todo;
