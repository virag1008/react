import React, { useState } from 'react'

function App() {

    const [current, setStyle] = useState(stylObj1);

  return (
    <div>
      <div style={current}>
          <button onClick={() => { current === stylObj1 ? setStyle(stylObj2) : setStyle(stylObj1)   }} >click</button>
      </div>
    </div>
  )
}

const stylObj1 = {
    width:'200px',
    height:'200px',
    backgroundColor:'lightgreen'
}

const stylObj2 = {
    width:'400px',
    height:'400px',
    backgroundColor:'pink'
}

export default App;
