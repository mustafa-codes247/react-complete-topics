import React from 'react'

const Navoption = () => {
  const options=[
    {
      icon:"/o1.PNG"
    },
    {
      icon:"/o2.PNG"
    },
    {
      icon:"/o3.PNG"
    },
    {
      icon:"/o4.png"
    }
  ]
 return (
    < >
    <div className=' flex justify-evenly w-[25%]'>

      { options.map((opt)=>(
          <img src={opt.icon} alt="" />
      ))
      }   
        </div>
    </>
  )
}
    

export default Navoption

