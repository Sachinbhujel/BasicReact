import './App.css'
import Prop from './Prop_function'

function App() {
  function handlePropAlert(){
    alert("I am a prop alert");
  }

  return (
    <>
      <Prop value={handlePropAlert}/>
    </>
  )
}

export default App
