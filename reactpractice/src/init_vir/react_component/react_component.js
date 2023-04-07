import React from "react";
import './tryvir.css';
import Heading from "./Heading";
import {Para} from "./Para";
import { List } from "./List";

function React_component(){
    return (
        <>
        {/* <Heading></Heading> */}
        <Heading/>
        
      <h1 className="heading">function Component</h1>
      
      <p id="sumit" > style using 'tryvir.css' </p>
      <Para/>
      <List/>
      <List/>
      
      </>
        );
}


class Bike extends React.Component{
    render(){
        return (
            <h1> class Component</h1>
        )
    }
}
export {React_component, Bike} ;
  
