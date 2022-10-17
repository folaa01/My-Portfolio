import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillTwitterSquare} from 'react-icons/ai'

const Home = () => {
  return (
    <div className='home'>
        <div className="home-content">
            <div className="home-left">
                <div className="home-text">
                    <p className='main-clr'>Hi There</p>
                    <h3 className="main-clr">I'm Ahmad Raji</h3>
                    <h1>A Top-notch Web Developer</h1>
                </div>

                <div className="social-links">
                    <a href="https://twitter.com/fola_raji" target='blank'><AiFillTwitterSquare size={'3rem'} /> </a>
                    <a href="https://www.linkedin.com/in/ahmad-raji-5701a4227/" target='blank'><BsLinkedin size={'2.5rem'} /></a>
                </div>
            </div>    

            <div className="home-right">
                    <div className="hero-img">
                        <img src="assets/hero-img.jpg" alt="" />
                    </div>
            </div>
            
        </div>
    </div>
  )
}

export default Home