import React from 'react'
import { Link } from 'react-router-dom'

const QuickLinks = () => {
  return (
    <>
      <div>
        <h1 className='text-center py-3'>Quick links </h1>
        <ul className=' text-center gap-6'>
           <li><Link to="/c13handmadesoap">Home</Link></li>
          <li><Link to="/hmbs">Best Sellers</Link></li>
          <li><Link to="/hmct">Category</Link></li>

          <li><Link to="/hmab">About Us</Link></li>
        </ul>
      </div>
    </>
  )
}

export default QuickLinks
