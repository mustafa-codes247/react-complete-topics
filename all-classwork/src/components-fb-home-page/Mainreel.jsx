import React from 'react'

const Mainreel = () => {

  const reelscount=[
    {
      image:"/r3.jpg",
      text:"Add to Story"
    },
    {
      image:"/r5.jpg",
      text:"mountain guides"
    },
    {
      image:"/r1.jpg",
      text:"road rages"
    },
    {
      image:"/r2.jpg",
      text:"travelista"
    },
    {
      image:"/r4.jpg",
      text:"weather beauty"
    },
  ]
  return (
    < >
    
     <div className="flex gap-3 p-4 bg-gray-100 w-[100%] justify-between">
      {reelscount.map((r)=>(

         <div key={r} className="relative w-44 h-64 rounded-xl overflow-hidden">
          <img src={r.image} alt="" className='w-[100%] h-[100%] rounded-xl' />
          <p className='absolute bottom-2 text-white font-bold bg-transparent px-2 py-1'>{r.text}</p>
         </div>
      ))
      
      }</div> 
     
    </>
  )
}

export default Mainreel
