
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Job from "./Job"

export default function JobIndex() {
  const [jobs, setJobs] = useState([])

  const [search, setSearch] = useState("")


  useEffect(() => {
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

  function filterJobs() {
    return jobs.filter((job) => {
      return (job["jobTitle"].toLowerCase().includes(search.toLowerCase())
      )
    })
  }

  return (
    <section className="section">
      <input className="container"
        value={search} 
        placeholder={"SEARCH JOBS"}
        onChange={(e) => setSearch(e.target.value)} 
      />

      <div>
        {jobs ? filterJobs().map((job, i) => {
          return <Job
            key={i}
            jobInfo={job}
          />
        })
          : <p>Loading Jobs</p>
        }
      </div>
    </section>  
  )
}


