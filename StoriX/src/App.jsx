import React from 'react'
import './App.css'
import Header from './Header'
import Bottom from './Bottom'
import StoryBar from './StoryBar'

function App()
{
  return (
    <>
      <div className='header'>
        <Header />
        <StoryBar />
        <Bottom />
      </div>
    </>
  )
}
export default App