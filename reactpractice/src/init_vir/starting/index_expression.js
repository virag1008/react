import React from 'react';
import ReactDOM from 'react-dom/client';


// EXPRESSION
const root = ReactDOM.createRoot(document.getElementById('root'));


const fname = 'virag';
let mob_no = 8793560840;

root.render(  <>
  <h2> Hello guys my name is {fname} </h2>
  <p> my mob no is - {mob_no} </p>
  <p> addition of 2 number using expression = { 10 + 15 }</p>
  <h4> todays date is { new Date().getDate() } </h4>
  </>
)

// it only support expression not statement eg. if else loops etc.
