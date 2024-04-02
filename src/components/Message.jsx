import React, {  useState } from 'react'
import emailjs from '@emailjs/browser';

import messagepic from '../Images/message.png';


const Message = () => {
const[data, setData]=useState({})

const handleinput=(e)=>{
    e.preventDefault();
    setData({...data,[e.target.name]: e.target.value})
}
const SendEmail=()=>{

    emailjs.sendForm('service_c94uumm','template_6c1s4xo',data.current,'sGSHCzrDYZ7Eign2W')
    .then((result)=>{
        console.log(result.text);
    },(error)=>{
        console.log(error.text);
    }
    );
};

  return (
    <div className=' flex flex-row h-96 pl-64 items-center justify-center bg-white'>
    <form onSubmit={SendEmail} className='form w-1/2 border-solid border-black'>
      <h1 className='text-2xl mb-10 md:text-2xl' id='headline'>
        Contact Me
      </h1>
      <div className='mb-3 flex flex-row'>
        <label className='font text-2xl' name='name'>
          Full Name:
        </label>
        <input type='text' name='name' className='ml-10 bg-gray-300 ' onChange={handleinput} />
      </div>
      <div className='mb-3 flex flex-row'>
        <label className='font text-2xl' name='email'>
          Email:
        </label>
        <input type='email' name='email' className='ml-24 bg-gray-300' onChange={handleinput} />
      </div>
      <div className='mb-3 flex flex-row'>
        <label className='font text-2xl' name='message'>
          Message:
        </label>
        <textarea name='message' className='bg-gray-300 ml-12' onChange={handleinput} />
      </div>
      <input type='submit' id='submit' className='bg-blue-800 p-3 ml-20 rounded-md hover:bg-blue-900 text-white md:text-2xl' />
    </form>
    <div className='content w-1/3 ml-10'>
      <img src={messagepic} id='messageimage' className='object-contain ' />
    </div>
  </div>
  )
}

export default Message;