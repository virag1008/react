import React from 'react';
import {add,sub,div,mult} from './Calculator'

function Calc() {
  return (
    <>
      <ul>
        <li> sum of two no is {add(40, 4)} </li>
        <li> sub of two no is {sub(40, 4)} </li>
        <li> div of two no is {div(10, 3)} </li>
        <li> mult of two no is {mult(40, 4)} </li>
      </ul>
    </>
  );
}
export default Calc;