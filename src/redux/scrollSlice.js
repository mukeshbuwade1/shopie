import { createSlice } from "@reduxjs/toolkit";
export const scrollSlice = createSlice({
    name: "scroll",
    initialState: {
        showBottomTab:true
    },
    reducers: {
        updateShowBottom: (state, action) => {
            let temp =state
            temp.showBottomTab=action.payload
            return temp
        }
    }
})

export const { updateShowBottom } = scrollSlice.actions;
export default scrollSlice.reducer