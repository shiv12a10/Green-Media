import { useState } from 'react'
import LoginPage from './components/Login/LoginPage'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userRole, setUserRole] = useState('')

  const handleLogin = (role) => {
    setIsLoggedIn(true)
    setUserRole(role)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserRole('')
  }

  return (
    <div className="App">
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <Dashboard userRole={userRole} onLogout={handleLogout} />
      )}
    </div>
  )
}

export default App
