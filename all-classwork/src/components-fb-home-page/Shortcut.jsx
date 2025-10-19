import React from 'react'

const Shortcut = () => {
 const shortcut=[
    {
      page:"Aptech Shahrah e faisal",
      profile:"/s2.jpeg"
    },
     {
      page:"UK diaries",
      profile:"/s4.jpeg"
    },
    {
      page:"Stanford Univeristy",
      profile:"/s1.jpeg"
    },
    {
      page:"Aptech Shahrah e faisal",
      profile:"/s2.jpeg"
    },
    {
      page:"UK diaries",
      profile:"/s4.jpeg"
    },
     {
      page:"Apna Karachi",
      profile:"/s3.jpeg"
    },
    {
      page:"Aptech Shahrah e faisal",
      profile:"/s2.jpeg"
    },
     {
      page:"UK diaries",
      profile:"/s4.jpeg"
    },
    {
      page:"Apna Karachi",
      profile:"/s3.jpeg"
    },
    {
      page:"self care",
      profile:"/s5.png"
    }
    ]

  return (
    <>
      <h1 className="text-lg font-semibold mb-2">Shortcut</h1>
  <div>
{
  shortcut.map((sc)=>(
    <div key={sc} className='flex gap-3 items-center py-2 '>
      <img src={sc.profile} alt="" className='w-[60px] h-[60px] rounded-full' />
      <h3>{sc.page}</h3>
    </div>

  ))
}
  </div>
  <div className="flex justify-center"> 
    <button className="w-full bg-gray-300 px-4 py-2 rounded-md text-center hover:bg-gray-400">See More</button>
  </div>
      
    </>
  )
}

export default Shortcut
