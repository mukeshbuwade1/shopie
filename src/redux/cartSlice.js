import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    qty: 0,
    amount: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        updateCartData: (state, action) => {
           state.qty=state.qty+1
           state.items.push(action.payload)
        }
    }
})

export const { updateCartData } = cartSlice.actions;
export default cartSlice.reducer