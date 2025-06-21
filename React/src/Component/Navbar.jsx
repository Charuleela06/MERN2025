import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            {/* <li className='Link'>HOME</li>
            <li className='Link'>ABOUT</li>
            <li className='Link'>SKILLS</li>
            <li className='Link'>CONTACT</li> */}
            <Link to='/home' className='link'>HOME</Link>
            <Link to='/about' className='link'>ABOUT</Link>
            <Link to='/counter' className='link'>COUNTER</Link>
            <Link to='/login' className='link'>FORM</Link>
            <Link to='/hooks' className='link'>HOOKS</Link>
        </nav>
    </div>
  )
}

export default Navbar