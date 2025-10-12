import React from 'react'
import GrandChild from './GrandChild';

// using props and useState
const Child = () => {
  // defing
  const course=['java','python','data science'];

  return (
  
    <div>
      <h1 className='text-center bg-yellow-300'>using props in child</h1>
      <GrandChild course={'MERN'} programming={course} />

    </div>
  )
}

export default Child
