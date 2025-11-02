import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {fetchUser} from './userSlice'

const UserReduxAxios = () => {

   const {user, error,loading} = useSelector((state)=> state.users);

    // this usedispatch will update the data after getting the data from useSelect 
   const dispatch =useDispatch();

   useEffect(()=>{
    dispatch(fetchUser())

    // this funciton is used from the userSlice , in which this funciton is made.
   },[dispatch])


  return (
    <>

    <div style ={{display:"flex", justifyContent:"space-between",gap:"20px",flexWrap:"wrap",margin:"60px"}}>

        {
            user.map((i)=>(
                <div key={i} style={{backgroundColor:"yellow"}}>
                    <h1>{i.name}</h1>
                    <h1>{i.email}</h1>
                </div>
            ))
        }
        
         </div>
      
    </>
  )
}

export default UserReduxAxios
