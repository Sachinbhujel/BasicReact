import { useState } from 'react'
import './App.css'

function App() {
  let [car, setCar] = useState({"year": 2018, "name": "Ford", "model": "Mustang"});

  function handleYearChange(event){
    setCar(c => ({...c, year: event.target.value}))
    if (event.target.value.length > 4) {
      alert(
          "year shouldn't exceed 4 characters"
      );
      event.target.value = "";
  }
  }

  function handleNameChange(event){
    setCar(c => ({...c, name: event.target.value}))
  }

  function handleModelChange(event){
    setCar(c => ({...c, model: event.target.value}))
  }

  return (
    <div className='main_div'>
      <div className='main'>
        <p>My favourite car name is <b>{car.name}.</b> And the model name is <b>{car.model}.</b> Which is manufactured in <b>{car.year}</b>.
        </p>
      </div>
      <div class="input_div">
        <input type="number" value={car.year} onChange={handleYearChange} placeholder='Year'/>
        <input type="text" value={car.name} onChange={handleNameChange} placeholder='Name'/>
        <input type="text" value={car.model} onChange={handleModelChange} placeholder='Model'/>
      </div>
    </div>
  )
}

export default App
