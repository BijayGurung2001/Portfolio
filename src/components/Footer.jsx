import React from 'react'
import '../Style/Footer.css'
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaReact } from 'react-icons/fa'
import logo from '../Images/2.png'
const Footer = () => {
  const handlefacebook =()=>{
    window.location.href='https://www.facebook.com/bijay.gurung.1614/';
  };
  return (
    <div className='footer'>
     <div className='footer-contact'>
        <h1>Start a project</h1>
        <p>Interested in working together?<br/>We should queue up a time to <br/> chat. I’ll buy the coffee.</p>
        <button>Let's do this</button>
     </div>
     <img src={logo} alt="aaaaaaaa" />
     <h2>Living, learning, & leveling up <br/>
     one day at a time.</h2>
     <ul className='footer-link-list'>
        <li><a href='https://github.com/BijayGurung2001'><FaGithub/></a></li>
        <li><a href='https://mail.google.com/'><FaMailBulk/></a></li>
        <li onClick={handlefacebook}><FaFacebook/></li>
        <li><a href='https://www.instagram.com/bijay_gurung09/'><FaInstagram/></a></li>
        <li><a href='https://www.linkedin.com/in/bijay-gurung-9b51501a3/'><FaLinkedin/></a></li>
     </ul>
     <p>Handcrafted by <spam id='name'>Bijay Gurung </spam> </p>
     <p>Made with <spam id="react"> <FaReact/> React Js</spam></p>
    </div>

  )
}

export default Footer