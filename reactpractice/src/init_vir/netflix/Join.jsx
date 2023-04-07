import React from "react";
import Cards from "./Cards";
import { Sdata } from "./Sdata";

function Join(){
    return(
        <>
            <h1> LIST OF TOP 5 NETFLIX SERIES IN 2022 </h1>
    {/* <Cards
      src={Sdata[0].imgscr}
      sname = {Sdata[0].sname}
      link={Sdata[0].links}
    />

    <Cards
      src={Sdata[1].imgscr}
      sname = {Sdata[1].sname}
      link={Sdata[1].links}
    />

    <Cards
    // varchya method ne sudhha deu shakto..
      src="https://occ-0-3241-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcTLTGGPvuThxON6yqSGPp5N0DbBe106rQ1JtLe7l-NOLg_1ev7Xyz9Tjj_mmVqV8krxkpPIwYraZzvRa1TerMWbBUnJfWp9z78.jpg?r=1fc"
      sname = 'Friends'
      link='https://www.netflix.com/in/title/70153404'
    />

    <Cards
      src={Sdata[3].imgscr}
      sname = {Sdata[3].sname}
      link={Sdata[3].links}
    />

    <Cards
      src={Sdata[4].imgscr}
      sname = {Sdata[4].sname}
      link={Sdata[4].links}
    /> */}

    {/* using map method */}

    { Sdata.map( value => {
     return <Cards
       
      //  ethe hi "key" lihne is imp otherwise it will show an warning ...'key' is casesensative ... and the value of key sholf=d be unique..
      
      key = {value.id}  
      src={value.imgscr}
      sname = {value.sname}
      link={value.links}
    />
    } ) }
    </>
    )
}

export default Join;