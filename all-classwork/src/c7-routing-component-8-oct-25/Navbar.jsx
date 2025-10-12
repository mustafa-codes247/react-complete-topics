import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false); // state to toggle dropdown

  return (
    <>
      <div className="bg-gray-200 flex justify-between p-6 items-center">
        <h1 className="text-black font-bold text-xl">Mustafa's and Co.</h1>

        <ul className="flex gap-6 items-center">
          <li>
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="fbhomepage" className="hover:text-blue-500">
              Fb Home Page
            </Link>
          </li>

          {/* Vehicles Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="hover:text-blue-500">
              Vehicles ▾
            </button>
          {/* same as javascript's if (open) { ( */}
            {open && ( 
              <ul className="absolute bg-white shadow-lg mt-2 rounded-lg top-full p-2 w-40 mt-1">
                <li className="hover:bg-gray-100 rounded px-3 py-2">
                  <Link to="cars">Cars</Link>
                </li>
                <li className="hover:bg-gray-100 rounded px-3 py-2">
                  <Link to="trucks">Trucks</Link>
                </li>
                <li className="hover:bg-gray-100 rounded px-3 py-2">
                  <Link to="bikes">Bikes</Link>
                </li>
              </ul>
            )}
              
            
          </li>

          <li>
            <Link to="props" className="hover:text-blue-500">
              props(child/grand-child)
            </Link>
          </li>
          <li>
            <Link to="useeffect" className="hover:text-blue-500">
              UseEffect
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
