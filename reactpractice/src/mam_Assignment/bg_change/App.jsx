import React, { useState } from 'react'

function App() {

    let color = "pink";
    let newcolor = 'red';
    const [ current, update ] = useState(color);

    const clickEvent = () => {
        
        update(newcolor)
        current === 'red' ? update(color) : update(newcolor);
    }
  return (
    <div style={{backgroundColor: current, padding:'15px'}}>
       <button onClick={clickEvent}> click </button>
    </div>
  )
}

export default App
