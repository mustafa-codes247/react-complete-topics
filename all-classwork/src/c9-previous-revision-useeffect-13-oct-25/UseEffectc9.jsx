import { useEffect,useState } from 'react'

const UseEffectc9 = (props) => {
        // always write hooks(useState,useEffect) above the functions
        const [count,setCount] =useState(0); // for no dependency
        const [count2,setCount2]=useState(0); // for props as dependency

        useEffect(()=>{
        // it runs every 2 seconds 
        setTimeout(()=>{
                setCount(count+1)
        },1000);

        // setInterval runs one time only after 2 seconds b/c of this 2000 
        // setInterval(()=>{
        //         setCount(count+1)
        // },2000);


        }) //this },[])  is empty dependency ,
        // putting empty here will run this effect one time
        // putting nothing here will run this effect infinite times
        // putting props, State here will update the values of props

        useEffect(()=>{
                setCount2(count2 +5)
        },[props.data])


  return (
    <>
    <div>
        <h1>side loading an effect usng useEffect</h1>
        <h1>this counter runs every 1 second:</h1>
        <h1 className='text-3xl'>c9 useEffect no dependency: {count}</h1>
        <h1 className='text-3xl'>c9 useEffect props as dependency: {props.data}</h1>
    </div>
       
    </>
  )
}

export default UseEffectc9
