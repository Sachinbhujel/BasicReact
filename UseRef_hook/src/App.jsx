import React from 'react'
import { useRef } from 'react'
import './App.css'

function App() {
  let inputRef = useRef(null);

  function handleClick(){
    inputRef.current.value = "Done useRef!!";
    inputRef.current.focus();
  }

  return (
    <>
      <div className='main'>
        <div class="input_div">
          <input type="text" ref={inputRef} placeholder='Enter Something....'/>
          <button onClick={handleClick}>Click Me</button>
        </div>
      </div>
    </>
  )
}

export default App
