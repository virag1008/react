import React from "react";
import { useState } from "react";
import './App.css';

function App(){
       const initcolor = 'purple';
       let name = 'click me';
       const [chngecolor, updatedFun ] = useState(initcolor);
       const [newText, updatedText ] = useState(name);

    function hitme(){
        let color1 = 'yellow';
        let oouch = 'oouch 😧'
        updatedFun(color1);
        updatedText(oouch);
    }

    function dblClick(){
        let color1 = 'pink';
        let oouch = 'excellant 😎'
        updatedFun(color1);
        updatedText(oouch);
    }
    

    return(
        <>
        <div style={{backgroundColor: chngecolor }}>
        <button onClick={hitme} onDoubleClick = {dblClick}> {newText} </button>
        </div>
        </>
    )
}
 export default App;