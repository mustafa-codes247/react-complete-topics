import {createSlice} from '@reduxjs/toolkit'

// make an object of initial value 
const initialState = {
    value:0,
}

// give name, initial 
// reducers are basically fucntions to perform a task 
export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers: {
        increament: (state)=>{
            state.value +=1
        },
        decreament: (state)=>{
            state.value -=1
        },
        // this function is extra fucntion to change the values
        // of above values 
        increamentByAmount: (state,action)=>{
            state.value +=action.payload
        },

    },

})

export const {increament , decreament , increamentByAmount }= counterSlice.actions

export default counterSlice.reducer
