import React, { useState } from 'react'
import './App.css'


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      name: "Saturo",
      name2: "Naruto"
    }
  }

  handleNameChange(){
    this.setState({name: "Gojo Saturo"})
    this.setState({name2: "Uzumaki Naruto"})
  }

  render(){
    return(
      <div className='main'>
        <h2>{this.state.name}</h2>
        <h2>{this.state.name2}</h2>
        <button onClick={() => this.handleNameChange()}>Update Name</button>
      </div>
    )
  }
}

export default App
