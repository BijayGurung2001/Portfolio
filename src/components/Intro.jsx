import React  from 'react'

import '../Style/Intro.css'
import profile from '../Images/bj.png'
import png from '../Images/bijay-cv.pdf'
const Intro = () => {
    
  return (
    <div className='intro'>
        <div className='intro-details'>
          <h1>Hello, I'm</h1>
          <p className='tracking-out-contract '>Bijay Gurung</p>
          <p id='details'>A Full Stack web developer and content creator based in the Nepal.</p><br/>
        <a id='resume' href={png}>Resume</a>
             </div>
        <div className='intro-img items-center justify-center pl-40'>
            <img src={profile} alt='profilepic' id='intro-imgone' className='h-60 w-60 mt-10 pl-16'/>
        </div>
    </div>
  )
}

export default Intro