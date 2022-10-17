import React from 'react'

function Projects() {
  return (
    <div className="projects" id="projects">
        <div className="projects-content">
          <div className="projects-heading">
            <h1>My Projects</h1>
            <p>Here are some of the projects i've done</p>
          </div>

          <div className="projects-grid">
            <div className="blogr projects-container">
              <div className="projects-img projects-img-one"></div>
              <div className="projects-description">
                <h3>Blogr | A modern publishing platform</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odit temporibus doloribus necessitatibus ex quia ipsam quam aperiam quae! Vitae, dolores sapiente! Ipsa at quas explicabo voluptas deserunt temporibus id.</p>
                <div className="projects-links">
                  <a href="https://github.com/folaa01/Blogr-Landing-Page.git" className='btn' target='blank'><button className='github-btn'>Github</button></a>
                  <a href="https://folaa01.github.io/Blogr-Landing-Page/" className='btn' target='blank'><button>Live Demo</button></a>
                </div>
              </div>
            </div>

            <div className="blogr projects-container">
              <div className="projects-img projects-img-two"></div>
              <div className="projects-description">
                <h3>Intro component with sign-up form</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odit temporibus doloribus necessitatibus ex quia ipsam quam aperiam quae! Vitae, dolores sapiente! Ipsa at quas explicabo voluptas deserunt temporibus id.</p>
                <div className="projects-links">
                  <a href="https://github.com/folaa01/Signup-Form.git" className='btn' target='blank'><button className='github-btn'>Github</button></a>
                  <a href="https://folaa01.github.io/Signup-Form/" className='btn' target='blank'><button>Live Demo</button></a>
                </div>
              </div>
            </div>

            <div className="blogr projects-container">
              <div className="projects-img projects-img-three"></div>
              <div className="projects-description">
                <h3>Interactive rating component</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae odit temporibus doloribus necessitatibus ex quia ipsam quam aperiam quae! Vitae, dolores sapiente! Ipsa at quas explicabo voluptas deserunt temporibus id.</p>
                <div className="projects-links">
                  <a href="https://github.com/folaa01/Interactive-Rating-Component.git" className='btn' target='blank'><button className='github-btn'>Github</button></a>
                  <a href="https://folaa01.github.io/Interactive-Rating-Component/" className='btn' target='blank'><button>Live Demo</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects