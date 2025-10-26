import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decreament,increament } from '../redux-toolkit/counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <h2 className='text-center text-3xl font-bold py-6'>Redux counter state management without useContext and useState</h2>
            <div className='flex gap-6 justify-center'>
            <button onClick={()=>dispatch(increament())}>+</button>
            <h1>{count}</h1>
            <button onClick={()=>dispatch(decreament())}>-</button>
</div>
        </>
    )
}

export default Counter
