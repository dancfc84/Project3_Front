import React from 'react'
// import PokemonIndex from './components/PokemonIndex'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Home"
// import About from "./components/About"
import Navbar from "./components/Navbar"
import Newsfeed from "./components/Newsfeed"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsfeed" element={<Newsfeed />} />
      </Routes>
    </Router>
  )
}

export default App
