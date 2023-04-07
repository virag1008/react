import React, {useState, useRef, useEffect } from 'react'

function App() {
    const [ count, setCount] = useState('')
    const measure = useRef(0)

    useEffect( () => {
        measure.current = measure.current + 1;
    } )

  return (
    <div style={{textAlign:'center'}}>
       <input 
       type="text" 
       onChange={(e) =>setCount(e.target.value)} 
       value={count} 
       autoFocus />
       <h2>render count : {measure.current}</h2>
    </div>
  )
}

export default App

// **************  SAME OUTPUT WITH USESTATE ONLY ****************

// import React, { useState } from 'react'

// function App() {
//     const [count, setCount] = useState(0)

//   return (
//     <div>
//       <input type="text" onChange={() =>setCount(count + 1)}/>
//       <h2> Render Count: {count} </h2>
//     </div>
//   )
// }

// export default App