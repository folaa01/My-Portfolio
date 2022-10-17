import React from 'react'
import {FaHtml5} from 'react-icons/fa'
import {FaCss3Alt} from 'react-icons/fa'
import {TbBrandJavascript} from 'react-icons/tb'
import {FaReact} from 'react-icons/fa'
import {FaBootstrap} from 'react-icons/fa'
import {SiJquery} from 'react-icons/si'
import {FaAngleRight} from 'react-icons/fa'
import {BiCodeAlt} from 'react-icons/bi'
import {BiShapeTriangle} from 'react-icons/bi'

function Skills() {
  return (
    <div className="skills" id="skills">
        <div className="skills-content">
            <div className="skills-heading">
                <p>What Skills I Have</p>
                <h1>My Experience <span><BiCodeAlt /></span></h1>
            </div>

            {/* languages */}
            <div className="languages">
                <h2>Programming Languages <span><FaAngleRight size={'3rem'} /></span></h2>
                <div className="skills-grid">
                    <div className="grid">
                        <div className="grid-content">
                        <span><FaHtml5 size={'3rem'} /></span>
                        <h3>HTML 5</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, harum!</p>
                        </div>
                    </div>

                    <div className="grid">
                        <div className="grid-content">
                        <span><FaCss3Alt size={'3rem'} /></span>
                        <h3>CSS 3</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, harum!</p>
                        </div>
                    </div>

                    <div className="grid">
                        <div className="grid-content">
                        <span><TbBrandJavascript size={'3rem'} /></span>
                        <h3>JavaScript</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, harum!</p>
                        </div>
                    </div>

                    <div className="grid">
                        <div className="grid-content">
                        <span><FaReact size={'3rem'} /></span>
                        <h3>React JS</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, harum!</p>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* framework */}

            <div className="frameworks">
                <h2>Frameworks <span><FaAngleRight size={'3rem'} /></span></h2>

                <div className="skills-grid">
                    <div className="grid">
                        <div className="grid-content">
                        <span><FaBootstrap size={'3rem'} /></span>
                        <h3>Bootstrap</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, blanditiis.</p>
                        </div>
                    </div>

                    <div className="grid">
                        <div className="grid-content">
                        <span><SiJquery size={'3rem'} /></span>
                        <h3>JQuery</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, blanditiis.</p>
                        </div>
                    </div>

                    <div className="grid">
                        <div className="grid-content">
                        <span><FaReact size={'3rem'} /></span>
                        <h3>React JS</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, blanditiis.</p>
                        </div>
                    </div>

                    <div className="grid">
                        <div className="grid-content">
                        <span><BiShapeTriangle size={'3rem'} /></span>
                        <h3>AOS</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, blanditiis.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills