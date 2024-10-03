import { createSlice } from "@reduxjs/toolkit";


const initialState = {paintings:{}}

const paintingSlice = createSlice({
    name:"for_painting",
    initialState,
    reducers:{
        addItem: ()=>{}
    }
})


export const{addItem} = paintingSlice.actions;
export default paintingSlice.reducer;