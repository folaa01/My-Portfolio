import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillTwitterSquare} from 'react-icons/ai'

function About() {
  return (
    <div className="about" id="about">
        <div className="about-content">
            <p className='mini-text'>Get to Know</p>
            <h1>About Me</h1>
            <p>I am a Front-end Web Developer.<br /> I can provide clean code and make your website responsive</p>
            <div className="social-links about-links">
                <a href="https://twitter.com/fola_raji" target='blank'><AiFillTwitterSquare size={'3rem'} /> </a>
                <a href="https://www.linkedin.com/in/ahmad-raji-5701a4227/" target='blank'><BsLinkedin size={'2.5rem'} /></a>
            </div>
        </div>
    </div>
  )
}

export default About