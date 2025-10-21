import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../c12-useRef-useContext-20-oct-25/ThemeContext";

const Navbar = () => {
  const [open, setOpen] = useState(false); // state to toggle dropdown

 // using the useContext that was made in c12 to manage the state globally
const {theme,toggleTheme}=useContext(ThemeContext); 

// making the object for light/dark theme styling:
const style={
  background:theme=="light"?"#000":"#fff",
  color:theme=="light"?"#fff":"#000"
}
  return (
    <>
      <div style={style} className="bg-gray-200 flex justify-between p-6 items-center bg-white relative z-[9999] ">
        <h2 className=" font-bold text-xl">Mustafa's and Co.</h2>

        <ul className="flex gap-6 items-center">
          <li>
            {/* we use link to instead of <a href> for SPA */}
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
            <button className="hover:text-blue-500 z-100">
              C7 routing Dropdown ▾
            </button>
          {/* same as javascript's if (open) { ( */}
            {open && ( 
              <ul className="absolute bg-white shadow-lg mt-2 rounded-lg top-full p-2 w-40 mt-1 z-[9999]">
                <li className="text-black rounded px-3 py-2">
                  <Link to="cars">Cars</Link>
                </li>
                <li className="text-black rounded px-3 py-2">
                  <Link to="trucks">Trucks</Link>
                </li>
                <li className="text-black rounded px-3 py-2">
                  <Link to="bikes">Bikes</Link>
                </li>
                 <li className="text-black rounded px-3 py-2">
                  <Link to="form">C11 Forms</Link>
                </li>
                 <li className="text-black rounded px-3 py-2">
                  <Link to="c9useeffect">c9useEffect</Link>
                </li>
                
               
                
              </ul>
            )}
              
            
          </li>

          <li>
            <Link to="props" className="hover:text-blue-500">
              C8 props(child/grand-child)
            </Link>
          </li>
          <li>
            <Link to="useeffect" className="hover:text-blue-500">
              C6 UseEffect
            </Link>
          </li>
          <li>
            <Link to="c12useref-usecontext" className="hover:text-blue-500">
              C12 useRef/useContext
            </Link>
          </li>
        </ul>
         <button onClick={toggleTheme}>Change Theme (c12 useContext)</button>
      </div>
    </>
  );
};

export default Navbar;
