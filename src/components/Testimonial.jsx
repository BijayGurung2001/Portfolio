import React from 'react'
import Review from '../Assets/Review'

const Testimonial = () => {
  return (
    <div className='test flex flex-col items-center justify-center h-screen bg-gradient-to-b from-teal-500 to-white'>
    <h1 className='text-5xl font-bold mb-2'>Testimonials</h1>
    <p className='text-xl font-semibold mb-8'>People I've worked with have said some nice things...</p>
    <div className=' flex gap-8 p-10'>
      {Review.map((data, index) => (
        <div key={index} className=' bg-white pt-8 pl-2 rounded-lg flex flex-col justify-center items-center shadow-md transform hover:scale-105 transition-transform  '>
          <img src={data.img} alt={data.name} className='h-20 w-20 object-cover rounded-full mb-4 mb-4 sm:h-32 sm:w-32 md:h-40 md:w-40' />
          <p className='text-bold sm:text:lg'>{data.contain}</p>
          <h1 className='text-sm font-bold mt-4 mb-10 sm:text:lg'>{data.name}</h1>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Testimonial