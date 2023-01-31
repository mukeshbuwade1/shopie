import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import scrollSlice from "./scrollSlice";
import userSlice from "./userSlice";

export const store = configureStore({
    reducer:{
        "user":userSlice,
        "scroll":scrollSlice,
        "cart":cartSlice,
    }
})

