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
  })

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    email: "",
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
      localStorage.setItem('token', data.token)
      localStorage.setItem("loggedIn", true)
      console.log(data.token)
      navigate('/newsfeed')
    } catch (err) {
      setErrors(err.response.data.errors)
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
                placeholder="Email"
              />
              {errors.email && <small className="has-text-danger">{errors.email}</small> }
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
                placeholder="Password"
              />
              {errors.password && <small className="has-text-danger">{errors.password}</small> }
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
