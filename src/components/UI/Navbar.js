import logoFile from '../../assets/HT-logo.jpg'
import { NavLink } from "react-router-dom"
import React from "react"
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation()
  const [userLogged, setUserLogged] = React.useState(false)

  React.useEffect(() => {
    setUserLogged(Boolean(localStorage.getItem("loggedIn")))
  }, [location])

  function NavbarChange() {
    window.localStorage.clear()
    setUserLogged(false)
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
              {userLogged && <NavLink to="/newsfeed" className="navbar-item is-size-3 has-text-weight-bold ml-3">
                Newsfeed
              </NavLink>}
              <NavLink to="/jobs/index" className="navbar-item is-size-3 has-text-weight-bold ml-3">
                Job Listings
              </NavLink>
              {userLogged && <NavLink to="/jobs/create" className="navbar-item is-size-3 has-text-weight-bold ml-3">
                Create Job
              </NavLink>}
              <NavLink to="/about" className="navbar-item is-size-3 has-text-weight-bold ml-3">
                About
              </NavLink>
              <NavLink to="/contact" className="navbar-item is-size-3 has-text-weight-bold ml-3">
                Contact
              </NavLink>
              <NavLink to="/profile/:userID" className="navbar-item is-size-3 has-text-weight-bold ml-3">
                Profile
              </NavLink>
              {userLogged && <NavLink to="/" onClick={NavbarChange} className="navbar-item is-size-3 has-text-weight-bold ml-3">Logout</NavLink>}
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}



