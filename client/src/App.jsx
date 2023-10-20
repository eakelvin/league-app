import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import SignIn from './Pages/LoginPage'
import CreateAccount from './Pages/SignupPage'
import ContactSection from './Pages/Contact'
import AboutSection from './Pages/About'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/signup' element={<CreateAccount />} />
          <Route path='/contact' element={<ContactSection />} />
          <Route path='/about' element={<AboutSection />} />
        </Routes>
      </Router>
    
    </>
  )
}

export default App
