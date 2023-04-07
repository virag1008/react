import React, { useState } from 'react'

function App() {
    const [timer,setTimer] = useState(0);

    const abc = setTimeout (() => {
        setTimer(timer+1)
      },1000) 

     const stopTimer = () => {
        clearTimeout(abc)
     }

     const cnte = () => {
        setTimeout (() => {
            setTimer(timer+1)
          },1000)
     }

  return (
    <div style={{textAlign:'center'}}>
       <h3>{timer} </h3> 
       <button onClick={stopTimer} onDoubleClick={cnte}  >stop timer</button>
       
    </div>
  )
}

export default App
