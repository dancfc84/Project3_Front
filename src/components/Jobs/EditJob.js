import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"

export default function CreateJob () {

  const navigate = useNavigate()

  const [formData, setFormData] = useState(
    {
      "jobTitle": "",
      "jobShortSummary": "",
      "jobDescription":
        "",
      "jobSalary": 0 ,
      "jobLocation": "",
      "jobType": "",
      "companyName": "",
      "companyImage": "",
    }
  )

  const { jobId } = useParams()

  useEffect(() => {
    fetch(`/api/jobs/${jobId}`)
      .then(resp => resp.json())
      .then(data => setFormData(data))
  }, [])


  console.log(formData);

  async function handleSubmit(e) {
    try {
      e.preventDefault()
      const { data } = await axios.put(`/api/jobs/edit/${jobId}`, formData)
      console.log(data);

    } catch (error) {
      console.log(error);
    }
  }

  function handleChange (e) {
    const { name, value } = e.target
    setFormData( {
      ...formData, 
      [name]: value,
    })
  }

  function handleDiscard () {
    navigate(`/jobs/${jobId}`)
  }
  

  return <div className="section">
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Job Title</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name={'jobTitle'} 
              value={formData.jobTitle}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Job Summary</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name={'jobShortSummary'}
              value={formData.jobShortSummary}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Job Description</label>
          <div className="control">
            <input
              className="input"
              type="textarea"
              name={'jobDescription'}
              value={formData.jobDescription}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Job Salary</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name={'jobSalary'}
              value={formData.jobSalary}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Job Location</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name={'jobLocation'}
              value={formData.jobLocation}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Job Type</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name={'jobType'}
              value={formData.jobType}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Company Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name={'companyName'}
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Company Image</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name={'companyImage'}
              value={formData.companyImage}
              onChange={handleChange}
            />
          </div>
        </div>
        <button className="button">Submit Changes</button>
        <button onClick={handleDiscard} className="button">Discard Changes</button>
      </form>
    </div>
  </div>

}