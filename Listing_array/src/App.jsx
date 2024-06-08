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