import React from 'react'

const Navicon = () => {

  const icons=[
    {
      icon:"/i1.png"
    },
    {
      icon:"/i2.png"
    },
    {
      icon:"/i4.png"
    },
    {
      icon:"/i3.png"
    },
    {
      icon:"/p1.PNG"
    }
  ]
  return (
    < >
    <div className=' flex justify-between w-[40%]'>

      { icons.map((logo)=>(
          <button><img src={logo.icon} alt="" className='w-14'/></button>
      ))
      }   
        </div>
    </>
  )
}

export default Navicon
