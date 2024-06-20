import { useState } from "react";
import './App.css'

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="main">
      <h2>Counters that update together</h2>
      <div className="buttons">
        <MyButton count={count} onClick={handleClick}/>
        <MyButton count={count} onClick={handleClick}/>
        <MyButton count={count} onClick={handleClick}/>
      </div>
    </div>
  );
}


function MyButton({count, onClick}) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}