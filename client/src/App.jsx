import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import SignIn from './Pages/LoginPage'
import CreateAccount from './Pages/SignupPage'
import ContactSection from './Pages/Contact'
import AboutSection from './Pages/About'
import axios from 'axios'
import Dashboard from './Components/Dashboard'
import ErrorPage from './Pages/ErrorPage'
import NewLeague from './Pages/NewLeague'
import Results from './Pages/Results'
import Scores from './Pages/Scores'
import Stats from './Pages/Stats'
import Goal from './Pages/Goal'
import Assists from './Pages/Assists'

// axios.defaults.baseURL = 'http://localhost:3000'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/contact' element={<ContactSection />} />
          <Route path='/about' element={<AboutSection />} />
          <Route path='/newleague' element={<NewLeague />} />
          <Route path='/results' element={<Results />} />
          <Route path='/scores' element={<Scores />} />
          <Route path='/stats' element={<Stats />} />
          <Route path='/goals' element={<Goal />} />
          <Route path='/assists' element={<Assists />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
