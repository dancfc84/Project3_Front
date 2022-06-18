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
    <section className="hero is-fullheight-with-navbar is-warning">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1 has-text-black">
            Welcome to Hacker Trees splash page
          </h1>
          <button className="button is-large is-primary is-light">Register</button> <br /> <br />
          <button className="button is-large is-primary is-light">Login</button>
          <div className="hero  ">
            <img className="image is-large" src={splashImage}></img>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
