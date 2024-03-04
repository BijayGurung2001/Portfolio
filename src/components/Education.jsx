import React from 'react'
import '../Style/Education.css'
import {FaPhotoVideo, FaDev} from 'react-icons/fa'
const Education = () => {
  return (
    <div className='education'>
      
 <div className='knowledge-section'>
      <div className='Designer-section'>
          <spam id='icon_education'><FaPhotoVideo/></spam>
          <h1 id='education_head'>Designer</h1>
          <br/>
          <p>I value simple content <br/>structure, clean design <br/>patterns, and thoughtful<br/> interactions.</p>
          <br/>
          <p id='head-known'>Things I enjoy designing:</p>
          <ul>
          <li>UX</li>
          <li>UI</li>
          <li>Web</li>
          <li>App</li>
          <li>Logos</li>
          </ul>
          
          <br/>
          <br/>
          <h2 id='head-tool'>Desgn Tools:</h2>
          <ul>
            <li>Figma</li>
            <li>Font Awesome</li>
            <li>Photoshop</li>
            <li>Illustration</li>
            <li>Webflow</li>
          </ul>
      </div>
      <div className='Designer-section'>
      <spam id='icon_education'><FaDev/></spam>
          <h1 id='education_head'>Frontend Development</h1>
          <br/>
          <p>I like to code things from <br/>scratch, and enjoy bringing<br/> ideas to life in the browser.</p>
          <br/>
          <p id='head-known'>language I speak:</p>
          <ul>
          <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>React</li>
            <li>Git</li>
          </ul>
        
          <br/>
          <br/>
          <h2 id='head-tool'>Dev Tools:</h2>
          <ul>
            <li>Github</li>
            <li>VScode</li>
            <li>Codekit</li>
            <li>Subline</li>
            <li>vercel</li>
          </ul>
      </div>
      <div className='Designer-section'>
      <spam id='icon_education'><FaDev/></spam>
          <h1 id='education_head'>Backend Development</h1>
          <br/>
          <p>Practicing building backend projects. <br/>Keep on learning on new tech language.<br/> Crashing to tackkle down the problem raised everyday.</p>
          <br/>
          <p id='head-known'>language I speak:</p>
          <ul>
          <li>Node JS</li>
            <li>Express JS</li>
            <li>MongoDB</li>
          </ul>
          
            
          <br/>
         
          
      </div>
    </div>
    </div>
   
  )
}

export default Education