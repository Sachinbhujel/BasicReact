import './App.css'
import { useRef } from 'react'

function App() {
  let ref = useRef();
  let displayRef = useRef();

  function handleRefChange(){
    displayRef.current.textContent  = ref.current.value;
    if(displayRef.current.textContent == ""){
      displayRef.current.textContent = "Display Here";
    }
    ref.current.focus();
  }

  return (
    <div className='main'>
      <h3 ref={displayRef}>Display Here</h3>
      <input type="text" ref={ref} placeholder='Enter Here'/>
      <button onClick={handleRefChange}>Click</button>
    </div>
  )
}

export default App