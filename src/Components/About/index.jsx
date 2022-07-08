import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faGithub, faHtml5, faJava, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import Loader from 'react-loaders'
import "./index.scss"
const About = () => {
  return (
    <>
  <div className="container about-page">
      <div className="text-zone">
          <h1> About Me</h1>
          <p className='about-me'>
          Hey
          <br/> I am Sahil, An Web developer. I'm currently pursuing an undergraduate in Computer Science. During my studies, I have been acquiring work experience in various fields and lately, I have been concentrating on software development on the Web Development platform.
           </p>

          <p className='about-me' >
          I'm learning React as a frontend ,mongoDB, nodejs for backend, Docker etc. For deployment i mostly used vercel or netlify. 
          I've made many projects on  Frontend like BookmyShow Clone,Weather app etc
          </p>
                </div>
      <div className="stage-cube-cont">
<div className="cubespinner">

  <div className="face1">
  <FontAwesomeIcon   icon={faPython} color="#F7CC40" />
  </div>
  <div className="face2">
  <FontAwesomeIcon   icon={faHtml5} color="#F06529" />
  </div>
  <div className="face3">
  <FontAwesomeIcon    icon={faCss3} color="#28A4D9" />
  </div>
  <div className="face4">
  <FontAwesomeIcon  icon={faReact} color="#5ED4F4" />
  </div>
  <div className="face5  ">
  <FontAwesomeIcon  icon={faGitAlt} color="#F1F7FC" />
  </div>
  <div className="face6">
  <FontAwesomeIcon  icon={faJava} color="#DD0031" />
  </div>


</div>
        </div>
  </div>
  <Loader type="pacman" />
  </>

  )
}

export default About