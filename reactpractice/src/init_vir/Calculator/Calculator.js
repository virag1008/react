import React from "react";

export function add(a,b){
    return ( a + b );
}

export function sub(a,b){
    return ( a - b );
}

export function div(a,b){
    let value = ( a / b );
    let digit = value.toFixed(2)
    return digit;
}

export function mult(a,b){
    return ( a * b );
}


