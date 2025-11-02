import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUser = createAsyncThunk("user.fetchUser",
    // async makes the js stop executing line by line. if the code inside doesnot work, this funciton won't work

    async ()=>{

        // await is part of async , it will wait to the api , if it is fetch only then the funciton will get executed.

        const response= await axios.get("https://jsonplaceholder.typicode.com/users");

        return response.data;     

});

const initialState ={

    user:[],
    error: null,
    loading: false,
};

const userSlice = createSlice({

    name: "users",
    initialState,
    // here one reducers is kept empty, and extrareducer is made in which all the functions are made. dont get confused , its just syntax
    reducers:{},
    extraReducers: (builder) => {
        builder

            //  data loading state
            .addCase(fetchUser.pending, (state)=>{
                state.loading=true;
                state.error =null;
            })

            // data fetched state
            .addCase(fetchUser.fulfilled, (state,action)=>{
                state.loading=false;
                state.user =action.payload;
            })

            // if any error while fetching data
            .addCase(fetchUser.rejected,(state,action)=>{
                state.loading=false;
                state.error=action.error.message;
            });

    }
});

// this userSlicer will be imported as userReducer in store.js.
export default userSlice.reducer;