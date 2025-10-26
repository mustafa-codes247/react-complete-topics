import React, { useEffect, useState } from "react";

const BestSeller = () => {
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
    <div className="grid grid-cols-4 gap-2 py-6">
      {
        product.slice(0, 4).map((item)=>(
          <div key={item.id} className="p-4 shadow-lg rounded-lg">
            <img src={item.image} alt="" className="h-64 mx-auto" />
            <p className="text-center mt-2 font-semibold">{item.name}</p>
            <div className="flex justify-between px-4">
              <button className="bg-yellow-300 py-2 px-2 rounded-lg">add to cart</button>
              <button className="border border-black py-2 px-1 rounded-lg">buy now</button>
            </div>
          </div>
        ))
      }
      </div>
      <div>
    <h1 className="text-center py-6">See More</h1>
    </div>
    </>
  );
};

export default BestSeller
