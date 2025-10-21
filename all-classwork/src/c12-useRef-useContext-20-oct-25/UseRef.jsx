import React, { useRef, useState } from "react";

// we use useRef to target (virtual) dom elements directly without reRendering the component

const UserCounter = () => {
  const [count, setCount] = useState(0);
  const name = useRef("Mustafa"); 
  const elementRef = useRef(null);

  // useref me current likhte hain current state ko target krne ke liye
  const handleClick = () => {
    console.log(elementRef.current);

    // direct css ki property (jese width) ko target karne ke liye is tarhan likhte hain
    elementRef.current.style.width = "300px";
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setCount(e.target.value)}
      />
      <h1>count === {count}</h1>
      <h1>name === {name.current}</h1>
      <input
        type="text"
        ref={elementRef}
        className="py-2 px-4 border border-blue-400"
      />
      <button onClick={handleClick}>click here</button>
    </div>
  );
};

export default UserCounter;
