import React from "react"
import splashImage from '../assets/malwareImage.jpg'

// import { Link } from "react-router-dom"


export default function Home() {
  // function handleRegister() {
  // }

  // function hadnleLogin() {
  // }

  //cover image
  //cover text content 
  // email input
  //register button 
  //login button ? 


  return (
    <section classNameName="hero is-warning">
      <div className="container column box is-one-third">

        <div className="field">
          {/* <label className="label">Email</label> */}
          <div className="control">
            <input className="input" type="mail" placeholder="Email, e.g. 1@hackerone.com" />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-primary">Login</button>
          </div>
          <div className="control">
            <button className="button is-light">Register</button>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-one-thirds" />
        <div className="column is-one-thirds">
          <img classNameName="card image" src={splashImage} />
        </div>
        <div className="column is-one-thirds" />
      </div>
    </section>
  )
}
