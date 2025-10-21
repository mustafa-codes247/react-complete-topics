import { ThemeContext } from "../c12-useRef-useContext-20-oct-25/ThemeContext";
import { useContext } from "react";

const Footer = () => {
  const {theme} = useContext(ThemeContext);

  const style={
    background:theme=="light"?"#000":"#fff",
    color:theme=="light"?"#fff":"#000",
     transition: "all 0.3s ease",
  }
  return (
    <>

<div style={style} className=' py-5'>
    <h1 className='text-center py-3'>this is footer</h1>
    <ul className='flex justify-center  gap-6' >
        <li>all rights reserved</li>
         <li>Email : mustafa@gmail.com</li>
          <li>Maryland London</li>
    </ul>

</div>
      
    </>
  )
}

export default Footer
