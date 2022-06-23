import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from "./components//Home"
// import About from "./components/About"
import Navbar from "./components/UI/Navbar"
import Newsfeed from "./components/Newsfeed/Newsfeed"
import CreateJob from './components/Jobs/CreateJob'
import JobIndex from './components/Jobs/JobIndex'
import ShowJob from './components/Jobs/ShowJob'
import EditJob from './components/Jobs/EditJob'
import About from "./components/About"


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newsfeed" element={<Newsfeed />} />
          <Route path="/jobs/index" element={<JobIndex />} />
          <Route path="/jobs/create" element={<CreateJob />} />
          <Route path="/jobs/:jobId" element={<ShowJob />} />
          <Route path="/jobs/edit/:jobId" element={<EditJob />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <footer className="footer my-2 py-2">
          <div className="box content has-text-centered">

            Companies looking to hire:
            <Link to={`/jobs/create`}> Post a new Job</Link> <br /><br />
            ⎔ Devs can
            <Link to={`/jobs/index`}> see current listings.</Link> <br /><br />

            <Link to={`/about`} className=" ">About us</Link>
            <br />
            <div className="content has-text-centered ">
              <p>
                <strong>HackerTrees.com</strong> proudly developed by
                <Link to="https://github.com/dancfc84" className=""> Dimitar Vidolov</Link>,

                <Link to="https://github.com/dancfc84" className=""> Daniel Whittock</Link> and
                <Link to="https://github.com/Qshan888" className=""> Cody Shan </Link>
                as part of Software Engineering Immersive 23 at
                <Link to="https://generalassemb.ly" className=""> General Assembly</Link>.
              </p>
            </div>
          </div>
        </footer>
      </Router>


    </>
  )
}

export default App