import React from "react";
import {BrowserRouter, Route, Routes , Navigate} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Booking from "./Booking";
import Menu from "./Menu";
import Error404 from "./Error404";
import Users from './Users'
import Projects from "./Projects";
import Project1 from "./ProjectComponent/Project1";
import Project2 from "./ProjectComponent/Project2";
import Project3 from "./ProjectComponent/Project3";
import LoginPage from "./LoginPage";
import Protected from "./Protected";


function App() {

  function Name(){
    return <h1> my name is virag </h1>
  }

  return (
    <>
    
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route  path="/" element={<Protected Component = {About} />} />
      <Route  path="/login" element={<LoginPage/>} />
      <Route  path="/contact" element={<Protected Component = {Contact}/>} />
      <Route  path="/name" element={<Name/>} />
      <Route path="/booking" element ={<Booking/>} />
      <Route path='/user/:name' element={<Users/>} />
      <Route path="/projects/" element={<Projects/>} >
          <Route path="project1" element ={<Project1/>}/>
          <Route path="project2" element ={<Project2/>}/>
          <Route path="project3" element ={<Project3/>}/>
      </Route>

      <Route path="/*" element ={<Navigate to='/'/>} />
       {/* jr chukicha path dila tr parat About page var redirect honar*/}

      {/* <Route path="/*" element ={<Error404/>} /> */}
      {/* jr chukicha path dila tr error component render zala pahije so path madhe star use kela */}

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
