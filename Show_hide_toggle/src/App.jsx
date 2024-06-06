import { useState } from 'react'
import './App.css'

function App() {
  let [value, setValue] = useState("Saturo Gojo")
  let [status, setStatus] = useState(true);

  return (
    <div className='main'>
      {status? <h2>{value}</h2> :null}
      <div className='buttons'>
        <button onClick={()=> setStatus(false)} className='black'>Hide</button>
        <button onClick={()=> setStatus(true)} className='green'>Show</button>
      </div>
      <button onClick={()=> setStatus(!status)} className='toggleBtn'>Toggle</button>
    </div>
  )
}

export default App
