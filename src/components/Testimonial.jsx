import React from 'react'
import Review from '../Assets/Review'

const Testimonial = () => {
  return (
    <div className='pt-28 flex flex-col items-center justify-center h-screen bg-gradient-to-b from-teal-500 to-white'>
    <h1 className='md:text-5xl text-xl font-bold mb-2'>Testimonials</h1>
    <p className=' text:xs md:text-2xl font-semibold mb-8 pl-5 pr-5'>People I've worked with have said some nice things...</p>
    <div className=' flex gap-8 p-10 justify-center items-center'>
      {Review.map((data, index) => (
        <div key={index} className=' w-[40%] bg-white h-auto p-5 rounded-lg flex flex-col justify-center items-center shadow-md transform hover:scale-105 transition-transform  '>
          <img src={data.img} alt={data.name} className='h-10 w-10  object-cover rounded-full mb-4 sm:h-32 sm:w-32 md:h-40 md:w-40' />
          <p className='text-xs  md:text-2xl'>{data.contain}</p>
          <h1 className=' font-bold mt-4 mb-10 text-base  md:text-2xl'>{data.name}</h1>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Testimonial