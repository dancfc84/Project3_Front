import splashImage from '../assets/malwareImage.jpg'
import React from 'react'
// import { useNavigate } from 'react-router-dom'
import axios from 'axios'

// import { Link } from "react-router-dom"


export default function Home() {
  // const navigate = useNavigate()
  const [registering, setRegistering] = React.useState(false)

  // ! Put our form fields in state.
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
    passwordConfirmation: "",
    email: "",
    userType: "",
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

  function handleForm(e) {
    registering === false ? setRegistering(true) : handleRegistrationConfirm(e)
  }

  async function handleRegistrationConfirm(e) {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/register', formData)
      console.log(data);
      // ! Navigate to the /login page. 
      // data ? navigate('/') : null //should be newsfeed
      //but we also need to log them automatically

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
        // navigate('/newsfeed') //navigates you to newsfeed once logged in
      }


      // navigate('/')
      // ! Navigate to the /login page. 
    } catch (err) {
      // ! Print out the response from the backend if there's an error
      console.log(err.response.data)
    }
  }


  return (
    <section className="">
      <div className="container column box is-one-third">
        <form onSubmit={handleLogin}>
          <div className="field column is-half ">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name={'email'}
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. higgs-boson@cern.ch"
              />
            </div>
          </div>
          <div className="field column is-half">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input "
                type="password"
                name={'password'}
                value={formData.password}
                onChange={handleChange}
                placeholder="40 bits of entropy and above is fine"
              /> <small>Hints: <a href="https://xkcd.com/936/">info on passwords and entropy</a></small>
            </div>
          </div>



          <div className="field is-grouped">
            <div className="control">
              <button type='submit' className={registering === true ? " button is-hidden" : "button"}>Login</button>
            </div>
            <div className="control">

              <button type="button" className="button is-primary mx-5" onClick={handleForm}>{registering === true ? "Confirm your registration" : "Register"}</button>
            </div>
          </div>

          <div className={registering === false ? "field is-hidden" : "is-field"}>
            <input className="mx-3" type="checkbox" name={'userType'} value="business" />
            <label className="checkbox my-1" >
              Would you like to post and promote official jobs as a company?
            </label>
            <div className="control column is-half">
              <input
                className="input"
                type="password"
                name={'passwordConfirmation'}
                value={formData.passwordConfirmation}
                onChange={handleChange}
                placeholder="Enter your password confirmation here..."
              />
            </div>
          </div>
        </form>
      </div >
      <div className="columns">
        <div className="column is-one-thirds" />
        <div className="column is-one-thirds">
          <img className="card image" src={splashImage} />
        </div>
        <div className="column is-one-thirds" />
      </div>
    </section >
  )
}
