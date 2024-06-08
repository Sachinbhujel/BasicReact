import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Button} from 'react-bootstrap';

function App() {
  let hanldeAlertPrimary = () => {
    alert("Error");
  }
  let hanldeAlertWarning = () => {
    alert("Warning");
  }

  return (
    <div className='main'>
      <Button onClick={hanldeAlertPrimary} variant="primary">Primary</Button>
      <Button onClick={hanldeAlertWarning} variant="warning">Warning</Button>
      <Button onClick={() => alert("Success")} variant="success">Success</Button>
      <Button onClick={() => alert("Danger")} variant="danger">Danger</Button>
    </div>
  );
}

export default App;