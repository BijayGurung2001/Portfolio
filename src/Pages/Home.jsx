import React from 'react'
import Intro from '../components/Intro'
import Education from '../components/Education'
import Work from '../components/Work'
import Testimonial from '../components/Testimonial'
import Message from '../components/Message'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className='home flex flex-col justify-between'>
      <div className='intro'><Intro /></div>
      <div className='Education '><Education /></div>
      <div className='Work mt-0'><Work /></div>
      <div className='Testimonial h-60vh pb-100'><Testimonial /></div>
      <div className='Message mt-0'><Message /></div>
      <div className='Footer mt-0'><Footer /></div>
    </div>
  )
}

export default Home