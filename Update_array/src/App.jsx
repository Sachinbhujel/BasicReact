import { useState } from 'react'
import './App.css'

function App() {
  let [value, setValue] = useState(["Mango", "Apple", "Coconut", "Papaya"]);

  function handleFruitName(){
    let foodInput = document.getElementById("foodInput").value;
    setValue(v => [...value, foodInput])
    document.getElementById("foodInput").value = "";
  }

  return (
    <div className='main'>
    <div className="fruit_div">
    <input type="text" placeholder='Fruit Name' id="foodInput" onChange={(e) => setInputValue(e.target.value)}/>
      <button className='btn' onClick={handleFruitName}>Add</button>
      <ul>
        {value.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default App