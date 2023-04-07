import React, {useContext} from 'react'
import { countContext } from './App'

function ComponentF() {
  const count = useContext(countContext)
  return (
    <div>
    Count F :- {count.CountState}
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

export default ComponentF
