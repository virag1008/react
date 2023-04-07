import React, { useEffect, useState } from 'react'

function App() {

    const [num, setNum] = useState(0);
    const [newNum, newSetNum] = useState(0);

    // useEffect( () => { alert('you click on button') } )
    // useEffect( () => { alert('you click on button') },[] )
    useEffect( () => { alert('you click on button') },[newNum] )


  return (
    <div>
      <button style={{fontSize:'25px',margin:'30px'}} onClick={() => setNum(num+1) }> click me {num} </button>
      <br />
      <button style={{fontSize:'25px',margin:'30px'}} onClick={() => newSetNum(newNum+1) }> click me {newNum}</button>
    </div>
  )
}

export default App
