import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
    <nav>
  <ul className="nav-links">
    <li>
      <a href="#">Home</a>
    </li>
    <li>
      <a href="#">Contact Me</a>
    </li>
    <li>
      <a href="#">Certifications</a>
    </li>
    <li>
      <a href="#">Projects</a>
    </li>
    <li>
      <a href="#">Skills</a>
    </li>
    <li>
      <a href="#">Experience</a>
    </li>
    <li>
      <a href="#">Achievements</a>
    </li>
  </ul>
  <div className="mobile-menu">
    <div className="line" />
    <div className="line" />
    <div className="line" />
  </div>
</nav>

    </>
  )
}

export default Navbar