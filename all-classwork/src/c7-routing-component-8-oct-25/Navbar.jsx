import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../c12-useRef-useContext-20-oct-25/ThemeContext";

const Navbar = () => {
  const [tasksOpen, setTasksOpen] = useState(false);
const [classworksOpen, setClassworksOpen] = useState(false);

 // using the useContext that was made in c12 to manage the state globally
const {theme,toggleTheme}=useContext(ThemeContext); 

// making the object for light/dark theme styling:
const style={
  background:theme=="light"?"#fff":"#0000",
  color:theme=="light"?"#000":"#ffff"
}
  return (
    <>
      <div
        style={style}
        className="flex justify-between p-6 items-center bg-white relative z-[9999] "
      >
        <h2 className=" font-bold text-xl">Mustafa's and Co.</h2>

        <ul className="flex gap-6 items-center">
          <li>
            {/* we use link to instead of <a href> for SPA */}
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>

          

          {/* classwork Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setClassworksOpen(true)}
            onMouseLeave={() => setClassworksOpen(false)}
          >
            <button className="hover:text-blue-500 z-100">
              All Classworks ▾
            </button>
            {/* same as javascript's if (open) { ( */}
            {classworksOpen && (
              <ul className="absolute bg-white shadow-lg  rounded-lg top-full p-4 w-[200px]  z-[9999]">
                <li>
                  <Link
                    to="counter"
                    className="hover:text-blue-500 text-black my-3 py-3"
                  >
                    C5 props/state
                  </Link>
                </li>
                <li>
                  <Link
                    to="useeffect"
                    className="hover:text-blue-500 text-black my-1 py-3"
                  >
                    C6 UseEffect
                  </Link>
                </li>
                <li className="hover:text-blue-500 text-black rounded my-1 space-y-1 py-3">
                  <Link to="cars">C7 Routing Cars</Link>
                </li>
                <li className="hover:text-blue-500 text-black rounded my-1 space-y-1  py-3">
                  <Link to="trucks">C7 Routing Trucks</Link>
                </li>
                <li className="hover:text-blue-500 text-black rounded my-1 space-y-1 py-3">
                  <Link to="props">C8 props</Link>
                </li>
                <li className=" hover:text-blue-500 text-black rounded my-1 space-y-1 py-3">
                  <Link to="c9useeffect">C9 useEffect</Link>
                </li>
                <li className="hover:text-blue-500 text-black rounded my-1 space-y-1 py-3">
                  <Link to="form">C10/11 Forms</Link>
                </li>
                <li>
                  <Link
                    to="c12useref-usecontext"
                    className="hover:text-blue-500 text-black rounded my-1 space-y-1  py-3"
                  >
                    C12 Ref/Context
                  </Link>
                </li>
                <li>
                  <Link
                    to="c14redux"
                    className="hover:text-blue-500 text-black rounded my-1 space-y-1 py-3 relative inline-block"
                  >
                    C14 Redux
                  </Link>
                  <li>
                  <Link
                    to="c15customhook"
                    className="hover:text-blue-500 text-black rounded my-1 space-y-1 py-3 relative inline-block"
                  >
                    C15 CustomHooks
                  </Link>
                </li>
                <li>
                  <Link
                    to="c15nestedroutes"
                    className="hover:text-blue-500 text-black rounded my-1 space-y-1 py-3 relative inline-block"
                  >
                    C15 Nested Routes
                  </Link>
                </li>
                 <li>
                  <Link
                    to="c16-axios-redux"
                    className="hover:text-blue-500 text-black rounded my-1 space-y-1 py-3 relative inline-block"
                  >
                    C16 axios/redux
                  </Link>
                </li>
                </li>
              </ul>
            )}
          </li>

          {/* tasks Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setTasksOpen(true)}
            onMouseLeave={() => setTasksOpen(false)}
          >
            <button className="hover:text-blue-500 z-100">Assignments ▾</button>
            {/* same as javascript's if (open) { ( */}
            {tasksOpen && (
              <ul className="absolute bg-white shadow-lg rounded-lg top-full p-4 w-[200px]   z-[9999]">
                <li>
                  <Link
                    to="fbhomepage"
                    className="hover:text-blue-500 text-black my-1 py-3"
                  >
                    C7 Fb Home
                  </Link>
                  <li>
                  <Link
                    to="c13handmadesoap"
                    className="hover:text-blue-500 text-black my-1 py-3"
                  >
                    C13 handmade Soap
                  </Link>
                </li>
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
