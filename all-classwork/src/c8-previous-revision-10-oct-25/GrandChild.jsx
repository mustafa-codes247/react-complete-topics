import { useState } from "react"

const GrandChild = (props) => {
        // console.log("=>",props) to show the array values in console
const [count,setCount] = useState(0);

// to increase the value
const increament =() =>{
  setCount(count +5)
}

const decreament =() =>{
  if (count>0){
  setCount(count -5)
  }
}
  return (
    <>

       <div className="flex justify-content">
        <button className="py-2 px-4 bg-red-200 rounded-xl" onClick={increament}>+</button>
        <h1>{count}</h1>
         <button className="py-2 px-4 bg-red-200 rounded-xl" onClick={decreament}>-</button>
        </div>
        <h1>{props.course} ==this is props.course  </h1>
        <h1>{props.programming[0]} ==this is props.programming[0] </h1>

<h1>{props.value.course} ==this is props.value.course ( grand child)</h1>
        <h1>{props.value.programming[2]} ==this is props.value.programming[2] ( grand child) </h1>
      
    </>
  )
}

export default GrandChild
