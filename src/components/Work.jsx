import React from 'react'
import Projectdata from '../Assets/Projectdata'

import {FaEye} from 'react-icons/fa'

const Work = () => {
  return (
    <div className='work bg-gradient-to-b from-teal-500 to-white flex flex-col items-center'>
    <h1 className='text-2xl md:text-4xl font-bold mt-16 text-white'>My Recent Work</h1>
    <p className='text-xl md:text-2xl font-semibold mt-8 text-white'>
      Here are a few past design projects I've worked on. Want to see more? <span className='text-blue-800'>Email me.</span>
    </p>
    <div className='project-container grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:mx-auto'>
      {Projectdata.map((data, index) => (
        <div key={index} className='group relative overflow-hidden'>
          <img src={data.img} alt={data.title} className='project-img object-cover w-full h-48 md:h-64 rounded-t-md group-hover:opacity-20 transition-opacity duration-300' />
  
          <div className='overlay-work absolute top-0 right-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
            <h2 id='project-title' className='text-white text-lg font-bold pl-5'>{data.title}</h2>
            <button className='text-white bg-blue-800 border border-blue-800 rounded-full px-4 py-2 mt-2 hover:bg-blue-900'>
              <a href='https://github.com/BijayGurung2001' target='_blank' rel='noopener noreferrer'>
                Visit Website
              </a>
            </button>
          </div>
        </div>
      ))}
    </div>
    <button id='button_icon' className='text-white bg-blue-800 border border-blue-800 rounded-full px-5 py-3 mt-8 pb-6 mb-10 hover:bg-blue-900'>
     
      <a href='https://github.com/BijayGurung2001' className='text-white texy-base hover:text-xl'> See more on Projects</a>
     
    </button>
  </div>
  )
}

export default Work