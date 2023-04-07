// import React,{useState} from "react";
// import "./App.css";

// const App=()=>{
//     const [FullName, setFullName]=useState({
//         FirstName:'',
//         LastName:'',
//     });

//     const InputEvent =(event)=>{
//         console.log(event.target.value);
//         console.log(event.target.name);

//         const value=event.target.value;
//         const name=event.target.name;

//         setFullName((preValue)=>{
//             if(name === 'FName'){
//                 return{
//                     FirstName:value,
//                     LastName:preValue.LastName,
//                 };
//             }else if(name === 'LName'){
//                 return{
//                     FirstName:preValue.FirstName,
//                     LastName:value,
//                 };
//             }
//         })
//     };
//     const OnSubmit=(event)=>{
//         event.preventDefault();
//         alert('Form Submitted')
//     };
//     return(
//         <>
//          <div>
//          <form onSubmit={OnSubmit}>
//          <div>
//             <h1>Hello {FullName.FirstName} {FullName.LastName}</h1>
//             <input type='text' placeholder="Enter Your Name" name="FName" onChange={InputEvent} value={FullName.FirstName}  />
//             <input type='text' placeholder="Enter Your LastName" name="LName" onChange={InputEvent} value={FullName.LastName} />
//             <button type="Submit">Submit Form 👍</button>
//             </div>
//             </form>
//         </div>
//         </>
//     )
// };

// export default App;






// //*******************add email & mobNo************************/


// import React from "react";
// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [FullName, updateName] = useState({
//     FName: "",
//     LName: "",
//     email:'',
//     mobNo:'',
//   });

//   function changeFun(event) {
//     const value = event.target.value;
//     const name = event.target.name;

//     console.log(value);
//     console.log(name);

//     updateName((previousValue) => {
//       if (name === "firstName") {
//         return {
//           FName: value,
//           LName: previousValue.LName,
//           email:previousValue.email,
//           mobNo:previousValue.mobNo,
//         };
//       } else if (name === "lastName") {
//         return {
//           FName: previousValue.FName,
//           LName: value,
//           email:previousValue.email,
//           mobNo:previousValue.mobNo,
//         }
//       }else if (name === 'email') {
//         return {
//           FName: previousValue.FName,
//           LName: previousValue.LName,
//           email:value,
//           mobNo:previousValue.mobNo,
//         }
//       }else if (name === "mobNo") {
//         return {
//           FName: previousValue.FName,
//           LName: previousValue.LName,
//           email:previousValue.email,
//           mobNo: value,
//         }
//       }
//     });
//   }

//   function submitFun(para) {
//     para.preventDefault();
//     alert("form submitted successfully...");
//   }

//   return (
//     <div>
//       <form onSubmit={submitFun}>
//         <h1>
//           {" "}
//           hello {FullName.FName} {FullName.LName}{" "}
//         </h1>
//         <p>{FullName.email}</p>
//         <p>{FullName.mobNo}</p>
//         <input
//           type="text"
//           onChange={changeFun}
//           name="firstName"
//           placeholder="Enter Your First Name"
//           value={FullName.FName}
//         />
//         <input
//           type="text"
//           onChange={changeFun}
//           name="lastName"
//           placeholder="Enter Your last Name"
//           value={FullName.LName}
//         />
//          <input
//           type="email"
//           onChange={changeFun}
//           name="email"
//           placeholder="Enter Your email"
//           value={FullName.email}
//         />
//          <input
//           type="number"
//           onChange={changeFun}
//           name="mobNo"
//           placeholder="Enter Your Mobile No."
//           value={FullName.mobNo}
//         />
//         <button> SUBMIT 👍 </button>
//       </form>
//     </div>
//   );
// }

// export default App;






// *******************************************************
// // same program with spread operator to reduce the code length.



import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [FullName, updateName] = useState({
    FName: "",
    LName: "",
    email:'',
    mobNo:'',
    edu  :'',
  });

  function changeFun(event) {
    const value = event.target.value;
    const name = event.target.name;

    console.log(value);
    console.log(name);

    updateName((previousValue) => {

      return{
        ...previousValue,
        [name]: value
      }
    });
  }

  function submitFun(para) {
    para.preventDefault();
    alert("form submitted successfully...");
  }

  return (
    <div>
      <form onSubmit={submitFun}>
        <h1>
          {" "}
          hello {FullName.FName} {FullName.LName}{" "}
        </h1>
        <p>{FullName.email}</p>
        <p>{FullName.mobNo}</p>
        <p>{FullName.edu}</p>
        <input
          type="text"
          onChange={changeFun}
          name="FName"
          placeholder="Enter Your First Name"
          value={FullName.FName}
        />
        <input
          type="text"
          onChange={changeFun}
          name="LName"
          placeholder="Enter Your last Name"
          value={FullName.LName}
        />
         <input
          type="email"
          onChange={changeFun}
          name="email"
          placeholder="Enter Your email"
          value={FullName.email}
        />
         <input
          type="number"
          onChange={changeFun}
          name="mobNo"
          placeholder="Enter Your Mobile No."
          value={FullName.mobNo}
        />
        <input
          type="text"
          onChange={changeFun}
          name="edu"
          placeholder="Enter Your education"
          value={FullName.edu}
        />
        <button> SUBMIT 👍 </button>
      </form>
    </div>
  );
}

export default App;
