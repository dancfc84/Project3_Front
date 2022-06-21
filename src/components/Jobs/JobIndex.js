
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from "react-router-dom"

export default function JobIndex() {
  const [jobs, setJobs] = useState([])

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("/api/jobs")
        console.log(data);
        setJobs(data)
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  }, [])

  return (
    <div className="section">
      <h1 className="title">Available Jobs</h1>
      <div className="container">
        {jobs.map(job => <Link to={`/jobs/${job._id}`} key={job._id}><h2>{job.jobTitle}</h2></Link>)}
      </div>
    </div>
  )
}


