import { useState } from "react";


// custom hook is created to use it any component
// this parameter is initial value
const useCounter = (value=0) => {

const [count,setCount]= useState(value);

// increment function created
const increment =()=> setCount((prev)=>prev+5);

// decrement function created
const decrement =()=> {

    setCount((prev)=>{
    if (prev >0){
        return (prev-5);
    }
    else {
        return 0;
    }
   
});
}

      
    


// we use destructuring to import them in other components
return {count,increment,decrement};

}

export default useCounter