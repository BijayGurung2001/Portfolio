import React from 'react'

import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMailBulk } from 'react-icons/fa'
import logo from '../Images/2.png'
const Footer = () => {
  const handlefacebook =()=>{
    window.location.href='https://www.facebook.com/bijay.gurung.1614/';
  };
  return (
    <div className='footer pt-10 h-max text-whitesmoke bg-gradient-to-b from-white to-[#1A5F7A] flex flex-col items-center'>
  <div className='footer-contact relative top-20 mx-10 h-200 bg-[#73cfc3] rounded-3xl flex items-center pt-5 pb-5'>
    <h1 className='ml-5 text-sm md:text-2xl'>Start a project</h1>
    <p className='text-sm pl-10 md:text-xl'>Interested in working together?<br/>We should queue up a time to <br/> chat. I’ll buy the coffee.</p>
    <button className='h-10 ml-10 mr-10 px-2 w-40 text-sm text-black border-2 border-[#73cfc3] rounded-2xl
     bg-white hover:bg-slate-200 hover:text-black md:text-2xl'>Let's do this</button>
  </div>
  <img src={logo} alt="aaaaaaaa" className='mt-20  h-20 w-20 rounded-full'/>
  <h2 className='mt-50 text-xlmb-5'>Living, learning, & leveling up one day at a time.</h2>
  <ul className='mt-30 pt-5 flex gap-20'>
    <li><a href='https://github.com/BijayGurung2001' className='text-white hover:text-2xl'><FaGithub/></a></li>
    <li><a href='https://mail.google.com/' className='text-white hover:text-2xl'><FaMailBulk/></a></li>
    <li onClick={handlefacebook} className='cursor-pointer text-white hover:text-2xl'><FaFacebook/></li>
    <li><a href='https://www.instagram.com/bijay_gurung09/' className='text-white hover:text-2xl'><FaInstagram/></a></li>
    <li><a href='https://www.linkedin.com/in/bijay-gurung-9b51501a3/' className='text-white hover:text-2xl'><FaLinkedin/></a></li>
  </ul>
  <p className='text-sm pt-5 md:text-2xl'>Handcrafted by <span id='name'>Bijay Gurung </span> </p>

  <p className='text-sm pt-5 mb-10 md:text-2xl'>Made with  React Js</p>
  

 
</div>

  )
}

export default Footer