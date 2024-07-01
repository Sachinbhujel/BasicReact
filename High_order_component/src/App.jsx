import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <div className='main'>
        <HOC1 comp={Counter}/>
        <HOC2 comp={Counter}/>
      </div>
    </>
  )
}


function HOC1(props){
  return(
    <>
      <div className="hoc hoc1" style={{backgroundColor: 'red'}}>
        <props.comp/>
      </div>
    </>
  )
}

function HOC2(props){
  return(
    <>
      <div className="hoc hoc1" style={{backgroundColor: 'brown'}}>
        <props.comp/>
      </div>
    </>
  )
}

function Counter(){
  const [count, setCount] = useState(0)
  return(
    <>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </>
  )
}




export default App
