import './App.css'
import { useState } from 'react'

function App() {
  let [value, SetValue] = useState("");
  function changeValue(event){
      SetValue(event.target.value)
  }

  return (
    <div className='main'>
      <input type="text" onChange={changeValue} placeholder='Enter here.....'/>
      <p>Paragrahph: <span id="para_content">{value}</span></p>
    </div>
  )
}

export default App
