import React, {useContext} from 'react'
import { countContext } from './App'

function ComponentA() {
  const count = useContext(countContext)
  return (
    <div>
    Count A :- {count.CountState}
      <button onClick={()=>count.CountDispatch('increment')} > 
        Increment 
      </button>

      <button onClick={()=>count.CountDispatch('decrement')} > 
        Decrement 
      </button>

      <button onClick={()=>count.CountDispatch('reset')} > 
        Reset
      </button>
    </div>
  )
}

export default ComponentA
