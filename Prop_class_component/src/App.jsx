import './App.css'
import Student from './Student'
import React from 'react'


class App extends React.Component{
  constructor(){
    super();
    this.state ={
      names: ["Saturo", "Naruto", "Sasuke"]
    }
  }

  updatesNames= () => {
    this.setState({
      names: ["Gojo", "Uzumaki", "Uchiha"]
    });
  }
  render(){
    return (
      <div className='main'>
        {this.state.names.map((name, index) => (
          <Student key={index} name={name}/>
        ))}
        <button onClick={this.updatesNames}>Update Name</button>
      </div>
    )
  }
}

export default App
