import { useState, createContext } from 'react';
import ComponentA from './ComponentA';
import './App.css';

const Data = createContext(); 

function App() {
  let name = "Saturo";

  return (
    <Data.Provider value={name}>
      <div className="main">
        <h3 id="main_title">Main Body</h3>
        <p>Hello {name}</p>
        <ComponentA />
      </div>
    </Data.Provider>
  );
}

export default App;
export { Data }; 