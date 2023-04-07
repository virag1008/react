
import React, { useState } from 'react'

function App() {

    const [current, updated] = useState('');
    const [value, setvalue] = useState('');

    function inputfun(val){
        updated(val.target.value);
    }

    function submitFun(event){
        event.preventDefault();
        setvalue(current)

        let empty = {};
    

        for (let index = 0; index < value.length; index++) {
            
            let count = 0;

            for(let i= 0; i < value.length; i++ ){
                if(value[index] == value[i]){
                    count++
                }
                empty[value[index]] = count;
            }
            console.log(empty) ;
            
        }
    }


  return (
    <div>
    <form onSubmit={submitFun}>
      <input type="text" onChange={inputfun}/>

      <h3>{ `given input is => ${current}`}  </h3>

      <input type="submit"/>
      </form>
    </div>
  )
}

export default App
