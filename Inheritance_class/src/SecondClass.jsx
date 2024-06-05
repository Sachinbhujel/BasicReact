import React from "react";
import First from "./FirstClass";
import './App.css'


class Second extends First{
    render(){
      return (
        <>
            {super.render()}
            <h2>Hello from Second Component</h2>
        </>
      )
    }
  }
  
  export default Second