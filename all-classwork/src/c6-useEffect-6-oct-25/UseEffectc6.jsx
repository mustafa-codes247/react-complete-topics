import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { ThemeContext } from '../c12-useRef-useContext-20-oct-25/ThemeContext'

const UseEffectc6 = () => {

  const [user,setUser] = useState([]);
  const { theme } = useContext(ThemeContext);

  // its styling is done in class 12 using useContext to change the theme globally
  const cardStyle = {
  background: theme === "light" ? "#8a8a8aff" : "#fff",
  color: theme === "light" ? "#fff" : "#000",
  border: "1px solid #ccc",
};
 
useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then((res)=>setUser(res))

  },[])

  return (
    <>
      {/* useEffect is used to perform any task or effect when anything happens */}
      {/* for eg , when any value/state changed , fetch an api */}
    
      <div className='grid grid-cols-4 gap-3'>
        {
          user.map((items)=>{
return(
 <div style={cardStyle} key={items} className=' py-6 px-6 my-5 rounded-lg shadow'>
  <h3 >name: {items.name}</h3>
  <h3>username: {items.username}</h3>
  <h3>email: {items.email}</h3>
  <h3>address: {items.address.street}</h3>
  <h3>street: {items.address.suite}</h3>

  <div className='flex justify-around'>
    <button>edit</button>
    <button>delete</button>

  </div>

 </div>


)


          })
        }

      </div>

    </>
  )
}

export default UseEffectc6
