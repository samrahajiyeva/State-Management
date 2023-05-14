import { createSlice } from "@reduxjs/toolkit";

const ItemSlice = createSlice({
    name:"item",
    initialState:[],
    reducers:{
        add(state,action){
            state.push(action.payload)
            console.log(action);
        }
    }
})
export const {add} = ItemSlice.actions;
export default ItemSlice.reducer;