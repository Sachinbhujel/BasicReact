import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function btnClick(){
    setCount(count + 1)
  }

  useEffect(() => {
    alert("Button Clicked");
  }, [])

  return (
    <>
      <div className='main'>
        <h2>Button clicked {count} times</h2>
        <button onClick={btnClick}>Click</button>
      </div>
    </>
  )
}

export default App
