import splashImage from '../assets/malwareImage.jpg'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import LoginModal from './UI/LoginModal'

export default function Home() {
  const navigate = useNavigate()

  // ! Put our form fields in state.
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    userType: "",
  })

  const [showRegisterModal, setShowRegisterModal] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  console.log(showRegisterModal);

  const showModalHandler = (state) => {
    console.log(state);
    setShowRegisterModal(true)
  }

  const hideModalHandler = (state) => {
    console.log(state)
    setShowRegisterModal(false)
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

      navigate('/newsfeed')
    } catch (err) {
      console.log(err.response.data)
    }
  }

  return (
    <section className="">
      <div className="container column box is-half">
        <form onSubmit={handleLogin}>
          <div className="field column">
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

          <div className="field column">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input "
                type="password"
                name={'password'}
                value={formData.password}
                onChange={handleChange}
                placeholder="Make it long, not complex. 40 bits of entropy and above."
              />
            </div>
          </div>
          <div className="field container">
            <div className="control">
              <button type='submit' className={"button"}>
                Log In
              </button>
            </div>
          </div>
          <div className="field container">
            <div className="control">
              <button type='submit' className={"button"} onClick={showModalHandler}>
                Create New Account
              </button>
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

      {
        showRegisterModal && <LoginModal
          handleChange={handleChange}
          setFormData={setFormData}
          hideModalHandler={hideModalHandler}
          formData={formData} />
      }

    </section >
  )
}
