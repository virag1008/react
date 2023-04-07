import React, { useState, useEffect } from "react";

// get item from the local storage

const getLocalData = () => {
  const lists = localStorage.getItem('MyToDoList');
  if(lists){
    return JSON.parse(lists)
  }else{
    return [];
  }
}

const Component = () => {
  let [state, setstate] = useState("");
  let [add, setAdd] = useState(getLocalData());
  const [isEditItem, setIsEditItem ] = useState('')


  const deletefun = (index) => {
    setAdd((oldItem) => {
      return oldItem.filter((arrEle, id) => {
        return index !== id;
      });
    });
  };

  // add items in LOCAL STORAGE

  useEffect( () => {
    localStorage.setItem('MyToDoList',JSON.stringify(add))
  }, [add])

  return (
    <div>
      <h1>Add Your List Here</h1>

      <input
        type="text"
        onChange={(e) => setstate(e.target.value)}
        value={state}
      />

      <button
        onClick={() => {
          if(state === ''){
            alert('please fill the data')
          }else{
            setAdd((values) => [...values, state]);
          }
          
          setstate("");
        }} > submit </button>

      <ol>
        {add.map((item, index) => (
          <div key={index}>
            <li>{item}</li>
            <button onClick={() => {}} > edit </button>
            <button onClick={()=>deletefun(index)} > delete </button>
          </div>
        ))}
      </ol>

      <button onClick={() => setAdd([])}> Clear all </button>
    </div>
  );
};

export default Component;

