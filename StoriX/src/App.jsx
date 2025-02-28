import React, {useState} from 'react'
import './App.css'
import Header from './Header'
import Bottom from './Bottom'
import Notifications from './Notifications'

function App()
{
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <>
      {showNotifications ? (
        <Notifications onClose={() => setShowNotifications(false)} />
      ) : (
        <div className="header">
          <Header onClick={() => setShowNotifications(true)} />
          <Bottom />
        </div>
      )}
    </>
  )
}
export default App