import React from "react";

const Mainpost = () => {
  return (
    <>
      <div className="h-[750px] bg-white my-5  shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="p3.jpeg"
              alt=""
              className="h-[70px] w-[70px]  rounded-full my-5 mx-5 "
            />
            <div className="flex flex-col">
              <h1 className=" text-gray-500">Asim</h1>
              <p className="text-gray-400"> 5 hours ago 👥</p>
            </div>
          </div>
          <div>
            <button className="mx-5">⋯</button>
          </div>
        </div>

        <h4 className="mx-5 text-xl">had fun with friends yesterday, well spent day!</h4>
        <div><img src="post1.jpg" alt="" className="w-full h-[470px] object-cover my-4" /> </div>
       
         <div>
          <img src="e.PNG" alt="" className="w-[40]" />
        </div>
        <div>
       <hr className="my-3 mx-5 border border-gray-200" />
    </div>
    <div className="flex justify-around">
      <div className="flex flex-row ">
        <img src="r1.PNG" alt="" className="mx-2" />
        <h1>Like</h1>
      </div>
      <div className="flex flex-row ">
        <img src="r2.PNG" alt="" className="mx-2"  />
        <h1>Comment</h1>
      </div>
      <div className="flex flex-row ">
        <img src="r3.PNG" alt="" className="mx-2" />
        <h1>Share</h1>
      </div>
    </div>
      </div>
       
      
    </>
  );
};

export default Mainpost;
