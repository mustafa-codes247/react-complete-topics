import React from 'react'
import { Link } from 'react-router-dom';

const NavbarHandmade = () => {
  return (
    <>
      <div className='h-16 bg-yellow-400 flex justify-between px-2 '>
        <div className='flex'>
          <img src="logosoap.png" alt="" className='h-12 my-2' />
        <h2 className='my-5'>Natural Soaps</h2>
     </div>
        <div>
          <ul className='flex gap-20 py-5'>
          <li><Link to="/c13handmadesoap">Home</Link></li>
          <li><Link to="/hmbs">Best Sellers</Link></li>
          <li><Link to="/hmct">Category</Link></li>

          <li><Link to="/hmab">About Us</Link></li>
          </ul>
        </div>
        <button>🛒 your cart</button>
      </div>
    </>
  )
}

export default NavbarHandmade
