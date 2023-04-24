import { useState } from "react";
import React from "react";
function Number(){

    const [counter, setCounter] =useState(0);
    const odd= ()=>{
        setCounter(counter+1);
        if(counter %2 == 0)
            document.getElementById("mess1").style.color="red"
        else 
            document.getElementById("mess1").style.color="green"
        
    }
    return <>
    <h1 id="mess1">{counter}</h1>
    <button onClick={odd}>Click me</button>
    </>
}
export default Number;