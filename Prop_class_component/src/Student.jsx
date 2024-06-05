import React from "react";
import './App.css'

class Student extends React.Component{
    render(){
        return(
            <>
                <h2><span>Student Name:</span> {this.props.name}</h2>
            </>
        )
    }
}

export default Student