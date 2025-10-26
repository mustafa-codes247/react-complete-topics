import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <div className='flex justify-center'>
    <h1 className='text-xl py-4'>WELCOME TO MY REACT CLASS WORK</h1>
    </div>
    <div className='flex justify-center'>
      <div className='text-start'>
    <ol>
      <p className='text-3xl py-2 font-bold text-center bg-blue-500 rounded-md'>Till now I have learnt :</p>
      <li className='bg-blue-500 py-2 my-2 rounded-md '>1-Routing of pages without page reload</li>
      <li className='bg-blue-500 py-2 my-2 rounded-md'>2-components making and using them</li>
      <li className='bg-blue-500 py-2 my-2 rounded-md'>3-Material UI </li>
      <li className='bg-blue-500 py-2 my-2 rounded-md'>4-Tailwind CSS UI</li>
      <li className='bg-blue-500 py-2 my-2 rounded-md'>5-Props (properties) values that can be passed from parent to child <Link to="props" className='hover:text-blue-500'>->click</Link></li>
      <li className='bg-blue-500 py-2 my-2 rounded-md'>6-UseState for managing state (changing values of variables) </li>
      <li className='bg-blue-500 py-2 my-2 rounded-md'>7-UseEffect for performing side effect in website eg json data calling, setTimeOut etc </li>
      <li className='bg-blue-500 py-2 my-2 rounded-md'>8-useRef for targetting dom elements directly without component reRendering</li>
      <li className='bg-blue-500 py-2 my-2 rounded-md'>8-useContext for managing state globally to avoid props drilling</li>
      <li className='bg-blue-500 py-2 my-2 rounded-md'>9-redux toolkit to manage state globally wihtout using useState</li>
    </ol>
    </div>
    </div>
  
   
      
    
    </>
  )
}

export default Home
