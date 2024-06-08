import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState("");
  let [data, setData] = useState([]);

  function handlevalue(e){
    setValue(e.target.value);
  }

  function addList(){
    if (value.trim()) {
      setData([...data, value]);
      setValue('');
    }
  }

  function removeTask(index){
    const newData = data.filter((_,i) => i !== index);
    setData(newData);
  }

  return (
    <>
      <h1>Todo List</h1>
      <input type='text' 
      onChange={handlevalue} 
      placeholder='Enter todo...' value={value}/>
      <button onClick={addList}>Add List</button>
      {data.map((todo, index) => (
        <li key={index}>{todo}
        <button onClick={() => removeTask(index)}>Remove</button></li>
      ))}
    </>
  )
}

export default App
