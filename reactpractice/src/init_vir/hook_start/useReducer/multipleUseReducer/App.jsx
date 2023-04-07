import React, {useReducer} from 'react'

const initialValue = 0;

const reducer = (currentState, action) => {
    switch (action) {
        case 'increment':
            return currentState + 1
        case 'decrement':
            return currentState - 1
        case 'reset':
            return initialValue
        default:
            return currentState;
    }
}

function App() {

   const[count, dispatch] = useReducer(reducer,initialValue)
   const[countTwo, dispatchTwo] = useReducer(reducer,initialValue)

  return (
    <div>
       <h3> count : {count} </h3>
       <button onClick={() => {dispatch('increment')}} > Increment </button>
       <button onClick={() => {dispatch('decrement')}} > Decrement </button>
       <button onClick={() => {dispatch('reset')}} > reset </button>
       <hr />
       <h3> count : {countTwo} </h3>
       <button onClick={() => {dispatchTwo('increment')}} > Increment </button>
       <button onClick={() => {dispatchTwo('decrement')}} > Decrement </button>
       <button onClick={() => {dispatchTwo('reset')}} > reset </button>
    </div>
  )
}

export default App;
