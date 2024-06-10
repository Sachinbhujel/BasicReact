import './App.css'
import Test from './Test'

function App() {
  let name = "Saturo"
  function handleAlert(greetings){
    alert(greetings)
  }

  return (
    <>
      <Test data={name} showAlert={handleAlert}/>
    </>
  )
}

export default App
