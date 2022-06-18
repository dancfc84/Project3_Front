import React from "react"
import splashImage from '../assets/malwareImage.jpg'

// import { Link } from "react-router-dom"


function Home() {
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

      <form className="container column box is-one-third">
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="email" placeholder="e.g. alex@example.com" />
          </div>
        </div>

        <button className="button is-secondary">Sign in</button>
        <button className="button is-primary">Register</button>
      </form>
      <div className="column is-half">
        <img classNameName="image" src={splashImage} />

      </div>
    </section>
  )
}

export default Home
