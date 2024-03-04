import React, {  useState } from 'react'
import emailjs from '@emailjs/browser';
import '../Style/Message.css';
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
  
    <div className='message'>
<form  onSubmit={SendEmail} className='form'>
    <h1 id='headline'>Contact Me</h1>
    <tr>
        <td><label name='name' className='font' onChange={handleinput}>Full Name:</label></td>
        <td><input type='text' name='name'  /><br/></td>
    </tr>
    <tr>
        <td><label name='email'className='font' onChange={handleinput}>Email:</label></td>
        <td><input type='email' name='email'  /></td>
    </tr>
    <tr>
        <td><label message='message'className='font' onChange={handleinput}>Message: </label></td>
        <td><textarea name='message' /><br/></td>
    </tr>
                <input type='submit'  id='submit'/>
       
</form>
<div className='content'>
<img src={messagepic} id='messageimage' />
</div>

    </div>

 
  )
}

export default Message;