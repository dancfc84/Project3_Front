import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
//import axios from "axios"

export default function ShowJob() {

  const [job, setJob] = useState(undefined)
  const { jobId } = useParams()

  useEffect(() => {
    fetch(`/api/jobs/${jobId}`)
      .then(resp => resp.json())
      .then(data => setJob(data))
  }, [])

  return (
    <section className="section">
      <div className="container">
        {job ? (
          <div>
            <h2 className="title has-text-centered">{job.JobTitle}</h2>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <figure className="image">
                  <img src={job.companyImage} alt={job.companyName} />
                </figure>
                {/* // ! Only show the button if the pokemon was made by the user. */}
                {/*                 {isCreator(job.user._id) && <button
                  className="button is-danger"
                  onClick={handleDelete}
                >
                  Delete job
                </button>} */}
            
                <Link to={`/jobs/edit/${jobId}`}>
                  <button className="button is-warning">
                    Edit Job
                  </button>
                </Link>

              </div>
              <div className="column is-half">
                <h4 className="title is-4">
                  Job Description
                </h4>
                <p>{job.jobDescription}</p>
                <hr />
                <h4 className="title is-4">
                  Salary
                </h4>
                <hr />
                <p>{job.jobSalary}</p>
                <hr />
                <h4 className="title is-4">
                  Job Location
                </h4>
                <p>{job.jobLocation}</p>
                <hr />
                <h4 className="title is-4">
                  Job Type
                </h4>
                <p>{job.jobType}</p>
                <h4 className="title is-4">
                  Job Added By
                </h4>
                <hr />
                {/*                 <p>{job.user.username}</p> */}

              </div>
            </div>
          </div>

        ) : (
          <p>...loading</p>
        )}
      </div>
    </section>
  )

}
