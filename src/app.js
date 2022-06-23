import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components//Home"
// import About from "./components/About"
import Navbar from "./components/UI/Navbar"
import Newsfeed from "./components/Newsfeed/Newsfeed"
import CreateJob from './components/Jobs/CreateJob'
import JobIndex from './components/Jobs/JobIndex'
import ShowJob from './components/Jobs/ShowJob'
import EditJob from './components/Jobs/EditJob'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsfeed" element={<Newsfeed />} />
        <Route path="/jobs/index" element={<JobIndex />} />
        <Route path="/jobs/create" element={<CreateJob />} />
        <Route path="/jobs/:jobId" element={<ShowJob />} />
        <Route path="/jobs/edit/:jobId" element={<EditJob />} />
      </Routes>
    </Router>
  )
}

export default App