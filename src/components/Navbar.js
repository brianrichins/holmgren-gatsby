import React, { useState } from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'
import useSiteMetadata from './SiteMetadata'

const Navbar = ({ children }) => {
  const { title } = useSiteMetadata()
  const [navBarActiveClass, setActiveClass] = useState(false);

  const toggleHamburger = () => {
    setActiveClass(navBarActiveClass ? '' : 'is-active')
  }

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand logo-font">
          <Link to="/" className="navbar-item" title="Logo" style={{ backgroundColor: 'white' }}>
            <img src={logo} alt={`Logo: ${title}`} />
          </Link>

          <div
            className={`navbar-burger burger ${navBarActiveClass}`}
            data-target="navMenu"
            onClick={toggleHamburger}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${navBarActiveClass}`}
        >
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/announcements">
              Announcements
            </Link>
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
