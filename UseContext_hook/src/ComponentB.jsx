import React, { useContext } from 'react';
import { Data } from './App';

function ComponentB() {
  const name  = useContext(Data);

  return (
    <div className='componentB'>
      <h3>Component B</h3>
      <p>Bye {name}</p>
    </div>
  );
}

export default ComponentB;