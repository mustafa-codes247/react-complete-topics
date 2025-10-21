
import React from 'react'

const Navlogo = () => {
  return (
    
    <div className=' flex flex-wrap items-center'>
    <img src="logo.PNG" alt="" className='w-12 mx-5'/>
    <input type="text" className='rounded-full h-12 mt-1 px-10 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400' placeholder="Search" />
    </div>
  
  )
}

export default Navlogo
