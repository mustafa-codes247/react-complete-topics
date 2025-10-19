import React from 'react'

const Mainwrite = () => {
  return (
    <>
    <div className='h-[200px] bg-white my-5 px-5 pt-5 shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-2xl '>
      <div className='flex'>
 <img src="p5.jpeg" alt="" className='h-[70px] w-[70px]  rounded-full'/>
    <input type="text" className='rounded-full h-12 w-[800px] my-3 mx-5 px-10 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 bg-gray-100 placeholder-gray-500' placeholder="what's in youe mind , Ahmed?" />
      </div>
   
    <div>
       <hr className="my-3 border border-gray-200" />
    </div>

    <div className='h-[80px] flex  justify-around items-center'>
      
      <div className='flex'>
        <img src="/ic1.PNG" alt="" className='h-[40px]' />
        <h1>Photos/Videos</h1>
        
      </div>
      <div className='flex'>
        <img src="/ic2.PNG" alt="" className='h-[40px]' />
        <h1>Tag Friends</h1>
        
      </div >
      <div className='flex'>
        <img src="/ic3.PNG" alt="" className='h-[40px]' />
        <h1>Feeling/Activity</h1>
        
        
      </div>

    </div>
   
    </div>
    
    
    </>
  )
}

export default Mainwrite
