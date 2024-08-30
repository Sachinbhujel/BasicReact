import React, {Component } from 'react'
import Childget from './Childget'

class Props extends Component{


  constructor(props) {
    super(props)
  
    this.state = {
       name: "Hello World"
    }
  }
  
  handleClick(childName){
    alert(`Hello World from ${childName}`);
  }

  render(){
    return (
     <>
        <h1>{this.state.name}</h1>
        <Childget getHandler={this.handleClick}/>
      </>
    )
  }
}

export default Props