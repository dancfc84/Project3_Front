import logoFile from '../assets/HT-logo.jpg'
import { Link } from "react-router-dom"
import React from "react"

function Navbar() {
  return (
    <>
      <header>
        <nav>
          <div className="container-nav ">
            <div className="navbar-brand">
              <Link to="/"><img className="logo image image is-64x64 p-1" src={logoFile} /></Link>
              <Link to="/" className="navbar-item is-size-3 has-text-weight-bold ml-3 is-right">
                Home
              </Link>
              <Link to="/about" className="navbar-item is-size-3 has-text-weight-bold ml-3">
                About
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar

