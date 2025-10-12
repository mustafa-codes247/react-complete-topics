import React from 'react'

const Friends = () => {

  const Friendsarray=[
    {
      name:"Ahmed",
      profile:"/p5.jpeg"
    },
    {
      name:"Asad",
      profile:"/p4.jpeg"
    },
    {
      name:"Asim",
      profile:"/p3.jpeg"
    },
    {
      name:"Bilal",
      profile:"/p2.jpeg"
    },
     {
      name:"Zahid",
      profile:"/p1.jpeg"
    },
     {
      name:"Aqsa",
      profile:"/p5.jpeg"
    },
    {
      name:"Farhan",
      profile:"/p4.jpeg"
    },
    {
      name:"Asif",
      profile:"/p3.jpeg"
    },
    {
      name:"Yousuf",
      profile:"/p2.jpeg"
    },
    {
      name:"Aslam",
      profile:"/p1.jpeg"
    },
   
    ]
  return (
    <>
    <h1 className="text-lg font-semibold mb-2">Friends</h1>
    
<div>
{
  Friendsarray.map((frnd)=>(
    <div key={frnd} className='flex gap-3 items-center py-3 '>
      <img src={frnd.profile} alt="" className='w-[60px] h-[60px] rounded-full' />
      <h3>{frnd.name}</h3>
    </div>

  ))
}
</div>
  
    </>
  )
}

export default Friends
