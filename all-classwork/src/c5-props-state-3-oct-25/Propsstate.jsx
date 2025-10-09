import React from 'react'
import { useState } from 'react'

const Propsstate = (props) => {
  const [count,setCount]=useState(0)

  const sum=()=>{
    setCount(count+5)
  }
  const sub=()=>{
    if (count>0){
      setCount(count-5)
    }
  }
  return (
    <>
    <div className='flex justify-center my-5 '>
      <div>
      {/* props are non changeable values, these naem and price are getting from app.jsx where this propsstate function is called */}
      <h1 className="text-[90px]">{props.name}</h1>
       <h1 className="text-[90px]">{props.price}</h1>
      <h1>this is counter example using useState</h1>
       <div className="flex justify-center gap-6">
       
        <button onClick={sum}>+</button>
        <h1 className="text-[30px]">{count}</h1>
        <button onClick={sub}>-</button>
</div>
       </div>
    </div>
    </>
  )
}

export default Propsstate
