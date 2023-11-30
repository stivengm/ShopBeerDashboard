import { useState } from 'react'
import { Login } from './components/user/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dashboard />
      <Login />
    </>
  )
}

export default App
