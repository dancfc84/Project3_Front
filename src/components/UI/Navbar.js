import logoFile from '../../assets/HT-logo.ico'
import { NavLink } from "react-router-dom"
import React from "react"
import { useLocation } from "react-router-dom";
import styles from "./Navbar.module.css"
// import { getLoggedInUserId } from '../../lib/auth.js'


export default function Navbar() {
  const location = useLocation()
  const [isLoggedIn, setIsLoggedIn] = React.useState(Boolean(localStorage.getItem("loggedIn")))

  // ! Whenever the URL changes, we want to reset our loggedIn state, so that when the user logs in, the page redirects.
  React.useEffect(() => {
    setIsLoggedIn(Boolean(localStorage.getItem("loggedIn")))
  }, [location])


  function NavbarChange() {
    window.localStorage.clear()
    setIsLoggedIn(false)
  }

  return (
    <>
      <header className={styles.nav_container}>
        <nav >
          <div className="container-nav ">
            <div className="navbar-brand">
              <NavLink to="/"><img className="logo image image is-128x128 p-1 mx-5" src={logoFile} /></NavLink>
              {/* <NavLink to="/" className="navbar-item is-size-3 has-text-weight-bold ml-3 is-right">
                Home
              </NavLink> */}
              {isLoggedIn && <NavLink  to="/newsfeed" className={`navbar-item is-size-4 has-text-weight-bold ml-3 ${styles.link_styling}`}>
								Newsfeed
              </NavLink>}
              <NavLink to="/jobs/index" className={`navbar-item is-size-4 has-text-weight-bold ml-3 ${styles.link_styling}`}>
								Job Listings
              </NavLink>
              {isLoggedIn && <NavLink to="/jobs/create" className={`navbar-item is-size-4 has-text-weight-bold ml-3 ${styles.link_styling}`}>
								Create Job
              </NavLink>}
              <NavLink to="/about" className={`navbar-item is-size-4 has-text-weight-bold ml-3 ${styles.link_styling}`}>
								About
              </NavLink>
              <NavLink to="/contact" className={`navbar-item is-size-4 has-text-weight-bold ml-3 ${styles.link_styling}`}>
								Contact
              </NavLink>
              {isLoggedIn && <NavLink to="/profile" className={`navbar-item is-size-4 has-text-weight-bold ml-3 ${styles.link_styling}`}>
								Profile
              </NavLink>}
              {isLoggedIn && <NavLink to="/" onClick={NavbarChange} className={`navbar-item is-size-4 has-text-weight-bold ml-3 ${styles.link_styling}`}>Logout</NavLink>}
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}



