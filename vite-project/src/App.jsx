import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import './App.css'


function App(){
  let datas = [{name: "Sachin", email: "sachinxyz@yu.in", country: "Uk", address:[{Hn: "420 Block A", city: "Bath"}]},
    {name: "Ashu", email: "ashuxyz@yu.in", country: "USA", address:[{Hn: "340 B-Block", city: "New york"}]},
    {name: "Hem", email: "hemantxyz@yu.in", country: "Uk", address:[{Hn: "433 Block C", city: "Carlisle"}]}
  ]
  return (
    <div className='main'>
      <Table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Country</th>
          <th>Address</th>
        </tr>
        <tbody>
          {datas.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.country}</td>
              <td>
                {item.address.map((data, addrIndex) => (
                  <div key={addrIndex}>
                    {data.Hn}, {data.city}
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}


export default App




/*function App() {
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
}*/
