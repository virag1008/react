import React, { useReducer, useState } from "react";
import './Style.css'

const initialstate = 0;

const reducer = (state, action) =>{
    switch (action.type) {
        case 'incr':
          return  state + 1
        case 'decr':
          return (state === 0  ? state - 1 : state=0)
        default:
            return state;
    }
}

const UseReducer = () => {
    // const [state,setstate]=useState(0);
    
    const [state,dispatch] = useReducer(reducer,initialstate)

  return (
    <div className="container">
      <p> {state} </p>
      <div className="button2">
        <button className="btn" onClick={()=> dispatch({type:'incr'}) }> Increment </button>
        <button className="btn" onClick={()=> dispatch({type:'decr'}) }> Decrement </button>
      </div>
    </div>
  )
}

export default UseReducer
