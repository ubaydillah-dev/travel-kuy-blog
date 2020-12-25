import React from "react"
import { NavLink } from "../navLink"
import "./nav.css"
import logo from "../../images/pin.svg"

const Nav = () => {
  return (
    <nav>
      <div className="nav__items">
        <a className="nav__item--left" href="/">
          <img className="nav__item--logo" src={logo} alt="logo" />
        </a>
        <NavLink to="/" className="nav__item--link">
          Home
        </NavLink>
        <NavLink to="/contact" className="nav__item--link">
          Contact
        </NavLink>
        <NavLink to="/blog" className="nav__item--link">
          Blog
        </NavLink>
      </div>
    </nav>
  )
}

export default Nav
