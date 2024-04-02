import React from 'react'

import {FaPhotoVideo, FaDev} from 'react-icons/fa'
const Education = () => {
  return (
    <div className='education pt-20 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-800 to-teal-500'>
    <div className='overflow-y-hidden h-[80%] md:h-full w-3/4 flex justify-center flex-row rounded-3xl bg-white'>
      <div className='Designer-section border-l-2 border-black w-full mt-10 md:w-1/3  pl-2 flex flex-col items-center '>
        <span className='bg-blue-500 rounded p-2 h-8 md:h-10 text-white text-base md:text-lg'>
          <FaPhotoVideo />
        </span>
        <h1 className='text-s  md:text-xl pt-2 text-blue-500'>Designer</h1>
        <br />
        <p className='text-xs md:text-base'>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
        <br />
        <p className='text-blue-500 text-xs md:text-xl'>Things I enjoy designing:</p>
        <ul className='pl-2 list-none'>
          <li className='text-xs md:text-base'>UX</li>
          <li className='text-xs md:text-base'>UI</li>
          <li className='text-xs md:text-base'>Web</li>
          <li className='text-xs md:text-base'>App</li>
          <li className='text-xs md:text-base'>Logos</li>
        </ul>
        <br />
        <br />
        <h2 className='text-blue-500 text-xs md:text-xl'>Design Tools:</h2>
        <ul className='pl-2 list-none'>
          <li className='text-xs md:text-base'>Figma</li>
          <li className='text-xs md:text-base'>Font Awesome</li>
          <li className='text-xs md:text-base'>Photoshop</li>
          <li className='text-xs md:text-base'>Illustration</li>
          <li className='text-xs md:text-base'>Webflow</li>
        </ul>
      </div>
  
      <div className=' w-full mt-10 md:w-1/3  pl-2 flex flex-col items-center  border-l-2 border-r-2 border-black'>
        <span className='bg-blue-500 rounded-full p-2 h-8 md:h-10 text-white text-base md:text-lg'>
          <FaDev />
        </span>
        <h1 className='text-sm md:text-xl pt-2 text-blue-500'>Frontend Development</h1>
        <br />
        <p className='text-xs md:text-base'>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
        <br />
        <p className='text-blue-500 text-xs md:text-xl'>Languages I speak:</p>
        <ul className= 'pl-2 list-none'>
          <li className='text-xs md:text-base'>HTML</li>
          <li className='text-xs md:text-base'>CSS</li>
          <li className='text-xs md:text-base'>JS</li>
          <li className='text-xs md:text-base'>React</li>
          <li className='text-xs md:text-base'>React Native</li>
          <li className='text-xs md:text-base'>Git</li>
        </ul>
        <br />
        <br />
        <h2 className='text-blue-500 text-xs md:text-xl'>Dev Tools:</h2>
        <ul className='pl-2 list-none'>
          <li className='text-xs md:text-base'>Github</li>
          <li className='text-xs md:text-base'>VScode</li>
          <li className='text-xs md:text-base'>Codekit</li>
          <li className='text-xs md:text-base'>Subline</li>
          <li className='text-xs md:text-base'>Vercel</li>
        </ul>
      </div>
  
      <div className='w-full mt-10 md:w-1/3 pl-2 pr-2 flex flex-col items-center  border-r-2 border-black'>
        <span className='bg-blue-500 rounded-full p-2 h-8 md:h-10 text-white text-base md:text-lg'>
          <FaDev />
        </span>
        <h1 className='text-sm md:text-xl pt-2 text-blue-500'>Backend Development</h1>
        <br />
        <p className='text-xs md:text-base'>
          Practicing building backend projects. Keep on learning new tech languages. Crashing to tackle down the problems
          raised every day.
        </p>
        <br />
        <p className='text-blue-500 text-xs md:text-xl'>Languages I speak:</p>
        <ul className='pl-2 list-none'>
          <li className='text-xs md:text-base'>Node JS</li>
          <li className='text-xs md:text-base'>Express JS</li>
          <li className='text-xs md:text-base'>MongoDB</li>
          <li className='text-xs md:text-base'>MYSQL</li>
        </ul>
        <br />
      </div>
    </div>
  </div>
 )
}

export default Education