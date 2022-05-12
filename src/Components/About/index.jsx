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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Modi eos a est libero voluptatibus fugiat rerum vitae eaque quidem numquam, odit,
             accusantium sed. Quia, expedita. Odit ducimus quibusdam incidunt officiis?
            Rerum numquam voluptates dolores eos, sunt officia dolorem, delectus sint minus tempora eaque nam,
             neque tenetur quis officiis non! Delectus at dolores saepe enim aut deleniti eos tempore quidem non?
            Expedita, deleniti? Perferendis temporibus facilis dolore commodi animi laboriosam rerum voluptatum porro 
            ipsa dicta voluptate esse, ullam explicabo velit nobis vitae doloremque earum ratione eos impedit minus dolor! Enim, in!
          </p>

          <p className='about-me' >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident tempore numquam magni voluptates accusantium,
                 delectus nesciunt accusamus consectetur repellat ullam cumque blanditiis fugiat perferendis sunt vel illo fuga 
                 adipisci temporibus.
                At, impedit? Doloremque, quia. Quisquam molestiae voluptatem voluptates odit sapiente odio nulla quaerat ad commodi
                 adipisci, totam quas praesentium aut optio sequi eveniet dolorum reiciendis? Corrupti deserunt dicta velit nobis.

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