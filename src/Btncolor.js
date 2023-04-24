import { useState } from "react";
import React from "react";
function BtnColor(){
   
    const [counter,setCounter]=useState("")

    const colorred=()=>{
        setCounter("red")
        // document.getElementById("mess").style.color="Red"
        }
        const coloryellow=()=>{
            setCounter("yellow")
        // document.getElementById("mess").style.color="Yellow"
        }
        const colorblue=()=>{
            setCounter("black")
            // document.getElementById("mess").style.color="Blue"
        }
        const colorgreen=()=>{
            setCounter("green")
            // document.getElementById("mess").style.color="Green"
        }
        const colororange=()=>{
            setCounter("orange")
            // document.getElementById("mess").style.color="Orange"
        }

        return<>
    <h1 id="mess" style={{color:[counter]}} >Your color is {counter}</h1>
    <button  onClick={coloryellow} >Yellow</button>
    <button onClick={colorred}>Red</button>
    <button onClick={colorgreen} >Green</button>
    <button onClick={colorblue}>Black</button>
    <button onClick={colororange}>orange</button>
    </>
}
export default BtnColor;