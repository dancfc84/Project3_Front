import splashImage from '../assets/malwareImage.jpg'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

// import { Link } from "react-router-dom"


export default function Home() {
  const navigate = useNavigate()

  // ! Put our form fields in state.
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordConfirmation: "",
    email: "",
  })

  function handleChange(e) {
    // ! name: field you've typed in, e.g. the email input
    // ! value: the text that's in that field
    const { name, value } = e.target
    setFormData({
      ...formData, // ! This is whatever the form data was before, all it's fields.
      [name]: value, 
    })
  }

  async function handleRegister(e) {
    e.preventDefault()

    try {
      const { data } = await axios.post('/api/register', formData)
<<<<<<< HEAD
      // ! Navigate to the /login page.
      console.log(data);
=======
      console.log(data);
      // ! Navigate to the /login page. 
>>>>>>> 07eed8b6de465076e00ccb8f0413ee0f9e49489f
      navigate('/')

    } catch (err) {
      // ! Print out the response from the backend if there's an error
      console.log(err.response.data)
    }
  }

  async function handleLogin(e) {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/login', formData)
      const token = data.token
      const userID = data.user._id
      const userName = data.user.username

      if (token !== null && userID !== null) {
        localStorage.setItem("token", token);
        localStorage.setItem("userID", userID);
        localStorage.setItem("userName", userName);
        localStorage.setItem("loggedIn", true)
      }
      
      
      navigate('/')
      // ! Navigate to the /login page. 
    } catch (err) {
      // ! Print out the response from the backend if there's an error
      console.log(err.response.data)
    }
  }


  return (
    <section className="">
      <div className="container column box is-one-third">
        <form>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name={'email'}
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                name={'password'}
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Confirm password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                name={'passwordConfirmation'}
                value={formData.passwordConfirmation}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-primary" onClick={handleLogin}>Login</button>
            </div>
            <div className="control">
              <button className="button is-light" onClick={handleRegister}>Register</button>
            </div>
          </div>
        </form>
      </div>
      <div className="columns">
        <div className="column is-one-thirds" />
        <div className="column is-one-thirds">
          <img className="card image" src={splashImage} />
        </div>
        <div className="column is-one-thirds" />
      </div>
    </section>
  )
}
