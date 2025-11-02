import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./redux-toolkit/counterSlice"
import userReducer from "./c-17-axios-and-redux-advanced-31-oct-25/userSlice"

// reducer/s are function that perform any task
export const store =configureStore({
    reducer:{
        counter:counterReducer,
        users: userReducer
    },
})