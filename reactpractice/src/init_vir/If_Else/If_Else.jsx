import React from "react";
import IfLove from "./IfLove";
import ElseHate from "./ElseHate";

const favSeries = "netflix";

const  FirstWay = () => {
    if(favSeries == 'netflix'){
        return <IfLove/>
    }else{
        return <ElseHate/>
    }
}

const SecWay = () => favSeries == 'netflix00' ? <IfLove/> :  <ElseHate/>

const If_Else = () => (
    <>
    <FirstWay/>
    <SecWay/>
    </>
)
export default If_Else;