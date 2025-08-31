import { configureStore } from "@reduxjs/toolkit";
import tododReducer from "../features/todo/todoSlice"

export const store = configureStore({
    reducer: tododReducer
})