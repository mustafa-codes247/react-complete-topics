import React, { useState } from 'react'
// info:
// onChange={(e)=>console.log(e.target.value) this is to see the input value in console 

const Form = () => {

const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');



  return (
    <>
      <h1>Signup form</h1>
      <div>
        <form action="">
        <label htmlFor="">Name:</label>
        <input type="text"  placeholder='enter name' value={name}  onChange={(e)=>setName(e.target.value)} className='py-2 px-4 border border-blue' />
        <label htmlFor="">Email:</label>
        <input type="text"  placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)} className='py-2 px-4 border border-blue' />
        <label htmlFor="">Password:</label>
        <input type="password"  placeholder='enter password' value={password} onChange={(e)=>setPassword(e.target.value)}  className='py-2 px-4 border border-blue'/>
        </form>
      </div>

      
    </>
  )
}

export default Form
