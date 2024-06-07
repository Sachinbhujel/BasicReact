import { useState } from 'react'
import './App.css'

function App() {
  let [name, setName] = useState("");
  let [interest, setInterest] = useState("")
  let [tnc, setTnc] = useState(false);

  function getData(e){
    e.preventDefault();
    alert(`Name: ${name}\nInterest: ${interest}\nT&C Accepted: ${tnc}`);
  }
  return (
    <div className='main'>
      <h2>Form Handle</h2>
      <form onSubmit={getData}>
        <input type="text" placeholder='Enter your name' onChange={(e) => setName(e.target.value)} className='input'/><br/>
        <select onChange={(e) => setInterest(e.target.value)}>
          <option>Select an option</option>
          <option>Tech Industry</option>
          <option>AI/ML Industry</option>
          <option>Software Engineer</option>
          <option>Blockchain Developer</option>
        </select><br/>
        <label>
          <input type='checkbox' onChange={(e) => setTnc(e.target.checked)}/>
          <span>Accept Terms & Conditions</span>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
