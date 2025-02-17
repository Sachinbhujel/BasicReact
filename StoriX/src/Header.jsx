import React from 'react'
import './App.css'

function Header()
{
  return (
    <>
        <header>
            <h1>StoriX</h1>
            <div className='notify_icon'>
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