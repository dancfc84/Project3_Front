import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import styles from "./CreateJob.module.css"

export default function CreateJob () {

  const navigate = useNavigate();

  const [formData, setFormData] = useState(
    {
      jobTitle: "Digital Analyst",
      jobShortSummary: "Are you keen to be at the forefront of digital workplace technologies while also being a trusted advisor to some of the world’s leading companies?",
      jobDescription:
        "You will be joining an experienced, widely recognised and expanding team that’s collaborative and supportive of your personal and professional development. As part of your role, you’ll be comfortable talking about digital workplace strategies and solutions either to your team or in client workshops to C-level stakeholders. We’re looking for people who are future leaders and natural initiative-takers who bring out the best in others, are brilliant listeners and can grow our business without compromising standards, integrity or culture.",
      jobSalary: 50000 ,
      jobLocation: "London",
      jobType: "Full-time",
      companyName: "Reuters",
      companyImage: "https://yt3.ggpht.com/ytc/AKedOLS2SZUR3w8r974zTHsQ9c-b8ob7n6X9cutfzr_wVmw=s900-c-k-c0x00ffffff-no-rj",
    }
  )

  const [errors, setErrors] = useState({
    jobTitle: "",
    jobShortSummary: "",
    jobDescription:
      "",
    jobSalary: "" ,
    jobLocation: "",
    jobType: "",
    companyName: "",
    companyImage: "",
  })

  async function handleSubmit(e) {
    try {
      e.preventDefault()
      const { data } = await axios.post("/api/jobs/create", formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      console.log(data);
      navigate('/jobs/index')

    } catch (error) {
      setErrors(error.response.data.errors)
    }
  }

  function handleChange (e) {
    const { name, value } = e.target
    setFormData( {
      ...formData, 
      [name]: value,
    }),
    setErrors({
      ...errors,
      [name]: '',
    })
  }

  
  return <div className="section">
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>

        <div className="field">
          <label className={styles.label_styling}>Job Title</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name={'jobTitle'} 
              value={formData.jobTitle}
              onChange={handleChange}
            />
            {errors.jobTitle && <small className="has-text-danger">{errors.jobTitle}</small> }
          </div>
        </div>
        <div className="field">
          <label className={styles.label_styling}>Job Summary</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name={'jobShortSummary'}
              value={formData.jobShortSummary}
              onChange={handleChange}
            />
            {errors.jobShortSummary && <small className="has-text-danger">{errors.jobShortSummary}</small> }
          </div>
        </div>
        <div className="field">
          <label className={styles.label_styling}>Job Description</label>
          <div className="control">
            <input
              className="input"
              type="textarea"
              name={'jobDescription'}
              value={formData.jobDescription}
              onChange={handleChange}
            />
            {errors.jobDescription && <small className="has-text-danger">{errors.jobDescription}</small> }
          </div>
        </div>
        <div className="field">
          <label className={styles.label_styling}>Job Salary</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name={'jobSalary'}
              value={formData.jobSalary}
              onChange={handleChange}
            />
            {errors.jobSalary && <small className="has-text-danger">{errors.jobSalary}</small> }
          </div>
        </div>
        <div className="field">
          <label className={styles.label_styling}>Job Location</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name={'jobLocation'}
              value={formData.jobLocation}
              onChange={handleChange}
            />
            {errors.jobLocation && <small className="has-text-danger">{errors.jobLocation}</small> }
          </div>
        </div>
        <div className="field">
          <label className={styles.label_styling}>Job Type</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name={'jobType'}
              value={formData.jobType}
              onChange={handleChange}
            />
            {errors.jobType && <small className="has-text-danger">{errors.jobType}</small> }
          </div>
        </div>
        <div className="field">
          <label className={styles.label_styling}>Company Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name={'companyName'}
              value={formData.companyName}
              onChange={handleChange}
            />
            {errors.companyName && <small className="has-text-danger">{errors.companyName}</small> }
          </div>
        </div>
        <div className="field">
          <label className={styles.label_styling}>Company Image</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name={'companyImage'}
              value={formData.companyImage}
              onChange={handleChange}
            />
            {errors.companyImage && <small className="has-text-danger">{errors.companyImage}</small> }
          </div>
        </div>
        <button className={styles.form_button}>Create Job</button>
      </form>
    </div>
  </div>

}