import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className='Contact-details'>
      <h1>Contact Me</h1>
      <p>Below are the details to reach out to me!</p>
      <div className='Address-detail'>
           <h2>Address</h2>
           <p>Gaya, Bihar,India</p>
      </div>
      <div className='Address-detail'>
           <h2>Contact Number</h2>
           <p>+91-7261895853</p>
      </div>
      <div className='Address-detail'>
           <h2>Email Address</h2>
           <p>humnashin9955@gmail.com</p>
      </div>
      <div className='Address-detail'>
           <h2>Download Updated Resume</h2>
           <a href=""> Download Resume</a>
      </div>
        <div className='btn'>
        <button>Click here</button>
        </div>
        <div className='links'>
        <a href="https://www.instagram.com/_humnashi.9955_?igsh=OTV0NHVnNXJ5OGYx" >
        <FontAwesomeIcon icon={faInstagram} color='#E4405F'/>
        </a>
        <a href="https://www.linkedin.com/in/humnashin-khan-55kh/">
        <FontAwesomeIcon icon={faLinkedin} color='#0077B5'/>
        </a>
        <a href="https://github.com/Humnashinkhan">
        <FontAwesomeIcon icon={faGithub} color='#181717'/>
        </a>
        <a href="https://instagram.com/yourprofile">
        <FontAwesomeIcon icon={faTwitter} color='#1DA1F2'/>
        </a>
        <a href="https://web.whatsapp.com/">
        <FontAwesomeIcon icon={faWhatsapp} color='#25D366'/>
        </a>
     </div>
     <hr />
     <div className="bottom">
     <p>© Humnashin Khan. All rights reserved.</p>
     </div>
     </div>

  )
}

export default Contact