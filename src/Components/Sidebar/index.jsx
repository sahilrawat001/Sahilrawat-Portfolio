import React from 'react'
import "./index.scss"
import { Link,NavLink } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import
{faHome,
  faUser,
   faEnvelope
}
 from '@fortawesome/free-solid-svg-icons'
 import { faGithub,  faLinkedin,faTwitter ,faInstagram,faWhatsapp} from '@fortawesome/free-brands-svg-icons'

import LogoS from '../../assets/images/logo-s.png'
import LogoSahil from '../../assets/images/logosahil1.png'
const Sidebar = () => {
  return (
<div className="nav-bar">
<Link rel="stylesheet"  className="logo" to='/' >
    <img src={LogoS} alt='logo s'/>
    <img className='logosahil' src={LogoSahil} alt='logosahil'/>
    </Link>
    <nav>
      <NavLink exact='true' activeclassname="active" to='/' >
      <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
      </NavLink>
      <NavLink exact='true' className="about-link" activeclassname="active" to='/about' >
      <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
      </NavLink>
      <NavLink exact='true' className="contact-link"  activeclassname="active" to='/contact' >
      <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
      </NavLink>
    </nav>

    {/* extra links */}
    <ul>
    <li>
      <a target="_blank" rel="noreferrer" href="https://github.com/sahilrawat001 " >
      <FontAwesomeIcon icon={ faGithub} color='#4d4d4e' />

      </a>
       </li>
    <li>
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sahil-rawat-6387aa1aa/ " >
      <FontAwesomeIcon icon={ faLinkedin} color='#4d4d4e' />

      </a>
       </li>
    <li>
      <a target="_blank" rel="noreferrer" href="https://twitter.com/SahilRawat03 " >
      <FontAwesomeIcon icon={ faTwitter} color="#4d4d4e"/>
      </a>
       </li>
    <li>
      <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=919517302066&text=Hello%20Sahil%20Rawat,%20%20I%27m%20here%20from%20your%20portfolio " >
      <FontAwesomeIcon icon={ faWhatsapp} color='#4d4d4e' />
      </a>
       </li>

    <li>
      <a target="_blank" rel="noreferrer" href=" " >
      <FontAwesomeIcon icon={ faInstagram} color='#4d4d4e' />
       </a>
       </li>
   
    </ul>
    </div>
 )
}

export default Sidebar