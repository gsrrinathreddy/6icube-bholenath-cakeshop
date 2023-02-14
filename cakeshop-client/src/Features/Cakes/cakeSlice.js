import { createSlice } from "@reduxjs/toolkit";

const initialState={
    noOfCakes : 100,
    damagedCakes : 0,
    noOfFreeCakesGiven : 5,
}

const cakeSlice = createSlice({
    name:'cakes',
    initialState,
    reducers: {
        ordered:(state,action) =>{
            state.noOfCakes -= action.payload
        },
        
        restocked:(state,action) =>{
            state.noOfCakes += action.payload
        },
        damaged:(state,action) =>{
            state.noOfCakes -= action.payload
            state.damagedCakes += action.payload
        }
        
    }
})


export default cakeSlice.reducer;
export const {ordered, restocked, damaged}=cakeSlice.actions;