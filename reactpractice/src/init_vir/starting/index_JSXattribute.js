import React from "react";
import ReactDOM from "react-dom/client";

const name = 'virag';
let mob = 123;
let imglink1 = "https://picsum.photos/200/300";
let imglink2 = "https://picsum.photos/250/300";
let imglink3 = "https://picsum.photos/450/300";
let reflink = 'https://picsum.photos/'

const root = ( ReactDOM.createRoot(document.getElementById('root')) );
root.render( <React.Fragment>
   <p contentEditable = 'true' >{` my name is ${name} and my mob no is ${mob}`}</p>
   <h1>123</h1>
   <img src={imglink1} alt="random images"> </img>
   <img src={imglink2} alt="random images" />

   <a href={reflink}>
   <img src={imglink3} alt="random images" />
   </a>
</React.Fragment> )