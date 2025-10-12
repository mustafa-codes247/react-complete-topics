import React from 'react'
import Mainpost from './Mainpost'
import Mainreel from './Mainreel'
import Mainwrite from './Mainwrite'

const MainContent = () => {
  return (
   <div className='w-[50%] bg-gray-100'>
        <div className="flex justify-center bg-gray-100">
      <Mainreel />
    </div>
        <Mainwrite/>
        <Mainpost/>
        

    </div>
  )
}

export default MainContent
