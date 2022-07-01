
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Job from "./Job"
import styles from "./JobIndex.module.css"

export default function JobIndex() {

  const [jobs, setJobs] = useState([])
  const [search, setSearch] = useState("")


  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("/api/jobs", {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        })
        console.log(data);
        setJobs(data)
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  }, [])

  console.log();

  function filterJobs() {
    return jobs.filter((job) => {
      return (job["jobTitle"].toLowerCase().includes(search.toLowerCase())
      )
    })
  }

  return (
    <section >
      <div className={styles.search_container}>
        <input className={styles.search_input}
          value={search}
          placeholder={"SEARCH JOBS"}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className={styles.jobs_container}>
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


