import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [count, setcount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setcount((count) => count + 1)}, 1000
//     )
//   });


  useEffect(() => {
    setTimeout(() => {
      setcount((count) => count + 1)}, 1000
    );
  },[]);  //  <= empty array for single render automatically.


//   useEffect(() => {
//     setTimeout(() => {
//       setcount((count) => count + 1)}, 1000
//     );
//   });


  return (
    <div>
      <p> I have render:- {count} times</p>
    </div>
  );
}

export default App;
