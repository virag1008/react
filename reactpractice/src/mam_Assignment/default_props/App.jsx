import React from 'react'

function App1008(prop) {
  return (
    <div>
      <h2>hello {prop.name}</h2>
      <p> {`'${prop.name}' having id is '${prop.id}' and his bday Month is '${prop.bdayMonth}'`} </p>
    </div>
  )
}

App1008.defaultProps = {
    name:'virag',
    id:'105',
    bdayMonth:'Jan'
  }

export default App1008;
