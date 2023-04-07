import React from 'react'
import { useParams } from 'react-router-dom'

function Users() {

    const {name} = useParams();
    
  return (
    <div>
       <h1> This is {name}'s Page</h1>
    </div>
  )
}

export default Users
