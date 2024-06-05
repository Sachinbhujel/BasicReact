import './App.css'

function App() {

  return (
    <div className='main'>
      <Composition>
        <h1>I am a Composition Component</h1>
      </Composition>
    </div>
  )
}


function Composition(props){
  return (
    <>
      {props.children}
    </>
  )
}

export default App
