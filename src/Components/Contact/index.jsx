import React, { useRef } from 'react'
import Loader from 'react-loaders'
import "./index.scss"
 
//import emailjs from "emailjs-com"; 
import emailjs from '@emailjs/browser'

import { MapContainer  ,TileLayer, 
  Marker, Popup } from 'react-leaflet';
const Contact = () => {
  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_2feui8r',
        'template_zigim4k',
        form.current,
        'a7ovlY7fj50gFsoHk'
      )
      .then(
        (result) => {
          console.log(result.text);

          alert('Message successfully sent!')
          window.location.reload(false)
        },
        (error) => {
          console.log(error.text);

          alert('Failed to send the message, please try again')
        }
      )
  }
  return (
   <>
  <div className="container contact-page">
  <div className="text-zone">
  <h1> Contact Me</h1>
  <p>I am interested in Web Development projects. However,
     If you have any question or request , you can contact me 
     using contact form.</p>
  <div className="contact-form">
    <form ref={form} onSubmit={sendEmail} >
    <ul>
      <li className="same half">
        <input type="text" name="name" placeholder='Name' required/> 
      </li>
      <li className=" same half">
        <input type="email" name="email" placeholder='Email' required/> 
      </li>
      <li className=" same half1">
        <input type="text" name="subject" placeholder='subject' required/> 
      </li>

      <li className=" same half1">
        <textarea   name="message" placeholder='Message' required>
          </textarea> 
      </li>
      <li className=" same half1">
        <input type="submit" className='flat-button'  value='SEND' required/> 
      </li>
      </ul>

    </form>
  </div>

  </div>
   <div className="info-map">
     Sahil Rawat,
     <br/>
     India,
     <br/>
     E-23 Punjabi University Patiala<br/>
     <span> sahilrawat680@gmail.com</span>
   </div>
   <div className="map-wrap">
   <MapContainer 
    center={ [30.359605,  76.448765]} zoom={14}
   >
     <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[30.359605,  76.448765]}>
              <Popup>Sahil lives here, come over for a cup of coffee :)</Popup>
            </Marker>
   </MapContainer>

   </div>
   </div>

  <Loader type="pacman" />

   </>
  )
}

export default Contact