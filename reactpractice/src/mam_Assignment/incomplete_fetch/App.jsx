import React, { useState } from 'react'

function App() {

    const [current,update]= useState();

    function clickFun (){

    
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then(apiGet => apiGet.map( (user)=> console.log(user.name)))
    }

  return (
    <div>
      <h2>fetching the data in useEffect</h2>
      <p>{current}</p>
      <button onClick={clickFun} >click</button>
    </div>
  )
}

export default App
