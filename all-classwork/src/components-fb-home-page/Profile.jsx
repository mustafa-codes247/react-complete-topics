import React from 'react'

const Profile = () => {

  const userprofile=[
    {
      name:"Ahmed",
      profile:"/p5.jpeg"
    },
    {
      name:"Watch",
      profile:"/p1.PNG"
    },
     {
      name:"Friends",
      profile:"/p2.PNG"
    },
     {
      name:"Memories",
      profile:"/p3.PNG"
    },
    {
      name:"Aslam",
      profile:"/p4.PNG"
    }
    ]
  return (
    <>
  <div>
{
  userprofile.map((user)=>(
    <div key={user} className='flex gap-3 items-center py-2 '>
      <img src={user.profile} alt="" className='w-[60px] h-[60px] rounded-full' />
      <h3>{user.name}</h3>
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

export default Profile
