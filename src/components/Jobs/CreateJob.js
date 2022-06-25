import React, { useState } from 'react'
import axios from "axios"

export default function CreateJob () {
  const [formData, setFormData] = useState(
    {
      "jobTitle": "Digital Analyst",
      "jobShortSummary": "Are you keen to be at the forefront of digital workplace technologies while also being a trusted advisor to some of the world’s leading companies?",
      "jobDescription":
        "You will be joining an experienced, widely recognised and expanding team that’s collaborative and supportive of your personal and professional development. As part of your role, you’ll be comfortable talking about digital workplace strategies and solutions either to your team or in client workshops to C-level stakeholders. We’re looking for people who are future leaders and natural initiative-takers who bring out the best in others, are brilliant listeners and can grow our business without compromising standards, integrity or culture.",
      "jobSalary": 50000 ,
      "jobLocation": "London",
      "jobType": "Full-time",
      "companyName": "Reuters",
      "companyImage": "https://yt3.ggpht.com/ytc/AKedOLS2SZUR3w8r974zTHsQ9c-b8ob7n6X9cutfzr_wVmw=s900-c-k-c0x00ffffff-no-rj",
    }
  )

  async function handleSubmit(e) {
    try {
      e.preventDefault()
      const { data } = await axios.post("/api/jobs/create", formData, {
        headers: {
          "authorization": localStorage.getItem("token"),
        },
      })
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
        <button className="button">Create Job</button>
      </form>
    </div>
  </div>

}