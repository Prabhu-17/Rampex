import './Styles.css'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
    const [menuOpen,setMenuOpen]=useState(false)
  return (
    <>
      <nav className="nav">
        <Link to="/" className="title">
          Title
        </Link>
        <div className="menu" onClick={()=>{setMenuOpen(!menuOpen)}}>
            <span>-</span>
            <span>-</span>
            <span>-</span>
        </div>
        <ul className={menuOpen?"open":""}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/login" >Login</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
