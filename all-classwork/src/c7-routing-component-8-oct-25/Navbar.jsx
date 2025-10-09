import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
  <div className='bg-gray-200 flex justify-between p-6'>
        <h1 style={{color:"black"}}>Mustafa's and Co.</h1>
        <ul className='flex gap-6'>
        <li>
        {/* for routing to this page */}
                <Link to="/">Home</Link>
        </li>

        <li>
           <Link to="counter">Counter</Link>     
        </li>
        <li>
           <Link to="cars">Cars</Link>     
        </li>
        <li>
           <Link to="trucks">Trucks</Link>     
        </li>
         <li>
           <Link to="bikes">Bikes</Link>     
        </li>
        <li>
           <Link to="about">About</Link>     
        </li>
        <li>
           <Link to="services">Services</Link>     
        </li>
        
        </ul>

  </div>
    </>
  )
}

export default Navbar

