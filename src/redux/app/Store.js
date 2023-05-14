import { configureStore } from "@reduxjs/toolkit";
import itemReducer from '../ItemSlice/ItemSlice'

const store = configureStore({
    reducer:{
        item:itemReducer,
    }
})
export  default store;