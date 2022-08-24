import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import styles from "./CreateJob.module.css"
import baseUrl from "../../config"

export default function CreateJob () {

  const navigate = useNavigate();

  const [formData, setFormData] = useState(
    {
      jobTitle: "",
      jobShortSummary: "",
      jobDescription:
        "",
      jobSalary: 0 ,
      jobLocation: "",
      jobType: "",
      companyName: "",
      companyImage: "",
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
      const { data } = await axios.post(`${baseUrl}/jobs/create`, formData, {
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


  return <div className="section mt-5">
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