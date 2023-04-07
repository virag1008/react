import React, { useState, useMemo } from 'react'

function App() {
   const [count1,setCount1] = useState(0) 
   const [count2,setCount2] = useState(100) 

   const incrementCount1 = () => {
    setCount1(count1 + 1)
   }
   const incrementCount2 = () => {
    setCount2(count2 + 1)
   }
   const isEven = useMemo(() => {
    let i = 0;
    // so much time needed to run the function...to show how it affect all code performance...thats why this while loop is taken
    while (i < 1000000000) i++
    return count1 % 2 === 0
},[count1])

  return (
    <div style={{textAlign:'center'}}>
      <button onClick={incrementCount1}>count:- {count1} </button>
      <span> { isEven ? 'Even' : 'odd'  } </span>
      <br />
      <button onClick={incrementCount2}>count:- {count2} </button>
    </div>
  )
}

export default App
