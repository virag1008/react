import React, { useEffect, useState } from "react";
import './Style.css'

const UseEffect = () => {
    const [state,setstate]=useState(0);

    useEffect( () => {document.title = `count ${state}`} )

  return (
      <div className="container">
      <p> {state} </p>
      <div className="button2">
        <button className="btn" onClick={()=>setstate(state + 1)}> Increment </button>
      </div>
    </div>
  )
}

export default UseEffect
