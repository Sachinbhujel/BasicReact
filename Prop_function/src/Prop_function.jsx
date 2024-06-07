import './App.css'

function Prop(props) {
  return (
    <div className='main'>
        <h2>Prop Function Component</h2>
        <button onClick={props.value}>Alert</button>
    </div>
  )
}

export default Prop
