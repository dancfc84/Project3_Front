import logoFile from '../../assets/HT-logo.jpg'
import { NavLink } from "react-router-dom"
import React from "react"
// import { useLocation } from "react-router-dom";
import { getLoggedInUserId } from '../../lib/auth.js'


export default function Navbar() {



  function NavbarChange() {
    window.localStorage.clear()
  }

  return (
    <>
      <header>
        <nav>
          <div className="container-nav ">
            <div className="navbar-brand">
              <NavLink to="/"><img className="logo image image is-128x128 p-1 mx-5" src={logoFile} /></NavLink>
              {/* <NavLink to="/" className="navbar-item is-size-3 has-text-weight-bold ml-3 is-right">
                Home
              </NavLink> */}
              {getLoggedInUserId() && <NavLink to="/newsfeed" className="navbar-item is-size-3 has-text-weight-bold ml-3">
                Newsfeed
              </NavLink>}
              <NavLink to="/jobs/index" className="navbar-item is-size-3 has-text-weight-bold ml-3">
                Job Listings
              </NavLink>
              {getLoggedInUserId() && <NavLink to="/jobs/create" className="navbar-item is-size-3 has-text-weight-bold ml-3">
                Create Job
              </NavLink>}
              <NavLink to="/about" className="navbar-item is-size-3 has-text-weight-bold ml-3">
                About
              </NavLink>
              <NavLink to="/contact" className="navbar-item is-size-3 has-text-weight-bold ml-3">
                Contact
              </NavLink>
              {getLoggedInUserId() && <NavLink to="/" onClick={NavbarChange} className="navbar-item is-size-3 has-text-weight-bold ml-3">Logout</NavLink>}
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}



