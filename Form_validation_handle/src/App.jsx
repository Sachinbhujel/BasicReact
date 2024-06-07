import { useState } from 'react';
import './App.css'

function App() {
  let [nameErr, setNameErr] = useState(false);
  let [passwordErr, setPasswordErr] = useState(false);

  function handleSubmit(e){
    e.preventDefault();
  }

  function handleUserName(e){
    let userNameLength = e.target.value;
    if(userNameLength.length<=3){
      setNameErr(true);
    } else{
      setNameErr(false);
    }
  }

  function handleUserPassword(e){
    let userPasswordLength = e.target.value;
    if(userPasswordLength.length<=3){
      setPasswordErr(true);
    } else{
      setPasswordErr(false);
    }
  }

  return (
    <div className='main'>
      <h2>Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter name' onChange={handleUserName}/> 
        {nameErr? <span>*Invalid user name</span>:null}
        <input type='password' placeholder='Enter password' onChange={handleUserPassword}/>
        {passwordErr? <span>*Invalid user password</span>:null}
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
