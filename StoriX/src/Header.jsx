import React from 'react'
import './App.css'

function Header({onClick})
{
  return (
    <>
        <header>
            <h1>StoriX</h1>
            <div className='notify_icon' onClick={onClick}>
              <span class="material-symbols-outlined">
                notifications
              </span>
              <p>4</p>
            </div>
        </header>
    </>
  )
}
export default Header