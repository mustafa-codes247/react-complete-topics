import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./redux-toolkit/counterSlice"

// reducer/s are function that perform any task
export const store =configureStore({
    reducer:{
        counter:counterReducer,
        // for using more reducer function
        // we will simply call them here
    },
})