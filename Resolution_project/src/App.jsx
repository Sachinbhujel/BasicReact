import { useState } from 'react'
import './App.css'

function App() {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)


  window.addEventListener("resize", handleResolution);

  function handleResolution(){
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  return (
    <>
      <div class="main">
        <p><b>Width:</b> {width} px</p>
        <p><b>Height:</b> {height} px</p>
      </div>
    </>
  )
}

export default App
