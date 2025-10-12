import React from 'react'

const GrandChild = (props) => {
        // console.log("=>",props) to show the array values in console
  return (
    <div>

        <h1>course</h1>
        <h1>{props.course}</h1>
        <h1>{props.programming[0]}</h1>

      
    </div>
  )
}

export default GrandChild
