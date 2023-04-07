import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Booking() {

  const [ details , setDetails ] = useSearchParams()
  // console.log(details.get('age'))
  // console.warn(details.get('city')) 
  // console.log or warn dogh same work kartat but warn sathi warning sign yeun jate

  const age = details.get('age');
  const city = details.get('city');

  return (
    <div>
      <h1> Booking page </h1>
      <h3>your entered age is (on url) = {age} </h3>
      <h3>your entered city is (on url) = {city} </h3>
      <p>format to enter details is = localhost:3000/booking?age=30&city=pune  (question mark ? and first parameter then and & second parameter)</p>
      <hr />
      <h3> another way - for directly set details </h3>

      <button onClick={()=>{setDetails({age:40, city:'dhule'})}} >click and see magic in url</button>
      <br /><br />
      <input type="text" placeholder='enter your city' onChange={ (e) => { setDetails({city: e.target.value , age:25})}} />
    </div>
  )
}

export default Booking
