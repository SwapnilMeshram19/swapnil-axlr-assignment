import { createSlice } from '@reduxjs/toolkit';

let initialState={
    token:"",
    product:[]
}

const loggedInSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        //add logged in user
        userLoggedIn: (state, action) => {

        state.token=action.payload   
        },

        //log out user
        userLogOut: (state) => {
            state.token="";
        },

        //get Product
        getProducts:(state, payload)=>{
            state.product=action.payload
        }
    }
})

export const { userLoggedIn, userLogOut, getproducts} = loggedInSlice.actions;
export default loggedInSlice.reducer;
