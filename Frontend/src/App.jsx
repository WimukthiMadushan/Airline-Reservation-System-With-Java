import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/Login/LoginPage'
import RegisterPage from "./Pages/RegisterPage/RegisterPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>

  )
}

export default App
