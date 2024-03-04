import React from 'react'
import Intro from '../components/Intro'
import Education from '../components/Education'
import Work from '../components/Work'
import Testimonial from '../components/Testimonial'
import Message from '../components/Message'
import Footer from '../components/Footer'
import '../Style/Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='intro'><Intro/></div>
      <div className='Education'><Education/></div>
      <div className='Work'><Work/></div>
      <div className='Testimonial'><Testimonial/></div>
      <div className='Message'><Message/></div>
      <div className='Footer'><Footer/></div>
          </div>
  )
}

export default Home