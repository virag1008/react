import React, { useState }  from 'react'
import { useEffect } from 'react';

function App() {

    const [count, setcount] = useState(0);
    const [double, calc] = useState(0);


    useEffect( () => { calc(count*2) } )

    const clickFun = () => {
        setcount(count + 1)
    }

  return (
    <div>
      <p>count : {count} </p>
      <button onClick={clickFun}  > + </button>
      <p>calculation : {double} </p>
    </div>
  )
}

export default App






//  ********************WITHOUT USING USEEFFECT*******************



// import React, { useState } from 'react'

// function App() { 
//     const [count, setcount] = useState(0)

//     const clickFun = () => {
//         setcount(count+1)
//     }

//   return (
//     <div>
//        <p> count : {count} </p>
//        <button onClick={clickFun} > + </button>
//        <p>Double Count Calculation : {count * 2} </p>
//     </div>
//   )
// }

// export default App
