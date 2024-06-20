import './App.css'
import React from 'react'
import { useRef } from 'react'
import User from './ForwardRef'

function App() {
  let inputRef = useRef(null);

  function handleClick(){
    inputRef.current.value = "Done Forward Ref";
    inputRef.current.focus();
  }

  return (
    <>
      <div className='main'>
        <h2>Forward Ref</h2>
        <User ref={inputRef}/>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </>
  )
}

export default App