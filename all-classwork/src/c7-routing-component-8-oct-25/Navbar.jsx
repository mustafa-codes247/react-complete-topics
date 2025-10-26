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
              C7 Task: Fb Home
            </Link>
          </li>

          {/* Vehicles Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="hover:text-blue-500 z-100">
              All Classworks ▾
            </button>
          {/* same as javascript's if (open) { ( */}
            {open && ( 
              <ul className="absolute bg-white shadow-lg mt-2 rounded-lg top-full p-4 w-[200px] h-[400px]  z-[9999]">
                 <li>
            <Link to="useeffect" className="hover:text-blue-500 bg-gray-200 text-black my-1 py-3">
              C6 UseEffect
            </Link>
          </li>
          <li className="hover:text-blue-500 text-black rounded bg-gray-200 my-1 space-y-1 py-3">
          <Link to="cars">C7 Routing Cars</Link>
                </li>
                <li className="hover:text-blue-500 text-black rounded bg-gray-200 my-1 space-y-1  py-3">
                  <Link to="trucks">C7 Routing Trucks</Link>
                </li>
                <li className="hover:text-blue-500 text-black rounded bg-gray-200 my-1 space-y-1 py-3">
                  <Link to="props">C8 props</Link>
                </li>
                <li className=" hover:text-blue-500 text-black rounded bg-gray-200 my-1 space-y-1 py-3">
                  <Link to="c9useeffect">C9 useEffect</Link>
                </li>  
                 <li className="hover:text-blue-500 text-black rounded bg-gray-200 my-1 space-y-1 py-3">
                  <Link to="form">C10/11 Forms</Link>
                </li>
                <li>
            <Link to="c12useref-usecontext" className="hover:text-blue-500 text-black rounded bg-gray-200 my-1 space-y-1  py-3">
              C12 Ref/Context
            </Link>
          </li>
          <li>
            <Link to="c14redux" className="hover:text-blue-500 text-black rounded bg-gray-200 my-1 space-y-1 py-3 relative inline-block">
              C14 Redux
            </Link>
          </li>
                
                 
                
               
                
              </ul>
            )}
              
            
          </li>

      
         
          
        </ul>
         <button onClick={toggleTheme}>C12 Change Theme </button>
      </div>
    </>
  );
};

export default Navbar;
