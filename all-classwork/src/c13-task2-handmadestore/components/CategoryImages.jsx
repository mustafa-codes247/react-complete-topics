import React from 'react'
import  { useEffect, useState } from "react";

const CategoryImages = () => {
  const [product,setProduct] = useState([]);

  useEffect(()=>{
  
    fetch("/category.json")
    .then ((res)=>res.json())
    .then((data)=>setProduct(data))
    .catch((err)=>console.error("error loading products",err));

},[]);


return (
    <>
    <div>
    <h1 className="text-center py-6">packages</h1>
    </div>
    <div className="grid grid-cols-3 gap-2 py-6 px-2">
      {
        product.map((item)=>(
          <div key={item.id} className="p-4 shadow-xl rounded-lg ">
            <img src={item.image} alt="" className="h-64 mx-auto" />
            <p className="text-center mt-2 font-semibold">{item.name}</p>
            <p className="text-center mt-2 font-semibold">{item.price}</p>
            <div className="flex justify-around px-6 py-3">
              <button className="bg-yellow-300 py-2 px-2 rounded-lg">add to cart</button>
              <button className="border border-black py-2 px-1 rounded-lg">buy now</button>
            </div>
          </div>
        ))
      }
      </div>
      
       
    </>
  );
}

export default CategoryImages





