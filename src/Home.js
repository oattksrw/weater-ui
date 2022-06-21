import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Content from './components/Content'
import './Home.css'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Content />
        <Footer />
    </div>
  )
}

export default Home