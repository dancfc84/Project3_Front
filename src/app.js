import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Home"
// import About from "./components/About"
import Navbar from "./components/UI/Navbar"
import Newsfeed from "./components/Newsfeed"
import CreateJob from './components/Jobs/CreateJob'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsfeed" element={<Newsfeed />} />
        <Route path="/jobs/create" element={<CreateJob />} />
      </Routes>
    </Router>
  )
}

export default App