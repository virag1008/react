import React, { useRef, useState, useEffect  } from 'react'

function App() {
    const [value, setValue] = useState('')
    const inputTarget = useRef()
    useEffect( () => {
        inputTarget.current = value
    },[value] )

  return (
    <div  style={{textAlign:'center'}}>
    
        <input type="text" ref={inputTarget} onChange={(e) => setValue(e.target.value)}/>

        <h2>Current Value: {value}</h2>
        <h2>Previous Value: {inputTarget.current} </h2>
    </div>
  )
}

export default App
