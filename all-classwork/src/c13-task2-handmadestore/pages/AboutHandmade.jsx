import React from 'react'
import NavbarHandmade from '../components/NavbarHandmade'
import FooterHandmade from '../components/FooterHandmade'


const AboutHandmade = () => {
  return (
    <>
      <div>
       
         <NavbarHandmade/>
         <div className='flex justify-around py-6'> <div className='px-4 mx-6 w-[30%] py-3'>
        <h1>Our Journey</h1>
        <p className=' text-xl'>we started this beautiful journey in 2018, since then we are striving to provide best handmade natural soaps so they can avoid
          mass produced full of chemicals soaps.
        </p>
       </div>
       <div className='py-3'>
        <img src="/logosoap.png" alt="" />
       </div>
       </div>

       <div className='flex justify-center'>
        <img src="/a1.jpeg" alt="" className='w-[45%] px-2 py-4'/>
        <img src="/a2.jpeg" alt="" className='w-[45%] px-2 py-4'/>
       </div>
       <div className='flex justify-center'>
        <img src="/logosoap.png" alt="" className='w-[45%] px-2 py-4'/>
       </div>
       <h1 className='text-center py-4'>Stay blessed</h1>
      
        <FooterHandmade/>
      </div>
    </>
  )
}

export default AboutHandmade
