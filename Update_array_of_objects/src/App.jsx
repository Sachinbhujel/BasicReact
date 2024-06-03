import './App.css'
import { useState } from 'react'

function App() {
  let [car, setCar] = useState([]);
  let [carYear, setYear] = useState(new Date().getFullYear())
  let [carName, setName] = useState("");
  let [carModel, setModel] = useState("");


  function handleAddChange(){
    if (carName === "" || carModel === "" || isNaN(carYear)) {
      alert("Please enter valid car details.");
      return;
    }

    let newCar = {year: carYear, name: carName, model: carModel};
    setCar(c => [...c, newCar])

    setYear(new Date().getFullYear());
    setName("");
    setModel("");
  }

  function handleYearChange(event){
    setYear(event.target.value)
  }


  function handleNameChange(event){
    setName(event.target.value);
  }


  function handleModelChange(event){
    setModel(event.target.value);
  }


  return (
    <>
      <div className='main'>
        <div className='main_top' id="main_top">
          <ul>
            <li>2018 Mustang Ford</li>
            {car.map((cars, index) => (<li key={index}>
              {cars.year} {cars.name} {cars.model}
            </li>))}
          </ul>
        </div>
        <div className='main_bottom'>
          <input type="text" value={carYear} onChange={handleYearChange}/>
          <input type="text" value={carName} onChange={handleNameChange} placeholder='Enter Car Name'/>
          <input type="text" value={carModel} onChange={handleModelChange} placeholder='Enter Car Model'/>
          <button onClick={handleAddChange}>Add Car</button>
        </div>
      </div>
    </>
  )
}

export default App
