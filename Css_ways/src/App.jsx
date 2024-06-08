import React from 'react'
import './App.css'
import Common from './Common.module.css'

function App(){
    return(
        <div className='main'>
            <h2 style={{color: "white", background: "black", padding: "12px", textAlign: "center", fontSize: "24px", fontFamily: "sans-serif"}}>Hello Saturo</h2>
            <h2 className='title'>Hello Muichiro</h2>
            <h2 className={Common.deadly_title}>Hello Sukuna</h2>
        </div>
    )
}

export default App