import React from 'react'
import Header from '../Components/Navbar'
import Footer from '../Components/Footer'
import Body from '../Components/Body'
import { useAuth0 } from '@auth0/auth0-react'
import Dashboard from '../Components/Dashboard'

const Home = () => {
  const { isAuthenticated } = useAuth0()

  return (
    <div>
      <Header />
      {isAuthenticated ? (<Dashboard />) : (<Body />)}
      <Footer />
    </div>
  )
}

export default Home
