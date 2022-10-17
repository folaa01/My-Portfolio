import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {BiEnvelope} from 'react-icons/bi'
import {BsTelephoneInbound} from 'react-icons/bs'
import {FaPaperPlane} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="contact" id="contact">
        <div className="contact-content">
            <div className="contact-left">
                <div className="contact-left-heading">
                    <p className='touch'>Get In Touch</p>
                    <h1>Contact Me</h1>
                    <p>I'm open to working with you!<br />Do reach out to me!</p>
                </div>

                <div className="social-links contact-socail-links">
                    <a href="https://twitter.com/fola_raji" target='blank'><AiFillTwitterSquare size={'3rem'} /> </a>
                    <a href="https://www.linkedin.com/in/ahmad-raji-5701a4227/" target='blank'><BsLinkedin size={'2.5rem'} /></a>
                </div>

                <div className="contact-links">

                    <div className="message">
                        <div className="message-icon">
                            <BiEnvelope size= '3rem' />
                        </div>
                        <div className="message-text">
                            <p>rajiahmad084@gmail.com</p>
                            <small>Send a message anytime!</small>
                        </div>
                    </div>

                    <div className="phone">
                        <div className="phone-icon">
                            <BsTelephoneInbound size='3rem' />
                        </div>
                        <div className="phone-text">
                            <p>+2348076332199</p>
                            <small><em>Call or Message Me Anytime!</em></small>
                        </div>
                    </div>

                </div>
            </div>

            <div className="contact-right">
                <div className="contact-right-content">
                    <div className="form-heading">
                        <h3>Need a Service?</h3>
                        <h1>Send a Message!</h1>
                    </div>
                </div>
                <div className="contact-form">
                    <form action="">
                        <input type="text" placeholder='Enter Your Full Name' className='form-inputs' />
                        <input type="email" placeholder='Enter Your Email Address' className='form-inputs' />
                        <textarea name="" id="" cols="30" rows="1" placeholder='Write Your Message' className='form-inputs'></textarea>
                        <button type='submit'>Send Message <FaPaperPlane /></button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact