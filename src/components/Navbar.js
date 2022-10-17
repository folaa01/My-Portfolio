import React, { useRef } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdClose} from 'react-icons/md'

const Navbar = () => {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive-nav");
    }

  return (
    <nav>
        <div className="navbar">
            <div className="logo">
                <h1>Ahmad <span className='main-clr'>Raji.</span></h1>
            </div>
            <div className="navlinks responsive-nav" ref={navRef}>
                <ul>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                    <span className='nav-close' onClick={showNavbar}> <MdClose size={'2rem'}/> </span>
                </ul>
            </div>
            <span className='nav-bars' onClick={showNavbar}> <GiHamburgerMenu size={'2rem'} /> </span>
        </div>
    </nav>
  )
}

export default Navbar