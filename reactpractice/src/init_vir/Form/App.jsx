import React, { useState } from 'react'
import './App.css'

function App() {
    const [current, updatedFun] = useState();
    const [fullName, setFullName ] = useState();

    function inputEvent(eve){
        updatedFun (eve.target.value);
    }

    function submitFun(){
        setFullName(current)
    }

  return (
    <div>
      <h1> Hello {fullName} </h1>
      <input type="text" placeholder='Enter Your Name' onChange={inputEvent} value={current} />
      <button onClick={submitFun}> SUBMIT 👍 </button>
    </div>
  )
}
export default App;