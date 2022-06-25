import React, { useState } from 'react'
// import classes from "./LoginModal.module.css"
import Modal from "./Modal.js"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const LoginModal = (props) => {

  const navigate = useNavigate()

  const [modalForm, setModalForm] = useState({
    username: "",
    password: "",
    email: "",
    userType: "",
  })


  async function handleRegistrationConfirm(e) {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/register', modalForm)
      console.log(data);
      props.handleLogin(e) //login the user once user has registered

      // ! Navigate to the /login page. 
      navigate('/newsfeed')  //navigates to newsfeed if successfully registered
    } catch (err) {
      // ! Print out the response from the backend if there's an error
      console.log(err.response.data)
    }
  }


  function handleModalChange(e) {
    const { name, value } = e.target
    setModalForm({
      ...modalForm,
      [name]: value,
    })
  }



  return (
    <Modal>
      <div className="container column box is-half">
        <form onSubmit={handleRegistrationConfirm}>
          <div className="field column">
            <label className="label">
              Email</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name={'email'}
                value={modalForm.email}
                onChange={handleModalChange}
                placeholder="e.g. higgs-boson@cern.ch"
              />
            </div>
          </div>

          <div className="field column">
            <label className="label">
              Password</label>
            <div className="control">
              <input
                className="input "
                type="password"
                name={'password'}
                value={modalForm.password}
                onChange={handleModalChange}
                placeholder="Make it long, not complex. 40 bits of entropy and above."
              /> <small>Hints: <a href="https://xkcd.com/936/">info on passwords and entropy</a></small>
            </div>
          </div>


          <div className="control column is-half">
            <input
              className="input"
              type="password"
              name={'username'}
              value={modalForm.username}
              onChange={handleModalChange}
              placeholder="Enter a Display Name / Username you'd like to use. "
            />
          </div>

        </form>
      </div >

      <div className="field container">
        <div className="control">
          <button type="button" className="button is-primary mx-5" onClick={handleModalChange}>
            Confirm New Account
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;



