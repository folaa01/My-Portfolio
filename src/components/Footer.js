import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {BiEnvelope} from 'react-icons/bi'

const Footer = () => {

    const date = new Date();
    const currentYear = date.getFullYear();

  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-heading">
                <h1>Ahmad <span className='main-clr'>Raji.</span></h1>
            </div>

            <div className="social-links footer-links">
                <a href="https://twitter.com/fola_raji" className='footer-links' target='blank'><AiFillTwitterSquare size={'3rem'} /> </a>
                <a href="https://www.linkedin.com/in/ahmad-raji-5701a4227/" className='footer-links' target='blank'><BsLinkedin size={'2.5rem'} /></a>
                <a href="#contact" className='footer-message footer-links'><BiEnvelope size= '3rem' /></a>

                <div className="copyright">
                    <p>Copyright <span></span> {currentYear} | All Rights Reserved<span className='main-clr'>.</span></p>
                    <em>Coded By Raji Ahmad</em>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer