import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

const BestSeller = ({ limit=4 }) => {
const [product,setProduct] = useState([]);



useEffect(()=>{
  
    fetch("/data.json")
    .then ((res)=>res.json())
    .then((data)=>setProduct(data))
    .catch((err)=>console.error("error loading products",err));

},[]);


  return (
    <>
    <div>
    <h1 className="text-center py-6">Our Best Sellers</h1>
    </div>
    <div className="grid grid-cols-4 gap-2 py-6 px-2">
      {
        product.slice(0, limit).map((item)=>(
          <div key={item.id} className="p-4 shadow-xl rounded-lg ">
            <img src={item.image} alt="" className="h-64 mx-auto" />
            <p className="text-center mt-2 font-semibold">{item.name}</p>
            <div className="flex justify-around px-6 py-3">
              <button className="bg-yellow-300 py-2 px-2 rounded-lg">add to cart</button>
              <button className="border border-black py-2 px-1 rounded-lg">buy now</button>
            </div>
          </div>
        ))
      }
      </div>
      
       {limit === 4 && ( 
      <div className="flex justify-center">
   <Link to="/hmbs" className="hover:border hover:border-black text-center font-bold  bg-yellow-400 border border-white items-center my-4 py-4 px-2 rounded-lg">See more</Link>
    </div>
     )}
    </>
  );
};

export default BestSeller
