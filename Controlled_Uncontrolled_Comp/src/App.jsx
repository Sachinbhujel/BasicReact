import React, {useState, useRef} from 'react'
import './App.css'

function App() {
  let [val, setVal] = useState("Default value");

  return (
    <>
      <div className="main">
        <div className="child_div1">
          <h2>Controlled Component</h2>
          <input type='text' value={val} onChange={(e) => setVal(e.target.value)}/>
        </div>
        <div className="child_div2">
          <App2/>  
        </div>
      </div>
    </>
  )
}


function App2(){
  let inputRef = useRef(null);

  function handleSubmit(e){
    e.preventDefault();
  }

  function handleClick(){
    alert("Input Value: " + inputRef.current.value);
    let inputField2 = document.getElementById("inputField2").value;
    alert("Input Value2: " + inputField2);
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <h2>Uncontrolled Component</h2>
        <div className='input_divs'>
          <input type="text" ref={inputRef}/>
          <input type="text" id="inputField2"/>
          <button onClick={handleClick}>Click Me</button>
        </div>
      </form>
    </>
  )
}

export default App
